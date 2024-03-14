package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {


    @Autowired
    private AdminRepository adminRepository;



    public boolean isAdmin(int employeeId)
    {
        int result=adminRepository.isAdmin(employeeId);
        return result == 1;
    }



}

