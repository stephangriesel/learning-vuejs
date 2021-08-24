<template>
  <section class="container">
    <!-- <a href="/users">Users</a> -->
    <!-- <router-link></router-link> -->
    <nuxt-link to="/users">Users</nuxt-link>
    <button @click="$router.push('/products')">Go to products</button>
  </section>
</template>

<script>
export default {}
</script>
