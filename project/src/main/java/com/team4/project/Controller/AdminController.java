package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.AdminService;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class AdminController {
    @Autowired
//    Employee employee;
    private AdminService adminService;



    @GetMapping(value = "/checkAdmin/{id}")
    public boolean getAdminStatus(@PathVariable int id) {
        return adminService.isAdmin(id);
    }


}





