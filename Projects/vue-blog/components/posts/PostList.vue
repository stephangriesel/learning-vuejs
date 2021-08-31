<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://i.stack.imgur.com/AZUmQ.jpg"
      title="Javascript"
      previewText="Yes this is Javascript"
    />
    <PostPreview
      id="2"
      thumbnail="https://miro.medium.com/max/1400/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg"
      title="Jquery"
      previewText="Urgh, this is Jquery"
    />
    <PostPreview
      id="3"
      thumbnail="https://code.visualstudio.com/assets/docs/nodejs/vuejs/javascript-suggestions.png"
      title="VueJS"
      previewText="This is VueJS, wooohoooo"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/posts/PostPreview";
import PostList from "~/components/posts/PostList.vue";

export default {
  components: {
    PostPreview,
    PostList
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
