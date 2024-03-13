package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.DocumentService;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRange;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

//test commit
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employee")
public class DocumentController {
    @Autowired
//    Employee employee;
    private DocumentService documentService;



    @PostMapping(value = "/docUpdate")
    private int saveDocument(@RequestBody Documents documents) {
        documentService.saveOrUpdateDocument(documents);
        return documents.getEmployeeId();
    }

    @GetMapping("/doc/{employeeId}")
    public ResponseEntity<Object> getDocumentName(@PathVariable int employeeId) {
        Optional<Documents> documents=documentService.getEmployeeDoc(employeeId);
        if(documents.isPresent())
        {
            return ResponseEntity.ok(documents.get());
        }
        else{

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Document not Found");
        }

    }


}





