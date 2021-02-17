<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="container-fluid">
      <!--   <li class="nav-item">
          <button
            class="btn btn-success"
            type="button"
            data-toggle="modal"
            data-target="#importModal"
            id="import-btn"
            data-mdb-ripple-color="dark"
            @click="openModal()"
          >
            Import
          </button>
        </li> -->
      <form class="d-flex mx-auto input-group w-50">
        <input
          type="search"
          class="form-control mx-auto"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-success"
          type="button"
          data-mdb-ripple-color="dark"
        >
          <font-awesome-icon icon="search" />
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
/*import Modal from "./Modal.vue";*/
export default {
  components: {},
  methods: {
    openModal() {
      const modal = document.getElementById("modal");
      modal.classList.add("show");
    },
    closeModal() {
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
    }
  },
  data() {
    return {
      search: ""
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
#mainBody {
  font-family: "Roboto", sans-serif;
}

.shadow-bottom {
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%),
    0 2px 30px 0 rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
}
</style>
