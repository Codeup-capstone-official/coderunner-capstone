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
            long playersSumScore = Long.parseLong(userRepo.getTotalPointsByUsername(user.getUsername()));
            System.out.println(playersSumScore);
            if (playersSumScore > 0 && playersSumScore <= 25000) {
                userRepo.updateRank("junior", currentUserId);
            } else if (playersSumScore > 25000 && playersSumScore <= 50000) {
                userRepo.updateRank("mid", currentUserId);
            } else if (playersSumScore > 50000 && playersSumScore <= 75000) {
                userRepo.updateRank("senior", currentUserId);
            }  else if (playersSumScore > 75000 && playersSumScore <= 100000) {
                userRepo.updateRank("wizard", currentUserId);
            }
                return "redirect:/";
        } catch (ClassCastException e) {
            return "redirect:/";
        }
    }
}
