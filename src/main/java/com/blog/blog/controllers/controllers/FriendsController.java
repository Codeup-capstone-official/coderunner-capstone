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
        return "view-friends";
    }

    @PostMapping("/add-friend")
    public String getFriendUsername(@RequestParam(name = "username") String username, Model model) {
        try {
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            long currentUserId = user.getId();
            List<Object[]> friendRequests = userRepo.getFriendRequests(currentUserId);
            List<String> friends =  userRepo.getFriendsThatAddedYou(currentUserId);
            List<String> moreFriends = userRepo.getFriendsThatYouAdded(currentUserId);
            friends.addAll(moreFriends);
            model.addAttribute("friends", friends);
            model.addAttribute("numberOfRequests", friendRequests.size());
            model.addAttribute("requests", friendRequests);
            User otherUser =userRepo.findByUsername(username);
            List<Object[]> results = userRepo.checkIfRequestWasAlreadySent(currentUserId, otherUser.getId());
            List<Object[]> checkWasReceived = userRepo.checkIfRequestWasAlreadyReceived(otherUser.getId(), currentUserId);

            if (username.equals(user.getUsername())) {
                model.addAttribute("ownUsername", true);
            } else if (results.size() > 0) {
                model.addAttribute("alreadySent", true);
                model.addAttribute("userToAdd", username);
            } else if (checkWasReceived.size() > 0) {
                long relationId = userRepo.getIdOfRelationship(otherUser.getId(), currentUserId);
                userRepo.addFriend(relationId);
                List<String> friendsUpdated =  userRepo.getFriendsThatAddedYou(currentUserId);
                List<String> moreFriendsUpdated = userRepo.getFriendsThatYouAdded(currentUserId);
                friendsUpdated.addAll(moreFriendsUpdated);
                List<Object[]> friendRequests2 = userRepo.getFriendRequests(currentUserId);
                model.addAttribute("numberOfRequests", friendRequests2.size());
                model.addAttribute("requests", friendRequests2);
                model.addAttribute("friends", friendsUpdated);
                model.addAttribute("bothSent", true);
                model.addAttribute("userToAdd", username);
            } else {
                User userToAdd = userRepo.findByUsername(username);
                System.out.println(userToAdd.getId());
                long userToAddId = userToAdd.getId();
                userRepo.sendRequest(currentUserId, userToAddId, currentUserId);
                model.addAttribute("userToAdd", username);
                model.addAttribute("userExists", true);
            }
            return "view-friends";

        } catch (NullPointerException e) {
            model.addAttribute("userToAdd", username);
            model.addAttribute("userExists", false);
            return "view-friends";

        }

    }

    @GetMapping("/view-friends")
    public String viewFriendRequests(Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        List<Object[]> friendRequests = userRepo.getFriendRequests(currentUserId);
        List<String> friends =  userRepo.getFriendsThatAddedYou(currentUserId);
        List<String> moreFriends = userRepo.getFriendsThatYouAdded(currentUserId);
        friends.addAll(moreFriends);
        model.addAttribute("friends", friends);
        model.addAttribute("numberOfRequests", friendRequests.size());
        model.addAttribute("requests", friendRequests);
        return "view-friends";
    }

    @PostMapping("/accept-friend")
    public String acceptFriend(@RequestParam(name = "idOfRecord") long idOfRecord, Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        userRepo.addFriend(idOfRecord);
        List<String> friendsUpdated =  userRepo.getFriendsThatAddedYou(currentUserId);
        List<String> moreFriendsUpdated = userRepo.getFriendsThatYouAdded(currentUserId);
        friendsUpdated.addAll(moreFriendsUpdated);
        List<Object[]> friendRequests2 = userRepo.getFriendRequests(currentUserId);
        model.addAttribute("numberOfRequests", friendRequests2.size());
        model.addAttribute("requests", friendRequests2);
        model.addAttribute("friends", friendsUpdated);
        String username = userRepo.getUsernameOfWhoSent(idOfRecord);
        model.addAttribute("acceptedFriend", true);
        model.addAttribute("userToAdd", username);
        return "view-friends";
    }

    @PostMapping("/decline-friend")
    public String declineFriend(@RequestParam(name = "idOfRecord") long idOfRecord) {
        userRepo.declineFriend(idOfRecord);
        return "redirect:/view-friends";
    }

//    @GetMapping("/view-friends")
//    public String viewFriends(Model model) {
//        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        long currentUserId = user.getId();
//        List<String> friends =  userRepo.getFriendsThatAddedYou(currentUserId);
//        List<String> moreFriends = userRepo.getFriendsThatYouAdded(currentUserId);
//        friends.addAll(moreFriends);
//        model.addAttribute("friends", friends);
//        return "view-friends";
//    }

    @PostMapping("/deleteFriendFromList")
    public String deleteFriend(@RequestParam(name = "friend") String friend, Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long currentUserId = user.getId();
        User otherUser = userRepo.findByUsername(friend);
        long otherUserId = otherUser.getId();
        userRepo.deleteFriendFromRecords(currentUserId, otherUserId);
        List<String> friendsUpdated =  userRepo.getFriendsThatAddedYou(currentUserId);
        List<String> moreFriendsUpdated = userRepo.getFriendsThatYouAdded(currentUserId);
        friendsUpdated.addAll(moreFriendsUpdated);
        List<Object[]> friendRequests2 = userRepo.getFriendRequests(currentUserId);
        model.addAttribute("numberOfRequests", friendRequests2.size());
        model.addAttribute("requests", friendRequests2);
        model.addAttribute("friends", friendsUpdated);
        model.addAttribute("deletedFriend", true);
        model.addAttribute("userToAdd", friend);

        return "view-friends";
    }
}
