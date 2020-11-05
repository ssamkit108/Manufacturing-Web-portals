import { PartsService } from './../../shared/parts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.scss'],
})
export class AddPartsComponent implements OnInit {
  constructor(public service: PartsService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.resetFrom();
  }
  resetFrom(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      partId: null,
      partName: '',
      qoh: null,
    };
  }

  onSubmit(form: NgForm) {
    this.service.getPartsList().subscribe((data) => {
      let exists = false;
      data['Items'].forEach((part: any) => {
        if (form.value.partId == part.partId) {
          this.toastr.error('Cannot add same PartId');
          exists = true;
        }
      });
      if (form.value.qoh < 0) {
        this.toastr.error('Quantity cannot be negative');
        exists = true;
      }
      if (!exists) {
        this.service.postParts(form.value).subscribe(
          (res) => {
            this.resetFrom(form);
            this.toastr.success('New Record Added Sucessfully', 'Part Info Added');
          },
          (error) => {
            if (error.status == 500) {
              this.toastr.error('Cannot add same PartId');
              this.resetFrom(form);
            }
          }
        );
      }
    });
  }
}
