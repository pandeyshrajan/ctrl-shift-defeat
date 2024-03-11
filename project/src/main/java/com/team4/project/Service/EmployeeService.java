package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.DocumentRepository;
import com.team4.project.Repository.EmployeeRepository;
import com.team4.project.Repository.InterestRepository;
import com.team4.project.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private InterestRepository interestRepository;
    @Autowired
    private DocumentRepository documentRepository;

    public void saveOrUpdate(Employee employee) {
        employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAllEmployees();
    }

    //    public void deleteStudent(String id) {
//        studentRepository.deleteById(id);
//    }
    public List<Employee> getEmployeesByManagerId(int managerId) {
        return employeeRepository.findEmployeesByManagerId(managerId);
    }
    public List<Employee> getEmployees()
    {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(int employeeId) {
        return employeeRepository.findById((employeeId)).get();
    }

    public Employee getManagerByEmployeeId(int employeeId) {
        return employeeRepository.findMangerbyEmployeeId(employeeId);
    }

    public List<ProjectTags> getProjectTags(int employeeId){
        return projectRepository.findProjectTags(employeeId);
    }

    public List<InterestTags> getInterestTags(int employeeId){
        return interestRepository.findInterestTags(employeeId);
    }
    public List<Employee> getEmployeeByProjectTags(String projectId){
        return employeeRepository.findEmployeeByProjectTags(projectId);
    }

    public List<Employee> getEmployeeByInterestTags(String interestName){
        return employeeRepository.findEmployeeByInterestTags(interestName);
    }

    public List<Employee> getEmployeeByName(String employeeName){
        return employeeRepository.findEmployeeByName(employeeName);
    }
    public Documents getEmployeeDoc(int employeeId){
        return documentRepository.findDocuments(employeeId);

    }
//    public void updateEmployeeProfileImage(int employeeId, String url)
//    {
//        employeeRepository.updateProfileImage(employeeId,url);
//    }


//    public List<Employee> getReportee(int managerId)
//    {
//        return EmployeeRepository.fetchReportee(managerId);
//    }
}

