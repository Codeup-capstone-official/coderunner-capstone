package com.blog.blog.controllers.models;

import javax.persistence.*;

@Entity
@Table(name = "scores")
public class Score {

    @Id
    @GeneratedValue
    private long id;
    private long score;
    private String dateOfGame;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



    public Score() {
    }

    public Score(long id, long score, String dateOfGame, User user) {
        this.id = id;
        this.score = score;
        this.dateOfGame = dateOfGame;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }

    public String getDateOfGame() {
        return dateOfGame;
    }

    public void setDateOfGame(String dateOfGame) {
        this.dateOfGame = dateOfGame;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
