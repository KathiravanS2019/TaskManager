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

import com.fse.tm.angular.models.UserManagerModel;
import com.fse.tm.angular.repositories.UserManagerRepository;
import com.mongodb.client.result.DeleteResult;
@Repository
public class UserManagerRepositoryImpl implements UserManagerRepository {
	@Autowired
	private MongoTemplate mongoTemplate;
	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	@Override
	public UserManagerModel findById(String id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.findOne(query, UserManagerModel.class);
	}
	@Override
	public UserManagerModel save(UserManagerModel user) {
		// TODO Auto-generated method stub
		return mongoTemplate.save(user);
	}
	@Override
	public List<UserManagerModel> findAllUsers() {
		return mongoTemplate.findAll(UserManagerModel.class);
	}
	@Override
	public UserManagerModel findUserByName(String user) {
		Query query = new Query();
		query.addCriteria(Criteria.where("firstName").is(user));
		return mongoTemplate.findOne(query, UserManagerModel.class);
	}
	@Override
	public List<UserManagerModel> searchUserManager(UserManagerModel searchUser) {
		Query query = new Query();
		if(searchUser.getFirstName() != null && !searchUser.getFirstName().isEmpty()) {
			query.addCriteria(Criteria.where("firstName").is(searchUser.getFirstName()));
		}
		return mongoTemplate.find(query, UserManagerModel.class);
	}
	
	@Override
	public DeleteResult deleteUser(String id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		return mongoTemplate.remove(query);
	}
}
