package com.example.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bean.CustomerLogin;

public interface CustomerLoginDao extends JpaRepository<CustomerLogin,Long> {

	Optional<CustomerLogin> findByCustEmailAndCustPassword(String email, String pass);

}
