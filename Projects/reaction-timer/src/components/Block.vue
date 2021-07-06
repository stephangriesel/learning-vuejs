<template>
  <div class="block">
      click me
  </div>
</template>

<script>
export default {
    props: [
        'delay'
    ]

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