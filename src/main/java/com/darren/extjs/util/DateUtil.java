package com.darren.extjs.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.TimeZone;

import org.apache.log4j.Logger;

public class DateUtil {
    private static final Logger LOG = Logger.getLogger(DateUtil.class);
    private static final String DEFAULT_DATA_FORMAT = "yyyy-MM-dd HH:mm";
    private static final String DEFAULT_CLIENT_TIME_ZONE_ID = "Asia/Shanghai";

    /**
     * get string use default format "yyyy-MM-dd HH:mm"
     * 
     * @param date
     * @return String "yyyy-MM-dd HH:mm"
     */
    public static String getString(Date date) {
        return getString(DEFAULT_DATA_FORMAT, date);
    }

    /**
     * get string use format
     * 
     * @param format
     *            like "yyyy-MM-dd HH:mm"
     * @param date
     * @return String like "yyyy-MM-dd HH:mm"
     */
    public static String getString(String format, Date date) {
        DateFormat formater = new SimpleDateFormat(format);
        String result = formater.format(date);

        return result;
    }

    /**
     * get date use default format "yyyy-MM-dd HH:mm"
     * 
     * @param value
     *            like "2016-12-30 15:15"
     * @return Date
     */
    public static Date getDate(String value) {
        return getDate(DEFAULT_DATA_FORMAT, value);
    }

    /**
     * get date use default format like "yyyy-MM-dd HH:mm"
     * 
     * @param format
     *            like "yyyy-MM-dd HH:mm"
     * @param value
     *            like "2016-12-30 15:15"
     * @return date
     */
    public static Date getDate(String format, String value) {
        DateFormat formater = new SimpleDateFormat(format);
        Date date = null;
        try {
            date = formater.parse(value);
        } catch (ParseException e) {
            LOG.error(e.getMessage());
            e.printStackTrace();
        }

        return date;
    }

    /**
     * get local time from client date time using default client time zone "Asia/Shanghai"
     * 
     * @param clientDate
     *            clientDate client time zone date
     * @return long MILLISECOND
     */
    public static long getLocalTime(Date clientDate) {
        return getLocalTime(clientDate, DEFAULT_CLIENT_TIME_ZONE_ID);
    }

    /**
     * get local time from client date time
     * 
     * @param clientDate
     *            client time zone date
     * @param clientTimeZoneId
     *            client time zone id
     * @return long MILLISECOND
     */
    public static long getLocalTime(Date clientDate, String clientTimeZoneId) {
        Calendar calendar = new GregorianCalendar();
        // get local time offset
        int localZoneOffset = calendar.get(Calendar.ZONE_OFFSET);
        // get local daylight saving time offset
        int localDstOffset = calendar.get(Calendar.DST_OFFSET);
        TimeZone clientTimeZone = TimeZone.getTimeZone(clientTimeZoneId);
        calendar.setTimeZone(clientTimeZone);
        // get client time offset
        int clientzoneOffset = calendar.get(Calendar.ZONE_OFFSET);
        // get client daylight saving time offset
        int clientDstOffset = calendar.get(Calendar.DST_OFFSET);

        long utcTime = clientDate.getTime() - clientzoneOffset - clientDstOffset;
        long exactTime = utcTime + localZoneOffset + localDstOffset;

        return exactTime;
    }

    /**
     * get local date from client date time
     * 
     * @param clientDate
     *            client time zone date using default client time zone "Asia/Shanghai"
     * @return date
     */
    public static Date getLocalDate(Date clientDate) {
        return getLocalDate(clientDate, DEFAULT_CLIENT_TIME_ZONE_ID);
    }

    /**
     * get local date from client date time
     * 
     * @param clientDate
     *            client time zone date
     * @param clientTimeZoneId
     *            client time zone id
     * @return date
     */
    public static Date getLocalDate(Date clientDate, String clientTimeZoneId) {
        Date localDate = new Date(getLocalTime(clientDate, clientTimeZoneId));

        return localDate;
    }

    public static void main(String[] args) {
        // System.out.println(getDate("2016-12-12 11:10"));

        getLocalTime(getDate("2017-1-3 15:00"));
    }
}
