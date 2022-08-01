import { Component, OnInit } from '@angular/core';
import { NgoRegisterService } from '../ngo-register.service';
import { LoginSignupApprovalService } from '../services/login-signup-approval.service';

@Component({
  selector: 'app-ngo-trainee',
  templateUrl: './ngo-trainee.component.html',
  styleUrls: ['./ngo-trainee.component.css']
})
export class NGOTraineeComponent implements OnInit {
  result:any;
  constructor(private ngoService: NgoRegisterService, private loginService: LoginSignupApprovalService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.ngoService.getData().subscribe((res) => {
      this.result=res;
      console.log(this.result);
    });
  }
}
