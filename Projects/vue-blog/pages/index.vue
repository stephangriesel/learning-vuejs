<template>
  <div class="home-page">
    <section class="intro">
      <h1>The Latest</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/write.jpg");
  background-position: center;
  background-size: center;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import PostList from "~/components/posts/PostList";
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    console.log("async data loaded");
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
    }, 5500);
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  created() {}
};
</script>
