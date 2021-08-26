<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <button @click="$router.push('/products')">Go to products</button>
  </section>
</template>

<script>
export default {};
</script>
