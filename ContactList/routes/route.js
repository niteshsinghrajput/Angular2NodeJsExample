const express = require("express");
const router = express.Router();

const Contact = require("../models/contacts");



//create contact
router.post('/contacts',(req,res,next)=>{
	
	let newContact = new Contact({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		phone: req.body.phone
	});

	console.log('Hiii while saving in mongodb');
	console.log(JSON.stringify(newContact));
	newContact.save((err,contact)=>{

		if(!err){
			console.log('Contact has been created successfully : '+JSON.stringify(contact));
			res.json({msg:'Contact added successfully'})
		}else{
			console.log('Error while creating contact');
			res.json({msg:'Failed to add contact'});
		}
	});
});

//read contact
router.get('/contacts',(req,res,next)=>{

	Contact.find((err,contacts)=>{
		if(!err){
			console.log('Contacts retrieved successfully');
			res.json(contacts);
		} else {
			console.log('Failed to retrieve Contacts');
			res.json({msg:'Failed to retrieve Contacts'});
		}
	});

});


// read a particular contact
router.get('/contacts/:id',(req,res,next)=>{

	Contact.findOne({ _id: req.params.id },(err,contact)=>{
		if(!err){
			console.log('Contact retrieved successfully');
			res.json(contact);
		} else {
			console.log('Failed to retrieve Contact');
			res.json({msg:'Failed to retrieve Contact'});
		}
	});

});

//update contact
router.put('/contacts',(req,res,next)=>{

	res.send('updating details into db');
});

//delete contact
router.delete('/contacts/:id',(req,res,next)=>{
	Contact.remove({ _id: req.params.id },(err,result)=>{
		if(!err){
			console.log('Contact deleted successfully');
			res.json(result);
		}else {
			res.json(err);
		}
	});
});


module.exports = router;