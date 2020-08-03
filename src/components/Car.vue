<template>
	<div>
		<home></home>
		<div class="car_wrap">
			<div class="car">
				<div class='tit line'>
					<div class="lineone">
						<checkbox-common @change="checkboxTotal" v-model='checkboxtotal'></checkbox-common>
						<span>商品</span>

					</div>
					<div class="lineone">单价</div>
					<div class="lineone">数量</div>
					<div class="lineone">金额</div>
					<div class="lineone">操作</div>
				</div>
				<div v-if="!car.length">购物车目前没有数据，快去添加吧</div>
				<ul class='con line' v-for="(caritem, carindex) in car" :key="carindex" v-else>
					<li class="lineone">
						<checkbox-common @change="checkboxArray" v-model='checkboxarray[carindex]'></checkbox-common>
						<img :src="caritem.cover" alt="" width="100" height="100">
						<span>{{caritem.text}}</span>
					</li>
					<li class="lineone" style="font-weight:normal;">￥{{caritem.onlinePrice}}</li>
					<li class="lineone"><input type="number" v-model="caritem.num" class="num" min=1></li>
					<li class="lineone" style="font-weight:normal;">￥{{caritem.onlinePrice*caritem.num}}</li>
					<li class="lineone"><span class="delete" @click="deletearray(carindex)">删除</span><span class="sum" @click="sumarray(caritem,carindex)">结算</span></li>

				</ul>
				<div class="total"><span>总计：￥{{getTotalPrice()}}<i></i></span><span class="jiesuan" @click="sumall">结算</span></div>

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
				order: [],
				checkboxtotal: false,
				checkboxarray: []

			}
		},
		components: {
			CheckboxCommon,
			home,
		},
		mounted() {
			this.$nextTick(function() {
				this.getdata();
				this.checkboxtheArray();
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
			checkboxtheArray() {
				this.checkboxarray = this.car.map(() => false);
			},
			checkboxArray() {
				this.checkboxarray.every(item => item) && (this.checkboxtotal = true)
				this.checkboxarray.some(item => !item) && (this.checkboxtotal = false)

			},
			checkboxTotal() {
				this.checkboxarray.fill(this.checkboxtotal)
			},
			getTotalPrice() {
				// 计算已选商品的总价
				let balance = this.car.filter((item, index) => this.checkboxarray[index]);
				return balance.reduce((sum, item) => sum + item.onlinePrice * item.num, 0)
			},
			deletearray(index) {
				// 删除某条数据之后，记得重新更新设置浏览器缓存里面的数据
				this.car.splice(index, 1)
				this.setdata()
			},
			sumarray(item, index) {
				// 结算购物车选中的某一条数据,并跳转到订单页面
				this.car.splice(index, 1)
				this.checkboxarray.splice(index, 1)
				this.order.push(item)
				this.setdata()
				this.$router.push({
					path: '/order'
				})

			},
			sumall() {
				// 结算购物车所有的数据,并跳转到订单页面
				this.car.forEach((item) => {
					this.order.push(item);
				})
				this.car = []
				this.checkboxarray = []
				this.setdata()
				this.$router.push({
					path: '/order'
				})
			}

		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.car_wrap {
		width: 100%;
		height: 550px;
		padding-top: 40px;
		background: #fff;
	}
	
	.car_wrap .car {
		width: 60%;
		height: 100%;
		margin: auto;
	}
	
	.car_wrap .car .line {
		width: 100%;
	}
	
	.car_wrap .car .line.tit {
		line-height: 40px;
		height: 40px;
		font: bold 16px MicrosoftYaHei;
		border-bottom: 1px solid #ebeef5;
	}
	
	.car_wrap .car .line.con {
		/* line-height:150px; */
		height: 151px;
		font: bold 16px MicrosoftYaHei;
		border-bottom: 1px solid #ebeef5;
	}
	
	.car_wrap .car .line .lineone {
		width: 13%;
		float: left;
	}
	
	.car_wrap .car .line .lineone:first-child {
		width: 50%;
	}
	
	.car_wrap .car .line .lineone:last-child {
		width: 11%;
	}
	
	.car_wrap .car .line .lineone:first-child input[type="checkbox"] {
		vertical-align: middle;
		margin-right: 5px;
	}
	
	.car_wrap .car .line .lineone:first-child span {
		vertical-align: middle;
	}
	
	.car_wrap .car .line.con {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.car_wrap .car .line.con .lineone:first-child {
		line-height: 150px;
	}
	
	.car_wrap .car .line.con .lineone:first-child input {
		display: inline-block;
		vertical-align: middle;
	}
	
	.car_wrap .car .line.con .lineone:first-child img {
		display: inline-block;
		vertical-align: middle;
	}
	
	.car_wrap .car .line.con .lineone:first-child span {
		display: inline-block;
		vertical-align: middle;
		width: 380px;
		height: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-left: 20px;
	}
	
	.car_wrap .car .line .lineone>span {
		display: inline-block;
		margin-right: 10px;
		font-size: 14px;
		cursor: pointer;
	}
	
	.car_wrap .car .total {
		width: 100%;
		text-align: right;
		line-height: 30px;
		margin-top: 30px;
	}
	
	.car_wrap .car .total span {
		display: inline-block;
	}
	
	.car_wrap .car .total span.jiesuan {
		width: 120px;
		cursor: pointer;
		line-height: 36px;
		text-align: center;
		color: #fff;
		background-color: #95bf47;
		margin-left: 10px;
	}
	
	.car_wrap .car .line.con .lineone .num {
		width: 40px;
		line-height: 23px;
		text-indent: 5px;
	}
	
	input[type="checkbox"] {
		width: 14px;
		height: 14px;
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		line-height: 12px;
		position: relative;
	}
	
	input[type="checkbox"]::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100%;
		border: 1px solid #CACDCF;
	}
	
	input[type="checkbox"]:checked::before {
		content: "\2713";
		background-color: #95bf47;
		color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border: 1px solid #95bf47;
		font-size: 12px;
		font-weight: bold;
	}
</style>