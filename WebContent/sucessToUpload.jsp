<%@ page language="java" import="com.dao.UserDAO,java.util.*" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<body>
<h1>上传成功!!!</h1>
  <table>
        <tr>
            <td>ID</td>
            <td>帐号</td>
            <td>密码</td>
            <td>分数</td>
        </tr>
        <c:forEach var="item" items="${list}" >
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.password}</td>
                <td>${item.role}</td>
            </tr>
        </c:forEach>
    </table>
    <input  type="button" value="返回" onclick="history.go(-1)"/>
</body>
</html>