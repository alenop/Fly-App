<template>
  <div class="page flex column">
    <Menu />
    <div v-if="ifVisible" class="blur">
      <ReserveForm  @close="ifVisible = false" :passengers="reservepassengers" :flight="reserveFlight" :date="reservedate" :luggages="reserveluggage"/>
    </div>
    <div class="flex column center search">               <!-- search bar-->       
      <h1>Accueil</h1>
      <div class="flex row search-item">
        <div class="flew column">
          <p>Aéroport de départ:</p>
          <select>
            <option>CDG</option>
            <option>JFK</option>
            <option>DTW</option>
          </select>
        </div>
        <div class="flew column">
          <p>Aéroport d'arrivée :</p>
          <select>
            <option>CDG</option>
            <option>JFK</option>
            <option>DTW</option>
          </select>
        </div>
        <button>Recherche</button>
      </div>
      <div class="flex column">
        <p>Monnaie: </p>
        <select v-model="reservecurrency" id="currency">
          <option v-for="currency in currencies" :value="currency"> 
            {{ currency.code }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex column left flights">                 <!-- flight list-->
      <div v-for="vol in vols" class="flex row flight">
        <div class="flex column">
          <h1>Vol n° {{ vol.nom }} - {{ vol.departureAirport }}-{{ vol.arrivee }}</h1>
          <h2>Départ : {{ vol.cityDeparture }}, {{ vol.countryDeparture }} ({{ vol.codeDeparture }})</h2>
          <h2>Arrivée : {{ vol.cityArrival }}, {{ vol.countryArrival }} ({{ vol.codeArrival }})</h2>
          <h4>Places disponibles : {{ vol.seatavailable }}/{{ vol.place }}</h4>
          <h4>Prix : {{ calculatePriceCurrency(vol) }}{{ reservecurrency.symbol }}</h4>
        </div>
        <div>
          <form @submit.prevent="showNextForm(vol)" class="flex column flightinput">
            <div class="flex row minispace">
              <p>Nombre de bagages ({{ calculateLuggageCurrency() }}{{ reservecurrency.symbol }}/bagages) : </p>
              <input type="number" v-model="reserveluggage" min="0" max="10"/>
            </div>
            <div class="flex row minispace">
              <p>Nombres de personnes : </p>
              <input type="number" v-model="reservepassengers" min="1" max="100"/>
            </div>
            <div class="flex row minispace">
              <p>Date :</p>
              <input type="date" id="date" v-model="reservedate">
            </div>
            <div class="flex row minispace">
              <h4>Prix total : {{ calculatePriceTotal(vol) }}{{ reservecurrency.symbol }}</h4>
              <button class="reservationbutton">Suivant</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style> 

.center {
  align-items: center;
}

.left {
  margin-left: 10vw;

}

.page {
  min-height: 100vh;
}

.search {
  margin-top: 5vh; 
  margin-bottom: 10vh;
  gap: 5vh;
}

.search-item {
  column-gap: 5vw;
  align-items: baseline;
}

.flights {
  gap: 35px;
}

.flight {
  align-items: baseline;
  align-content: space-between;
  gap: 10px;
  border: outset 2px #4444FF;
  border-radius: 15px;
  max-width: 55vw;
  justify-content: space-around;
  padding: 3vh 2vw;
 }

 .flightinput {
  row-gap: 5vh;
 }

 .blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(42, 48, 134, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  z-index: 1000;
 }

 h1 {
  text-decoration: underline;
  font-weight: 200;
  font-family: Georgia, 'Times New Roman', Times, serif;
 }

 h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
 }

 h4 {
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
 }

 p {
  font-family: Georgia, 'Times New Roman', Times, serif;
 }

 input {
  margin-left: 10px;
 }
</style>

<script language="ts">
import ReserveForm from '@/components/ReserveForm.vue';
import Menu from '../components/Menu.vue'
import axios from 'axios';

export default {
  data() {
    return {
      currencies: [
        {
          code: 'EUR',
          name: 'Euros',
          rate: '1',
          symbol: '€',
        },
        {
          code: 'USD',
          name: 'Dollars Américains',
          rate: '1.0581',
          symbol: '$',
        },
        {
          code: 'JPY',
          name: 'Yen',
          rate: '159.25',
          symbol: '¥'
        },
        {
          code: 'GPB',
          name: 'Livres Sterling',
          rate: '0.82855',
          symbol: '£'
        },
        {
          code: 'CAD',
          name: 'Dollars Canadien',
          rate: '1.4882',
          symbol: '$'
        },
      ],
      vols: [],
      reserveluggage: '0',
      reservepassengers: '1',
      reservedate: new Date().toISOString().substr(0, 10),
      reservecurrency: { code: 'EUR', name: 'Euros', rate: '1', symbol: '€'},
      reserveFlight: '',
      ifVisible: false,
    }
  },
  components: {
    Menu,
    ReserveForm,
  },
  mounted() {
    this.getFlights();
  },
  methods: {
    showNextForm(vol) {
      this.ifVisible = true;
      this.reserveFlight = vol;
    },
    reserve(vol) {
      const totalprice = this.calculatePriceTotal(vol);
      alert("Merci pour votre reservation pour le vol Départ : " + vol.cityDeparture + " (" + vol.codeDeparture + ") - " + vol.cityArrival + " (" + vol.codeArrival + ")" + " ! \nNombres de bagages : " + this.reserveluggage + "\nDate de réservation : " + this.reservedate + "\nPrix total : " + totalprice + this.reservecurrency.symbol);
    },
    calculatePriceTotal(vol) {
      const luggageprice = parseInt(this.reserveluggage) * this.calculateLuggageCurrency();
      return (this.calculatePriceCurrency(vol) * this.reservepassengers)+luggageprice;
    },
    calculateLuggageCurrency() {
      return parseInt(parseFloat(this.reservecurrency.rate) * 100);
    },
    calculatePriceCurrency(vol) {
      const rate = parseFloat(this.reservecurrency.rate);
      return parseInt(parseInt(vol.prix) * rate);
    },
    getFlights() {
      axios.get('http://localhost:3000/flights')
        .then(response => {
          this.vols = response.data.flight;
          this.getAirports();
          //console.log(this.vols);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des vols:', error);
        });
    },
    getAirports() {
      this.vols.forEach((vol) => {
        axios.get(`http://localhost:3000/airports/id/${vol.depart}`)
          .then(response => {
            console.log(response.data);
            console.log(vol.depart);
            vol.departureAirport = response.data.airport;
            console.log('Aéroport ajouté pour vol:', vol);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de l\'aéroport:', error);
          });
        });
      }
  },
};
</script>
