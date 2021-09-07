<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last update: {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">{{ loadedPost.author }}</div>
      </div>
      <p class="post-content">By {{ loadedPost.content }}</p>
      <div class="post-feedback">
        <p>
          Any thoughts? <a href="mailto:mymail@gmail.com">mymail@gmail.com</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    console.log("dynamic post context:", context);
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: "First Post (ID: " + context.params.id + ")",
          previewText: "First Post",
          author: "Stephan",
          updatedDate: new Date(),
          content: "Random text which is the full text. Not preview text.",
          thumbnail:
            "https://code.visualstudio.com/assets/docs/nodejs/vuejs/javascript-suggestions.png"
        }
      });
    }, 1000);
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
