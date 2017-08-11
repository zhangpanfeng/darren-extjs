package com.darren.extjs.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.darren.extjs.entity.Customer;
import com.darren.extjs.service.CustomerService;


@Controller
public class CustomerAction {
    private static final Logger LOG = Logger.getLogger(CustomerAction.class);

    @Resource
    private CustomerService customerService;

    @RequestMapping(value = "/getCustomerList.do", method = {RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public Object getCustomerList(Customer customer) {
        List<Customer> customerList = customerService.selectByParameter(customer);
        Map<String, Object> result = new HashMap<>();
        result.put("records", customerList);
        result.put("recordsCount", 18);
        return result;
    }
}
