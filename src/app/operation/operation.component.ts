import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  check_conflict() {
    alert('check conflict');
  }

  do_merge() {
    alert('merge');
  }

  do_push() {
    alert('push');
  }
}
