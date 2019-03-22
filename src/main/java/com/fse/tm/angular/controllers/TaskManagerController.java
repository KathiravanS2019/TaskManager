package com.fse.tm.angular.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fse.tm.angular.models.TaskManagerModel;
import com.fse.tm.angular.repositories.TaskManagerRepository;

@RestController
public class TaskManagerController {

	@Autowired
	TaskManagerRepository taskManagerRepository;

	@RequestMapping(method = RequestMethod.GET, value = "/tasksList")
	public Iterable<TaskManagerModel> taskManagerModel() {
		return taskManagerRepository.findAllTasks();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saveTask")
	public TaskManagerModel saveTask(@RequestBody TaskManagerModel tmModel) {
		if(tmModel.getParentTask() != null) {
			TaskManagerModel parent = taskManagerRepository.findTaskByName(tmModel.getParentTask());
			if(parent!=null) {
				tmModel.setParentTaskId(parent.getId());
			}
			else {
				tmModel.setParentTask(null);
			}
		}
		taskManagerRepository.save(tmModel);
		return tmModel;
	}

	
	@RequestMapping(method = RequestMethod.GET, value = "/getTaskById/{taskId}")
	public TaskManagerModel editTask(@PathVariable String taskId) {
		return taskManagerRepository.findById(taskId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/updateTask/{taskId}")
	public TaskManagerModel updateTask(@PathVariable String taskId, @RequestBody TaskManagerModel tmModel) {
		TaskManagerModel tMM = taskManagerRepository.findById(taskId);

		if (tmModel.getTask() != null) {
			tMM.setTask(tmModel.getTask());
		}
		if (tmModel.getParentTaskId() != null) {
			tMM.setParentTaskId(tmModel.getParentTaskId());
		}
		if(tmModel.getParentTask() != null && !tmModel.getParentTask().isEmpty()) {
			TaskManagerModel parent = taskManagerRepository.findTaskByName(tmModel.getParentTask());
			if(parent!=null) {
				tMM.setParentTaskId(parent.getId());
				tMM.setParentTask(tmModel.getParentTask());
			}
			else {
				tMM.setParentTask(null);
			}
		}
		if(tmModel.getParentTask() == null || tmModel.getParentTask().isEmpty()) {
			tMM.setParentTask(null);
			tMM.setParentTaskId(null);
		}
		if (tmModel.getStartDate() != null) {
			tMM.setStartDate(tmModel.getStartDate());
		}
		if (tmModel.getEndDate() != null) {
			tMM.setEndDate(tmModel.getEndDate());
		}
		if (tmModel.getPriority() != null) {
			tMM.setPriority(tmModel.getPriority());
		}
		taskManagerRepository.save(tMM);
		return tmModel;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/endTask/{taskId}")
	public TaskManagerModel updateEndTask(@PathVariable String taskId) {
		TaskManagerModel tMM = taskManagerRepository.findById(taskId);
		tMM.setEndDate(new Date());
		return taskManagerRepository.save(tMM);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/searchTask")
	public List<TaskManagerModel> searchTaskManagerModel(@RequestBody TaskManagerModel taskManagerModel) {
		return taskManagerRepository.searchTaskManager(taskManagerModel);
	}
	 
}
