<template>
  <div>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email">
    <label>Password:</label>
    <input type="password" required v-model="password">
    <label>Role: </label>
    <select v-model="role">
      <option value="none">Choose Your Role</option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
  </form>
  <p>Email {{ email }}</p>
  <p>Password {{ password }}</p>
  <p>Role {{ role }}</p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      email:'your@email.com',
      password:'######',
      role:'none'
    }
  }
}
</script>

<style>

form {
  max-width: 420px;
  margin:30px auto;
  background:#FFF;
  text-align:left;
  padding:40px;
  border-radius:10px;
}

label {
  color:#AAA;
  display: inline-block;
  margin: 25px 0 15px;
  font-size:0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight:bold;
}

input, select {
  display:block;
  padding:10px 6px;
  width:100%;
  box-sizing: border-box;
  border:none;
  border-bottom:1px solid #DDD;
  color:#555;
}

</style>