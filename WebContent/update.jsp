<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>    
    <title>修改</title>
    <link rel="stylesheet" href="css/index.css" type="text/css" />
  </head>
  <style>
  	.t1{
  	        width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;/*这里可以不写，flex布局默认方向横向即row*/
            justify-content: center;
            align-items: center;
  	}
  </style>
  
  <body>
    <form action="UpdateServlet" method="post">
    <table border="1" class="t1">
        <tr>
            <td colspan="2"><h1>确认上传分数</h1></td>
        </tr>
        <tr>
            <td>用户名:</td>
            <td><input  type="text" name="username" value=${ sessionScope.username}  readonly="readonly"/></td>
        </tr>
       
        <tr>
            <td>分数（waves）:</td>
            <td><input  type="text" name="waves" value=${ sessionScope.waves} readonly="readonly"/></td>
        </tr>
        <tr>
            <td colspan="2">
                <input  type="submit" value="提交" onclick="history.go(-1)"/>
                <input  type="button" value="返回" onclick="history.go(-1)"/>
            </td>
        </tr>
    </table>
   </form>
  </body>
</html>