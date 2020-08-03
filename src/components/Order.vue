<template>
	<div>
		<home></home>
		<div class="order_wrap">
			<div class="order">
				<div class='tit line'>
					<div class="lineone">商品</div>
					<div class="lineone">单价</div>
					<div class="lineone">数量</div>
					<div class="lineone">金额</div>
					<div class="lineone">操作</div>
				</div>
				<div v-if="!order.length">订单页面目前没有数据，快去添加吧</div>
				<ul class='con line' v-for="(orderitem, orderindex) in order" :key="orderindex" v-else>
					<li class="lineone">
						<img :src="orderitem.cover" alt="" width="100" height="100">
						<span>{{orderitem.text}}</span>
					</li>
					<li class="lineone" style="font-weight:normal;">￥{{orderitem.onlinePrice}}</li>
					<li class="lineone"><input type="number" v-model="orderitem.num" class="num" min=1></li>
					<li class="lineone" style="font-weight:normal;">￥{{orderitem.onlinePrice*orderitem.num}}</li>
					<li class="lineone"><span class="backmoney">退款</span></li>

				</ul>
				<div class="total"><span>总计：￥{{getTotalPrice()}}<i></i></span><span class="jiesuan">付款</span></div>

			</div>

		</div>
	</div>
</template>

<script>
	import data from "../config/config.js"
	import CheckboxCommon from "../common/CheckboxCommon"
	import home from './home.vue'
	export default {
		name: 'Car',
		data() {
			return {
				car: [],
				order: []
			}
		},
		components: {
			CheckboxCommon,
			home,
		},
		mounted() {
			this.$nextTick(function() {
				this.getdata();
			})
		},
		methods: {
			getdata() {
				let getdata = JSON.parse(window.localStorage.getItem('storagedata'));
				if(getdata) {
					this.car = getdata.car || [];
					this.order = getdata.order || [];
				}
			},
			setdata() {
				let setdata = {
					car: this.car,
					order: this.order
				};
				window.localStorage.setItem('storagedata', JSON.stringify(setdata))
			},
			getTotalPrice() {
				// 订单页面所有商品的总价
				return this.order.reduce((sum, item) => sum + item.onlinePrice * item.num, 0)
			}

		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.order_wrap {
		width: 100%;
		height: 550px;
		padding-top: 40px;
		background: #fff;
	}
	
	.order_wrap .order {
		width: 60%;
		height: 100%;
		margin: auto;
	}
	
	.order_wrap .order .line {
		width: 100%;
	}
	
	.order_wrap .order .line.tit {
		line-height: 40px;
		height: 40px;
		font: bold 16px MicrosoftYaHei;
		border-bottom: 1px solid #ebeef5;
	}
	
	.order_wrap .order .line.con {
		/* line-height:150px; */
		height: 151px;
		font: bold 16px MicrosoftYaHei;
		border-bottom: 1px solid #ebeef5;
	}
	
	.order_wrap .order .line .lineone {
		width: 13%;
		float: left;
	}
	
	.order_wrap .order .line .lineone:first-child {
		width: 50%;
	}
	
	.order_wrap .order .line .lineone:last-child {
		width: 11%;
	}
	
	.order_wrap .order .line .lineone:first-child input[type="checkbox"] {
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.order_wrap .order .line .lineone:first-child span {
		vertical-align: middle;
	}
	
	.order_wrap .order .line.con {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.order_wrap .order .line.con .lineone:first-child {
		line-height: 150px;
	}
	
	.order_wrap .order .line.con .lineone:first-child input {
		display: inline-block;
		vertical-align: middle;
	}
	
	.order_wrap .order .line.con .lineone:first-child img {
		display: inline-block;
		vertical-align: middle;
	}
	
	.order_wrap .order .line.con .lineone:first-child span {
		display: inline-block;
		vertical-align: middle;
		width: 380px;
		height: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 20px;
	}
	
	.order_wrap .order .line .lineone>span {
		display: inline-block;
		margin-right: 10px;
		font-size: 14px;
		cursor: pointer;
	}
	
	.order_wrap .order .total {
		width: 100%;
		text-align: right;
		line-height: 30px;
		margin-top: 30px;
	}
	
	.order_wrap .order .total span {
		display: inline-block;
	}
	
	.order_wrap .order .total span.jiesuan {
		width: 120px;
		cursor: pointer;
		line-height: 36px;
		text-align: center;
		color: #fff;
		background-color: #95bf47;
		margin-left: 10px;
	}
	
	.order_wrap .order .line.con .lineone .num {
		width: 40px;
		line-height: 23px;
		text-indent: 5px;
	}
</style>