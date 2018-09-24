package com.blog.blog.controllers;


import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class GameController {
    private UserRepo userRepo;

    public GameController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/")
    public String showGame(Model model) {
        try {
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            long currentUserId = user.getId();
            List<Object[]> friendRequests = userRepo.getFriendRequests(currentUserId);
            model.addAttribute("numOfRequests", friendRequests.size());
            model.addAttribute("user", user.getRank());
        } catch (ClassCastException e) {
            model.addAttribute("rank", "junior");
            model.addAttribute("numOfRequests", 0);
        }
        return "index";
    }

//    @GetMapping("/login")
//    public String login() {
//        return "login";
//    }
//
////    @PostMapping("/login")
////    public String login() {
////        return "login";
////    }
//
//    @GetMapping("/register")
//    public String showRegister(Model model) {
//        model.addAttribute("user", new User());
//        return "register";
//    }
//
//    @PostMapping("/save")
//    public String saveUser(@ModelAttribute User user) {
//        users.save(user);
//        return "redirect:/login";
//    }
}
