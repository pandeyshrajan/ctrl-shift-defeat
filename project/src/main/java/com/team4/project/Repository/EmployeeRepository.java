package com.team4.project.Repository;

import com.team4.project.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


//@Component
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "SELECT * FROM employee WHERE manager_id = ?1", nativeQuery = true)
    List<Employee> findEmployeesByManagerId(int managerId);

    @Query(value = "SELECT * FROM employee" , nativeQuery = true)
    List<Employee> findAllEmployees();
    @Query(value = "SELECT * FROM employee Limit ?1" , nativeQuery = true)
    List<Employee> findLimitedEmployees(int num);

    @Query(value = "select m.* from employee e, employee m where m.employee_id=e.manager_id and e.employee_id=?1", nativeQuery = true)
    Optional<Employee> findMangerbyEmployeeId(int employeeId);

    @Query(value = "SELECT  e.* FROM employee_projects p, employee e, project_tags t WHERE e.employee_id=p.employee_id AND t.project_id=p.project_id AND t.project_name like %?1%", nativeQuery = true)
    List<Employee> findEmployeeByProjectTags(String projectId);

    @Query(value = "SELECT  e.* FROM employee_interests i, employee e, interest_tags t WHERE e.employee_id=i.employee_id AND t.interest_id=i.interest_id AND t.interest_name like %?1%", nativeQuery = true)
    List<Employee> findEmployeeByInterestTags(String interestName);



    @Query(value = "SELECT * FROM employee WHERE name LIKE %?1%", nativeQuery = true)
    List<Employee> findEmployeeByName(String employeeName);

    @Query(value = "SELECT * FROM employee WHERE department LIKE %?1%", nativeQuery = true)
    List<Employee> findEmployeeByDept(String deptName);

    @Query(value = "SELECT * FROM employee WHERE pod LIKE %?1%", nativeQuery = true)
    List<Employee> findEmployeeByPod(String podName);


}
