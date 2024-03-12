package com.team4.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "document")
public class Documents {

    @Id
    @Column(name="employee_id")
    private int employeeId;

    @Column(name="aadhar_url")
    private String aadharUrl;

    @Column(name="pan_url")
    private String panUrl;

    @Column(name="offer_letter")
    private String offerLetterUrl;

    @Column(name="bank_details")
    private String bankDetailsUrl;


    public Documents(int employee_id, String aadharUrl, String panUrl, String offerLetterUrl, String bankDetailsUrl) {
        this.employeeId = employee_id;
        this.aadharUrl = aadharUrl;
        this.panUrl = panUrl;
        this.offerLetterUrl = offerLetterUrl;
        this.bankDetailsUrl = bankDetailsUrl;
    }
    public Documents(){

    }
}
