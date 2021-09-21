<template>
  <div class="admin-post-page">
    <div class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
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
        loadedPost: {...res.data, id: context.params.postId}
      }
      
    })
    .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost){
      this.$store.dispatch('editPost', editedPost)
      .then(() => {
        this.$router.push('/admin')
      })
    }
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
