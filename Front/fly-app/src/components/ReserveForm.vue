<template>
  <div class="centerForm flex row minispace">
    <div class="flex column bigspace">
      <div class="flex column minispace">
        <h1>Formulaire de reservation</h1>
        <h3>Vol n° {{ flight.id }} : {{ flight.codeDeparture }} -> {{ flight.codeArrival }}, le {{ date }}</h3>
        <h5>Quantités de bagages : {{ luggages }}</h5>
        <h3>Passagers : {{ passengers }}</h3>
      </div>
      <div>
        <button class="reserveformbutton" @click="close">Annuler</button>
        <button class="reserveformbutton" @click="submitPassengers">Réserver</button>
      </div>
    </div>
    <div class="passengerlist flex column tinyspace">
      <div v-for="(passenger, index) in passengerList" :key="index">
        <div class="flex row space">
          <p>Nom: </p>
          <input v-model="passenger.name" type="text" class="forminput">
          <p>Status: </p>
          <select v-model="passenger.status">
            <option value="Adulte">Adulte</option>
            <option value="Enfant">Enfant</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.centerForm {
  background-color: #4444FF;
  width: 80vw;
  height: 60vh;
  color: white;
  margin: 20vh 0 20vh 10vw;
  padding-left: 2vw;
  padding-top: 3vh;
  border-radius: 15px;
}

.reserveformbutton {
  background-color: white;
  color: #4444ff;
}

.passengerlist {
  overflow-y: auto;
  padding-right: 5vw;
  padding-bottom: 5vh;
}

.forminput {
  width: 20vw;
}

</style>

<script lang="ts">
  export default {
    data() {
    return {
      passengerList: [] as { name: string; status: string }[], // Liste réactive de tuples
    };
  },
    props: {
      passengers: { 
        type: Number, 
        required: true 
      },
      luggages: {
        type: Number,
        required: true
      },
      flight: {
        type: Object,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
  },
  created() {
    this.passengerList = Array.from({ length: this.passengers }, () => ({
      name: "",
      status: "Adulte",
    }));
  },
    components: {
    },
    methods: {
      close() {
        this.$emit('close');
      },
      submitPassengers() {
      console.log("Liste des passagers :", this.passengerList);
      alert("Les passagers ont été stockés avec succès !");
    },
    },
  };
</script>