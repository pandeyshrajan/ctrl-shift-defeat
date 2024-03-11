package com.team4.project.Repository;

//import com.team4.EmplProject.Model.Employee;
import com.team4.project.Entity.Employee;
import com.team4.project.Entity.ProjectTags;
import com.team4.project.Entity.Tags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;


//@Component
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    //    @Query(value = "select * from Employee where manager_id=:val")
//    public List<Employee> fetchReportee(@Param("val") int managerId){}
    @Query(value = "SELECT * FROM employee WHERE manager_id = ?1", nativeQuery = true)
    List<Employee> findEmployeesByManagerId(int managerId);

    @Query(value = "SELECT * FROM employee" , nativeQuery = true)
    List<Employee> findAllEmployees();

    @Query(value = "select m.* from employee e, employee m where m.employee_id=e.manager_id and e.employee_id=?1", nativeQuery = true)
    Employee findMangerbyEmployeeId(int employeeId);

//    @Query(value = "SELECT  p.* FROM employee_projects e, project_tags p WHERE e.project_id=p.project_id AND e.employee_id=?1", nativeQuery = true)
//    @Query(value = "SELECT  * FROM project_tags", nativeQuery = true)
//    List<ProjectTags> findProjectTags();
@Query(value = "SELECT  e.* FROM employee_projects p, employee e, project_tags t WHERE e.employee_id=p.employee_id AND t.project_id=p.project_id AND t.project_name like %?1%", nativeQuery = true)
    List<Employee> findEmployeeByProjectTags(String projectId);

    @Query(value = "SELECT  e.* FROM employee_interests i, employee e, interest_tags t WHERE e.employee_id=i.employee_id AND t.interest_id=i.interest_id AND t.interest_name like %?1%", nativeQuery = true)
    List<Employee> findEmployeeByInterestTags(String interestName);



    //@Query(value = "SELECT * FROM employee WHERE name LIKE %?1%", nativeQuery = true) //match anywhere in between
    @Query(value = "SELECT * FROM employee WHERE name LIKE ?1%", nativeQuery = true)
    List<Employee> findEmployeeByName(String employeeName);

//    @Query(value = "update employee set profile_image=?2 where employee_id=?1", nativeQuery = true)
//    void updateProfileImage(int employeeId,String url);

//    Employee findMangerbyEmployeeId(int employeeId);

}
