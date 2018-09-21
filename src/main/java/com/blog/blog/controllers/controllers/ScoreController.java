package com.blog.blog.controllers.controllers;

import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ScoreController {
    UserRepo userRepo;

    public ScoreController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/getScore")
    public String getScore(@RequestParam(name = "scoreResult") String score) {
        try {
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            long finalScore = Long.parseLong(score);
            System.out.println(finalScore);
            long currentUserId = user.getId();
            String currentDate = userRepo.currentDate();
            userRepo.insertGameScore(currentDate, finalScore, currentUserId);
            return "index";
        } catch (ClassCastException e) {
            return "index";
        }
    }
}
