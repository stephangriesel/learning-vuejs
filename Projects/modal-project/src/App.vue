<template>
<div>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name"> -->
  <!-- <button @click="handleClick">Click me!</button> -->
  <!-- Passing Props & Binding -->
  <!-- Emitting custom event: close -->
  <div v-if="showModal">
      <Modal 
        :header="header" 
        :text="text"
        theme="sale"
        @close="toggleModal"
      /> 
  </div>
  <!-- Emitting custom event: start -->
  <button @click="toggleModal">Show Modal</button>
  <!-- Emitting custom event: stop -->
  <!-- Event modifiers -->
  <button @click.shift="toggleModal">Show Modal(shift)</button>
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
      text: "You are one of the lucky winners",
      showModal: false
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
            this.showModal = !this.showModal
        },
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
