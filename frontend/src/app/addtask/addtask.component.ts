import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
	
	task = {};

  constructor(private http:HttpClient , private router :Router) { }

  ngOnInit() {
  }
  
  saveTask(){
	  this.http.post('/saveTask',this.task).subscribe(res => {
		  this.router.navigate(['/addUser',res]);
		  this.task = {};
		  
	  },(err) => {
		  console.log(err);
	  }
	  );
   }
   
   resetTaskForm(addTaskForm:NgForm){
	   addTaskForm.resetForm();
	   }
   

}
