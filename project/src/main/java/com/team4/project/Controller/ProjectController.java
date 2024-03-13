package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.EmployeeService;
import com.team4.project.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class ProjectController {
    @Autowired
//    Employee employee;
    private ProjectService employeeService;

    @GetMapping("/projectTags/{employeeId}")
    public List<ProjectTags> getProjectTagsByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getProjectTags(employeeId);
    }


}





