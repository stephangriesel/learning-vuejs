<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  color: blue;
}
a {
  color: blue;
}
</style>
