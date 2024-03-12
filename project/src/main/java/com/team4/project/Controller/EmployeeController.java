package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Repository.LoginRepository;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
//    Employee employee;
    private EmployeeService employeeService;
    @PostMapping(value = "/save")
    private int saveEmployee(@RequestBody Employee employee)
    {
        employeeService.saveOrUpdateEmployee(employee);
        return employee.getEmployeeId();
    }

    @PostMapping(value = "/docUpdate")
    private int saveDocument(@RequestBody Documents documents)
    {
        employeeService.saveOrUpdateDocument(documents);
        return documents.getEmployeeId();
    }
    //    @GetMapping(value = "/all")
//    public List<Employee> getAllEmployee()
//    {
//        return employeeService.getAllEmployees();
//    }
    @GetMapping(value = "/allEmployees")
    public List<Employee> getAllEmployees()
    {
        return employeeService.getEmployees();
    }


    @PostMapping(value="/login")
    public LoginResponse checkLogin(@RequestBody Login userLogin)
    {
        System.out.println("UserLogin "+userLogin.getEmailId());
        LoginResponse response=new LoginResponse();
//        Login fetchUser=employeeService.getPassword(userLogin.getEmailId(),userLogin.getEmployeeId());
        Login fetchUser;
        String userEmail= userLogin.getEmailId();
        int userId= userLogin.getEmployeeId();
        if(userId ==0 && userEmail=="")fetchUser=null;
        else if(userId!=0 && userEmail=="")fetchUser=employeeService.getUserById(userLogin.getEmployeeId());
        else fetchUser=employeeService.getUserByEmail(userLogin.getEmailId());





        System.out.println("User "+fetchUser.getEmailId());
        if(fetchUser!=null) {
            if (fetchUser.getPassword().equals(userLogin.getPassword())) {
                response.setAdmin(employeeService.isAdmin(fetchUser.getEmployeeId()));
                response.setUserProfile(getProfileById(fetchUser.getEmployeeId()));
                return response;
            }
            return null;
        }
        else return null;
    }
    @GetMapping(value = "/limitedEmployee/{num}")
    public List<Employee> getLimitedEmployees(@PathVariable int num)
    {
        return employeeService.getLimitedEmployees(num);
    }

//    @GetMapping("/child/{id}")
//    private String getChildren(@PathVariable(name="id")int employeeId)
//    {
//        List<Employee> children =getReporteesByEmployeeId(employeeId);
//
//        for (Employee child: children){
//
//
//        }
//
//    }

    @RequestMapping("/{id}")
    private Employee getEmployee(@PathVariable(name="id")int employeeId)
    {
        return employeeService.getEmployeeById(employeeId);
    }
    @GetMapping("/reportee/{employeeId}")
    public List<Employee> getReporteesByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getEmployeesByManagerId(employeeId);
    }
    @GetMapping("/manager/{employeeId}")
    public Employee getManagerByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getManagerByEmployeeId(employeeId);
    }

    @GetMapping("/projectTags/{employeeId}")
    public List<ProjectTags> getProjectTagsByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getProjectTags(employeeId);
    }
    @GetMapping("/interestTags/{employeeId}")
    public List<InterestTags> getInterestTagsByEmployeeId(@PathVariable int employeeId) {
        return employeeService.getInterestTags(employeeId);
    }
    @GetMapping("/projectEmployees/{projectId}")
    public List<Employee> getEmployeeByProjectTag(@PathVariable String projectId) {
        return employeeService.getEmployeeByProjectTags(projectId);
    }
    @GetMapping("/interestEmployees/{interestId}")
    public List<Employee> getEmployeeByInterestTag(@PathVariable String interestId) {
        return employeeService.getEmployeeByInterestTags(interestId);
    }
    @GetMapping("/name/{employeeName}")
    public List<Employee> getEmployeeByName(@PathVariable String employeeName) {
        return employeeService.getEmployeeByName(employeeName);
    }


    @GetMapping("/profile/{employeeId}")
    public Profile getProfileById(@PathVariable int employeeId)
    {
        Profile employeeProfile =new Profile();
        employeeProfile.setEmployee(employeeService.getEmployeeById(employeeId));
        employeeProfile.setProjectTags(employeeService.getProjectTags(employeeId));
        employeeProfile.setInterestTags(employeeService.getInterestTags(employeeId));
//        System.out.println(employeeProfile.getInterestTags());
        return employeeProfile;
    }

    @GetMapping("/doc/{employeeId}")
    public Documents getEmployeeByName(@PathVariable int employeeId) {
        return employeeService.getEmployeeDoc(employeeId);
    }

    @PostMapping("/update/profileImage/{id}")
    public void updateEmployeeProfileImage(@PathVariable int id,@RequestBody String url) {
        Employee employee=employeeService.getEmployeeById(id);
        employee.setProfileImageUrl(url);
        employeeService.saveOrUpdateEmployee(employee);
    }


//    @GetMapping("/orgChart/{id}")
//    public OrgChart getOrgChart(@PathVariable int id) {
//        OrgChart orgChart = new OrgChart();
////        Employee cur=getEmployee(id);
////        if(cur.getManagerId()!=-1) {
//            Employee rootEmployee = employeeService.getManagerByEmployeeId(id); // Assuming you have a method to get the root employee
//
//            if(rootEmployee.getEmployeeId()!=0){
//            orgChart.setName(rootEmployee.getName());
//            orgChart.setChildren(getChildren(rootEmployee));
//        }
////        else {
////            return orgChart;
////        }
//
//        return orgChart;
//    }

//OrgChart->
//    @GetMapping("/org/{id}")
//    public OrgChart getOrg(@PathVariable int id) {
//        OrgChart orgChart = new OrgChart();
//        Employee cur=getEmployee(id);
////        if(cur.getManagerId()!=-1) {
//        Employee rootEmployee = employeeService.getManagerByEmployeeId(id); // Assuming you have a method to get the root employee
//
////        if(rootEmployee.getEmployeeId()!=0){
//        orgChart.setName(rootEmployee.getName());
//        orgChart.setChildren(getChildren(rootEmployee));
////        }
////        }
////        else {
////            return orgChart;
////        }
//
//        return orgChart;
//    }
//    private List<OrgChart> getChildren(Employee employee) {
//        List<OrgChart> orgChartChildren = new ArrayList<>();
////        if(employee.getManagerId()!=-1) {
//        List<Employee> children = employeeService.getEmployeesByManagerId(employee.getEmployeeId());
//
//
//        for (Employee child : children) {
//            OrgChart childOrgChart = new OrgChart();
//            childOrgChart.setName(child.getName());
//            childOrgChart.setChildren(getChildren(child));
//            orgChartChildren.add(childOrgChart);
//        }
////        }
//
//        return orgChartChildren;
//    }

    //    @PutMapping(value = "/edit/{id}")
//    private Student update(@RequestBody Student student,@PathVariable(name="id")String _id)
//    {
//        student.set_id(_id);
//        studentService.saveOrUpdate(student);
//        return student;
//    }
//    @DeleteMapping("/delete/{id}")
//    private void deleteStudent(@PathVariable("id")String _id)
//    {
//        studentService.deleteStudent(_id);
//    }



//    @GetMapping("reportee/{id}")
//    private Iterable<Employee> getUnder(@PathVariable(name="id")int managerId)
//    {
//        return employeeService.getReportee(managerId);
//    }

}

//@RestController
//@CrossOrigin(origins = "*")
//@RequestMapping("api/v1/student")
//public class StudentController {
//
//    @Autowired
//    private StudentService studentServices;
//
//    @PostMapping(value = "/save")
//    private String saveStudent(@RequestBody Student students) {
//
//        studentServices.saveOrUpdate(students);
//        return students.get_id();
//    }
//
//    @GetMapping(value = "/getAll")
//    public Iterable<Student> getStudents() {
//        return studentServices.listAll();
//    }
//
//    @PutMapping(value = "/edit/{id}")
//    private Student update(@RequestBody Student student, @PathVariable(name = "id") String _id) {
//        student.set_id(_id);
//        studentServices.saveOrUpdate(student);
//        return student;
//    }
//
//    @DeleteMapping("/delete/{id}")
//    private void deleteStudent(@PathVariable("id") String _id) {
//        studentServices.deleteStudent(_id);
//    }
//
//
//    @RequestMapping("/search/{id}")
//    private Student getStudents(@PathVariable(name = "id") String studentid) {
//        return studentServices.getStudentById(studentid);
//    }
//
//}


