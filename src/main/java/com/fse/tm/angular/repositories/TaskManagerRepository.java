package com.fse.tm.angular.repositories;

import java.util.List;

import com.fse.tm.angular.models.TaskManagerModel;

public interface TaskManagerRepository {

	
    TaskManagerModel findById(String id);
	
    TaskManagerModel save(TaskManagerModel task);
    
    List<TaskManagerModel> findAllTasks();
    
    List<TaskManagerModel> searchTaskManager(TaskManagerModel searchTask);
    
    TaskManagerModel findTaskByName(String name);
}
