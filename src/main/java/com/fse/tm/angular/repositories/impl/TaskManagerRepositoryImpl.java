package com.fse.tm.angular.repositories.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.fse.tm.angular.models.TaskManagerModel;
import com.fse.tm.angular.repositories.TaskManagerRepository;
@Repository
public class TaskManagerRepositoryImpl implements TaskManagerRepository {
	@Autowired
	private MongoTemplate mongoTemplate;
	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public TaskManagerModel findById(String id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, TaskManagerModel.class);
	}

	@Override
	public TaskManagerModel save(TaskManagerModel task) {
		// TODO Auto-generated method stub
		return mongoTemplate.save(task);
	}

	@Override
	public List<TaskManagerModel> findAllTasks() {
		return mongoTemplate.findAll(TaskManagerModel.class);
	}
	@Override
	public TaskManagerModel findTaskByName(String taskName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("task").is(taskName));
		return mongoTemplate.findOne(query, TaskManagerModel.class);
	}


	@Override
	public List<TaskManagerModel> searchTaskManager(TaskManagerModel searchTask) {
		Query query = new Query();
		if(searchTask.getTask() != null && !searchTask.getTask().isEmpty()) {
			query.addCriteria(Criteria.where("task").is(searchTask.getTask()));
		}
		if(searchTask.getParentTask() != null && !searchTask.getParentTask().isEmpty()) {
			TaskManagerModel parentTaskObj  = findTaskByName(searchTask.getParentTask());
			query.addCriteria(Criteria.where("parentTaskId").is(parentTaskObj.getId()));
		}
		
		if(searchTask.getPriorityFrom() != null && searchTask.getPriorityTo()!=null) {
			query.addCriteria(Criteria.where("priority").gt(searchTask.getPriorityFrom())
					.orOperator(Criteria.where("priority").lt(searchTask.getPriorityTo())));
		}
		if(searchTask.getStartDate() != null ) {
			Date previousStartDate = getFormattedDate(searchTask.getStartDate(),-1);
			Date nextStartDate = getFormattedDate(searchTask.getStartDate(),+1);
			query.addCriteria(Criteria.where("startDate").gt(previousStartDate)
					.orOperator(Criteria.where("startDate").lt(nextStartDate)));
		}
		if(searchTask.getEndDate() != null ) {
			Date previousEndDate = getFormattedDate(searchTask.getEndDate(),-1);
			Date nextEndDate = getFormattedDate(searchTask.getEndDate(),+1);
			query.addCriteria(Criteria.where("endDate").gt(previousEndDate)
					.orOperator(Criteria.where("endDate").lt(nextEndDate)));
		}
		return mongoTemplate.find(query, TaskManagerModel.class);
	}
	
	private Date getFormattedDate(Date input ,int i) {
		Date formattedDate = null;
		try {
			String inputStringDateFormat = simpleDateFormat.format(input);
			Date dateFormat = simpleDateFormat.parse(inputStringDateFormat);
			Calendar cal =Calendar.getInstance();
			cal.setTime(dateFormat);
			cal.add(Calendar.DATE, i);
			String formattedStringDate = simpleDateFormat.format(cal.getTime());
			formattedDate =  simpleDateFormat.parse(formattedStringDate);
		}
		catch(Exception e) {
			
		}
		return formattedDate;
	}


}
