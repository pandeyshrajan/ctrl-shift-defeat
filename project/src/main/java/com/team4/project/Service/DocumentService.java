package com.team4.project.Service;

//EmployeeServicepackage com.team4.project.Service;

import com.team4.project.Entity.*;
import com.team4.project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {


    @Autowired
    private DocumentRepository documentRepository;


    public void saveOrUpdateDocument(Documents documents) {
        documentRepository.save(documents);
    }


    public Documents getEmployeeDoc(int employeeId){
        return documentRepository.findDocuments(employeeId);

    }

}

