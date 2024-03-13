package com.team4.project.Repository;

import com.team4.project.Entity.Admin;
import com.team4.project.Entity.Documents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

    @Query(value = "select case when exists (select * from admin where  employee_id=?1) then 1 else 0  end  as isAdmin", nativeQuery = true)
    int isAdmin(int employeeId);

}
