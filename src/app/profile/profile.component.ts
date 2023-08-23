import { Component, OnInit } from '@angular/core';
import { AccountinfoService } from '../accountinfo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userInfo:any
  constructor(private accService:AccountinfoService) { }

  ngOnInit(): void {
      //  this.accService.getUserDetails().subscribe(data=>{
      //   this.userInfo= data
      //   console.log(data)
      // })
   
  }

}
