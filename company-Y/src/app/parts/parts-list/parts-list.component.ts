import { Router } from '@angular/router';
import { UpdatePartComponent } from './../update-part/update-part.component';
import { AddPartsComponent } from './../add-parts/add-parts.component';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Parts } from './../../shared/parts.model';
import { PartsService } from './../../shared/parts.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {
  parts: Parts[] = [];
  partId: number;
  constructor(public service: PartsService, private toastr: ToastrService, private dialog: MatDialog) {}
  columns = ['PartId', 'Part Name', 'Quantity', 'Actions'];
  index = ['partId', 'partName', 'qoh'];

  ngOnInit(): void {
    this.service.getPartsList().subscribe(
      (response) => {
        this.parts = response['Items'];
      },
      (error) => console.log(error)
    );
  }
  update(part: Parts) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    let editPart = Object.assign({}, part);
    const dialogRef = this.dialog.open(UpdatePartComponent, { data: editPart });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
  getPart(partId: number) {
    if (partId == null) {
      this.toastr.error('PartID is Invalid');
    }
    this.ngOnInit();
    this.service.getPartsList().subscribe(
      (res) => {
        this.parts = this.parts.filter((res) => {
          return res.partId == this.partId;
        });
        if (this.parts.length == 0) {
          this.toastr.error('PartId not Found');
        } else {
          this.toastr.success('PartId Found');
        }
      },
      (error) => {
        this.toastr.error('Cannot find the part');
      }
    );
  }
}
