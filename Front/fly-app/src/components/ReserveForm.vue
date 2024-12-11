<template>
  <div class="centerForm flex row minispace">
    <div class="flex column bigspace">
      <div class="flex column minispace">
        <h1>Formulaire de reservation</h1>
        <h3>Vol n° {{ flight.nom }} : {{ flight.departureAirport.code }} -> {{ flight.arrivalAirport.code }}, le {{ date }}</h3>
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
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import { useUserStore } from '@/stores/userStore';

const store = useUserStore(); // Access Pinia store

// Props
const props = defineProps({
  passengers: {
    type: Number,
    required: true,
  },
  luggages: {
    type: Number,
    required: true,
  },
  flight: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Emits
const emit = defineEmits(['close']);

// Reactive state
const passengerList = ref<{ name: string; status: string }[]>([]);

// Lifecycle hook equivalent to "created"
onMounted(() => {
  passengerList.value = Array.from({ length: props.passengers }, () => ({
    name: '',
    status: 'Adulte',
  }));
});

// Methods
const close = () => {
  emit('close');
};

const submitPassengers = async () => {
  try {
    await axios.post('http://localhost:3000/book', {
      billets: passengerList.value,
      bags: props.luggages,
      flightId: props.flight.id,
      date: props.date,
      userId: store.currentUser ? store.currentUser['id'] : null,
    });
    console.log('Liste des passagers :', passengerList.value);
    alert('Les passagers ont été stockés avec succès !');
  } catch (error) {
    console.error('Erreur lors de la soumission des passagers :', error);
  }
};
</script>