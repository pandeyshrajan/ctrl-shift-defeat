package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Repository.LoginRepository;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
//    Employee employee;
    private EmployeeService employeeService;

    @PostMapping(value = "/save")
    private int saveEmployee(@RequestBody Employee employee) {
        employeeService.saveOrUpdateEmployee(employee);
        return employee.getEmployeeId();
    }



    @GetMapping(value = "/allEmployees")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }




    @GetMapping(value = "/limitedEmployee/{num}")
    public List<Employee> getLimitedEmployees(@PathVariable int num) {
        return employeeService.getLimitedEmployees(num);
    }


    @RequestMapping("/{id}")
    private Employee getEmployee(@PathVariable(name = "id") int employeeId) {
        return employeeService.getEmployeeById(employeeId);
    }

    @GetMapping("/reportee/{employeeId}")
    public List<Employee> getReporteesByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getEmployeesByManagerId(employeeId);
    }


    @GetMapping("/projectEmployees/{projectId}")
    public List<Employee> getEmployeeByProjectTag(@PathVariable String projectId) {
        return employeeService.getEmployeeByProjectTags(projectId);
    }

    @GetMapping("/interestEmployees/{interestName}")
    public List<Employee> getEmployeeByInterestTag(@PathVariable String interestName) {
        return employeeService.getEmployeeByInterestTags(interestName);
    }

    @GetMapping("/deptEmployees/{dept}")
    public List<Employee> getEmployeeByDept(@PathVariable String dept) {
        return employeeService.getEmployeeByDepartment(dept);
    }

    @GetMapping("/podEmployees/{pod}")
    public List<Employee> getEmployeeByPod(@PathVariable String pod) {
        return employeeService.getEmployeeByPod(pod);
    }

    @GetMapping("/name/{employeeName}")
    public List<Employee> getEmployeeByName(@PathVariable String employeeName) {
        return employeeService.getEmployeeByName(employeeName);
    }



    @PostMapping("/update/profileImage/{id}")
    public void updateEmployeeProfileImage(@PathVariable int id, @RequestBody String url) {
        Employee employee = employeeService.getEmployeeById(id);
        employee.setProfileImageUrl(url);
        employeeService.saveOrUpdateEmployee(employee);
    }
}





