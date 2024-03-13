package com.team4.project.Controller;


import com.team4.project.Entity.Login;
import com.team4.project.Entity.LoginResponse;
import com.team4.project.Entity.Profile;
import com.team4.project.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class ProfileController {
    @Autowired
//    Employee employee;
    private ProfileService profileService;









    @GetMapping("/profile/{employeeId}")
    public Profile getProfileById(@PathVariable int employeeId) {

        return profileService.getProfile(employeeId);
    }


}





