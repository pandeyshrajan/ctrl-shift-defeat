package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;


    public List<ProjectTags> getProjectTags(int employeeId){
        return projectRepository.findProjectTags(employeeId);
    }

}

