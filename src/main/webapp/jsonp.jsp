<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
boolean jsonP = false;
String cb = request.getParameter("callback");
if (cb != null) {
    jsonP = true;
    response.setContentType("text/javascript");
} else {
    response.setContentType("application/x-json");
}
;
if (jsonP) {
    response.getWriter().write(cb + "(");
}
response.getWriter().print("[{'id':1, 'name':'Darren', 'email':'sf0902@163.com'},{'id':2, 'name':'ADarren', 'email':'sf0902@163.com'}]");
if (jsonP) {
    response.getWriter().write(");");
}
%>