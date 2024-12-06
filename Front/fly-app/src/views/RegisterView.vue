

<template>
  <div class="register">
    <h1>Inscription</h1>
    <div>
      <form @submit.prevent="sign">
        <p>Nom d'utilisateur</p>
        <input type="text" v-model="username" placeholder="Entrez votre nom d'utilisateur" />
        
        <p>Email</p>
        <input type="email" v-model="email" placeholder="Entrez votre email" />
        
        <p>Mot de passe</p>
        <input type="password" v-model="password" placeholder="Entrez votre mot de passe" />
        
        <p>Confirmer le mot de passe</p>
        <input type="password" v-model="confirmPassword" placeholder="Confirmez votre mot de passe" />
        
        <p>
          <button type="submit">Inscription</button>
        </p>
      </form>
    </div>
  </div>
</template>

<style>
.register {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  margin-top: 2vh;
}
</style>

<script language="ts">
import router from '@/router';
import axios from 'axios';
import Menu from '../components/Menu.vue'
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async sign() {
      if (this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }
      // Example: Print the form data to the console
      await axios.post("http://localhost:3000/user/sign",{username:this.username,mail:this.email,password:this.password});

      alert('Inscription réussie!');
      router.push("/");
      // Here, you can call an API or process the form data further.
    },
  },
};
</script>