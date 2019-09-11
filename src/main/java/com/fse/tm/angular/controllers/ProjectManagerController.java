package com.fse.tm.angular.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fse.tm.angular.models.ProjectManagerModel;
import com.fse.tm.angular.repositories.ProjectManagerRepository;

@RestController
public class ProjectManagerController {

	@Autowired
	ProjectManagerRepository projectManagerRepository;

	@RequestMapping(method = RequestMethod.GET, value = "/projectsList")
	public Iterable<ProjectManagerModel> getProjectList() {
		return projectManagerRepository.findAllProjects();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveProject")
	public ProjectManagerModel saveProject(@RequestBody ProjectManagerModel pmModel) {
		projectManagerRepository.save(pmModel);
		return pmModel;
	}

	
	@RequestMapping(method = RequestMethod.GET, value = "/getProjectById/{projectId}")
	public ProjectManagerModel editProject(@PathVariable String projectId) {
		return projectManagerRepository.findById(projectId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/updateProject/{projectId}")
	public ProjectManagerModel updateProject(@PathVariable String projectId, @RequestBody ProjectManagerModel pmModel) {
		ProjectManagerModel pMM = projectManagerRepository.findById(projectId);

		if (pmModel.getProject() != null) {
			pMM.setProject(pmModel.getProject());
		}
		
		if (pmModel.getStartDate() != null) {
			pMM.setStartDate(pmModel.getStartDate());
		}
		if (pmModel.getEndDate() != null) {
			pMM.setEndDate(pmModel.getEndDate());
		}
		if (pmModel.getPriority() != null) {
			pMM.setPriority(pmModel.getPriority());
		}
		if (pmModel.getPriority() != null) {
			pMM.setPriority(pmModel.getPriority());
		}
		
		projectManagerRepository.save(pMM);
		return pmModel;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/searchProject")
	public List<ProjectManagerModel> searchProjectManagerModel(@RequestBody ProjectManagerModel projectManagerModel) {
		return projectManagerRepository.searchProjectManager(projectManagerModel);
	}
	 
}
