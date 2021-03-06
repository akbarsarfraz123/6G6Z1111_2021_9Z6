import { createStore } from "vuex";
import * as fb from "../firebase";
import router from "../router/index";

export default createStore({
  state: {
    userProfile: {},
    userEmail: "",
    searchID: "",
    defaultMutations: fb.defaultMutations
  },
  getters: {
    getUserProfile: (state) => {
      return state.userProfile;
    },
    getUserEmail: (state) => {
      return state.userEmail;
    },
    getSearchID: (state) => {
      return state.searchID;
    }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setUserEmail(state, val) {
      state.userEmail = val;
    },
    setSearchID(state, val) {
      state.searchID = val;
      console.log("success : " + val);
    }
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
      ).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      // this will send various data to firestore in the users area to then be accessed.
      await fb.usersCollection.doc().set({
        name: form.name,
        title: form.title,
        phone: form.phone
      }),
        console.log("test" + user);
      if (user) dispatch("fetchUserProfile", form.email);
      {
        router.push("/");
      }
    },
    async updateProfile({ dispatch }, user) {
      // update user object
      await fb.usersCollection.doc(user).update({
        name: user.name,
        title: user.title,
        phone: user.phone
      })

      dispatch('fetchUserProfile', { uid: user })
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
