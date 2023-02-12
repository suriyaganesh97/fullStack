package com.backend.ticketbooking.users;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataJpaRepository  extends JpaRepository<Users,Integer>{
    List<Users> findByusername(String username);
}
