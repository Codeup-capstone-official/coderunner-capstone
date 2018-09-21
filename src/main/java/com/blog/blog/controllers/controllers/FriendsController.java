package com.blog.blog.controllers.controllers;

import com.blog.blog.controllers.models.User;
import com.blog.blog.controllers.repositories.UserRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.swing.*;
import java.util.List;

@Controller
public class FriendsController {
    private UserRepo userRepo;

    public FriendsController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/add-friend")
    public String showFriendForm() {
        return "friendForm";
    }

    @PostMapping("/add-friend")
    public String getFriendUsername(@RequestParam(name = "username") String username, Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        System.out.println(currentUserId);
        if (username.equals(user.getUsername())) {
            model.addAttribute("ownUsername", true);
        } else {
            try {
                User userToAdd = userRepo.findByUsername(username);
                System.out.println(userToAdd.getId());
                long userToAddId = userToAdd.getId();
                userRepo.sendRequest(currentUserId, userToAddId, currentUserId);
                model.addAttribute("userExists", true);
            } catch (NullPointerException e) {
                model.addAttribute("userExists", false);
            }
        }

        return "friendMessage";
    }

    @GetMapping("/view-requests")
    public String viewFriendRequests(Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        List<Object[]> friendRequests = userRepo.getFriendRequests(currentUserId);
        model.addAttribute("numberOfRequests", friendRequests.size());
        model.addAttribute("requests", friendRequests);
        return "view-requests";
    }

    @PostMapping("/accept-friend")
    public String acceptFriend(@RequestParam(name = "idOfRecord") long idOfRecord) {
        userRepo.addFriend(idOfRecord);
        return "redirect:/view-requests";
    }

    @PostMapping("/decline-friend")
    public String declineFriend(@RequestParam(name = "idOfRecord") long idOfRecord) {
        userRepo.declineFriend(idOfRecord);
        return "redirect:/game";
    }

    @GetMapping("/view-friends")
    public String viewFriends(Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        List<String> friends =  userRepo.getFriendsThatAddedYou(currentUserId);
        List<String> moreFriends = userRepo.getFriendsThatYouAdded(currentUserId);
        friends.addAll(moreFriends);
        model.addAttribute("friends", friends);
        return "view-friends";
    }

    @PostMapping("/deleteFriendFromList")
    public String deleteFriend(@RequestParam(name = "friend") String friend) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        System.out.println(currentUserId);
        User otherUser = userRepo.findByUsername(friend);
        long otherUserId = otherUser.getId();
        System.out.println(otherUserId);
        userRepo.deleteFriendFromRecords(currentUserId, otherUserId);
        return "redirect:/view-friends";
    }
}
