import {createStore} from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
import createPersistedState from "vuex-persistedstate"
import * as Cookies from 'js-cookie'
//const Cookies = require('js-cookie')

export const store = createStore({
  //plugins: [createPersistedState({
  //getState: (key) => Cookies.getJSON(key),
  //setState: (key, state) => Cookies.set(key, state, {expires: 3, secure: true})
  //})],
  plugins: [createPersistedState()],
  state: {
    userProfile: {},
    userEmail: "",
    userData: [],
    defaultMutations: fb.defaultMutations
  },
  getters: {
    getUserProfile: (state) => {
      return state.userProfile;
    },
    getUserEmail: (state) => {
      return state.userEmail;
    },
    getUserData: (state) => {
      return state.userData;
    }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setUserEmail(state, val) {
      state.userEmail = val;
    },
    setUserData(state, val){
      state.userData = val;
    }
  },
  actions: {
    async login({dispatch}, form) {
      // sign user in
      await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      // fetch user profile and set in state
      console.log(form.email);
      dispatch("fetchUserProfile", form.email);
    },
    async fetchUserProfile({commit}, email) {
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
    async signup({dispatch}, form) {
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
    async updateProfile({dispatch}, user) {
      // update user object
      await fb.usersCollection.doc(user).update({
        name: user.name,
        title: user.title,
        phone: user.phone
      })

      dispatch('fetchUserProfile', {uid: user})
    },

    async logout({commit}) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      router.push("/login");
    },
    async insertUserData({commit}, {mutationName, data}) {
      console.log(mutationName)
      fb.userCollection.doc(this.state.userEmail).collection("charts").doc(mutationName).set(
         data
      ).then(() => {console.log("passed")}).catch(() =>console.log("failed"))
    },
    async retrieveUserData({commit}) {
      const usersData = fb.userCollection.doc(this.state.userEmail).collection("charts");
      const userMutations: object[] = [];
      usersData.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const mutation = {
            "title": doc.id,
            "data": doc.data()
          };
          userMutations.push(mutation)
        })
        commit("setUserData", userMutations)
      })
      }
  },
  modules: {},
});
