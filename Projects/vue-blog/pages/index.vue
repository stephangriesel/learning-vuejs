<template>
  <div class="home-page">
    <section class="intro">
      <h1>The Latest</h1>
    </section>
    <section class="featured-posts">
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
import PostPreview from "~/components/posts/PostPreview";
export default {
  components: {
    PostPreview
  }
};
</script>
