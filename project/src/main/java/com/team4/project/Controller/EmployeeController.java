package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
//    Employee employee;
    private EmployeeService employeeService;

    @PostMapping(value = "/save")
    private int saveEmployee(@RequestBody Employee employee) {
        employeeService.saveOrUpdateEmployee(employee);
        return employee.getEmployeeId();
    }



    @GetMapping(value = "/allEmployees")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }




    @GetMapping(value = "/limitedEmployee/{num}")
    public List<Employee> getLimitedEmployees(@PathVariable int num) {
        return employeeService.getLimitedEmployees(num);
    }


    @RequestMapping("/{id}")
    private ResponseEntity<Object> getEmployee(@PathVariable(name = "id") int employeeId) {
        Optional<Employee> employee= employeeService.getEmployeeById(employeeId);
        if(employee.isPresent()){
            return ResponseEntity.ok(employee.get());
        }
//        Employee nullEmployee=new Employee();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee Not Found");

    }

    @GetMapping("/reportee/{employeeId}")
    public ResponseEntity<Object> getReporteesByEmployeeId(@PathVariable int employeeId) {
        List<Employee> list= employeeService.getEmployeesByManagerId(employeeId);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Reportees for given Employee");
        }
        else {
            return ResponseEntity.ok(list);
        }

    }
    @GetMapping("/manager/{employeeId}")
    public ResponseEntity<Object> getManagerByEmployeeId(@PathVariable int employeeId) {
        Optional<Employee> manager=employeeService.getManagerByEmployeeId(employeeId);
        if(manager.isPresent())
        {
            return ResponseEntity.ok(manager.get());
        }
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Manager Not Found!");
    }

    @GetMapping("/projectEmployees/{projectName}")
    public ResponseEntity<Object> getEmployeeByProjectTag(@PathVariable String projectName) {
        List<Employee> list=employeeService.getEmployeeByProjectTags(projectName);
        if(list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Employees under given Project!");
        }
        else return ResponseEntity.ok(list);
    }

    @GetMapping("/interestEmployees/{interestName}")
    public ResponseEntity<Object> getEmployeeByInterestTag(@PathVariable String interestName) {
        List<Employee> list=employeeService.getEmployeeByInterestTags(interestName);
        if(list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Employees under given Interest!");

        }
        else return ResponseEntity.ok(list);
    }

    @GetMapping("/deptEmployees/{dept}")
    public ResponseEntity<Object> getEmployeeByDept(@PathVariable String dept) {
        List<Employee> list =employeeService.getEmployeeByDepartment(dept);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Employee Found in this Dept!");
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("/podEmployees/{pod}")
    public ResponseEntity<Object> getEmployeeByPod(@PathVariable String pod) {
        List<Employee> list= employeeService.getEmployeeByPod(pod);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Employee with given pod!");
        }
        return ResponseEntity.ok(list);
    }

    @GetMapping("/name/{employeeName}")
    public ResponseEntity<Object> getEmployeeByName(@PathVariable String employeeName) {

        List<Employee> list= employeeService.getEmployeeByName(employeeName);
        if(list.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Employee with given name!");
        }
        return ResponseEntity.ok(list);
    }



    @PostMapping("/update/profileImage/{id}")
    public ResponseEntity<String> updateEmployeeProfileImage(@PathVariable int id, @RequestBody String url) {
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        if(employee.isPresent()) {
            Employee empl=employee.get();
            empl.setProfileImageUrl(url);
            employeeService.saveOrUpdateEmployee(empl);
            return ResponseEntity.ok("Image Uploaded");
        }else{
            return ResponseEntity.ok("Invalid Employee");
        }
    }
}





