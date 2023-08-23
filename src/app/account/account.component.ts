import { Component, OnInit } from '@angular/core';
import { AccountinfoService } from '../accountinfo.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
accBalance:any
  constructor(private accBalanceService:AccountinfoService) { }


  ngOnInit(): void {
    this.accBalanceService.getUserDetails().subscribe(data=>{
      this.accBalance= data
      console.log(data)
    })
 
  }

}


