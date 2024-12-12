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
          <option v-for="currency of currencies" :value="currency"> 
            {{ currency.currency }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex column left flights">                 <!-- flight list-->
      <div v-for="vol in vols" class="flex row flight">
        <div class="flex column">
          <h1>Vol n° {{ vol.nom }} - {{ vol.departureAirport.code }}-{{ vol.arrivalAirport.code }}</h1>
          <h3>. Départ : {{ vol.departureAirport.nom }} - {{ vol.departureAirport.ville }}, {{ vol.departureAirport.pays }}</h3>
          <h3>. Arrivée : {{ vol.arrivalAirport.nom }} - {{ vol.arrivalAirport.ville }}, {{ vol.arrivalAirport.pays }}</h3>
          <h4>Places disponibles : {{ vol.seatavailable }}/{{ vol.capacity }}</h4>
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
  margin: 5vh 20vw 10vh 20vw;
  gap: 5vh;
  color: white;
  background-color:  #24248556;
  border-radius: 2%;
  padding-bottom: 3vh;
}

.search-item {
  column-gap: 5vw;
  align-items: baseline;
}

.flights {
  gap: 35px;
  margin-bottom: 10vh;
}

.flight {
  align-items: baseline;
  align-content: space-between;
  gap: 10px;
  border: outset 2px #4444FF;
  border-radius: 15px;
  max-width: 65vw;
  justify-content: space-around;
  padding: 3vh 2vw;
  background-color: #2424858d;
  color: white;
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
      // currencies: [
      //   {
      //     code: 'EUR',
      //     name: 'Euros',
      //     rate: '1',
      //     symbol: '€',
      //   },
      //   {
      //     code: 'USD',
      //     name: 'Dollars Américains',
      //     rate: '1.0581',
      //     symbol: '$',
      //   },
      //   {
      //     code: 'JPY',
      //     name: 'Yen',
      //     rate: '159.25',
      //     symbol: '¥'
      //   },
      //   {
      //     code: 'GPB',
      //     name: 'Livres Sterling',
      //     rate: '0.82855',
      //     symbol: '£'
      //   },
      //   {
      //     code: 'CAD',
      //     name: 'Dollars Canadien',
      //     rate: '1.4882',
      //     symbol: '$'
      //   },
      // ],
      vols: [],
      currencies: [],
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
  async mounted() {
    await this.getFlights();
    await this.getCurrencies();
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
      return parseInt(parseFloat(this.reservecurrency.value ?? 1) * 100);
    },
    calculatePriceCurrency(vol) {
      const rate = parseFloat(this.reservecurrency.value ?? 1);
      return parseInt(parseInt(vol.prix) * rate);
    },
    async getCurrencies() {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA"); 
      await axios.get('http://localhost:3000/rates')
        .then(response => {
          console.log(response.data.message);
          this.currencies = response.data.message;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des monnaies:', error);
        })
    },
    async getFlights() {
      await axios.get('http://localhost:3000/flights')
        .then(response => {
          this.vols = response.data.flights;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des vols:', error);
        });
    },

  },
};
</script>
