import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  aaa:1,
  count:''
} //这里放全局参数
const mutations = {
  add(state,item){             //调用     this.$store.commit("increment");

    state.count=item;

    }


} //这里是set方法
const getters = {}//这里是get方法 
const actions = {} //这个部分我暂时用不上
const modules = {} //为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
  

 
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})


