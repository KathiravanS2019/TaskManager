import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: any;
  user = {};

  constructor(private http:HttpClient , private router :Router) { }

  ngOnInit() {
  	this.http.get('/usersList').subscribe(data => {
  		this.users = data;
  	});
  }
  
  saveUser(){
	  this.http.post('/saveUser',this.user).subscribe(res => {
		  this.router.navigate(['/addUser',res]);
		  this.user = {};
		  
	  },(err) => {
		  console.log(err);
	  }
	  );
   }
   
   
   resetUserForm(addUserForm:NgForm){
	   addUserForm.resetForm();
	   }
}