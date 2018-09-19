package com.blog.blog.controllers.controllers;

import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class LeaderboardsController {
    private UserRepo userRepo;

    public LeaderboardsController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/leaders")
    public String goToLeaderboards(Model model) {
        String currDate = userRepo.currentDate();
        String monthFormat = currDate.substring(5, 7) + "/%";
        String dayFormat = "%/" + currDate.substring(8, 10) + "/%";
        List<Object[]> users = userRepo.usersWithScores();
        List<Object[]> top10Month = userRepo.top10OfMonth(monthFormat);
        List<Object[]> top10OfDay = userRepo.top10OfTheDay(dayFormat);
        model.addAttribute("top10OfDay", top10OfDay);
        model.addAttribute("top10Month", top10Month);
        model.addAttribute("users", users);
        return "leaderboards/index";
    }
}
