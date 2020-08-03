<template>
	<div>
		<home></home>
		<div class="goods_wrap">
			<div class="goods">
				<div class="goods_left">
					<div class="leftimg">
						<img :src="thedata.images[imgindex]" alt="">
						<div class="animateimg" ref="animateimg" :class="{'anim-car' : isCar,'anim-order' : isOrder}">
							<img :src="thedata.images[imgindex]" alt="">
						</div>

					</div>
					<div class="leftthumb">
						<img v-for="(thumbitem,thumbindex) in thedata.thumbnails" :key="thumbindex" :src="thumbitem" alt="" @mouseenter="changeImg(thumbindex)" />
					</div>
				</div>
				<div class="goods_right">
					<h2 class="text">{{thedata.text}}</h2>
					<div class="price_wrap">
						<div class="price_line wrapline"><span>价格</span><span class="price" style="text-decoration: line-through;">￥{{thedata.price}}</span></div>
						<div class="onlinePrice_line wrapline"><span>促销价</span><span class="onlinePrice" style="font-weight: 600;font-size: 24px;color: #ff0036;">￥{{thedata.onlinePrice}}</span></div>
					</div>
					<div class="address_line wrapline"><span>发货地</span><span class="address" style="color:#292828;">{{thedata.address}}</span></div>
					<div class="type_line wrapline"><span>快递方式</span><span class="type" style="color:#292828;">{{thedata.type}}</span></div>
					<input type="number" class="number" name="points" min="1" max="100" v-model="num" />
					<ul class="sub">
						<li @click="toOrder()">立即购买</li>
						<li @click="toCar()"><i class="fa fa-cart-arrow-down" aria-hidden="true" style="margin-right:5px;"></i>加入购物车</li>
					</ul>
					<ul class="tips">
						<li>服务承诺</li>
						<li>正品保证</li>
						<li>极速退款</li>
						<li>赠运费险</li>
						<li>七天无理由退换</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import data from "../config/config.js"
	import home from './home.vue'
	export default {
		name: 'Goods',
		data() {
			return {
				imgindex: 0,
				num: 1,
				car: [],
				order: [],
				isCar: false,
				isOrder: false,
				home,
			}
		},
		computed: {
			thedata() {
				return data.goods.find(item => item.name === this.$route.query.name)
			},
			result() {
				return {
					text: this.thedata.text,
					cover: this.thedata.cover,
					onlinePrice: this.thedata.onlinePrice,
					num: this.num
				}
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.getStore();
				this.$refs.animateimg.addEventListener('animationend', () => {

					this.isCar = false;
					this.isOrder = false;
				})
			})

		},
		methods: {

			changeImg(index) {
				// 鼠标划入缩略图之后，大图的替换
				this.imgindex = index;
			},
			setStore() {
				// 设置浏览器data缓存
				let setstore = {
					car: this.car,
					order: this.order
				}
				window.localStorage.setItem('storagedata', JSON.stringify(setstore));
			},
			getStore() {
				// 获取浏览器data缓存
				let getstore = JSON.parse(window.localStorage.getItem('storagedata'));
				if(getstore) {
					this.car = getstore.car || [];
					this.order = getstore.order || [];

				} else {
					this.car = []
					this.order = [];
				}
			},
			toOrder() {
				this.isOrder = true;
				// 立即购买
				this.order.push(this.result) // 增加当前数据
				this.setStore();
			},
			toCar() {
				this.isCar = true;
				// 加入购物车
				this.car.push(this.result) // 增加当前数据
				this.setStore();
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.goods_wrap {
		width: 100%;
		height: 550px;
		padding-top: 40px;
		background: #fff;
	}
	
	.goods_wrap .goods {
		width: 60%;
		height: 100%;
		margin: auto;
	}
	
	.goods_left {
		float: left;
		width: 430px;
	}
	
	.goods_left .leftimg {
		width: 100%;
		height: 430px;
		position: relative;
	}
	
	.goods_left .leftimg>img {
		width: 100%;
		height: 100%;
		display: block;
		overflow: hidden;
	}
	
	.goods_left .leftimg .animateimg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	
	.goods_left .leftimg .animateimg>img {
		width: 100%;
		height: 100%;
		display: block;
		overflow: hidden;
	}
	
	.goods_left .leftthumb {
		width: 100%;
		height: 80px;
		text-align: left;
		margin: 20px 0;
	}
	
	.goods_left .leftthumb img {
		width: 80px;
		height: 80px;
		display: inline-block;
		overflow: hidden;
		margin-right: 6px;
		cursor: pointer;
	}
	
	.goods_right {
		float: right;
		width: calc( 100% - 500px);
		height: 100%;
	}
	
	.goods_right .price_wrap {
		height: 70px;
		width: 70%;
		background: url('../../static/images/pricebgi.png') no-repeat center/cover;
		margin: 30px 0;
	}
	
	.goods_right .wrapline {
		line-height: 30px;
		display: block;
		margin: 5px 0;
	}
	
	.goods_right .wrapline span {
		display: inline-block;
		margin: 0 20px 0 5px;
	}
	
	.goods_right .wrapline span:first-child {
		width: 60px;
	}
	
	.goods_right .number {
		line-height: 30px;
		border: 1px solid #999;
		width: 20%;
		margin: 30px 0;
		text-indent: 10px;
	}
	
	.goods_right .sub {
		margin-bottom: 30px;
	}
	
	.goods_right .sub li {
		display: inline-block;
		width: 200px;
		line-height: 36px;
		cursor: pointer;
		text-align: center;
		border: 1px solid #95bf47;
	}
	
	.goods_right .sub li:first-child {
		color: #95bf47;
		background-color: rgba(149, 191, 103, .1);
	}
	
	.goods_right .sub li:last-child {
		color: #fff;
		background-color: #95bf47;
	}
	
	.goods_right .tips li {
		display: inline-block;
		margin-right: 10px;
		color: #999;
	}
	
	.anim-order {
		animation-duration: 500ms;
		animation-name: addInOrder;
		animation-timing-function: ease-in-out;
	}
	
	.anim-car {
		animation-duration: 500ms;
		animation-name: addInCar;
		animation-timing-function: ease-in-out;
	}
	
	@keyframes addInOrder {
		0% {
			transform: scale(1)
		}
		100% {
			/* transform: translateX(540px) translateY(-370px) scale(0.01) */
			transform: translateX(740px) translateY(-370px) scale(0.01)
		}
	}
	
	@keyframes addInCar {
		0% {
			transform: scale(1)
		}
		100% {
			/* transform: translateX(620px) translateY(-370px) scale(0.01) */
			transform: translateX(820px) translateY(-370px) scale(0.01)
		}
	}
</style>