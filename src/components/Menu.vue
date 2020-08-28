<!--
 * @Author: xin.chen
 * @Date: 2020-08-06 17:31:23
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-07 15:26:49
 * @Description: 
-->
<template>
  <div class="menu-container">
    <el-menu class="el-menu-vertical-demo" router >
      <el-menu-item index="index" @click="menuClick('index')">首页</el-menu-item>
      <el-submenu v-for="item of menu" :key="item.id" :index="item.id">
        <template slot="title">{{item.name}}</template>
        <el-menu-item 
          v-for="sub of item.sub" 
          :key="sub.id" 
          :index="sub.id"
          @click="menuClick(sub.id)">
          {{sub.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menuConfig from '@/menu-config'
export default {
  name: 'Menu',
  data(){
    return {
      menu: menuConfig,
      allOpenedTabs: this.$store.state.allOpenedTabs
    }
  },
  methods: {
    menuClick(key){
      // console.log(this.allOpenedTabs)
      if(this.allOpenedTabs.indexOf(key) === -1){
        this.$store.commit('addTab',key)
      }else{
        this.$store.commit('changeTab',key)
        // console.log(this.$store.state.currentTab)
      }
    }
  }
}

</script>
<style scoped>
.menu-container{
  background-color: rgba(00, 00, ff, .2);
}
</style>