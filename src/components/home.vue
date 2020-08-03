<template>
	<div>
		<div class="header">
			<div class="h_con">
				<div class="con_left">
					<span>你好，游客</span>
					<span>消息<i>0</i></span>
				</div>

				<div class="con_right">
					<router-link :to="{path:'/order'}"><span class="myprder">我的订单</span></router-link>
					<router-link :to="{path:'/car'}"><span class="buycar"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i><span>购物车</span></span>
					</router-link>
					<span>收藏夹</span>
					<span>商家入口</span>
				</div>
			</div>

		</div>
		<div class="logo">
			<div class="logo_con">
				<a class="logo_left" href="">
					<img src="../assets/images/logo.png" alt="">
				</a>
				<div class="logo_right">
					<div class="right_wrap">
						<input type="text" placeholder="请输入商品/店铺" />
						<button class="btn_search">搜 索</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}

	};
</script>

<style scoped="scoped">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	
	.header {
		height: 30px;
		border-bottom: 1px solid #e5e5e5;
		background: #f2f2f2;
		width: 100%;
	}
	
	.header .h_con {
		width: 65%;
		margin: auto;
		height: 100%;
		overflow: hidden;
		color: #999;
	}
	
	.header .con_left {
		float: left;
		line-height: 30px;
	}
	
	.header .con_left span {
		display: inline-block;
		margin-right: 15px;
	}
	
	.header .con_right {
		float: right;
		line-height: 30px;
	}
	
	.header .con_right a,
	#app .header .con_right>span {
		display: inline-block;
		margin-left: 15px;
		line-height: 30px;
		color: #999;
	}
	
	.header .con_right .buycar i {
		display: inline-block;
		font-size: 16px;
		margin-right: 3px;
	}
	
	.logo {
		height: 100px;
		width: 100%;
		background: #fff;
		border-bottom: 2px solid #95bf47;
	}
	
	.logo .logo_con {
		width: 65%;
		height: 100%;
		margin: auto;
	}
	
	.logo .logo_con .logo_left {
		float: left;
		height: 100%;
	}
	
	.logo .logo_con .logo_left img {
		height: 70px;
		display: block;
		margin-top: 15px;
		overflow: hidden;
	}
	
	.logo .logo_con .logo_right {
		float: right;
		line-height: 100px;
	}
	
	.logo .logo_con .logo_right .right_wrap {
		display: inline-block;
	}
	
	.logo .logo_con .logo_right .right_wrap input {
		line-height: 30px;
		border: 2px solid #95bf47;
		outline: none;
		text-indent: 10px;
	}
	
	.logo .logo_con .logo_right .right_wrap .btn_search {
		height: 34px;
		border: none;
		display: inline-block;
		padding: 0 10px;
		background: #95bf47;
		color: #fff;
		font-weight: 600;
	}
</style>