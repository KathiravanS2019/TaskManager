package com.fse.tm.angular.repositories;

import java.util.List;

import com.fse.tm.angular.models.ProjectManagerModel;

public interface ProjectManagerRepository {

	
	ProjectManagerModel findById(String id);
	
    ProjectManagerModel save(ProjectManagerModel task);
    
    List<ProjectManagerModel> findAllProjects();
    
    List<ProjectManagerModel> searchProjectManager(ProjectManagerModel searchTask);
    
    ProjectManagerModel findProjectByName(String name);
}
