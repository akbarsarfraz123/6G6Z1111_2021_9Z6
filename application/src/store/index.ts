import { createStore } from "vuex";
import * as fb from "../firebase";
import router from "../router/index";

export default createStore({
  state: {
    userProfile: {},
    userEmail: "",
  },
  getters: {
    getUserProfile: (state) => {
      return state.userProfile;
    },
    getUserEmail: (state) => {
      return state.userEmail;
    },
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setUserEmail(state, val) {
      state.userEmail = val;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      // fetch user profile and set in state
      console.log(form.email);
      dispatch("fetchUserProfile", form.email);
    },
    async fetchUserProfile({ commit }, email) {
      // set user profile in state
      //commit("setUserProfile", userProfile.data());
      //commit("setUserProfile", user);
      commit("setUserEmail", email);

      console.log("test2" + email);
      // change route to dashboard
      {
        router.push("/");
      }
    },
    async signup({ dispatch }, form) {
      const user = fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      console.log("test " + user);
      if (user) dispatch("fetchUserProfile", form.email);
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      router.push("/login");
    },
  },
  modules: {},
});
