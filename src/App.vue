<!--
 * @Author: your name
 * @Date: 2019-11-02 14:11:03
 * @LastEditTime: 2019-11-12 05:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \waimai\src\App.vue
 -->
<template>
<div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.footerShow"></FooterGuide>
</div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default{
components:{
  FooterGuide
}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
/* #app 
width 100%
height 100%
background #f5f5f5 */
</style>
