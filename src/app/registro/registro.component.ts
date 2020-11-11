import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicio/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email="";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }

  registro()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = "ya cuentas con un registro"
          //this.router.navigate(['/userinfo'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/register'])
        })
    }
  }

  validateForm(email, password)
  {
    if(email.lenght === 0)
    {
      this.errorMessage = "Ingresa un correo electronico";
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = "Ingresa tu contraseña";
      return false;
    }

    if (password.lenght < 6)
    {
      this.errorMessage = "La contraseña debe tener minimo 6 caracteres";
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
