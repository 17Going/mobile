<template>
	<div>
		<header class="header">
			<div class="top">
				公司
				<div class="icon">
					<i class="ion ion-ios-search-strong"/>
				</div>
			</div>
			<div class="bottom">
				<div class="row">
					<div class="col">
						融资<i class="ion ion-ios-arrow-down"/>
					</div>
					<div class="col">
						融资<i class="ion ion-ios-arrow-down"/>
					</div>
					<div class="col">
						融资<i class="ion ion-ios-arrow-down"/>
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<ul>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
				<li>
					<div class="top">
						<div class="company">
							<i class="logo"/>
							<div class="info">
								<div class="name">蚂蚁金服</div>
								<div class="address">成都市武侯区中和</div>
							</div>
						</div>
						<div class="tag">
							<span>B轮</span>
							<span>100-299人</span>
							<span>互联网</span>
						</div>
					</div>
					<div class="bottom">
						<div class="text">热招：<span>前端开发D3.js</span>等13个岗位</div>
						<div class="icon"><i class="ion ion-ios-arrow-right"/></div>
					</div>
				</li>
			</ul>
		</main>
		<footer class="footer">
			<div class="row">
				<div class="col">
					<i class="fa fa-globe"/>
					<div class="icon-text">
						职位
					</div>
				</div>
				<div class="col">
					<i class="fa fa-building"/>
					<div class="icon-text">
						职位
					</div>
				</div>
				<div class="col">
					<i class="fa fa-comments"/>
					<div class="icon-text">
						职位
					</div>
				</div>
				<div class="col">
					<i class="fa fa-user-circle"/>
					<div class="icon-text">
						职位
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<style lang="less">
	@rem: 64rem;
	@bc: #55cac4;
	@tc: #838383;

	html{
		width: 100%;
		height: 100%;
		font-size: 10vw;
		overflow: hidden;
		-webkit-text-size-adjust:100%;
	}
	body{
		width: 100%;
		height: 100%;
		font-size: 24/@rem;
		overflow: auto;
	}

	@media screen and (orientation : landscape){ // 横屏 portrait：竖屏
		html {
			font-size: 10vh;// 解决横竖屏字体变化
		}
	}

	.header{
		width: 100%;
		position: fixed;
		top: 0;
		.top{
			height: 75/@rem;
			padding: 0 20/@rem;
			line-height: 75/@rem;
			font-size: 28/@rem;
			text-align: center;
			color: #fff;
			background-color: @bc;
			.icon{
				height: 100%;
				float: right;
				line-height: 75/@rem;
			}
			.ion{
				font-size: 32/@rem;
			}
		}
		.bottom{
			height: 60/@rem;
			padding: 15/@rem 0;
			line-height: 30/@rem;
			font-size: 20/@rem;
			text-align: center;
			color: @tc;
			background-color: #fff;
			border-bottom: 1px solid #ccc;
			.row{
				div{
					.ion{
						display: inline-block;
						margin-left: 10/@rem;
					}
				}
				div:not(:last-child){
					border-right: 1px solid #ccc;
				}
			}
		}
	}
	.main{
		margin-top: 135/@rem;
		margin-bottom: 85/@rem;
		ul{
			margin: 0;
			padding: 0;
			list-style: none;
			li{
				padding: 0 30/@rem;
				border-bottom: 14/@rem solid #f8f8f8;
				.top{
					padding: 20/@rem 0;
					border-bottom: 1px solid #ccc;
					.company{
						margin-bottom: 20/@rem;
						.logo{
							display: inline-block;
							width: 85/@rem;
							height: 75/@rem;
							margin-right: 30/@rem;
							background-image: url('../assets/img/logo.jpg');
							background-repeat:no-repeat;
							background-position-x: 6/@rem;
							background-size: 90% 100%;
						}
						.info{
							display: inline-block;
							font-size: 28/@rem;
						}
					}
					.tag{
						color: @tc;
						span{
							display: inline-block;
							padding: 15/@rem 10/@rem;
							border-radius: 6/@rem;
							background-color: #f5f5f5;
						}
					}

				}
				.bottom{
					padding: 25/@rem 0;
					&::after{
						content: '';
						display: block;
						height: 0;
						clear: both;
					}
					.text{
						float: left;
						color: @tc;
						span{
							color: @bc;
						}
					}
					.icon{
						float: right;
					}
				}
			}
		}
	}
	.footer{
		width: 100%;
		height: 85/@rem;
		position: fixed;
		bottom: 0;
		font-size: 20/@rem;
		color: @tc;
		border-top:1px solid #ccc;
		background-color: #fff;
		.row{
			text-align: center;
			margin-top: 10/@rem;
			i{
				font-size: 32/@rem;
			}
		}
	}
</style>

