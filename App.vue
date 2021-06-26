<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#609" >
        <img slot="item-icon" src="./assets/img/home.png">
        <img slot="item-icon-active" src="./assets/img/home_active.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#609" >
        <img slot="item-icon" src="./assets/img/category.png">
        <img slot="item-icon-active" src="./assets/img/category_active.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#609" >
        <img slot="item-icon" src="./assets/img/profile.png">
        <img slot="item-icon-active" src="./assets/img/profile_active.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <!-- <tab-bar-item></tab-bar-item> -->

    </tab-bar>
  </div>
</template>

<script> 
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';



</style>
