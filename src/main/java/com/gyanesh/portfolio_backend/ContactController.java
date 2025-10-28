package com.gyanesh.portfolio_backend;

import org.springframework.web.bind.annotation.*;

@RestController
public class ContactController {

    @PostMapping("/api/contact")
    public String handleContactForm(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String message) {
        System.out.println("Contact: " + name + ", " + email + ", " + message);
        return "Thank you " + name + "!";
    }
}