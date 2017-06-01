import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

ServerId: number=4040;
Serverstatus: string="Online";
Allownewserver=false;
NewserverStatus ='';
emailform='';
Ifstatus=false;
getServerStatus(){
return this.Serverstatus;

}

  constructor() { 
      
      setTimeout(()=>{
        this.Allownewserver=true;

      },2000);

  }
  OnServerCreated(){
    this.Ifstatus=false;
    this.NewserverStatus="Server was Created for "+ this.emailform;
  }

  ngOnInit() {
  }

}
