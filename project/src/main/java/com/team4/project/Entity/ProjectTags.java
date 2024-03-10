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
@Table(name="project_tags")
public class ProjectTags {
    @Id
    @Column(name="project_id")
    private String projectId;
    @Column(name="project_name")
    private String name;
    @Column(name="project_grp_url")
    private String projectUrl;
    @Column(name="project_manager")
    private String projectManager;
    public ProjectTags(){

    }

    public ProjectTags(String project_id, String name, String projectUrl, String projectManager) {
        this.projectId = project_id;
        this.name = name;
        this.projectUrl = projectUrl;
        this.projectManager = projectManager;
    }
}
