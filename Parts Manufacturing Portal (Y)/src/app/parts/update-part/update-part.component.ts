import { Router } from '@angular/router';
import { Parts } from './../../shared/parts.model';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartsService } from './../../shared/parts.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.scss'],
})
export class UpdatePartComponent implements OnInit {
  public partId: number;
  public partName: string;
  public qoh: number;

  formData: Parts;
  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: Parts,
    public dialogRef: MatDialogRef<UpdatePartComponent>,
    public service: PartsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let valid = true;
    if (form.value.qoh < 0) {
      this.toastr.error('Quantity cannot be negative');
      valid = false;
    }
    if (valid) {
      this.service.editPart(form.value).subscribe(
        (res) => {
          this.toastr.success('Record Updated Sucessfully', 'Part Info Updated');
          this.dialogRef.close(this.data);
        },
        (error) => {
          this.toastr.error('Record Not Updated', 'Error in connecting database');
        }
      );
    }
  }
}
