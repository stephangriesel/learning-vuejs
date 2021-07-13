<template>
  <div class="block" v-if="showBlock">
      click me
  </div>
</template>

<script>
export default {
    props: [
        'delay'
    ],
    data() {
        return {
            showBlock: false
        }
    },
    mounted() {
        console.log('component mounted hook fired')
        setTimeout(() => {
            this.showBlock = true
            console.log("Delay:", this.delay)
        }, this.delay);
    },
    updated() {
        console.log('component updated hook fired')
    },
    unmounted() {
        console.log('component unmounted')
    }

}
</script>

<style>
.block {
    width:400px;
    background:green;
    border-radius:10px;
    color:#FFF;
    text-align: center;
    margin:40px auto;
    padding:40px;
}
</style>