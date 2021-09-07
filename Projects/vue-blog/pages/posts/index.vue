<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "~/components/posts/PostList.vue";

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    console.log("posts context", context);
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "First Post",
            thumbnail:
              "https://code.visualstudio.com/assets/docs/nodejs/vuejs/javascript-suggestions.png"
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "Second Post",
            thumbnail:
              "https://code.visualstudio.com/assets/docs/nodejs/vuejs/javascript-suggestions.png"
          }
        ]
      });
    }, 1000);
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
