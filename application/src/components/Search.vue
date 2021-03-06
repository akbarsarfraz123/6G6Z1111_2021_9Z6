<template>
  <nav class="navbar sticky-top navbar-expand-lg">
    <div class="w-100">
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
            class="btn btn-danger"
            type="button"
            data-mdb-ripple-color="dark"
            @click="submit"
          >
            <font-awesome-icon icon="search" />
          </button>
          </div>
          <div class="w-100" id="search-cards" v-if="filteredCards && modal">
            <div>
              <div id="blanket" @click="killModal"></div>
              <input type="text" class="list-group-item py-2 my-1" id="suggest" v-for="filteredCard in filteredCards.slice(0,5)" v-bind:key="filteredCard" :value="filteredCard" @click="setCard(filteredCard)" />
            </div>
          </div>
        </form>
    </div>
  </nav>
</template>

<script>
import {db} from '../firebase';
export default {
  components: {},
  data: function() {
    return {
      card: '',
      // cards: ["MYBPC3Fig4", "MYBPC3Fig5", "MYBPC3Fig8", "MYHFig7", "MYHFig8", "TNNTFig2", "TNNTFig3", "TNNTFig8", "TPM1Fig2", "TPM1Fig4"],
      cards: [],
      filteredCards: [],
      modal: false,
    };
  },
  mounted: function() {
    this.findCharts();
  },
  methods: {
    findCharts() {
      db.collection("mutationsCollection").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {         
          this.cards.push(doc.id);
        });
      });
    },
    update() {
      this.modal = true;
      this.filteredCards = [];
      console.log(this.$store.getters.getSearchID);
    },
    filterCards() {
      if (this.card == "") {
        this.update();
      } else {
        this.filteredCards = this.cards.filter(card => {
          return card.toLowerCase().includes(this.card.toLowerCase());
        })
      }
    },
    setCard(card) {
      this.card = card;
      this.modal = false;
    },
    killModal() {
      this.modal = false;
    },
    submit() {
      this.$store.state.searchID = this.card;
      // this.$store.mutations.setSearchID(this.card);
      this.update();
    },
  }
};
</script>

<style scoped lang="scss">
button {
  background: linear-gradient(
    to right,
    #a80a14c5 0%,
    #a80a14c5 100%,
    #fff 0%,
    #fff 100%
  );
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  height: 38px;
}

#mainBody{
  font-family: "Roboto", sans-serif;
}

#blanket{
    position: fixed;
    padding: 0;
    margin: 0;

    z-index: 2;

    top: 0;
    left: 0;

  width: 100%;
  height: 100%;
}

#suggest {
  cursor: pointer;
}

#search-bar,
#suggest {
  width: 90%;
  padding: 6px 12px;

  z-index: 10;
}

.form-control {
  border-color: #a80a14c5;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
}

.shadow-bottom {
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
  -webkit-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%),
    0 2px 30px 0 rgb(0 0 0 / 35%);
  -moz-box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(0 0 0 / 35%);
}
</style>
