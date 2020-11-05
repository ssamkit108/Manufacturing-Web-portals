import { ToastrService } from 'ngx-toastr';
import { PartsService } from './../../shared/parts.service';
import { Job } from './../../shared/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss'],
})
export class ViewOrdersComponent implements OnInit {
  jobs: Job[] = [];
  jobName: string;
  constructor(public service: PartsService, private toastr: ToastrService) {}
  columns = ['Job Name', 'User Id', 'Part Id', 'Quantity'];
  index = ['jobName', 'userId', 'partId', 'qty'];
  ngOnInit(): void {
    this.service.getOrder().subscribe(
      (response) => {
        this.jobs = response['Items'];
      },
      (error) => console.log(error)
    );
  }
  getJob(jobName: string) {
    if (this.jobName != '') {
    } else if (this.jobName == '') {
      this.ngOnInit();
    }
    if (jobName == null) {
      this.toastr.error('Job Name is Invalid');
    }
    this.ngOnInit();
    this.service.getOrder().subscribe(
      (res) => {
        this.jobs = this.jobs.filter((res) => {
          return res.jobName.toLowerCase() == this.jobName.toLowerCase();
        });

        if (this.jobs.length == 0) {
          this.toastr.error('Cannot find the Order');
        } else {
          this.toastr.success('Order Found');
        }
      },
      (error) => {}
    );
  }
}
