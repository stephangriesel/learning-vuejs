<template>
  <div class="admin-post-page">
    <div class="update-form">
      <AdminPostForm :post="loadedPost" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";

export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Stephan",
        title: "First post",
        content: "Very nice post",
        thumbnailLink:
          "https://code.visualstudio.com/assets/docs/nodejs/vuejs/javascript-suggestions.png"
      }
    };
  }
};
</script>
