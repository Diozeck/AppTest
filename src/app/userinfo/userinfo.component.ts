import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  listar(){
    this.router.navigate(["listar"]);
  }

  nuevo(){
    this.router.navigate(["add"]);
  }

  ngOnInit(): void {
  }

}