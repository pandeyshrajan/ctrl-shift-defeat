package com.team4.project.Entity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

public class OrgChart {

    private String name;
    private List<OrgChart> children;

    public OrgChart() {
    }

    public OrgChart(String name, List<OrgChart> children) {
        this.name = name;
        this.children = children;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<OrgChart> getChildren() {
        return children;
    }

    public void setChildren(List<OrgChart> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "{" +
                "name:'" + name + '\'' +
                ", \nchildren:[" + children +
                "]}";
    }

    public String toJsonString() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

}

