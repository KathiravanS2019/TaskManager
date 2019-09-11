package com.fse.tm.angular.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fse.tm.angular.models.UserManagerModel;
import com.fse.tm.angular.repositories.UserManagerRepository;
import com.mongodb.client.result.DeleteResult;

@RestController
public class UserManagerController {

	@Autowired
	UserManagerRepository userManagerRepository;

	@RequestMapping(method = RequestMethod.GET, value = "/usersList")
	public Iterable<UserManagerModel> getUsers() {
		return userManagerRepository.findAllUsers();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveUser")
	public UserManagerModel saveUser(@RequestBody UserManagerModel userModel) {
		userManagerRepository.save(userModel);
		return userModel;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getUserById/{userId}")
	public UserManagerModel editUser(@PathVariable String userId) {
		return userManagerRepository.findById(userId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/updateUser/{userId}")
	public UserManagerModel updateUser(@PathVariable String userId, @RequestBody UserManagerModel userModel) {
		UserManagerModel uMM = userManagerRepository.findById(userId);

		if (userModel.getFirstName() != null) {
			uMM.setFirstName(userModel.getFirstName());
		}
		if (userModel.getLastName() != null) {
			uMM.setLastName(userModel.getLastName());
		}
		if (userModel.getEmployeeID() != null) {
			uMM.setEmployeeID(userModel.getEmployeeID());
		}
		userManagerRepository.save(uMM);
		return userModel;
	}
		
	@RequestMapping(method = RequestMethod.POST, value = "/searchUser")
	public List<UserManagerModel> searchUserManagerModel(@RequestBody UserManagerModel userManagerModel) {
		return userManagerRepository.searchUserManager(userManagerModel);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/deleteUser/{userId}")
	public DeleteResult deleteUser(@PathVariable String userId, @RequestBody UserManagerModel userModel) {
		return userManagerRepository.deleteUser(userId);
	}
	 
}
