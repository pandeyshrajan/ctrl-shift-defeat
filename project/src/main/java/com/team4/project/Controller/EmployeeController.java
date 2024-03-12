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

    @PostMapping(value = "/docUpdate")
    private int saveDocument(@RequestBody Documents documents) {
        employeeService.saveOrUpdateDocument(documents);
        return documents.getEmployeeId();
    }

    @GetMapping(value = "/allEmployees")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }


    @PostMapping(value = "/login")
    public LoginResponse checkLogin(@RequestBody Login userLogin) {
        System.out.println("UserLogin " + userLogin.getEmailId());
        LoginResponse response = new LoginResponse();
//        Login fetchUser=employeeService.getPassword(userLogin.getEmailId(),userLogin.getEmployeeId());
        Login fetchUser;
        String userEmail = userLogin.getEmailId();
        int userId = userLogin.getEmployeeId();
        if (userId == 0 && userEmail.isEmpty()) fetchUser = null;
        else if (userId != 0 && userEmail.isEmpty()) fetchUser = employeeService.getUserById(userLogin.getEmployeeId());
        else fetchUser = employeeService.getUserByEmail(userLogin.getEmailId());


        System.out.println("User " + fetchUser.getEmailId());
        if (fetchUser != null) {
            if (fetchUser.getPassword().equals(userLogin.getPassword())) {
                response.setAdmin(employeeService.isAdmin(fetchUser.getEmployeeId()));
                response.setUserProfile(getProfileById(fetchUser.getEmployeeId()));
                return response;
            }
            return null;
        } else return null;
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

    @GetMapping("/manager/{employeeId}")
    public Employee getManagerByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getManagerByEmployeeId(employeeId);
    }

    @GetMapping("/projectTags/{employeeId}")
    public List<ProjectTags> getProjectTagsByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getProjectTags(employeeId);
    }

    @GetMapping("/interestTags/{employeeId}")
    public List<InterestTags> getInterestTagsByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getInterestTags(employeeId);
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


    @GetMapping("/profile/{employeeId}")
    public Profile getProfileById(@PathVariable int employeeId) {
        Profile employeeProfile = new Profile();
        employeeProfile.setEmployee(employeeService.getEmployeeById(employeeId));
        employeeProfile.setProjectTags(employeeService.getProjectTags(employeeId));
        employeeProfile.setInterestTags(employeeService.getInterestTags(employeeId));
//        System.out.println(employeeProfile.getInterestTags());
        return employeeProfile;
    }

    @GetMapping("/doc/{employeeId}")
    public Documents getDocumentName(@PathVariable int employeeId) {
        return employeeService.getEmployeeDoc(employeeId);
    }

    @PostMapping("/update/profileImage/{id}")
    public void updateEmployeeProfileImage(@PathVariable int id, @RequestBody String url) {
        Employee employee = employeeService.getEmployeeById(id);
        employee.setProfileImageUrl(url);
        employeeService.saveOrUpdateEmployee(employee);
    }
}





