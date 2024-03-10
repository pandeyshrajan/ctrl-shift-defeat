package com.team4.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name="interest_tags")
public class InterestTags {
    @Id
    @Column(name = "interest_id")
    private String interestId;
    @Column(name = "interest_name")
    private String interestName;
    @Column(name = "interest_grp_url")
    private String interestUrl;

    public InterestTags(String interestId, String interestName, String interestUrl) {
        this.interestId = interestId;
        this.interestName = interestName;
        this.interestUrl = interestUrl;
    }

    public InterestTags() {

    }
}
