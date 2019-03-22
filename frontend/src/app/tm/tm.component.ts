import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tm',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {

  tasks: any;
  searchTask = {};
  constructor (private http: HttpClient, private router:Router) { }

  ngOnInit() {
  	this.http.get('/tasksList').subscribe(data => {
  		this.tasks = data;
  	});
  }
  
  endTask(id){
	  this.http.get('/endTask/'+id).subscribe(res => {
		  this.tasks = res ;
		  
	  });
  }
  
  searchTaskDetails(){
	   this.http.post('/searchTask', this.searchTask).subscribe(res => {
		  this.tasks = res ;
		  
	  });
  }
  clearSearchTaskDetails(){
	  this.searchTask = {};
	  this.http.get('/tasksList').subscribe(data => {
  		this.tasks = data;
  	});
  }
  
  
}
