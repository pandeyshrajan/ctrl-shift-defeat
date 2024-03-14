package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.EmployeeService;
import com.team4.project.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class ProjectController {
    @Autowired
//    Employee employee;
    private ProjectService employeeService;

    @GetMapping("/projectTags/{employeeId}")
    public ResponseEntity<Object> getProjectTagsByEmployeeId(@PathVariable int employeeId) {
        List<ProjectTags> list= employeeService.getProjectTags(employeeId);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No projects Found");
        }
        else return ResponseEntity.ok(list);
    }


}





