<%@ page language="java" import="com.dao.UserDAO,java.util.*"
	contentType="text/html; utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8>
<meta name=viewport
	content="width=device-width,user-scalable=no,minimal-ui">
<meta name=apple-mobile-web-app-capable content=yes>
<script type=text/javascript src=./static/tweenjs-0.5.1.min.js>
	
</script>
<script type=text/javascript src=./static/easeljs-0.7.1.min.js></script>
<script type=text/javascript src=./static/movieclip-0.7.1.min.js></script>
<script type=text/javascript src=./static/assets.js></script>
<script type=text/javascript src=./static/preloadjs-0.4.1.min.js></script>
<script type=text/javascript>
	window.createjs = createjs;
	window.assetsLib = lib;
	// change 1
	window.images = images;
</script>
<title>Space Defender</title>
<link href=./static/css/app.8d28c5cc5bb7e9ca5b46f622d0605a57.css
	rel=stylesheet>
</head>
<style>
.juzhong {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row; /*这里可以不写，flex布局默认方向横向即row*/
	justify-content: center;
	align-items: center;
	background-color: gray;
}

.jieshao {
	width: 330px;
	height: 500px;
	background-color: white;
}

.bigjieshao {
	width: 330px;
	height: 600px;
	background-color: white;
	margin-left: 100px;
}

.anniu {
	width: 110px;
	height: 100px;
	float: left;
	background-color: DarkGray;
}

.inputmargin {
	margin-left: 70px;
}

#jieshaobeijin {
	background: url(jieshao_b.jpg)
}

table {
	border-collapse: collapse;
	margin: 0 auto;
	text-align: center;
}

table td, table th {
	border: 1px solid #cad9ea;
	color: #666;
	height: 30px;
	width: 100px;
}

table thead th {
	background-color: #CCE8EB;
	width: 100px;
}

table tr:nth-child(odd) {
	background: #fff;
	width: 100px;
}

table tr:nth-child(even) {
	background: #F5FAFA;
	width: 100px;
}

/* WebKit browsers */
input::-webkit-input-placeholder {
	color: #C0C0C0;
	font-size: 14px;
}
/* Mozilla Firefox 4 to 18 */
input:-moz-placeholder {
	color: #C0C0C0;
	opacity: 1;
	font-size: 14px;
}
/* Mozilla Firefox 19+ */
input::-moz-placeholder {
	color: #C0C0C0;
	opacity: 1;
	font-size: 14px;
}
/* Internet Explorer 10+ */
input:-ms-input-placeholder {
	color: #C0C0C0;
	font-size: 14px;
}
</style>


<div class="juzhong">
	<div id="app"></div>


	<div class="bigjieshao">
		<form method="post" action="UpdateServlet">

			<div class="jieshao" id="jieshaobeijin">

				<%
					String username = request.getSession().getAttribute("username").toString();
				%>
				<!--从会话中获取username -->
				您好，<%=username%>
				<br>
				<!-- session设置值 -->
				<%
					request.getSession().setAttribute("waves", "1");
				%>
				<!--将waves写入会话 -->

				<h1>用户名：</h1>
				<input type="text" class="inputmargin" name="username"
					placeholder="用户名" srequired="" value="${sessionScope.username}"
					readonly="readonly">
				<h1>分数：</h1>
				<input type="text" class="inputmargin" name="waves" id="wave"
					placeholder="关卡数" " srequired="" value="${sessionScope.waves}"
					readonly="readonly">

				<!-- <input type="submit" href="UpdateServlet?username=xyh" value="上传分数"> -->

				<br>



				<table>
					<tr>
						<td>ID</td>
						<td>帐号</td>
						<td>分数</td>
					</tr>
					<c:forEach var="item" items="${list}">
						<tr>
							<td>${item.id}</td>
							<td>${item.name}</td>
							<td>${item.role}</td>
						</tr>
					</c:forEach>
					<tr>
						<td colspan="6" style="text-align: left;"><a id="ak"
							href="/UpdateServlet?username=${sessionScope.username}&waves=${sessionScope.waves}">上传分数</a></td>

					</tr>
				</table>

			</div>
		</form>
		<button class="anniu" onclick="loadWaves()">
			<font size="6">查看分数</font>
		</button>
		<button class="anniu" onclick="javascript:window.location.reload()">
			<font size="6">刷新</font>
		</button>
		<button class="anniu" onclick="history.go(-1)">
			<font size="6">返回</font>
		</button>
	</div>


</div>

</body>

<script>
	function getWave() {
		var wave = document.getElementById("waves").innerHTML;
		alert(wave);
		return wave;
	}

	function loadWaves() {
		var span = document.getElementById("waves");
		document.getElementById('wave').value = span.firstChild.nodeValue;
		alert("当前分数：" + span.firstChild.nodeValue);
		sessionStorage.setItem('waves', span);
		var aObj = document.getElementById("ak");
		var str = "/UpdateServlet?username=${sessionScope.username}&waves="
				+ span.firstChild.nodeValue;
		aObj.href = str;
		return span;
	}

	function autoloadWaves() {
		var span = document.getElementById("waves");
		document.getElementById('wave').value = span.firstChild.nodeValue;
		sessionStorage.setItem('waves', span);
		var aObj = document.getElementById("ak");
		var str = "/UpdateServlet?username=${sessionScope.username}&waves="
				+ span.firstChild.nodeValue;
		aObj.href = str;
		return span;
	}
	setInterval("autoloadWaves()", "1000");
</script>

<script language=JavaScript>
	
</script>
<script type=text/javascript
	src=./static/js/manifest.3ad1d5771e9b13dbdad2.js></script>
<script type=text/javascript
	src=./static/js/vendor.c1427980b3af650ac7fe.js></script>
<script type=text/javascript src=./static/js/app.6046dd3054aa199a97fa.js></script>

</html>