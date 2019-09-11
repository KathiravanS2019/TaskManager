package com.fse.tm.angular.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "projects")
public class ProjectManagerModel {
	@Id
	private String id;
	@Field(value ="PROJECT")
	private String project;
	
	@Field(value ="START_DATE")
	private Date startDate;
	@Field(value ="END_DATE")
	private Date endDate; 
	@Field(value ="PRIORITY")
	private Long priority;
	
	public ProjectManagerModel() {
		
	}
	
	public ProjectManagerModel(String projectId, String project, Date startDate, Date endDate, Long priority) {
		this.id = projectId;
		this.project = project;
		this.startDate = startDate;
		this.endDate = endDate;
		this.priority = priority;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Long getPriority() {
		return priority;
	}
	public void setPriority(Long priority) {
		this.priority = priority;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
	
	
}
