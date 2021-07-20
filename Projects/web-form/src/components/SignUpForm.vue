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
    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label for="">Accept Terms and Conditions</label>
    </div>

    <!-- leaving here for reference -->
    <!-- <div>
      <input type="checkbox" value="piet" v-model="names">
      <label>Piet</label>
    </div>
    <div>
      <input type="checkbox" value="koos" v-model="names">
      <label>Koos</label>
    </div>
    <div>
      <input type="checkbox" value="jan" v-model="names">
      <label>Jan</label>
    </div> -->

  </form>
  <p>Email {{ email }}</p>
  <p>Password {{ password }}</p>
  <p>Role {{ role }}</p>
  <p>Terms Accepted {{ terms }}</p>
  <!-- <p>Names {{ names }}</p> -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      email:'your@email.com',
      password:'######',
      role:'none',
      terms:false,
      names:[]
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
input[type="checkbox"]{
  display:inline-block;
  width:16px;
  margin: 0 16px 0 0;
  position:relative;
  top:2px;
  }

</style>