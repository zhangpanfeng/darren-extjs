package com.darren.extjs.dao;

import java.util.List;

import com.darren.extjs.entity.Customer;


public interface CustomerDao {
    /**
     * insert customer to table
     * 
     * @param customer
     * @return
     */
    public int insert(Customer customer);

    /**
     * update customer by parameter
     * 
     * @param customer
     * @return
     */
    public int updateByParameter(Customer customer);

    /**
     * delete customer by id
     * 
     * @param customer
     * @return
     */
    public int deleteById(Customer customer);

    /**
     * select customer list by parameter
     * 
     * @param customer
     * @return
     */
    public List<Customer> selectByParameter(Customer customer);

    /**
     * select all customer
     * 
     * @return
     */
    public List<Customer> selectAll();

    /**
     * select customer by id
     * 
     * @param id
     *            primary key
     * @return Customer
     */
    public Customer selectByPrimaryKey(int id);
}
