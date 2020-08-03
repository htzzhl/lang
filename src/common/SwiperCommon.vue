<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- 幻灯内容 -->
        <swiper-slide :key="i" v-for="(str, i) in swiperimg">
          <img :src="str" width="100%" height="500" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
		swiperimg:{
			type:Array
		}
	},
    data () {
      return {
        swiperOption: {

          initialSlide: 0,//设定初始化时slide的索引
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "bullets"
          },
          loop: true,
          speed: 400,
          direction: 'horizontal',
          paginationClickable: true,
          mousewheelControl: true,
        //   autoplay: 1000,
          autoplay: true,
          autoplayDisableOnInteraction: false,
          observer: true,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) {
            console.log(swiper)
		  },
		  navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
//           hideOnClick: true, //点击slide时显示/隐藏按钮
        },
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
          draggable: true, //该参数设置为true时允许拖动滚动条。
          snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
          dragSize: 10, //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        }
        }
      }
    },
    mounted () {
      // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    //   this.swiper.slideTo(1, 1000, false)
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      Swiper,
      SwiperSlide
    }
  }
</script>
<style>
</style>
