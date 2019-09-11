import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes,Router} from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmComponent } from './tm/tm.component';

import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { DatePipe } from '@angular/common';

import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';

const appRoutes: Routes = [
{ 
   path:'tasks',
   component: TmComponent,
   data: { title: 'Add Task'}
},
{
	path: 'addTask',
	component: AddtaskComponent,
	data:{ title: 'Add Task'}
},
{
	path: 'editTask/:id',
	component: EdittaskComponent,
	data:{ title: 'Task Edit'}
},
{
	path: 'addUser',
	component: AdduserComponent,
	data:{ title: 'Add User'}
},
{
	path: 'addProject',
	component: AddprojectComponent,
	data:{ title: 'Add Project'}
},
{  path:'',
   redirectTo:'/tasks',
   pathMatch: 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    TmComponent,
    AddtaskComponent,
    EdittaskComponent,
    AdduserComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
	AppRoutingModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    )
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
