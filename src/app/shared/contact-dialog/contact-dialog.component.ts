import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
