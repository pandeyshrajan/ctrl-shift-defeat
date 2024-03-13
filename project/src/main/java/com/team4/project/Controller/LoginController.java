package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.AdminService;
import com.team4.project.Service.EmployeeService;
import com.team4.project.Service.LoginService;
import com.team4.project.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class LoginController {
    @Autowired
//    Employee employee;
    private LoginService loginService;
    @Autowired
    private ProfileController profileController;
    @Autowired
    private AdminService adminService;
    @Autowired
    private ProfileService profileService;




    @PostMapping(value = "/login")
    public LoginResponse checkLogin(@RequestBody Login userLogin) {
//        System.out.println("UserLogin " + userLogin.getEmailId());
        LoginResponse response = new LoginResponse();
//        Login fetchUser=employeeService.getPassword(userLogin.getEmailId(),userLogin.getEmployeeId());
        Login fetchUser;
        String userEmail = userLogin.getEmailId();
        int userId = userLogin.getEmployeeId();
        if (userId == 0 && userEmail.isEmpty()) fetchUser = null;
        else if (userId != 0 && userEmail.isEmpty()) fetchUser = loginService.getUserById(userLogin.getEmployeeId());
        else fetchUser = loginService.getUserByEmail(userLogin.getEmailId());
        System.out.println(fetchUser);


        System.out.println("User " + fetchUser.getEmailId());
        if (fetchUser != null) {
            if (fetchUser.getPassword().equals(userLogin.getPassword())) {
                response.setAdmin(adminService.isAdmin(fetchUser.getEmployeeId()));
                response.setUserProfile(profileService.getProfile(fetchUser.getEmployeeId()));
                return response;
            }
            return null;
        } else return null;
    }







//    @GetMapping("/profile/{employeeId}")
//    public Profile getProfileById(@PathVariable int employeeId) {
//        Profile employeeProfile = new Profile();
//        employeeProfile.setEmployee(employeeService.getEmployeeById(employeeId));
//        employeeProfile.setProjectTags(employeeService.getProjectTags(employeeId));
//        employeeProfile.setInterestTags(employeeService.getInterestTags(employeeId));
////        System.out.println(employeeProfile.getInterestTags());
//        return employeeProfile;
//    }


}





