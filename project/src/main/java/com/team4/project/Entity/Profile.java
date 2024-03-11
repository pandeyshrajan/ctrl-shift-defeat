package com.team4.project.Entity;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Profile {
    private Employee employee;
    private List<ProjectTags> projectTags;
    private List<InterestTags> interestTags;
    private List<Employee> children;

    public Profile(Employee employee, List<ProjectTags> projectTags, List<InterestTags> interestTags) {
        this.employee = employee;
        this.projectTags = projectTags;
        this.interestTags = interestTags;
    }

    public Profile(){

    }
}
