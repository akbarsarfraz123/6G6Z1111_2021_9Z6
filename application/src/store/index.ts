
import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'



export default createStore({
  state: {
    userProfile: {},
    userEmail: "",
    userId:"",
    userRef:""
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
      state.userProfile = val
    },
  },
  actions: {

    async login({ dispatch }, form) {
      // sign user in
      const { user } =await fb.auth.signInWithEmailAndPassword(form.email, form.password);
      // fetch user profile and set in state
      console.log(form.email);
      dispatch("fetchUserProfile",user);
    },
    async signup({ dispatch }, form) {
      const user  = await fb.auth.createUserWithEmailAndPassword(form.email,form.password  
      ).catch(function(error) {
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
      await fb.usersCollection.doc(user.uid).set({ 
        name: form.name,
        title: form.title,
        phone: form.phone
      });

      console.log("test " + user );
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // set user profile in state
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())
      commit("setUserProfile", user);
      commit("setUserEmail", user);
     
      console.log("test2" + user);
      // change route to dashboard
      {
        router.push('/')
      }
    },
    
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title,
        phone: user.phone
      })

      dispatch('fetchUserProfile', { uid: userId })
    },
  },
  modules: {
  }
})
