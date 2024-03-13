package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.AdminService;
import com.team4.project.Service.LoginService;
import com.team4.project.Service.ProfileService;
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
    public ResponseEntity<LoginResponse> checkLogin(@RequestBody Login userLogin) {
//        System.out.println("UserLogin " + userLogin.getEmailId());
        LoginResponse response = new LoginResponse();
//        Login fetchUser=employeeService.getPassword(userLogin.getEmailId(),userLogin.getEmployeeId());
        Optional<Login> fetchUser;
        String userEmail = userLogin.getEmailId();
        int userId = userLogin.getEmployeeId();
        if (userId == 0 && userEmail.isEmpty()) fetchUser = null;
        else if (userId != 0 && userEmail.isEmpty()) fetchUser = loginService.getUserById(userLogin.getEmployeeId());
        else fetchUser = loginService.getUserByEmail(userLogin.getEmailId());

        if (fetchUser.isPresent()) {

            if (fetchUser.get().getPassword().equals(userLogin.getPassword())) {
                response.setAdmin(adminService.isAdmin(fetchUser.get().getEmployeeId()));
                response.setUserProfile(profileService.getProfile(fetchUser.get().getEmployeeId()));
                response.setLoginStatus("SUCCESS");
                return ResponseEntity.ok(response);
            }
            response.setLoginStatus("Invalid Password!");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
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





