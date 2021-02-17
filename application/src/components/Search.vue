<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="w-100">
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
      <form class="d-flex input-group w-50 mx-auto">
        <div class="w-100 d-flex flex-row">
          <input
          type="search"
          class="form-control p-0"
          id="search-bar"
          placeholder="Search"
          aria-label="Search"
          autocomplete="off"
          v-model="card"
          @input="filterCards"
        />
        <button
          class="btn btn-success"
          type="button"
          data-mdb-ripple-color="dark"
        >
          <font-awesome-icon icon="search" />
        </button>
        </div>
        <div class="w-100 d-flex flew-row p-0" v-if="filteredCards">
          <div class="w-100">
            <input type="text" class="list-group-item p-0" id="suggest" v-for="filteredCard in filteredCards" v-bind:key="filteredCard" :value="filteredCard" />
          </div>
        </div>
        </form>
    </div>
  </nav>
</template>

<script>
/*import Modal from "./Modal.vue";*/
export default {
  components: {},
  data: function() {
    return {
      card: '',
      cards: [
        'Apple',
        'Banana',
        'Cantelope',
        'Date',
        'Elderberry'
        ],
      filteredCards: [],
    };
  },
  methods: {
    openModal() {
      const modal = document.getElementById("modal");
      modal.classList.add("show");
    },
    closeModal() {
      const modal = document.getElementById("modal");
      modal.classList.remove("show");
    },
    autocomplete() {
      alert();
    },
    filterCards() {
      this.filteredCards = this.cards.filter(card => {
        return card.toLowerCase().startsWith(this.card.toLowerCase());
      })
    }
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

#search-bar, #suggest{
  width: 90%;
  padding: 6px 12px;
}

.shadow-bottom {
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%),
    0 2px 30px 0 rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
}
</style>
