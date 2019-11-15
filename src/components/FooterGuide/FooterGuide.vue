<!--
 * @Author: your name
 * @Date: 2019-11-09 20:30:48
 * @LastEditTime: 2019-11-09 23:11:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\src\components\FooterGuide\FooterGuide.vue
 -->
//底部组件
<template>
 <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="Goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="Goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="Goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="Goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
 </div>
</template>
<script>
export default{
methods:{
    Goto(path){
       this.$router.replace(path) //跳转路由
    }
}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

.footer_guide  
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>