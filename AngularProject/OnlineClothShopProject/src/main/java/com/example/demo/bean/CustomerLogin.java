package com.example.demo.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerLogin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String custName;
	private String custEmail;
	private String custPassword;
	private long custContact;
	private String custAddress;

	public CustomerLogin() {
		super();

	}

	public CustomerLogin(long id, String custName, String custEmail, String custPassword, long custContact,
			String custAddress) {
		super();
		this.id = id;
		this.custName = custName;
		this.custEmail = custEmail;
		this.custPassword = custPassword;
		this.custContact = custContact;
		this.custAddress = custAddress;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}

	public long getCustContact() {
		return custContact;
	}

	public void setCustContact(long custContact) {
		this.custContact = custContact;
	}

	public String getCustAddress() {
		return custAddress;
	}

	public void setCustAddress(String custAddress) {
		this.custAddress = custAddress;
	}

	@Override
	public String toString() {
		return "CustomerLogin [id=" + id + ", custName=" + custName + ", custEmail=" + custEmail + ", custPassword="
				+ custPassword + ", custContact=" + custContact + ", custAddress=" + custAddress + "]";
	}

}
