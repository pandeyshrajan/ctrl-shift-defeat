package com.team4.project.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "employee") // Specify the table name here
public class Employee {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private int employeeId=-1;

    @Column(name = "name")
    private String name;

    @Column(name="email_id")
    private String email;

    @Column(name="manager_id")
    private String managerId;


    @Column(name="level")
    private String level;

    @Column(name="designation")
    private String designation;

    @Column(name="contact_no")
    private long contact;

    @Column(name="profile_image")
    private String profileImageUrl;

    @Column(name="badge_image")
    private String badgeImageUrl;

    @Column(name="slack_url")
    private String slackUrl;


    @Column(name = "department")
    private String department;

    @Column(name = "date_of_birth")
    private LocalDate dob;

    @Column(name = "date_of_joining")
    private LocalDate date_of_joining;

    @Column(name = "address")
    private String address;

    @Column(name="pod")
    private String pod;

    public Employee(int employeeId, String name, String email, String managerId, String level, String designation, long contact, String profileImageUrl, String badgeImageUrl, String slackUrl,String pod) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
        this.managerId = managerId;
        this.level = level;
        this.designation = designation;
        this.contact = contact;
        this.profileImageUrl = profileImageUrl;
        this.badgeImageUrl = badgeImageUrl;
        this.slackUrl = slackUrl;
        this.pod=pod;
    }

    public Employee(){

    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeId=" + employeeId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", managerId='" + managerId + '\'' +
                ", level='" + level + '\'' +
                ", designation='" + designation + '\'' +
                ", contact=" + contact +
                ", profileImageUrl='" + profileImageUrl + '\'' +
                ", badgeImageUrl='" + badgeImageUrl + '\'' +
                ", slackUrl='" + slackUrl + '\'' +
                ", department='" + department + '\'' +
                ", dob=" + dob +
                ", date_of_joining=" + date_of_joining +
                ", address='" + address + '\'' +
                ", pod='" + pod + '\'' +
                '}';
    }

    // Constructors, getters, setters, and toString method


}

