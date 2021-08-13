import { UsuariosService } from './../service/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  userList: User[];
  collection = {count: 10, data: []}

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.populationUsers();
  }

  //métodopara preencher os contatos com dados macodos
  populationUsers(){
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        name: 'teste' + i,
        username: 'email' + i + '@contactura.com',
        admin: 'true'
      });     
    }
    this.userList = this.collection.data;
    console.log(this.userList);
  }

  editUser(user: User){
    console.log('edit esta funcionando', user );
    this.usuariosService.getUserList(user);
    this.router.navigate(['/cadastro-usuarios']);
  }

  deleteUser(user: User){
    Swal.fire({
      title: 'Você tem certeza?', 
      text: 'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed){
        Swal.fire(
          'Deletado com sucesso!'
        );
      }
    });
  }
  
}