<!--
 * @Author: xin.chen
 * @Date: 2020-08-06 19:11:25
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-11 14:22:23
 * @Description: main page
-->
<template>
  <div class="main-container">
    <el-tabs 
      v-model="editableTabsValue"
      closable 
      @tab-remove="closeTab"
      @tab-click="clickTab($event.name)">
      <el-tab-pane 
        v-for="item of editableTabs" 
        :key="item.id" 
        :label="item.name" 
        :name="item.id"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'main',
  data(){
    return {
      editableTabsValue: '',
      editableTabs: [],
      tabIndex: 0,
      allOpenedTabs: [],
      storeOpenedTabs: this.$store.state.allOpenedTabs,
      // storeCurrentTab: this.$store.state.currentTab
    }
  },
  computed: {
    getChangeTab: {
      get() {
        return this.$store.state.currentTab
      },
      set (val) {
        console.log(val)
      }
      
    }
  },
  methods: {
    closeTab(targetName){
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.id === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.id;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.$router.push(activeName)
      this.editableTabs = tabs.filter(tab => tab.id !== targetName);
      let index = this.allOpenedTabs.indexOf(targetName)
      this.allOpenedTabs.splice(index,1)
      this.$store.commit('updateTab',targetName)
    },
    clickTab(targetName){
      this.$store.commit('changeTab',targetName)
      this.$router.push(targetName)
    }
  },
  watch: {
    storeOpenedTabs(val){
      if(val.length > this.allOpenedTabs.length){
        // let newTab = val[val.length-1]
        ++this.tabIndex
        this.editableTabs.push({
          name: val[val.length-1],
          id: val[val.length-1]
        })
        this.editableTabsValue = val[val.length-1]
        this.allOpenedTabs.push(val[val.length-1])
      }
      if(!val.length){
        this.$router.push('index')
        this.$store.commit('changeTab','')
      }
    },
    getChangeTab(val){
      // console.log(val)
      if(val !== this.editableTabsValue)
      this.editableTabsValue = val
    }
  },
  // 每次刷新页面时定位到首页，会产生错误信息，需要在router文件里配置
  created(){
    this.$router.push('index')
  }
}

</script>
<style scoped>
</style>