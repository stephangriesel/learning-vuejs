<template>
  <div class="admin-post-page">
    <div class="update-form">
      <AdminPostForm :post="loadedPost" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
import axios from 'axios'

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  asyncData(context){
    return axios.get('https://vue-blog-a3fc2-default-rtdb.europe-west1.firebasedatabase.app/posts/' + context.params.postId + '.json')
    .then(res => {
      return{
        loadedPost: res.data
      }
      
    })
    .catch(e => context.error());
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
