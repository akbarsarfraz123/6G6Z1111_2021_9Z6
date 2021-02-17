<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Coursework</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="btn btn-success" type="button" data-toggle="modal" data-target="#importModal" id="import-btn" data-mdb-ripple-color="dark" @click="openModal()">Import</button>
          </li>
        </ul>
        <form class="d-flex input-group w-auto">
          <input type="search" class="form-control mx-2" placeholder="search-cards" aria-label="Search"/>
          <button class="btn btn-success" type="button" data-mdb-ripple-color="dark">Search</button>
        </form>
      </div>
    </div>
    <Modal id="modal" />
  </nav>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: {
    Modal
  },
  methods: {
      openModal(){
      const modal = document.getElementById("modal");
      modal.classList.add("show");
      },
      closeModal(){
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
      }
  },
  data() {
    return {
      search: "",
    };
    // },
    // computed: {
    //   filteredCards: function() {
    //     return this.cards.filter((card) => {
    //       return card.title.match(this.search);
    //     });
    //   }
  }
};
</script>

<style scoped lang="scss">
#mainBody{
  font-family: 'Roboto', sans-serif;
}

.shadow-bottom {
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%),
    0 2px 30px 0 rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
}
</style>
