package com.blog.blog.controllers.models;

import org.omg.CORBA.PRIVATE_MEMBER;

import javax.persistence.*;

@Entity
@Table(name = "relationships", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_one_id", "user_two_id"})})
public class FriendRequests {
    @Id
    @GeneratedValue
    private long id;

    private long user_one_id;
    private long user_two_id;
    private int status;
    private long action_user;

    public FriendRequests(long user_one_id, long user_two_id, long action_user) {
        this.user_one_id = user_one_id;
        this.user_two_id = user_two_id;
        this.status = 0;
        this.action_user = action_user;
    }

    public long getUser_one_id() {
        return user_one_id;
    }

    public void setUser_one_id(long user_one_id) {
        this.user_one_id = user_one_id;
    }

    public long getUser_two_id() {
        return user_two_id;
    }

    public void setUser_two_id(long user_two_id) {
        this.user_two_id = user_two_id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getAction_user() {
        return action_user;
    }

    public void setAction_user(long action_user) {
        this.action_user = action_user;
    }

    public void setAction_user(int action_user) {
        this.action_user = action_user;
    }
}
