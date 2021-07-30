import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {

  contactsList: Contacts[];
  collection = {count: 10, data: []};

  constructor() { }

  ngOnInit(): void {
    this.populateContacts();
  }

  //método para preencher com dados mocados
  populateContacts(){
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        name: 'teste' + i,
        email: 'email' + i + '@contactura.com.br',
        phone: '(' + 0 + 8 + 1 + ')' + 9 + i + i + i + i + '-' + i + i + i + i
      });
      this.contactsList = this.collection.data;
      console.log(this.contactsList);
    }
  }

}
