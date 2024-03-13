package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {


    @Autowired
    private LoginRepository loginRepository;
    public Login getUserById(int employeeId)
    {
        return loginRepository.findUserById(employeeId);
    }

    public Login getUserByEmail(String emailId)
    {
        return loginRepository.findUserByEmail(emailId);
    }


}

