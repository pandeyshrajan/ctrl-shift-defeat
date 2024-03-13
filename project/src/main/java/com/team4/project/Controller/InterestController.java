package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.EmployeeService;
import com.team4.project.Service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class InterestController {
    @Autowired
//    Employee employee;
    private InterestService employeeService;
    @GetMapping("/interestTags/{employeeId}")
    public ResponseEntity<Object> getInterestTagsByEmployeeId(@PathVariable int employeeId) {
        List<InterestTags> list= employeeService.getInterestTags(employeeId);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No interests Found");
        }
        else return ResponseEntity.ok(list);
    }
}





