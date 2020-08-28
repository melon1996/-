/*
 * @Author: xin.chen
 * @Date: 2020-08-05 17:42:33
 * @LastEditors: xin.chen
 * @LastEditTime: 2020-08-07 14:10:42
 * @Description: vuex configuration
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTab: '',
    allOpenedTabs: []
  },
  mutations: {
    addTab(state,payload){
      state.allOpenedTabs.push(payload)
    },
    changeTab(state,payload){
      state.currentTab = payload
    },
    updateTab(state,payload){
      let index = state.allOpenedTabs.indexOf(payload)
      state.allOpenedTabs.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
