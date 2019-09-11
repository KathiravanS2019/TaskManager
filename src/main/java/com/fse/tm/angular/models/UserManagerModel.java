package com.fse.tm.angular.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "users")
public class UserManagerModel {
	@Id
	private String id;
	@Field(value ="FIRST_NAME")
	private String firstName;
	@Field(value ="LAST_NAME")
	private String lastName;
	@Field(value ="EMPLOYEE_ID")
	private String employeeID;
	@Field(value ="TASK_ID")
	private String taskID;
	@Field(value ="PROJECT_ID")
	private String projectID;
	
	
	public UserManagerModel() {
		
	}
	
	public UserManagerModel(String userId, String firstName, String lastName, String employeeID, String taskID, String projectID) {
		this.id = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeID = employeeID;
		this.taskID = taskID;
		this.projectID = projectID;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(String employeeID) {
		this.employeeID = employeeID;
	}
	public String getTaskID() {
		return taskID;
	}
	public void setTaskID(String taskID) {
		this.taskID = taskID;
	}
	public String getProjectID() {
		return projectID;
	}
	public void setProjectID(String projectID) {
		this.projectID = projectID;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
}
