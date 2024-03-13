package com.team4.project.Repository;

//import com.team4.EmplProject.Model.Employee;
import com.team4.project.Entity.Documents;
import com.team4.project.Entity.InterestTags;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


//@Component
@Repository
public interface DocumentRepository extends JpaRepository<Documents, String > {
    //    @Query(value = "select * from Employee where manager_id=:val")
//    public List<Employee> fetchReportee(@Param("val") int managerId){}


    //    @Query(value = "SELECT  p.* FROM employee_projects e, project_tags p WHERE e.project_id=p.project_id AND e.employee_id=?1", nativeQuery = true)
    @Query(value = "SELECT  * FROM document WHERE employee_id=?1", nativeQuery = true)
    Optional<Documents> findDocuments(int employeeId);

//    Employee findMangerbyEmployeeId(int employeeId);

}
