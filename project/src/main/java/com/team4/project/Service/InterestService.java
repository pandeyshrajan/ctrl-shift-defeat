package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterestService {


    @Autowired
    private InterestRepository interestRepository;

    public List<InterestTags> getInterestTags(int employeeId){
        return interestRepository.findInterestTags(employeeId);
    }
}

