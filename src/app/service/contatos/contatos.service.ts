import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contacts } from 'src/app/models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

private dataEdit = new BehaviorSubject<Contacts>(null);
botaoEdit = this.dataEdit.asObservable();

  constructor() { }

  getContactsList(contatos: Contacts){
    this.dataEdit.next(contatos);
  }
}
