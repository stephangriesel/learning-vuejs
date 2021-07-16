<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
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
            showBlock: false,
            timer: null,
            reactionTime:0
        }
    },
    mounted() {
        console.log('component mounted hook fired')
        setTimeout(() => {
            this.showBlock = true
            console.log("Delay:", this.delay)
            this.startTimer()
        }, this.delay);
    },
    methods: {
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer(){
            clearInterval(this.timer)
            console.log("Reaction time: ", this.reactionTime)
            this.$emit('end', this.reactionTime)
        },
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