package com.team4.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
@Entity
@Data
public class Tags {

    @Id
    @Column(name="id")
    private int id;
    @Column(name="tagName")
    private String tagName;
    @Column(name="tagUrl")
    private String tagUrl;

    public Tags(int id, String tagName, String tagUrl) {
        this.id = id;
        this.tagName = tagName;
        this.tagUrl = tagUrl;
    }
    public Tags()
    {

    }
}
