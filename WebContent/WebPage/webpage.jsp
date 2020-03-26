<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!--<c:set var="path" value="${pageContext.request.contextPath}" />-->
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	request.setAttribute("path", basePath);
%>
<!DOCTYPE html>
<html lang="en">
<head>
<!--  <base href="${path}/WebPage/">-->

<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="keywords"
	content="Bootstrap, Landing page, Template, Registration, Landing">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">

<title>space defence</title>
<script type="text/javascript">
	function $$(id) {
		return document.getElementById(id);
	}
	function changeCode() {
		$$("code").src = "${path}/ValidateCodeServlet?a=" + new Date();
	}
</script>
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="${path}/WebPage/css/bootstrap.min.css">
<link rel="stylesheet" href="${path}/WebPage/css/line-icons.css">
<link rel="stylesheet" href="${path}/WebPage/css/owl.carousel.css">
<link rel="stylesheet" href="${path}/WebPage/css/owl.theme.css">
<link rel="stylesheet" href="${path}/WebPage/css/nivo-lightbox.css">
<link rel="stylesheet" href="${path}/WebPage/css/magnific-popup.css">
<link rel="stylesheet" href="${path}/WebPage/css/animate.css">
<link rel="stylesheet" href="${path}/WebPage/css/color-switcher.css">
<link rel="stylesheet" href="${path}/WebPage/css/menu_sideslide.css">
<link rel="stylesheet" href="${path}/WebPage/css/responsive.css">
<link rel="stylesheet" href="${path}/WebPage/css/main1.css">
</head>

<body>
	<!-- Header Section Start -->
	<header id="slider-area">
		<nav
			class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
			<div class="container">
				<a class="navbar-brand" href="index.html"><span class="lni-bulb"></span>太空抵御游戏说明</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarCollapse" aria-controls="navbarCollapse"
					aria-expanded="false" aria-label="Toggle navigation">
					<i class="lni-menu"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav mr-auto w-100 justify-content-end">
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#slider-area">首页</a></li>
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#services">武器种类</a></li>
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#features">敌人种类</a></li>
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#portfolios">图片</a></li>
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#remarks">评论</a></li>
						<!--  <li class="nav-item"><a class="nav-link page-scroll"
							href="#pricing">游戏价格</a></li>-->

						<!--<li class="nav-item"><a class="nav-link page-scroll"
							href="#team">Team</a></li>-->
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#contact">反馈</a></li>
						<li class="nav-item"><a class="nav-link page-scroll"
							href="#subscribe">登陆</a></li>
						<!--<li class="nav-item"><a class="nav-link page-scroll"
							href="#blog">Blog</a></li>-->

					</ul>
				</div>
			</div>
		</nav>

		<!-- Main Carousel Section -->
		<div id="carousel-area">
			<div id="carousel-slider" class="carousel slide carousel-fade"
				data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-slider" data-slide-to="1"></li>
					<li data-target="#carousel-slider" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<img src="${path}/WebPage/img/slider/bg-1.jpg" alt="">
						<div class="carousel-caption text-left">
							<h3 class="wow fadeInRight" data-wow-delay="0.2s">这个web页面是bootstarp框架做的</h3>
							<h2 class="wow fadeInRight" data-wow-delay="0.4s">我们项目是太空版植物大战僵尸</h2>
							<h4 class="wow fadeInRight" data-wow-delay="0.6s">我们组的成员为：肖远航、范云亮、邵琛</h4>
							<a href="#"
								class="btn btn-lg btn-common btn-effect wow fadeInRight"
								data-wow-delay="0.9s">下载</a> <a href="#subscribe"
								class="btn btn-lg btn-border wow fadeInRight"
								data-wow-delay="1.2s">登陆进入游戏</a>
						</div>
					</div>
					<div class="carousel-item">
						<img src="${path}/WebPage/img/slider/bg-2.jpg" alt="">
						<div class="carousel-caption text-center">
							<h3 class="wow fadeInDown" data-wow-delay="0.3s">我们的游戏是用vue写的</h3>
							<h2 class="wow bounceIn" data-wow-delay="0.6s">玩法类似于植物大战僵尸</h2>
							<h4 class="wow fadeInUp" data-wow-delay="0.9s">记分板功能和删除已摆放武器功能还没做</h4>
							<a href="#subscribe"
								class="btn btn-lg btn-common btn-effect wow fadeInUp"
								data-wow-delay="1.2s">跳转到登陆</a>
						</div>
					</div>
					<div class="carousel-item">
						<img src="${path}/WebPage/img/slider/bg-3.jpg" alt="">
						<div class="carousel-caption text-center">
							<h3 class="wow fadeInDown" data-wow-delay="0.3s">web页面实现功能说明</h3>
							<h2 class="wow fadeInRight" data-wow-delay="0.6s">太空版植物大战僵尸游戏说明页</h2>
							<h4 class="wow fadeInUp" data-wow-delay="0.6s">实现了登陆功能，可切换验证码，登陆失败重新加载此页面；数据库查询评论并显示到评论页面；数据库添加评论后添加到评论页面
							</h4>
							<a href="#subscribe" class="btn btn-lg btn-border wow fadeInUp"
								data-wow-delay="0.9s">跳转到登录</a>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carousel-slider"
					role="button" data-slide="prev"> <span class="carousel-control"
					aria-hidden="true"><i class="lni-chevron-left"></i></span> <span
					class="sr-only">Previous</span>
				</a> <a class="carousel-control-next" href="#carousel-slider"
					role="button" data-slide="next"> <span class="carousel-control"
					aria-hidden="true"><i class="lni-chevron-right"></i></span> <span
					class="sr-only">Next</span>
				</a>
			</div>
		</div>

	</header>
	<!-- Header Section End -->

	<!-- Services Section Start -->
	<section id="services" class="section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">武器种类和设定介绍</h2>
				<span>weapon</span>
				<p class="section-subtitle">游戏的设定如下，一系列外星飞船从天而降入侵地球，为了保护地球，玩家需要使用各种道具防止外星飞船落入底部的地球。如图所示，这些道具可以是箱子，也可以是卫星。当外星飞船被成功阻挡时，界面会弹出一系列奖章，也就是图片里面的"E"，点击这些奖章后，玩家可以获得积分，一旦积分达到要求，玩家就可以选择炮台，也就是图片中红色的物体，炮台可以发射子弹，一旦子弹打中外星飞船，飞船就会从界面上消失，游戏的玩法其实和植物大战僵尸是如出一辙。</p>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.2s">
						<div class="icon color-1">
							<!--  <i class="lni-pencil"></i>-->
						</div>
						<h4>太空垃圾</h4>
						<p>Space Junker用来阻挡太空怪兽的步伐</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.4s">
						<div class="icon color-2">
							<!--<i class="lni-cog"></i>  -->
						</div>
						<h4>卫星</h4>
						<p>satellite，相当于植物大战僵尸里的向日葵，产生能量</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.6s">
						<div class="icon color-3">
							<!--<i class="lni-stats-up"></i>  -->
						</div>
						<h4>卫星强化版</h4>
						<p>需要更多资源才能部署，能产生更多能量</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.8s">
						<div class="icon color-4">
							<!--<i class="lni-layers"></i>  -->
						</div>
						<h4>炮台</h4>
						<p>castle,可以发射炮弹攻击怪物</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="1s">
						<div class="icon color-5">
							<!-- <i class="lni-tab"></i> -->
						</div>
						<h4>炮台强化版</h4>
						<p>castle+,可以发射炮弹攻击怪物，比普通炮台攻击力高，需要更多资源</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="1.2s">
						<div class="icon color-6">
							<!--  	<i class="lni-briefcase"></i>-->
						</div>
						<h4>新的待定武器</h4>
						<p>还没想好</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Services Section End -->

	<!-- Call to Action Start -->
	<section class="call-action section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-10">
					<div class="cta-trial text-center">
						<h3>想开始玩了吗</h3>
						<p>点击下方按钮跳转到登陆</p>
						<a href="#subscribe" class="btn btn-common btn-effect">跳转到登陆</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Call to Action End -->

	<!-- Features Section Start -->
	<section id="features" class="section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">敌人种类</h2>
				<span>enemy</span>
				<p class="section-subtitle">有四种敌人</p>
			</div>
			<div class="row">
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.2s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--  <i class="lni-layout"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!--  <i class="lni-layout"></i>-->
								</div>
								<h4>ufo飞机怪</h4>
								<p>大中的话1粒子弹就可以啦</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.3s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--<i class="lni-tab"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!--<i class="lni-tab"></i>-->
								</div>
								<h4>幽灵怪</h4>
								<p>血厚一点</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">

					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.4s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--  <i class="lni-rocket"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!--<i class="lni-rocket"></i>-->
								</div>
								<h4>太空飞机</h4>
								<p>强一点，加血</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.5s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--  <i class="lni-database"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!--<i class="lni-database"></i>-->
								</div>
								<h4>BOSS</h4>
								<p>加血，长啥样底下看图，看起来最大的那个</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.5s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--  <i class="lni-leaf"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!--<i class="lni-leaf"></i>-->
								</div>
								<h4>占位</h4>
								<p>占位</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
				<!-- Start featured -->
				<div class="col-lg-4 col-md-6 col-xs-12">
					<div class="item-boxes services-item wow fadeInDown"
						data-wow-delay="0.5s">
						<div class="featured-box">
							<div class="featured-icon">
								<!--  <i class="lni-pencil"></i>-->
							</div>
							<div class="featured-content">
								<div class="icon-o">
									<!-- <i class="lni-pencil"></i>-->
								</div>
								<h4>占位</h4>
								<p>留给后来补充的怪物</p>
							</div>
						</div>
					</div>
				</div>
				<!-- End featured -->
			</div>
		</div>
	</section>
	<!-- Features Section End -->

	<!-- Start Video promo Section -->
	<section class="video-promo section">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="video-promo-content text-center">
						<a href="${path}/WebPage/1.mp4" class="video-popup"><i
							class="lni-film-play"></i></a>
						<h2 class="wow zoomIn" data-wow-duration="1000ms"
							data-wow-delay="100ms">我们的游戏视频</h2>
						<p class="wow zoomIn" data-wow-duration="1000ms"
							data-wow-delay="100ms">不长，可以看看</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End Video Promo Section -->

	<!-- Portfolio Section -->
	<section id="portfolios" class="section">
		<!-- Container Starts -->
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">图片</h2>
				<span>photo</span>
				<p class="section-subtitle">怪物和武器的图片</p>
			</div>
			<div class="row">
				<div class="col-md-12">
					<!-- Portfolio Controller/Buttons -->
					<div class="controls text-center">
						<a class="filter active btn btn-common btn-effect"
							data-filter="all">全部 </a> <a
							class="filter btn btn-common btn-effect" data-filter=".design">
							武器 </a> <a class="filter btn btn-common btn-effect"
							data-filter=".development">敌人 </a>
						<!--  <a
							class="filter btn btn-common btn-effect" data-filter=".print">
							Print </a>-->
					</div>
					<!-- Portfolio Controller/Buttons Ends-->
				</div>
			</div>

			<!-- Portfolio Recent Projects -->
			<div id="portfolio" class="row">
				<div class="col-lg-4 col-md-6 col-xs-12 mix development">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-1.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-1.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix development">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-2.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-2.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix development">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-3.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-3.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix development">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-4.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-4.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix design">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-5.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-5.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix design">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-6.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-6.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix design">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-7.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-7.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix design">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-8.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-8.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 mix design">
					<div class="portfolio-item">
						<div class="shot-item">
							<img src="${path}/WebPage/img/portfolio/img-9.png" alt="" />
							<div class="single-content">
								<div class="fancy-table">
									<div class="table-cell">
										<div class="zoom-icon">
											<a class="lightbox"
												href="${path}/WebPage/img/portfolio/img-9.png"><i
												class="lni-zoom-in item-icon"></i></a>
										</div>
										<a href="#">看图</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Container Ends -->
	</section>
	<!-- Portfolio Section Ends -->

	<!-- Testimonial Section Start -->
	<section id="remarks" class="section">
		<div class="container">
			<div class="section-header">
				<h2 class="section-title">评论</h2>
				<span>来自玩家的评论</span>
				<p class="section-subtitle">remark</p>
			</div>
			<section class="testimonial section">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div id="testimonials" class="touch-slider owl-carousel">
								<div class="item">
									<div class="testimonial-item">
										<div class="author">
											<div class="img-thumb">
												<img src="${path}/WebPage/img/testimonial/img2.jpg" alt="">
											</div>
											<div class="author-info">
												<h2>
													<a href="#">Oidila Matik</a>
												</h2>
												<span>President Lexo Inc</span>
											</div>
										</div>
										<div class="content-inner">
											<p class="description">Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Explicabo quidem, excepturi
												facere magnam illum, at accusantium doloremque odio.</p>
											<span><i class="lni-star-filled"></i></span> <span><i
												class="lni-star-filled"></i></span> <span><i
												class="lni-star-filled"></i></span> <span><i
												class="lni-star-filled"></i></span> <span><i
												class="lni-star-filled"></i></span>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="testimonial-item">
										<div class="author">
											<div class="img-thumb">
												<img src="${path}/WebPage/img/testimonial/img1.jpg" alt="">
											</div>
											<div class="author-info">
												<h2>
													<a href="#">- Alex Dattilo</a>
												</h2>
												<span>CEO Optima Inc</span>
											</div>
										</div>
										<div class="content-inner">
											<p class="description">Lorem ipsum dolor sit amet,
												consectetur adipisicing elit. Explicabo quidem, excepturi
												facere magnam illum, at accusantium doloremque odio.</p>
											<span><i class="lni-star-filled"></i></span> <span><i
												class="lni-star-filled"></i></span> <span><i
												class="lni-star"></i></span> <span><i class="lni-star"></i></span>
											<span><i class="lni-star"></i></span>
										</div>
									</div>
								</div>
								<c:forEach var="item" items="${list}">
									<div class="item">
										<div class="testimonial-item">
											<div class="author">
												<div class="img-thumb">
													<img src="${path}/WebPage/img/testimonial/img1.jpg" alt="">
												</div>
												<div class="author-info">
													<h2>
														<a href="#">${item.name}</a>
													</h2>
													<span>${item.identify }</span>
												</div>
											</div>
											<div class="content-inner">
												<p class="description">${item.message}</p>
												<span><i class="lni-star-filled"></i></span> <span><i
													class="lni-star-filled"></i></span> <span><i
													class="lni-star"></i></span> <span><i class="lni-star"></i></span>
												<span><i class="lni-star"></i></span>
											</div>
										</div>
									</div>
								</c:forEach>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
	<!-- Testimonial Section End -->

	<!-- Contact Section Start -->
	<section id="contact" class="section">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-lg-9 col-md-9 col-xs-12">
					<div class="contact-form">
						<div class="form-wrapper">
							<div class="section-header">
								<h2 class="section-title">反馈</h2>
								<span>Contact</span>
								<p class="section-subtitle">添加反馈信息，提交后在评论区域显示</p>
							</div>
							<form id="contactform" action="${path}/addRemarkServlet" method="post">
								<div class="row">
									<div class="col-12 form-line">
										<div class="form-group">
											<input type="text" class="form-control" id="name" name="name"
												placeholder="你的姓名" required data-error="请输入你的姓名">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12 form-line">
										<div class="form-group">
											<input type="text" placeholder="你的身份" id="identify"
												class="form-control" name="identify" required
												data-error="请输入你的身份">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12 form-line">
										<div class="form-group">
											<input type="text" placeholder="主题" id="msg_subject"
												name="msg_subject" class="form-control" required
												data-error="请输入你反馈的主题">
											<div class="help-block with-errors"></div>
										</div>
									</div>

									<div class="col-12 form-line">
										<div class="form-group">
											<textarea class="form-control" id="message" name="message"
												placeholder="信息" rows="7" data-error="输入你要反馈的信息" required></textarea>
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-12">
										<div class="form-submit">
											<button type="submit" class="btn btn-common btn-effect">提交</button>
											<%
												System.out.println("提交成功");
											%>
											<div id="msgSubmit" class="h3 hidden"></div>
											<div class="clearfix"></div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-xs-12">
					<div class="contact-deatils">
						<!-- Content Info -->
						<div class="contact-info_area">
							<div class="contact-info">
								<i class="lni-map"></i>
								<h5>Location</h5>
								<p>新疆北园春2号路</p>
							</div>
							<!-- Content Info -->
							<div class="contact-info">
								<i class="lni-star"></i>
								<h5>E-mail</h5>
								<p>920691910@qq.com</p>
							</div>
							<!-- Content Info -->
							<div class="contact-info">
								<i class="lni-phone"></i>
								<h5>Phone</h5>
								<p>+86 12345678</p>
							</div>
							<!-- Icon -->
							<ul class="footer-social">
								<li><a class="facebook" href="#"><i
										class="lni-facebook-filled"></i></a></li>
								<li><a class="twitter" href="#"><i
										class="lni-twitter-filled"></i></a></li>
								<li><a class="linkedin" href="#"><i
										class="lni-linkedin-fill"></i></a></li>
								<li><a class="google-plus" href="#"><i
										class="lni-google-plus"></i></a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
	<!-- Contact Section End -->

	<!-- Subcribe Section Start -->
	<div id="subscribe" class="section">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col-lg-5 col-md-12 col-xs-12">
					<div class="subscribe-form">
						<div class="form-wrapper">
							<div class="sub-title text-center">
								<h3>登录</h3>
								<p>请输入您的用户名和密码</p>
							</div>
							<form action="<%=request.getContextPath()%>/loginDemo"
								method="post">
								<div class="row">
									<div class="col-12 form-line">
										<div class="form-group">
											<input type="text" class="form-control" name="username"
												id="username" placeholder="用户名">
										</div>
									</div>
									<div class="col-md-12 form-line">
										<div class="form-group">
											<input type="password" class="form-control" name="password"
												id="password" placeholder="密码">
										</div>
									</div>
									<div class="col-12 form-line">
										<div class="form-group">
											<input type="text" class="form-control" name="checkcode"
												placeholder="验证码">
										</div>
									</div>
									<br> <br>
									<div class="col-12 form-line">
										<div class="form-group">
											<img class="img_code" width="120px"
												src="${path}/ValidateCodeServlet" id="code" />&nbsp;<a
												class="a_code" href="javascript:changeCode()">换一张</a>
											<%
												if (request.getAttribute("message") != null) {
													System.out.print(request.getAttribute("message"));
												}
											%>
										</div>
									</div>
									<br> <br> <br> <br>
									<div class="col-12">
										<div class="form-submit">
											<button type="submit" class="btn btn-common btn-effect">登陆</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-md-12 col-xs-12">
					<div class="sub-item-box">
						<div class="icon-box">
							<i class="lni-bullhorn"></i>
						</div>
						<div class="text-box">
							<h4>注意资源数量</h4>
							<p>动动脑</p>
						</div>
					</div>
					<div class="sub-item-box">
						<div class="icon-box">
							<i class="lni-book"></i>
						</div>
						<div class="text-box">
							<h4>仔细阅读游戏说明</h4>
							<p>听话</p>
						</div>
					</div>
					<div class="sub-item-box">
						<div class="icon-box">
							<i class="lni-timer"></i>
						</div>
						<div class="text-box">
							<h4>注意波数</h4>
							<p>小心大浪潮</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Subcribe Section End -->

	<!-- Copyright Start  -->
	<div id="copyright">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="site-info float-left">
						<p>
							Copyright &copy; 2020.xinyang All rights reserved.<a
								target="_blank" href="http://sc.chinaz.com/moban/"></a>
						</p>
					</div>
					<div class="float-right">
						<ul class="nav nav-inline">
							<li class="nav-item"><a class="nav-link active">About</a></li>
							<li class="nav-item"><a class="nav-link">FAQ</a></li>
							<li class="nav-item"><a class="nav-link">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Copyright End -->

	<!-- Footer Section End -->

	<!-- Go To Top Link -->
	<a href="#" class="back-to-top"> <i class="lni-arrow-up"></i>
	</a>

	<div id="loader">
		<div class="spinner">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</div>
	</div>

	<!-- jQuery first, then Tether, then Bootstrap JS. -->
	<script src="${path}/WebPage/js/jquery-min.js"></script>
	<script src="${path}/WebPage/js/popper.min.js"></script>
	<script src="${path}/WebPage/js/bootstrap.min.js"></script>
	<script src="${path}/WebPage/js/classie.js"></script>
	<script src="${path}/WebPage/js/color-switcher.js"></script>
	<script src="${path}/WebPage/js/jquery.mixitup.js"></script>
	<script src="${path}/WebPage/js/nivo-lightbox.js"></script>
	<script src="${path}/WebPage/js/owl.carousel.js"></script>
	<script src="${path}/WebPage/js/jquery.stellar.min.js"></script>
	<script src="${path}/WebPage/js/jquery.nav.js"></script>
	<script src="${path}/WebPage/js/scrolling-nav.js"></script>
	<script src="${path}/WebPage/js/jquery.easing.min.js"></script>
	<script src="${path}/WebPage/js/wow.js"></script>
	<script src="${path}/WebPage/js/jquery.vide.js"></script>
	<script src="${path}/WebPage/js/jquery.counterup.min.js"></script>
	<script src="${path}/WebPage/js/jquery.magnific-popup.min.js"></script>
	<script src="${path}/WebPage/js/waypoints.min.js"></script>
	<script src="${path}/WebPage/js/form-validator.min.js"></script>
	<script src="${path}/WebPage/js/contact-form-script.js"></script>
	<script src="${path}/WebPage/js/main.js"></script>

</body>
</html>