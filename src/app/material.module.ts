import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
