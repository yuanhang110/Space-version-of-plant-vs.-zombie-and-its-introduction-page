<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>标题</title>
<link href="css/login.css" type="text/css" rel="stylesheet">

<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

#wrap {
	height: 719px;
	width: 100;
	background-image: url(4.jpg);
	background-repeat: no-repeat;
	background-position: center center;
	position: relative;
}

#head {
	height: 120px;
	width: 100;
	background-color: #191970;
	text-align: center;
	position: relative;
}

#foot {
	width: 100;
	height: 126px;
	background-color: #191970;
	position: relative;
}

#wrap .logGet {
	height: 488px;
	width: 380px;
	position: absolute;
	background-color: #FFFFFF;
	top: 20%;
	right: 15%;
}

.logC a button {
	width: 100%;
	height: 45px;
	margin: 5px 5px;
	background-color: #4B0082;
	border: none;
	color: white;
	font-size: 18px;
}

.logD a button {
	width: 50%;
	height: 45px;
	background-color: #4B0082;
	border: none;
	color: white;
	font-size: 18px;
}

.logGet .logD.logDtip .p1 {
	display: inline-block;
	font-size: 28px;
	margin-top: 30px;
	width: 86%;
}

#wrap .logGet .logD.logDtip {
	width: 86%;
	border-bottom: 1px solid #4B0082;
	margin-bottom: 60px;
	margin-top: 0px;
	margin-right: auto;
	margin-left: auto;
}

.logGet .lgD img {
	position: absolute;
	top: 12px;
	left: 8px;
}

.logGet .lgD input {
	width: 100%;
	height: 42px;
	text-indent: 2.5rem;
}

#wrap .logGet .lgD {
	width: 86%;
	position: relative;
	margin-bottom: 30px;
	margin-top: 30px;
	margin-right: auto;
	margin-left: auto;
}

#wrap .logGet .logC {
	width: 86%;
	margin-top: 0px;
	margin-right: auto;
	margin-bottom: 0px;
	margin-left: auto;
}

.title {
	font-family: "宋体";
	color: #FFFFFF;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); /* 使用css3的transform来实现 */
	font-size: 36px;
	height: 40px;
	width: 30%;
}

.sidetitle {
	font-family: "宋体";
	color: #FFFFFF;
	position: absolute;
	top: 50%;
	left: 80%;
	transform: translate(-50%, -50%); /* 使用css3的transform来实现 */
	font-size: 12px;
	height: 40px;
	width: 30%;
}

.copyright {
	font-family: "宋体";
	color: #FFFFFF;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); /* 使用css3的transform来实现 */
	height: 60px;
	width: 40%;
	text-align: center;
}

#background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: #211f1f;
	display: none\8;
}

#background .bg-photo {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: none;
	overflow: hidden;
	-webkit-background-size: cover !important;
	-moz-background-size: cover !important;
	-o-background-size: cover !important;
	background-size: cover !important;
}

#background .bg-photo-1 {
	background:
		url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=554628324,691544455&fm=27&gp=0.jpg')
		no-repeat center center;
}

#background-ie {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: #211f1f;
}

#foot .copyright .img {
	width: 100%;
	height: 24px;
	position: relative;
}

.copyright .img .icon {
	display: inline-block;
	width: 24px;
	height: 24px;
	margin-left: 22px;
	vertical-align: middle;
	background-image: url(%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6.png);
	background-repeat: no-repeat;
	vertical-align: middle;
	margin-right: 5px;
}

.copyright .img .icon1 {
	display: inline-block;
	width: 24px;
	height: 24px;
	margin-left: 22px;
	vertical-align: middle;
	background-image: url(%E5%9C%B0%E5%9D%80.png);
	background-repeat: no-repeat;
	vertical-align: middle;
	margin-right: 5px;
}

.copyright .img .icon2 {
	display: inline-block;
	width: 24px;
	height: 24px;
	margin-left: 22px;
	vertical-align: middle;
	background-image: url(%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F.png);
	background-repeat: no-repeat;
	vertical-align: middle;
	margin-right: 5px;
}

#foot .copyright p {
	height: 24px;
	width: 100%;
}
</style>

</head>
<body>

	<div id="background">
		<div class="bg-photo bg-photo-1" style="display: block;"></div>
	</div>
	<div class="header" id="head">
		<div class="title">登录系统</div>
		<div class="sidetitle">注：请使用用户xyh登录，密码为123</div>
	</div>

	<div class="wrapper">
		<form action="<%=request.getContextPath()%>/loginDemo" method="post">
			<div class="wrap" id="wrap">

				<div class="logGet">
					<!-- 头部提示信息 -->
					<div class="logD logDtip">
						<p class="p1">用户登录</p>
					</div>

					<!-- 输入框 -->
					<div class="lgD">
						<img src="img/logName.png" width="20" height="20" alt="" /> <input
							id="username" name="username" value="${param.userName}"
							type="text" placeholder="输入用户名" />
					</div>
					<div class="lgD">
						<img src="img/logPwd.png" width="20" height="20" alt="" /> <input
							id="password" name="password" type="password"
							placeholder="输入用户密码" />
					</div>
					<div class="lgD">
						<img src="img/logNam e.png" width="20" height="20" alt="" /> <input
							type="text" name="checkcode" placeholder="输入验证码" />
					</div>
					<font color="red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
						class="img_code" width="120px" src="ValidateCodeServlet" id="code" />&nbsp;<a
						class="a_code" href="javascript:changeCode()">换一张</a> <%
 	if (request.getAttribute("message") != null) {
 		out.print(request.getAttribute("message"));
 	}
 %></font>
					<script type="text/javascript">
						function $(id) {
							return document.getElementById(id);
						}
						function changeCode() {
							$("code").src = "ValidateCodeServlet?a="
									+ new Date();
						}
					</script>
					<div class="logC">
						<a target="_self" type="submit"><button>登录</button> </a>
					</div>
					<!--  
					<div class="logC" id="submit">
						<input type="submit" value="登录" />
						<button>登录</button>
					</div>-->
				</div>
			</div>
		</form>
	</div>

	<div class="footer" id="foot">
		<div class="copyright">
			<p>Copyright © 2019 xyh.com Inc. All Rights Reserved.</p>
		</div>
	</div>
</body>
</html>
