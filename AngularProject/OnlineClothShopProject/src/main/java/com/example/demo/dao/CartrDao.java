package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bean.Cart;

public interface CartrDao extends JpaRepository<Cart,Long>{
	

}
