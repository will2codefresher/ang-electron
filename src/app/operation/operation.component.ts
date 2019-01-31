import {Component, OnInit} from '@angular/core';
import {ChildProcessService} from 'ngx-childprocess';
import {FormControl, FormGroup} from '@angular/forms';

// const spawn = require('child_process').spawn;

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  result: string;
  cmd = '';
  error: string;
  stdout: string;
  stderr: string;
  formGroup: FormGroup;

  constructor(private childProcessService: ChildProcessService) {
    this.result = '未有执行结果';
    this.formGroup = new FormGroup({
      codeRootPath: new FormControl(''),
      fromBranch: new FormControl(''),
      toBranch: new FormControl(''),
      command: new FormControl('ipconfig'),
    });
  }

  ngOnInit() {
  }

  check_conflict() {
    this.result = 'check conflict';
  }

  do_merge() {
    const bat = this.childProcessService.childProcess.spawn('cmd.exe', ['/c', 'ipconfig /all'], []);

    bat.stdout.on('data', (data) => {
      console.log(data);
      this.result = data;
      alert('merge');
    });
  }

  do_push() {
    this.run_cmd('echo aaa');
  }

  exec_handler(error, stdout, stderr): any {
    this.error = error;
    this.stdout = stdout;
    this.stderr = stderr;
    // alert(error);
    // alert(stdout);
    // alert(stderr);
    alert('exec_handler');
    this.result = 'exec_handler';
  }

  setResult(error, stdout, stderr) {
    this.result = stdout;
    alert(stdout);
  }

  run_cmd(command: string) {
    // this.result = command;
    this.childProcessService.childProcess.exec(command, [], this.setResult);
  }

}
