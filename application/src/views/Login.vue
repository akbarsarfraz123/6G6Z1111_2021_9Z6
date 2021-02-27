<template>
  <div id="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>
    <section>
      <div class="col1">
        <link rel="icon" href="<%= BASE_URL %>humanheart2.png" />
        <h1>Experimental Data-sharing Platform for Cardiomyopathies</h1>
        <p>
          Welcome to the Platform Please Sign In Using your Credentials Or
          Create An Account Below
        </p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              placeholder="you@email.com"
              id="email1"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="******"
              id="password1"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <label for="name">Name</label>
            <input
              v-model.trim="signupForm.name2"
              type="text"
              placeholder="Eg.Henry Jackson"
              id="name"
            />
          </div>
          <div>
            <label for="email2">Email</label>
            <input
              v-model.trim="signupForm.email"
              type="text"
              placeholder="youremailgoeshere@email.com"
              id="email2"
            />
          </div>
          <div>
            <label for="password2">Password</label>
            <input
              v-model.trim="signupForm.password"
              type="password"
              placeholder="min 6 characters"
              id="password2"
            />
          </div>
          <div>
            <label for="title">Title</label>
            <input
              v-model.trim="signupForm.title"
              type="Text"
              placeholder="eg.MMU"
              id="title"
            />
          </div>
          <div>
            <label for="phone">Mobile Number</label>
            <input
              v-model.trim="signupForm.phone2"
              type="Number"
              placeholder="eg.07937333333"
              id="phone"
            />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        email: "",
        password: "",
        title:"",
        name:"",
        phone:""
      },
      showLoginForm: true,
      showPasswordReset: false
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        title: this.signupForm.title,
        name: this.signupForm.name,
        phone: this.signupForm.phone,
      });
    }
  }
};
</script>
