import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {

  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(message, action, duration, panelClass) {
    this.snackbar.open(message, action, {
      duration: duration,
      panelClass: panelClass
    });
  }
}