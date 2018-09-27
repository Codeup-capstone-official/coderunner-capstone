package com.blog.blog.controllers.controllers;

import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.persistence.RollbackException;
import javax.validation.Valid;

@Controller
public class UserController {
    private UserRepo users;
    private PasswordEncoder passwordEncoder;

    public UserController(UserRepo users, PasswordEncoder passwordEncoder) {
        this.users = users;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/register")
    public String showSignupForm(Model model){
            model.addAttribute("user", new User());
            return "users/register";
    }

    @GetMapping("/about-us")
    public String aboutUs(){
        return "/about-us";
    }

    @PostMapping("/register")
    public String saveUser(@Valid User user, Errors validation, Model model){
        User existingEmail = users.findByEmail(user.getEmail());
        User existingUser = users.findByUsername(user.getUsername());
        // Handle existing / error on username
        if(existingUser != null) {
            validation.rejectValue(
                    "username",
                    "user.username",
                    "Username is already taken."
            );
            return "users/register";
        }
        if(validation.hasErrors()) {
            model.addAttribute("user", user);
            model.addAttribute("errors", validation);
            return "users/register";
        }
        // Handle existing / error on email
        if(existingEmail != null) {
            validation.rejectValue(
                    "email",
                    "user.email",
                    "Email is already taken."
            );
            return "users/register";
        }
        if(validation.hasErrors()) {
            model.addAttribute("user", user);
            model.addAttribute("errors", validation);
            return "users/register";
        }

        String hash = passwordEncoder.encode(user.getPassword());
        String currentDate = users.currentDate();
        user.setPassword(hash);
        users.save(user);
        long userId = users.getRegisterUserId();
        users.insertDefaultScore(currentDate, userId);
        model.addAttribute("canRegister", true);





        return "redirect:/login";
    }
}
