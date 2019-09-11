package com.fse.tm.angular.repositories;

import java.util.List;

import com.fse.tm.angular.models.UserManagerModel;
import com.mongodb.client.result.DeleteResult;

public interface UserManagerRepository {

	
	UserManagerModel findById(String id);
	
	UserManagerModel save(UserManagerModel task);
    
    List<UserManagerModel> findAllUsers();
    
    List<UserManagerModel> searchUserManager(UserManagerModel searchTask);
    
    UserManagerModel findUserByName(String name);
    
    DeleteResult deleteUser(String id);
}
