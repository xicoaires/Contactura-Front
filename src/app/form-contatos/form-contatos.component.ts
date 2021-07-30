import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.scss']
})
export class FormContatosComponent implements OnInit {

  formContatos = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log();
    if(this.formContatos.valid){
      Swal.fire({
        icon: 'success',
        title: 'Eeeeeba...',
        text: 'Contato criado com sucesso!'
      });
      this.router.navigate(['/lista-contatos']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oooops...',
        text: 'Cadastro não realizado. Preencha corretamente todos os campos!'
      });
    }
  }
}
