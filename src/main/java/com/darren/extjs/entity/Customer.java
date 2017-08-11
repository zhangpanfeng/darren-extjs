package com.darren.extjs.entity;

import java.util.Date;

import com.darren.extjs.util.DateUtil;

public class Customer extends Base{
    private int id;
    private String phone;
    private String name;
    private int age;
    /**
     * M:male F:female
     */
    private String gender;
    private String comment;
    /**
     * Y:send N:not send
     */
    private String emailState;
    private Date sendTime;
    private String stringSendTime;
    /**
     * Y:pay N:not pay
     */
    private String payState;
    private Date createTime;
    private Date deleteTime;

    /**
     * Id was split by "," example 1,2,3,4
     */
    private String stringId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
        if (this.phone != null) {
            this.phone = this.phone.trim();
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
        if (this.name != null) {
            this.name = this.name.trim();
        }
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmailState() {
        return emailState;
    }

    public void setEmailState(String emailState) {
        this.emailState = emailState;
    }

    public Date getSendTime() {
        return sendTime;
    }

    public void setSendTime(Date sendTime) {
        this.sendTime = sendTime;
    }

    public String getPayState() {
        return payState;
    }

    public void setPayState(String payState) {
        this.payState = payState;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getDeleteTime() {
        return deleteTime;
    }

    public void setDeleteTime(Date deleteTime) {
        this.deleteTime = deleteTime;
    }

    public String getStringId() {
        return stringId;
    }

    public void setStringId(String stringId) {
        this.stringId = stringId;
    }

//    public String getStringSendTime() {
//        Date sendTime = this.getSendTime();
//        if (sendTime != null) {
//            this.stringSendTime = DateUtil.getString("yyyy-MM-dd HH:mm", sendTime);
//        }
//        if (this.stringSendTime == null) {
//            this.stringSendTime = "";
//        }
//
//        return stringSendTime;
//    }
//
//    public void setStringSendTime(String stringSendTime) {
//        this.sendTime = DateUtil.getDate(stringSendTime);
//    }

//    @Override
//    public String toString() {
//        return "Customer [phone=" + phone + ", name=" + name + ", age=" + age + ", gender=" + gender + ", comment="
//                + comment + ", emailState=" + emailState + ", sendTime=" + getStringSendTime() + ", payState="
//                + payState + ", createTime=" + createTime + ", deleteTime=" + deleteTime + "]";
//    }

    /**
     * 
     * Y: have been send out 
     * N: not send
     *
     */
    public enum EmailState {
        Y, N;
    }
}
