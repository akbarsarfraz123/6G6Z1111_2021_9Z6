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
      <form class="d-flex flex-col items-center input-group w-50 mx-auto">
        <div class="w-100 d-flex flex-row p-0">
          <input
          type="search"
          class="form-control z-10"
          id="search-bar"
          placeholder="Search"
          aria-label="Search"
          autocomplete="off"
          v-model="card"
          @input="filterCards"
          @focus="update"
        />
        <button
          class="btn btn-success"
          type="button"
          data-mdb-ripple-color="dark"
        >
          <font-awesome-icon icon="search" />
        </button>
        </div>
        <div class="w-100" v-if="filteredCards && modal">
          <div>
            <input type="text" class="list-group-item py-2 cursor-pointer" id="suggest" v-for="filteredCard in filteredCards" v-bind:key="filteredCard" :value="filteredCard" @click="setCard(filteredCard)" />
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
        'ABCDE',
        'ABC',
        'BCDE',
        'BEDC',
        'CDEF',
        'CDEEF',
        'DDDDD',
        'DEFGH',
        'E'
        ],
      filteredCards: [],
      modal: false
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
    update() {
      this.modal = true;
      this.filteredCards = [];
    },
    filterCards() {
      this.filteredCards = this.cards.filter(card => {
        return card.toLowerCase().startsWith(this.card.toLowerCase());
      })
    },
    setCard(card) {
      this.card = card;
      this.modal = false;
    },
  },
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
