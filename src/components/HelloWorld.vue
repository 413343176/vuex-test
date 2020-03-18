<template>
  <div class="hello">
    <h1>{{ this.$store.getters.getStateCount }}</h1>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <h1>{{ getStateCount }}</h1>
    <h1>{{ count1 }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    // ...mapGetters(['getStateCount']),//上下两句意义一样  使用对象展开运算符将此对象混入到外部对象中
    //映射 this.getStateCount 为 this.$store.getters.getStateCount
    ...mapGetters({ getStateCount: 'getStateCount' }),
    ...mapState({
      count1: state => state.count
    })
  },
  methods: {
    // ...mapActions(['addFun', 'minusFun']),//上下两句意义一样
    //映射 this.addFun 为 this.$storestore.dispatch("addFun")
    ...mapActions({ addFun: 'addFun', minusFun: 'minusFun' }),
    add() {
      // this.$store.commit('add')
      // this.$store.dispatch('addFun', 10)
      this.addFun(10)
    },
    minus() {
      // this.$store.commit('minus')
      // this.$store.dispatch('minusFun')
      this.minusFun()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
