import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private emailService:EmailService, private snack:MatSnackBar) { }

  flag = false

  ngOnInit(): void {
  }

  data = {
    to:"",
    subject:"",
    body:""
  }
  json:any
  submitForm() {
    if(this.data.to=="" || this.data.body=="" || this.data.body=="")
      return;
    this.emailService.sendEmail(this.data).subscribe(
      response=>{
        this.json = response
        if(this.json.code==200){
          this.snack.open(this.json.message,"ok");
        } else if(this.json.code==500){
          this.snack.open(this.json.message+" Error Code: "+this.json.code,"ok");
        }
      },
      error=>{
        this.snack.open("Send failed!!","cancel");
      }
    )
  }

}
