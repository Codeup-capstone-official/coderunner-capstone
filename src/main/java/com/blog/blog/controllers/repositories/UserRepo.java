package com.blog.blog.controllers.repositories;


import com.blog.blog.controllers.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByUsername(String username);

    @Query(value = "SELECT username, SUM(score) FROM scores JOIN users u on scores.user_id = u.id GROUP BY user_id ORDER BY sum(score) DESC  LIMIT 25;", nativeQuery = true)
    List<Object[]> usersWithScores();

    @Query(value = "SELECT username, score FROM scores JOIN users u on scores.user_id = u.id  WHERE date_of_game LIKE ?1 ORDER BY score DESC LIMIT 10;", nativeQuery = true)
    List<Object[]> top10OfMonth(String month);

    @Query(value = "SELECT username, score FROM scores JOIN users u on scores.user_id = u.id  WHERE date_of_game LIKE ?1 ORDER BY score DESC LIMIT 10;", nativeQuery = true)
    List<Object[]> top10OfTheDay(String currentDay);

    @Query(value = "SELECT CURRENT_DATE();", nativeQuery = true)
    String currentDate();
}
