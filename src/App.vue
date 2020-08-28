<!--
 * @Author: xin.chen
 * @Date: 2020-08-05 17:42:33
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-07 13:52:21
 * @Description: 
-->
<template>
  <div id="app">
    <el-container>
      <el-aside class="nav"> 
        <Menu></Menu>
      </el-aside>
      <el-main>
        <Main></Main>
        <router-view></router-view> 
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Main from '@/components/Main'

export default {
  name: 'App',
  components: {
    Menu,
    Main
  }
}
</script>
<style>
.nav{
  width: 20%;
}
</style>
