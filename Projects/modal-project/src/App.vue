<template>
<div>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name"> -->
  <!-- <button @click="handleClick">Click me!</button> -->
  <!-- Passing Props & Binding -->
  <!-- Emitting custom event: close -->
  <teleport to=".modals" v-if="showModal">
      <!-- <Modal 
        :header="header" 
        :text="text"
        theme="sale"
        @close="toggleModal"
      /> -->
      <!-- Slots -->
      <Modal @close="toggleModal">
        <template v-slot:links>
          <a href="#">Join</a>
          <a href="#">More info</a>
        </template>
        <h1>Hello from slot</h1>
        <p>What what whaaaaaat!</p>
      </Modal>
  </teleport>
  <div v-if="showModalTwo">
      <!-- Slots -->
      <Modal @close="toggleModalTwo">
        <h1>Hello from #2</h1>
        <p>What what whaaaaaat AGAIN!</p>
      </Modal>
  </div>
  <!-- Emitting custom event: start -->
  <button @click="toggleModal">Show Modal</button>
  <button @click="toggleModalTwo">Show Modal #2</button>
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
      // header: "Join!",
      // text: "You are one of the lucky winners",
      showModal: false,
      showModalTwo:false
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
    toggleModalTwo(){
            this.showModalTwo = !this.showModalTwo
        },
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
