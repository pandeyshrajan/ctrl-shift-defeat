package com.team4.project.Repository;

//import com.team4.EmplProject.Model.Employee;
import com.team4.project.Entity.ProjectTags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


//@Component
@Repository
public interface ProjectRepository extends JpaRepository<ProjectTags, String > {
    //    @Query(value = "select * from Employee where manager_id=:val")
//    public List<Employee> fetchReportee(@Param("val") int managerId){}


    //    @Query(value = "SELECT  p.* FROM employee_projects e, project_tags p WHERE e.project_id=p.project_id AND e.employee_id=?1", nativeQuery = true)
    @Query(value = "SELECT  p.* FROM employee_projects e, project_tags p WHERE e.project_id=p.project_id AND e.employee_id=?1", nativeQuery = true)
    List<ProjectTags> findProjectTags(int employeeId);



//    Employee findMangerbyEmployeeId(int employeeId);

}
