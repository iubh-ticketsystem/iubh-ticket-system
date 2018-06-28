import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { User, Memberstate } from '../models/user.model';
import { AuthData } from '../models/auth.model';
import * as fromRoot from '../app.reducer';
import * as Auth from './auth.actions';
import { UIService } from '../services/ui.Service';

@Injectable()
export class AuthService {

    user: Observable<User>;
    usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;

    constructor(private afAuth: AngularFireAuth,
                private afs: AngularFirestore,
                private router: Router,
                private store: Store<fromRoot.State>,
                private uiService: UIService) {

            this.user = this.afAuth.authState
            .switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                } else {
                    return Observable.of(null)
                }
            });
    }

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.store.dispatch(new Auth.SetAuthenticated());
            this.router.navigate(['/ticketformular']);
          } else {
            this.store.dispatch(new Auth.SetUnauthenticated());
            this.router.navigate(['/login']);
          }
        });
    } 

    signUp(authData: AuthData) {
        return this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(user => {
                return this.setUserDoc(user);
            })
            .then(result => {
                this.uiService.showSnackbar('Erfolgreich registriert', null, 3000, 'success');
            })
            .catch(error => {
                this.uiService.showSnackbar(error.message, null, 3000, 'error');
            });
    }

    updateUser(user: User, data: any) {
        return this.afs.doc(`users/${user.uid}`).update(data);
    }

    private setUserDoc(user) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            memberstate: {
                nutzer: true
            }
        }
        return userRef.set(data)
    }

    private checkMemberstate(user: User, allowedRoles: string[]): boolean {
        if (!user) return false
        for (const memberstate of allowedRoles) {
            if ( user.memberstate[memberstate]) {
                return true
            }
        }
        return false
    }

    login(authData: AuthData) {
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
        this.router.navigate(['/ticketformular']);
        this.uiService.showSnackbar('Erfolgreich angemeldet', null, 3000, 'success');
        })
        .catch(error => {
            this.uiService.showSnackbar(error.message, null, 3000, 'error');
        }); 
    }

    logout() {
        this.afAuth.auth.signOut();
        this.uiService.showSnackbar('Erfolgreich abgemeldet', null, 3000, 'success');
    }

    canRead(user: User): boolean {
        const allowed = ['nutzer', 'iubh', 'admin']
        return this.checkMemberstate(user, allowed)
    }

    canEdit(user: User): boolean {
        const allowed = ['iubh', 'admin']
        return this.checkMemberstate(user, allowed)
    }

    canDelete(user: User): boolean {
        const allowed = ['admin']
        return this.checkMemberstate(user, allowed)
    }

}
