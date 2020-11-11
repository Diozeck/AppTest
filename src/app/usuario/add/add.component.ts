import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../servicio/auth.service';
import { Usuario } from 'src/app/Modelo/Usuario';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router: Router,private service:AuthService) { }

  ngOnInit(): void {
  }

  usuario:Usuario= new Usuario();
  Guardar(){
    this.service.createUsuario(this.usuario).subscribe(data=>{
      alert("Se ha agregado con exito");
      this.router.navigate(["listar"]);
  
    })
  }

}
