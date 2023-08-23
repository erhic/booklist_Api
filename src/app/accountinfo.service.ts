import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AccountinfoService {
url = "http://localhost:3000/userinfo"
  constructor(private http:HttpClient) { }

  getUserDetails(){
   return this.http.get<User[]>(this.url)
  }
}
