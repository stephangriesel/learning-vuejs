<template>
  <h1>single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate(data) {
    // validate data and set condition based on properties received
    console.log(data);
    return data.params.id == 1;
  }
};
</script>
