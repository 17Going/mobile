<template>
	<div>
		<header class="header">
			<div class="top text-white">
				<div class="left">
					web前端
				</div>
				<div class="right">
					<i class="fa fa-plus"/>
					<i class="spliter"/>
					<i class="fa fa-search"/>
				</div>
			</div>
			<div class="bottom">
				<ul>
					<li>推荐 <i class="fa fa-angle-down"/></li>
					<li>推荐 <i class="fa fa-angle-down"/></li>
					<li>推荐 <i class="fa fa-angle-down"/></li>
					<li>推荐 <i class="fa fa-angle-down"/></li>
				</ul>
			</div>
		</header>
		<main class="main">
			<ul>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
				<li>
					<div class="left">
						<div class="title">web前端工程师</div>
						<div class="desc">卫士通，已上市</div>
						<div class="tag">
							<span>武侯区</span>
							<span>3-5年</span>
							<span>本科</span>
						</div>
						<div class="user">
							<i class="fa  fa-user-o"/>
							<span>彭永利.总经理</span>
						</div>
					</div>
					<div class="right">
						8k-16k
					</div>
				</li>
			</ul>
		</main>
		<footer class="footer">
			<div class="wrap clearfix">
				<div class="jop">
					<div class="icon-wrap">
						<i class="fa fa-globe"/>
					</div>
					<div class="icon-text">
						职位
					</div>
				</div>
				<div class="jop">
					<div class="icon-wrap">
						<i class="fa fa-building"/>
					</div>
					<div class="icon-text">
						公司
					</div>
				</div>
				<div class="jop">
					<div class="icon-wrap">
						<i class="fa fa-comments"/>
					</div>
					<div class="icon-text">
						消息
					</div>
				</div>
				<div class="jop">
					<div class="icon-wrap">
						<i class="fa fa-user-circle"/>
					</div>
					<div class="icon-text">
						我的
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<style lang="less" scoped>
	@rem: 64rem;
	@color: #55cac4;

	.header{
		width: 100%;
		height: 170/@rem;
		position: fixed;
		top: 0;
		font-size: 24/@rem;
		.top{
			width: 100%;
			height: 100/@rem;
			line-height: 100/@rem;
			padding: 0 25/@rem;
			background-color: @color;
			position: relative;
			.left{
				float: left;
			}
			.right{
				float: right;
			}
			.spliter{
				display: inline-block;
				width: 1px;
				height: 60/@rem;
				position: relative;
				top: 20/@rem;
				margin: 0 25/@rem;
				background-color: #fff;
			}
		}
		.bottom{
			height: 70/@rem;
			border-bottom: 1px solid #ccc;
			padding: 15/@rem 0;
			background-color: #fff;
			ul{
				margin: 0;
				padding: 0;
				height: 100%;
				li{
					float: left;
					width: 25%;
					height: 100%;
					line-height: 40/@rem;
					text-align: center;
					.fa{
						margin-left: 16/@rem;
					}
				}
				li:not(:first-child){
					border-left: 1px solid #ccc;
				}
			}
		}
	}

	.main{
		margin-top: 170/@rem;
		margin-bottom: 100/@rem;
		ul{
			li{
				padding: 25/@rem;
				font-size: 24/@rem;
				.left{
					float: left;
					width: 80%;
					.title{
						font-size:32/@rem;
						margin-bottom: 8/@rem;
					}
					.desc{
						margin-bottom: 12/@rem;
					}
					.tag{
						margin-bottom: 8/@rem;
						color:#ccc;
						span{
							padding: 6/@rem 8/@rem;
							background-color: #f8f8f8;
							border-radius: 4/@rem;
						}
					}
				}
				.right{
					float: right;
					width:20%;
					color: #3fbab5;
					font-size: 32/@rem;
					font-weight: bold;
				}
			}
			li:not(:last-child){
				border-bottom: 10/@rem solid #f5f5f5;
			}

			li::after{
				content:'';
				display: block;
				height:0;
				clear: both;
			}
		}
	}

	.footer{
		width: 100%;
		height:100/@rem;
		position: fixed;
		bottom: 0;
		padding: 0 15/@rem;
		border-top: 1px solid #ccc;
		background-color: #fff;
		.wrap{
			width:100%;
			height: 100%;
			font-size: 24/@rem;
			position: relative;
			top: 6/@rem;
			.jop{
				width:25%;
				float:left;
				.icon-wrap{
					width:100%;
					color: #58cdc7;
					text-align: center;
					font-size: 40/@rem;
				}
				.icon-text{
					width:100%;
					text-align: center;
					font-size: 16/@rem;
				}
			}
		}
	}
</style>

