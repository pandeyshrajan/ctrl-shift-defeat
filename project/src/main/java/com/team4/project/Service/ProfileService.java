package com.team4.project.Service;

import com.team4.project.Entity.Profile;
import com.team4.project.Repository.AdminRepository;
import com.team4.project.Repository.EmployeeRepository;
import com.team4.project.Repository.InterestRepository;
import com.team4.project.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {


    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private InterestRepository interestRepository;



    public Profile getProfile(int employeeId)
    {
        Profile employeeProfile = new Profile();
        employeeProfile.setEmployee(employeeRepository.findById(employeeId).get());
        employeeProfile.setProjectTags(projectRepository.findProjectTags(employeeId));
        employeeProfile.setInterestTags(interestRepository.findInterestTags(employeeId));
        return employeeProfile;
    }



}

