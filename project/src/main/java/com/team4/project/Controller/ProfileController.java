package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class ProfileController {
    @Autowired
//    Employee employee;
    private ProfileService profileService;
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private InterestService interestService;
    @Autowired
    private ProjectService projectService;









    @GetMapping("/profile/{employeeId}")
    public ResponseEntity<Object> getProfileById(@PathVariable int employeeId) {
        Optional<Profile> profile= Optional.of(new Profile());

        Optional<Employee> employee=(employeeService.getEmployeeById(employeeId));
        List<InterestTags> interestTags=interestService.getInterestTags(employeeId);
        List<ProjectTags> projectTags=projectService.getProjectTags(employeeId);

        if(employee.isPresent())
        {
            profile.get().setEmployee(employee.get());
            profile.get().setProjectTags(projectTags);
            profile.get().setInterestTags(interestTags);
            return ResponseEntity.ok(profile.get());

        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Profile Not Found");
        }




    }


}





