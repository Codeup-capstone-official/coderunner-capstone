package com.blog.blog.controllers.models;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private long id;
    private String username;
    private String email;
    private String password;

    private String rank = "junior";

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<Score> scores;



    public User() {
    }

    public User(String username, String email, String password, String rank, List<Score> scores) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.rank = rank;
        this.scores = scores;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public List<Score> getScores() {
        return scores;
    }

    public void setScores(List<Score> scores) {
        this.scores = scores;
    }
}
