import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../servicio/auth.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private router:Router, private service:AuthService) { }

  ngOnInit(): void {
    this.Editar();  
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getUsuarioId(+id)
    .subscribe(data=> { 
      this.usuario=data;     
    })
  }

  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
