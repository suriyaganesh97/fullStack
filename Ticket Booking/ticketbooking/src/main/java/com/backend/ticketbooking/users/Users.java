package com.backend.ticketbooking.users;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int userid;
    private String username;
    private String password;
    private boolean account_non_locked;

    public Users() {
    }
    public Users(int userid, String username, String password, boolean account_non_locked) {
        this.userid = userid;
        this.username = username;
        this.password = password;
        this.account_non_locked = account_non_locked;
    }


    public int getUserid() {
        return userid;
    }
    public void setUserid(int userid) {
        this.userid = userid;
    }
    public String getusername() {
        return username;
    }
    public void setusername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public boolean isAccount_non_locked() {
        return account_non_locked;
    }
    public void setAccount_non_locked(boolean account_non_locked) {
        this.account_non_locked = account_non_locked;
    }
    
}
