<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>{{this.$store.state.count}}</p>
    <button @click="add">+</button>
    <router-link to='/csstore'>跳转</router-link>

<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

  </div>
</template>

<script>
import { Button } from 'vant';
export default {
  name: 'HelloWorld',
  components:{
     [Button.name]:Button
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    const a={
      'a':1,
      'b':2
    }
    this.$store.state.count=a
  },
  methods:{
    add(){
      const c={
        'c':3,
        'd':4
      }
      this.$store.commit('add',c)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
