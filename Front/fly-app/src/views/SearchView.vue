<template>
  <div class="page flex column">
    <Menu />
    <div class="flex column center search">                 <!-- search bar-->       
      <h1>Accueil</h1>
      <div class="flex row search-item">
        <div class="flew column">
          <p>Aéroport de départ:</p>
          <select>
            <option> </option>
            <option>CDG</option>
            <option>JFK</option>
            <option>DTW</option>
          </select>
        </div>
        <div class="flew column">
          <p>Aéroport d'arrivée :</p>
          <select>
            <option> </option>
            <option>CDG</option>
            <option>JFK</option>
            <option>DTW</option>
          </select>
        </div>
        <button>Recherche</button>
      </div>
    </div>

    <div class="flex column left flights">                 <!-- flight list-->
      <div v-for="vol in vols" class="flex row flight">
        <div class="flex column">
          <h1>Vol n° {{ vol.id }} - {{ vol.codeDeparture }}-{{ vol.codeArrival }}</h1>
          <h2>Départ : {{ vol.cityDeparture }}, {{ vol.countryDeparture }} ({{ vol.codeDeparture }})</h2>
          <h2>Arrivée : {{ vol.cityArrival }}, {{ vol.countryArrival }} ({{ vol.codeArrival }})</h2>
          <h4>Durée : {{ vol.duration }}h</h4>
          <h4>Places disponibles : {{ vol.seatavailable }}/{{ vol.seat }}</h4>
          <h4>Prix : {{ vol.price }}€</h4>
        </div>
        <div class="flex column flightinput">
          <div class="flex row">
            <p>Nombre de bagages (100€/bagages) : </p>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div class="flex row">
            <p>Date :</p>
            <input/>
          </div>
          <button class="reservationbutton">Réserver une place</button>
        </div>
      </div>

      <!-- <div class="flex row flight">
        <div class="flex column">
          <h1>Vol n° 12345 - CDG-JFK</h1>
          <h2>Départ : Paris, France (CDG)</h2>
          <h2>Arrivée : New-York, États-Unis (JFK)</h2>
          <h4>Durée : 7h</h4>
          <h4>Places disponibles : 880/1000</h4>
          <h4>Prix : 1000€</h4>
        </div>
        <div class="flex column flightinput">
          <div class="flex row">
            <p>Nombre de bagages (100€/bagages) : </p>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div class="flex row">
            <p>Date :</p>
            <input/>
          </div>
          <button class="reservationbutton">Réserver une place</button>
        </div>
      </div> -->

      <!-- <div class="flex row flight">
        <div class="flex column">
          <h1>Vol n° 14785 - CDG-BTW</h1>
          <h2>Départ : Paris, France (CDG)</h2>
          <h2>Arrivée : Boston, États-Unis (BTW)</h2>
          <h4>Durée : 8h</h4>
          <h4>Places disponibles : 700/700</h4>
          <h4>Prix : 700€</h4>
        </div>
        <div class="flex column flightinput">
          <div class="flex row">
            <p>Nombre de bagages (100€/bagages) : </p>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div class="flex row">
            <p>Date :</p>
            <input/>
          </div>
          <button class="reservationbutton">Réserver une place</button>
        </div>
      </div> -->

      <!-- <div class="flex row flight">
        <div class="flex column">
          <h1>Vol n° 85236 - BTW-JFK</h1>
          <h2>Départ : Boston, États-Unis (BTW)</h2>
          <h2>Arrivée : New-York, États-Unis (JFK)</h2>
          <h4>Durée : 1h</h4>
          <h4>Places disponibles : 250/300</h4>
          <h4>Prix : 300€</h4>
        </div>
        <div class="flex column flightinput">
          <div class="flex row">
            <p>Nombre de bagages (100€/bagages) : </p>
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div class="flex row">
            <p>Date :</p>
            <input/>
          </div>
          <button class="reservationbutton">Réserver une place</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>

.flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

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
import Menu from '../components/Menu.vue'
export default {
  data() {
    return {
      vols: [
        {
          id: '12345',
          codeDeparture: 'CDG',
          cityDeparture: 'Paris',
          countryDeparture: 'France',
          codeArrival: 'JFK',
          cityArrival: 'New-York',
          countryArrival: 'États-Unis',
          duration: '7',
          seat: '1000',
          seatavailable: '700',
          price: '1000',
        },
        {
          id: '41275',
          codeDeparture: 'CDG',
          cityDeparture: 'Paris',
          countryDeparture: 'France',
          codeArrival: 'BTW',
          cityArrival: 'Boston',
          countryArrival: 'États-Unis',
          duration: '8',
          seat: '700',
          seatavailable: '600',
          price: '700',
        },
        {
          id: '94315',
          codeDeparture: 'BTW',
          cityDeparture: 'Boston',
          countryDeparture: 'États-Unis',
          codeArrival: 'JFK',
          cityArrival: 'New-York',
          countryArrival: 'États-Unis',
          duration: '1',
          seat: '300',
          seatavailable: '37',
          price: '300',
        }
      ]
    }
  },
  components: {
    Menu,
  },
  methods: {},
};
</script>
