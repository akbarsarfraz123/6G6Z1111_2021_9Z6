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
          <div class="form-group">
            <input type="text" placeholder="Name" v-model="testObject.name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Value" v-model="testObject.value" class="form-control">
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
      cards: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"],
      filteredCards: [],
      modal: false,

      testObjects: {},
      testObject: {
        name: null,
        value: null
      }
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
      this.searchDatabase;
    },
    filterCards() {
      if(this.card == '') {
        this.update();
      }
      else {
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
    searchDatabase() {
      db.collection("testCollection").doc("testDoc")
      .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });
    }
  },
  created: function(){
    db.collection("testCollection").doc("testDoc")
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });
  }
};
</script>

<style scoped lang="scss">

button{
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

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}

#suggest{
  cursor: pointer;
}

#search-bar, #suggest{
  width: 90%;
  padding: 6px 12px;
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
