package com.team4.project.Repository;
import com.team4.project.Entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
    @Query(value = "SELECT * FROM login_credentials WHERE employee_id=?1", nativeQuery = true)
    Optional<Login> findUserById(int employeeId);

    @Query(value = "SELECT * FROM login_credentials WHERE email_id=?1", nativeQuery = true)
    Optional<Login> findUserByEmail(String email);


}
