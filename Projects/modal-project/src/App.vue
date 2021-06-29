<template>
<div>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <!-- <button @click="handleClick">Click me!</button> -->
  <!-- Passing Props & Binding -->
  <Modal 
    :header="header" 
    :text="text"
    theme="sale"
  /> 
  </div>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App, woohoooo!',
      header: "Join!",
      text: "You are one of the lucky winners"
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
