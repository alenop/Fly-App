<template>
  <div class="page flex column">
    <Menu />
    <div class="flex column center search">                 <!-- search bar-->       
      <h1>Accueil</h1>
      <div class="flex row">
        <div class="flew column">
          <p>Aéroport :</p>
          <select>
            <option> </option>
            <option>CDG</option>
            <option>JFK</option>
            <option>DTW</option>
          </select>
        </div>
        <div>
          <p>Date :</p>
          <input/>
        </div>
        <button>Recherche</button>
      </div>
    </div>

    <div class="flex column left">                 <!-- flight list-->
      <div class="flex row flight">
        <div class="flex column">
          <h1>Vol n° 12345 - CDG-JFK</h1>
          <h2>Départ : Paris, France (CDG)</h2>
          <h2>Arrivée : New-York, États-Unis (JFK)</h2>
          <h3>Durée : 7h</h3>
          <h4>Places disponibles : 880/1000</h4>
          <h4>Prix : 1000€</h4>
        </div>
        <div class="flex">
          <button>Réserver une place</button>
        </div>
      </div>
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

.center {
  align-items: center;
}

.left {
  margin-left: 15vw !important;
}

.column {
  flex-direction: column;
}

.page {
  min-height: 100vh;
}

.search {
  margin-top: 5vh !important; 
  margin-bottom: 10vh !important;
}

.flight {
  align-items: baseline;
  align-content: space-between;
  gap: 10px;
 }
</style>

<script language="ts">
import Menu from '../components/Menu.vue'
export default {
  data() {},
  components: {
    Menu,
  },
  methods: {},
};
</script>
