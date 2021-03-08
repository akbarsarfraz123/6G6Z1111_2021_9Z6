<template>
  <section id="settings">
    <div class>
      <Sidebar />
    </div>
    <div class="col1">
      <h3>Settings</h3>
      <p>Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success">Profile updated</p>
      </transition>

      <form @submit.prevent>
        <label for="name">Name</label>
        <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />

        <label for="phone">Phone</label>
        <input v-model.trim="name" type="number" :placeholder="userProfile.phone" id="phone" />

        <label for="title">Job Title</label>
        <input v-model.trim="title" type="text" :placeholder="userProfile.title" id="title" />

        <button @click="updateProfile()" class="button">Update Profile</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Sidebar from "@/components/Sidebar.vue";
export default {
  data() {
    return {
      Sidebar,
      name: '',
      title: '',
      phone: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.user.name,
        title: this.title !== '' ? this.title : this.user.title,
        phone: this.phone !== '' ? this.phone : this.user.phone,
      })

      this.name = ''
      this.title = ''
      this.phone = ''

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    }
  }
}
</script>