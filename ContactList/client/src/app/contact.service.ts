/*************************************************************************/
/******************** @author : Nitesh Singh Rajput **********************/
/*************************************************************************/

//contact service 

import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http:Http) { }

  //add contact
  addContact(newContact) {

  		var headers = new Headers();
  		headers.append('Content-Type','application/json');
  		return this.http.post('http://localhost:3000/api/contacts',newContact,{headers:headers})
  		.map(res => res.json());

  }

  //retrieve coontact
  getContact(id) {

  		return this.http.get('http://localhost:3000/api/contacts/'+id)
  		.map(res => res.json());
  }

  //retrieve contacts
  getContacts() {
  		console.log('client side service : getContacts() called ...');
  		return this.http.get('http://localhost:3000/api/contacts')
  		.map(res => res.json());
  }


  //delete contacts
  deleteContact(id) {

  		return this.http.delete('http://localhost:3000/api/contacts/'+id)
  		.map(res => res.json());
  }

}
