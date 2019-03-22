package com.fse.tm.angular.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "tasks")
public class TaskManagerModel {
	@Id
	private String id;
	@Field(value ="TASK")
	private String task;
	@Field(value ="PARENT_TASK_ID")
	private String parentTaskId;
	private String parentTask;
	@Field(value ="START_DATE")
	private Date startDate;
	@Field(value ="END_DATE")
	private Date endDate; 
	@Field(value ="PRIORITY")
	private Long priority;
	
	private Long priorityFrom;
	private Long priorityTo;
	
	
	public TaskManagerModel() {
		
	}
	
	public TaskManagerModel(String taskId, String task, String parentTaskId, Date startDate, Date endDate, Long priority) {
		this.id = taskId;
		this.task = task;
		this.parentTaskId = parentTaskId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.priority = priority;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getParentTaskId() {
		return parentTaskId;
	}
	public void setParentTaskId(String parentTaskId) {
		this.parentTaskId = parentTaskId;
	}
	public String getParentTask() {
		return parentTask;
	}
	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
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

	public Long getPriorityFrom() {
		return priorityFrom;
	}

	public void setPriorityFrom(Long priorityFrom) {
		this.priorityFrom = priorityFrom;
	}

	public Long getPriorityTo() {
		return priorityTo;
	}

	public void setPriorityTo(Long priorityTo) {
		this.priorityTo = priorityTo;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
	
	
}
