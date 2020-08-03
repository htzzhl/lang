<template>
  <div>
  <home></home>
	<div class="index_wrap">
		<div class="index">
			<ul class="left">
				<li v-for="(item,index) in navbars" :key="index" class="leftli">
					<i :class="item.icon" aria-hidden="true"></i>
					<span class="text">{{item.text}}</span>
				</li>
			</ul>
			<swiper-common :swiperimg="sliderimg"> </swiper-common>
		</div>
		<div class="goods_wrap">
			<div class="goods">
				<h1>精品推荐</h1>
				<ul>
					<li v-for="(item,goods_i) in goods" :key="goods_i" class="goods_li">
						<router-link :to="{ path: '/goods',query:{name:item.name}}">
							<img :src="item.cover" alt="">
							<h4>{{item.text}}</h4>
							<div class="detail">
								<span>原价：</span><span class="price">{{item.price}}</span>
								<span>促销价：</span><span class="onlinePrice">{{item.onlinePrice}}</span>
							</div>
						</router-link>

					</li>
				</ul>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	import data from "../config/config.js"
	import SwiperCommon from '../common/SwiperCommon.vue'
  import home from './home.vue'
	export default {
		name: 'Index',
		components: {
			SwiperCommon,
			home,
		},
		data() {
			return {
				navbars: data.navbars,
				goods: data.goods,
			}
		},
		computed: {
			sliderimg() {
				return this.goods.map(item => item.poster)
			}
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index_wrap {
		width: 100%;
		height: auto;
	}

	.index_wrap .index {
		width: 65%;
		height: 500px;
		margin: auto;
	}

	.index .left {
		float: left;
		width: 200px;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
	}

	.index .left .leftli {
		width: 100%;
		line-height: 35px;
		text-indent: 10px;
		text-align: left;
	}

	.index .left .leftli:hover {
		background: #fff;
	}

	.index .left .text {
		margin-left: 10px;
	}

	.index_wrap .goods_wrap {
		width: 100%;
		height: 500px;
		background: rgb(245, 245, 245);
		padding: 30px 0;
	}

	.index_wrap .goods {
		width: 65%;
		height: 500px;
		margin: auto;
		background: #fff;
	}

	.index_wrap .goods h1 {
		text-align: left;
		margin-left: 2%;
		padding-top: 20px;
	}

	.index_wrap .goods ul {
		margin: 30px 0;
	}

	.index_wrap .goods .goods_li {
		float: left;
		width: 25%;
	}

	.index_wrap .goods .goods_li:first-child {
		margin-left: 2%;
	}

	.index_wrap .goods .goods_li:last-child {
		width: 21%;
		margin-right: 2%;
	}

	.index_wrap .goods .goods_li img {
		display: block;
		width: 84%;
		overflow: hidden;
	}

	.index_wrap .goods .goods_li:last-child img {
		width: 100%
	}

	.index_wrap .goods .goods_li h4 {
		width: 84%;
		line-height: 30px;
		margin: 10px 0;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.index_wrap .goods .goods_li .detail {
		width: 84%;
		line-height: 30px;
		color: #888;
		font-size: 12px;
		text-align: center;
	}

	.index_wrap .goods .goods_li .price {
		text-decoration: line-through
	}

	.index_wrap .goods .goods_li .onlinePrice {
		color: #ff0036;
		font-size: 16px;
	}
</style>
