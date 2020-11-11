import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../servicio/auth.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private service:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }

  Editar(usuario:Usuario):void{
    localStorage.setItem("id",usuario._id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(p=>p!==usuario);
      alert("Usuario eliminado...");
    })
  }
}
