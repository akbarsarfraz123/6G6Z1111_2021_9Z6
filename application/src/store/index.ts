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
      const {user} =await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      // fetch user profile and set in state
      console.log(form.email);
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // set user profile in state
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      //commit("setUserProfile", userProfile.data());
      //commit("setUserProfile", user);
      commit("setUserEmail", user);

      console.log("test2" + user);
      // change route to dashboard
      {
        router.push("/");
      }
    },
    async signup({ dispatch }, form) {
      const  {user}  = await fb.auth.createUserWithEmailAndPassword(form.email,form.password);
        
      
      await fb.usersCollection.doc(user.uid).set({
        name: form.name2,
        title: form.title2,
        phone: form.phone2
      });

      console.log("test " + user);
      dispatch('fetchUserProfile', user)
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
