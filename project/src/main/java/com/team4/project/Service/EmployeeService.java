package com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    public void saveOrUpdateEmployee(Employee employee) {
        employeeRepository.save(employee);
    }


    public List<Employee> getAllEmployees() {
        return employeeRepository.findAllEmployees();
    }

    //    public void deleteStudent(String id) {
//        studentRepository.deleteById(id)r
//    }
    public List<Employee> getEmployeesByManagerId(int managerId) {
        return employeeRepository.findEmployeesByManagerId(managerId);
    }
    public List<Employee> getEmployees()
    {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(int employeeId) {
        return employeeRepository.findById((employeeId));
    }

    public Optional<Employee>getManagerByEmployeeId(int employeeId)
    {
        return  employeeRepository.findMangerbyEmployeeId(employeeId);
    }
    public List<Employee> getLimitedEmployees(int num)
    {
        return employeeRepository.findLimitedEmployees(num);
    }


    public List<Employee> getEmployeeByProjectTags(String projectId){
        return employeeRepository.findEmployeeByProjectTags(projectId);
    }

    public List<Employee> getEmployeeByInterestTags(String interestName){
        return employeeRepository.findEmployeeByInterestTags(interestName);
    }

    public List<Employee> getEmployeeByDepartment(String interestName){
        return employeeRepository.findEmployeeByDept(interestName);
    }

    public List<Employee> getEmployeeByPod(String podName){
        return employeeRepository.findEmployeeByPod(podName);
    }

    public List<Employee> getEmployeeByName(String employeeName){
        return employeeRepository.findEmployeeByName(employeeName);
    }

}

