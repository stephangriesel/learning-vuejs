import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
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
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
