import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../model/clases-model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './dialog-update-client.component.html',
  styleUrls: ['./dialog-update-client.component.scss']
})
export class DialogUpdateClientComponent {

  applicantForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogUpdateClientComponent>, @Inject(MAT_DIALOG_DATA) public data: Cliente, private readonly fb: FormBuilder) {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close;
  }

  createForm(): void {
    this.applicantForm = this.fb.group({
      dni: [{ value: this.data.dni, disabled: true }], name: [this.data.nombre], apellidos: [this.data.apellidos],
      saldo: [{ value: this.data.saldo, disabled: true }], tlf: [this.data.tlf], email: [this.data.email]
    })
  }
}
