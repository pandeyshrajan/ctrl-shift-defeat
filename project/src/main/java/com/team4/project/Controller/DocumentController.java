package com.team4.project.Controller;


import com.team4.project.Entity.*;
import com.team4.project.Service.DocumentService;
import com.team4.project.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Documents getDocumentName(@PathVariable int employeeId) {
        return documentService.getEmployeeDoc(employeeId);
    }


}





