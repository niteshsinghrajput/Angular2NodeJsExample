/*************************************************************************/
/******************** @author : Nitesh Singh Rajput **********************/
/*************************************************************************/
//Contact Component 

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ ContactService ]
})
export class ContactsComponent implements OnInit {


  contacts:Contact[];
  contact:Contact;
  first_name:string;
  last_name:string;
  phone:string;


  //add contact
  addContact() {
  		const newContact = {
  			first_name : this.first_name,
  			last_name : this.last_name,
  			phone : this.phone
  		}

  		console.log('client : addContact() called ...');
  		console.log(JSON.stringify(newContact));

  		this.contactService.addContact(newContact)
  		.subscribe(contact => {
  			console.log('Hiiii');
  			console.log(JSON.stringify(contact));
  			this.contacts.push(newContact);

  		});
  		
  }

  //get a particular contact
  getContact(id:any) {

  		this.contactService.getContact(id)
  		.subscribe(data => {
  			this.contact = data;

  		})
  }

  //delete contact
  deleteContact(id:any) {

  		var contacts = this.contacts;
  		this.contactService.deleteContact(id)
  		.subscribe(data => {

  			if(data.n == 1) {
  				for(var i=0;i<contacts.length;i++) {
  					if(contacts[i]._id == id) {
  						contacts.splice(i,1);
  					}
  				}
  			}
  		})
  }

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  	console.log('getting all contacts from mongo db ...');
  	this.contactService.getContacts()
  	.subscribe(contacts => this.contacts = contacts);
  }

}
