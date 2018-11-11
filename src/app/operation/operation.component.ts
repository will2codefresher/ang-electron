import {Component, OnInit} from '@angular/core';
import {ChildProcessService} from 'ngx-childprocess';


@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  result: string;
  cmd: string = '';

  constructor(private childProcessService: ChildProcessService) {
    this.result = '未有执行结果';
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
    this.run_cmd('echo aaa');
  }

  run_cmd(command: string) {
    this.childProcessService.childProcess.exec(command, [], function (data) {
      alert(data);
      this.result = data;
    });
  }

}
