package com.blog.blog.controllers.repositories;


import com.blog.blog.controllers.models.Score;
import com.blog.blog.controllers.models.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);

    @Query(value = "SELECT username, sum(score) FROM scores JOIN users u on scores.user_id = u.id GROUP BY user_id ORDER BY sum(score) DESC;", nativeQuery = true)
    List<Object[]> getAllPlayersRanking();

    @Query(value = "SELECT username, SUM(score) FROM scores JOIN users u on scores.user_id = u.id GROUP BY user_id ORDER BY sum(score) DESC LIMIT 10;", nativeQuery = true)
    List<Object[]> usersWithScores();

    @Query(value = "SELECT username, score FROM scores JOIN users u on scores.user_id = u.id  WHERE date_of_game LIKE ?1 AND scores.score > 0 ORDER BY score DESC LIMIT 10;", nativeQuery = true)
    List<Object[]> top10OfMonth(String month);

    @Query(value = "SELECT username, score FROM scores JOIN users u on scores.user_id = u.id  WHERE date_of_game = ?1 AND scores.score > 0 ORDER BY score DESC LIMIT 10;", nativeQuery = true)
    List<Object[]> top10OfTheDay(String currentDay);

    @Query(value = "SELECT CURRENT_DATE();", nativeQuery = true)
    String currentDate();

    @Query(value = "SELECT score FROM users JOIN scores s on users.id = s.user_id WHERE username = ?1 ORDER BY score DESC LIMIT 1;", nativeQuery = true)
    String highscore(String username);

//    @Query(value = "SELECT date_of_game, score FROM users JOIN scores s on users.id = s.user_id WHERE username = ?1 ORDER BY date_of_game DESC LIMIT 10 OFFSET 1;", nativeQuery = true)
//    List<Object[]> latest10Games(String username);

    @Query(value = "SELECT username FROM scores JOIN users u on scores.user_id = u.id GROUP BY user_id ORDER BY sum(score) DESC  LIMIT 1;", nativeQuery = true)
    String getTopPlayer();

    @Query(value = "SELECT username FROM scores JOIN users u on scores.user_id = u.id GROUP BY user_id ORDER BY sum(score) DESC  LIMIT 10;", nativeQuery = true)
    List<String> findTop10PlayersUsernames();

    @Query(value = "SELECT SUM(score) FROM scores JOIN users u on scores.user_id = u.id WHERE username = ?1 GROUP BY user_id;", nativeQuery = true)
    String getTotalPointsByUsername(String username);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO relationships (user_one_id, user_two_id, action_user, status) VALUES (?1, ?2, ?3, 0) ", nativeQuery = true)
    void sendRequest(long userOne, long userTwo, long actionUser);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO scores (date_of_game, score, user_id) VALUES (?1, 0, ?2) ", nativeQuery = true)
    void insertDefaultScore(String dateOfGame, long userId);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO scores (date_of_game, score, user_id) VALUES (?1, ?2, ?3) ", nativeQuery = true)
    void insertGameScore(String dateOfGame, long score, long user_id);

    @Query(value = "SELECT username, status, action_user, relationships.id FROM users JOIN relationships ON user_one_id = users.id WHERE user_two_id = ?1 AND status = 0", nativeQuery = true)
    List<Object[]> getFriendRequests(long currentUserId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE relationships SET status = 1 WHERE relationships.id = ?1", nativeQuery = true)
    void addFriend(long idOfRecord);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM relationships WHERE relationships.id = ?1", nativeQuery = true)
    void declineFriend(long idOfRecord);

    @Query(value = "SELECT username FROM users JOIN relationships ON user_one_id = users.id WHERE user_two_id = ?1 AND status = 1", nativeQuery = true)
    List<String> getFriendsThatAddedYou(long currentUserId);

    @Query(value = "SELECT users.username FROM users JOIN relationships ON user_two_id = users.id WHERE user_one_id = ?1 AND status = 1", nativeQuery = true)
    List<String> getFriendsThatYouAdded(long currentUserId);

    @Query(value = "SELECT MAX(id) FROM users", nativeQuery = true)
    long getRegisterUserId();

    @Query(value = "SELECT score, username, date_of_game FROM scores JOIN users u on scores.user_id = u.id ORDER BY score DESC LIMIT 1;", nativeQuery = true)
    List<Object[]> getHighestScoreOfAllTime();

    @Query(value = "SELECT username FROM scores JOIN users u on scores.user_id = u.id ORDER BY score DESC LIMIT 1;", nativeQuery = true)
    String getUserWhoHoldHighScore();


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM relationships WHERE (user_one_id = ?1 AND user_two_id = ?2) OR (user_one_id = ?2 AND user_two_id = ?1)", nativeQuery = true)
    void deleteFriendFromRecords(long currentUserId, long otherId);

    @Query(value = "SELECT user_one_id, user_two_id FROM relationships WHERE user_one_id = ?1 AND user_two_id = ?2", nativeQuery = true)
    List<Object[]> checkIfRequestWasAlreadySent(long userLoggedInId, long otherUserId);

    @Query(value = "SELECT id, user_one_id, user_two_id FROM relationships WHERE user_one_id = ?1 AND user_two_id = ?2", nativeQuery = true)
    List<Object[]> checkIfRequestWasAlreadyReceived(long otherUser, long currentUser);

    @Query(value = "SELECT id FROM relationships WHERE user_one_id = ?1 AND user_two_id = ?2", nativeQuery = true)
    long getIdOfRelationship(long otherUser, long currentUser);


    @Query(value = "SELECT username FROM users JOIN relationships ON relationships.user_one_id = users.id WHERE relationships.id = ?1", nativeQuery = true)
    String getUsernameOfWhoSent(long relationId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE users SET ranking = ?1 WHERE users.id = ?2", nativeQuery = true)
    void updateRank(String ranking, long id);




}
