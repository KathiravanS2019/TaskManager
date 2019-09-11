import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-addproject',
	templateUrl: './addproject.component.html',
	styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
	projects: any;
	project = {};
	constructor(private http:HttpClient , private router :Router) { }
	ngOnInit() {
		this.http.get('/projectsList').subscribe(data => {
  		this.projects = data;
		});
	}

	saveProject(){
		this.http.post('/saveProject',this.project).subscribe(res => {
			this.router.navigate(['/addProject',res]);
			this.project = {};
		},(err) => {
			console.log(err);
		}
		);
	}
	resetProjectForm(addProjectForm:NgForm){
		addProjectForm.resetForm();
	}
}
