import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({ 
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('html').style.background = 'linear-gradient(to right, #fbc7d4, #9796f0)'; // MUDAR O BACKGROUND VIA JS
  }

  ngOnDestroy() {
    document.querySelector('html').style.background = 'none'; // QUANDO MUDAR O BACKGROUND PELO JS, TEM QUE TER O DESTROY
  }

  login(){
    if (this.loginForm.valid){
      localStorage.setItem('token', 'coxinhanovaiorkina') //no authguard
      this.router.navigate(['/lista-contatos']); //no app-routing
    }
  }
}
