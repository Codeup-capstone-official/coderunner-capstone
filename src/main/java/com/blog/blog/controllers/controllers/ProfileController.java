package com.blog.blog.controllers.controllers;

import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Null;
import java.util.List;

@Controller
public class ProfileController {
    UserRepo userRepo;

    public ProfileController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/profile")

    public String viewOwnProfile(Model model) {
       User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String highscore = userRepo.highscore(user.getUsername());
        List<Object[]> last10Games = userRepo.latest10Games(user.getUsername());
        model.addAttribute("last10Games", last10Games);
        model.addAttribute("highscore", highscore);
        model.addAttribute("user", user);
        return "profile";
    }

    @GetMapping("/profile/{username}")
    public String viewProfile(@PathVariable String username, Model model) {
        List<String> top10Usernames = userRepo.findTop10PlayersUsernames();
        User user = userRepo.findByUsername(username);
        String highscore = userRepo.highscore(username);
        String topPlayer = userRepo.getTopPlayer();
        List<Object[]> last10Games = userRepo.latest10Games(username);
        model.addAttribute("notValid", false);
        model.addAttribute("topPlayer", topPlayer);
        model.addAttribute("last10Games", last10Games);
        model.addAttribute("highscore", highscore);
        model.addAttribute("user", user);
        model.addAttribute("top10Usernames", top10Usernames);
        return "/profile";
    }

    @PostMapping("/search")
    public String searchUser(@RequestParam(name = "username") String username, Model model) {
        try {
            User user = userRepo.findByUsername(username);
            System.out.println(user.getUsername());
            return "redirect:/profile/" + username;
        } catch (NullPointerException e) {
            model.addAttribute("notValid", true);
            return "/profile";
        }

    }

}
