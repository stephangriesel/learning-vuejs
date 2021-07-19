<template>
<div>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank"> {{ rank }} </p>
</div>
</template>

<script>
export default {

props:['score'],
data() {
    return {
        rank: null
    }
},
mounted(){
if (this.score < 250){
            this.rank = 'Amazing!'
        } else if (this.score < 400){
            this.rank = 'Mmmmm, average'
        } else {
            this.rank = 'Oh no... slow poke'
        }
    }
}
</script>

<style>

</style>