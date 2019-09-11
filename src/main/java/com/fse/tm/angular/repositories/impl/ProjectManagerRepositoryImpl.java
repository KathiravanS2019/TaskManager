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

import com.fse.tm.angular.models.ProjectManagerModel;
import com.fse.tm.angular.repositories.ProjectManagerRepository;
@Repository
public class ProjectManagerRepositoryImpl implements ProjectManagerRepository {
	@Autowired
	private MongoTemplate mongoTemplate;
	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public ProjectManagerModel findById(String id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, ProjectManagerModel.class);
	}

	@Override
	public ProjectManagerModel save(ProjectManagerModel project) {
		// TODO Auto-generated method stub
		return mongoTemplate.save(project);
	}

	@Override
	public List<ProjectManagerModel> findAllProjects() {
		return mongoTemplate.findAll(ProjectManagerModel.class);
	}
	@Override
	public ProjectManagerModel findProjectByName(String projectName) {
		Query query = new Query();
		query.addCriteria(Criteria.where("project").is(projectName));
		return mongoTemplate.findOne(query, ProjectManagerModel.class);
	}


	@Override
	public List<ProjectManagerModel> searchProjectManager(ProjectManagerModel searchProject) {
		Query query = new Query();
		if(searchProject.getProject() != null && !searchProject.getProject().isEmpty()) {
			query.addCriteria(Criteria.where("project").is(searchProject.getProject()));
		}
		return mongoTemplate.find(query, ProjectManagerModel.class);
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
