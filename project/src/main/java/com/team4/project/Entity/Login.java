package com.team4.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "login_credentials")
public class Login {

    @Id
    @Column(name = "employee_id")
    private int employeeId;
    @Column(name = "email_id")
    private String emailId;
    @Column(name = "password")
    private String password;

    public Login() {

    }

    public Login(int employeeId, String emailId, String password) {
        this.employeeId = employeeId;
        this.emailId = emailId;
        this.password = password;
    }
}
