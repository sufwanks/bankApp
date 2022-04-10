import { Component, OnInit } from '@angular/core';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dAcno="";
  dPswd="";
  dAmount="";

  wAcno="";
  wPswd="";
  wAmount="";

  constructor(private ds:DatasService) { }

  ngOnInit(): void {
  }

  deposit(){

    var dAcno=this.dAcno;
    var dPswd=this.dPswd;
    var dAmount=this.dAmount
    var depAmount=parseInt(dAmount)

    const result=this.ds.deposit(dAcno,dPswd,depAmount)

    if(result){
      alert(`${depAmount} deposited. Available balance is ${result}`)
      return true
    }
    else{
      alert("not deposited")
      return false
    }
  }

  withdraw(){
    alert("withdraw button clicked")
  }
}
