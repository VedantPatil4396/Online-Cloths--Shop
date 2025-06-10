package com.example.demo.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "myproducttable101")
public class Product {

	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	   private long productId;
	    private String productName;
	    private String productCategory;
	    private String productBrand;
	    private int productQuantity;
	    private String productFor;
	    private int price;
	    private String imgPath;

		
		public Product() {
			super();
		
		}


		public Product(long productId, String productName, String productCategory, String productBrand,
				int productQuantity, String productFor, int price, String imgPath) {
			super();
			this.productId = productId;
			this.productName = productName;
			this.productCategory = productCategory;
			this.productBrand = productBrand;
			this.productQuantity = productQuantity;
			this.productFor = productFor;
			this.price = price;
			this.imgPath=imgPath;
		}


		public long getProductId() {
			return productId;
		}


		public void setProductId(long productId) {
			this.productId = productId;
		}


		public String getProductName() {
			return productName;
		}


		public void setProductName(String productName) {
			this.productName = productName;
		}


		public String getProductCategory() {
			return productCategory;
		}


		public void setProductCategory(String productCategory) {
			this.productCategory = productCategory;
		}


		public String getProductBrand() {
			return productBrand;
		}


		public void setProductBrand(String productBrand) {
			this.productBrand = productBrand;
		}


		public int getProductQuantity() {
			return productQuantity;
		}


		public void setProductQunatity(int productQuantit) {
			this.productQuantity = productQuantit;
		}


		public String getProductFor() {
			return productFor;
		}


		public void setProductFor(String productFor) {
			this.productFor = productFor;
		}


		public int getPrice() {
			return price;
		}


		public void setPrice(int price) {
			this.price = price;
		}


		@Override
		public String toString() {
			return "Product [productId=" + productId + ", productName=" + productName + ", productCategory="
					+ productCategory + ", productBrand=" + productBrand + ", productQuantity=" + productQuantity
					+ ", productFor=" + productFor + ", price=" + price + ", imgPath=" + imgPath + "]";
		}


		public String getImgPath() {
			return imgPath;
		}


		public void setImgPath(String imgPath) {
			this.imgPath = imgPath;
		}
			
}
