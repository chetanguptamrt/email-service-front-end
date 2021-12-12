import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  sendEmail(data:any) {
    return this.http.get(this.baseUrl+"/send?to="+data.to+"&subject="+data.subject+"&body="+data.body);
  }

}
