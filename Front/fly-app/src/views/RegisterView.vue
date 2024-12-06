

<template>
  <div class="register">
    <h1 style="position: relative; left: 120px;">Inscription</h1>
    <div>
      <form @submit.prevent="sign">
        <p for="">Nom d'utilisateur : </p></br>
        <input type="text" v-model="username" placeholder="Entrez votre nom d'utilisateur" />
        
        <p for="">Email </p>
        <input type="email" v-model="email" placeholder="Entrez votre email" />
        
        <p>Mot de passe</p>
        <input type="password" v-model="password" placeholder="Entrez votre mot de passe" />
        
        <p>Confirmer le mot de passe</p>
        <input type="password" v-model="confirmPassword" placeholder="Confirmez votre mot de passe" />
        
        <p>
          <button type="submit" style=" background-color: rgb(54, 69, 79); position: relative; top: 25px;">Inscription</button>
        </p>
      </form>
    </div>
  </div>
</template>

<style>

body{
    background-color: white; 
    display:flex; 
    justify-content: center;
    align-items: center;
    height: 100vh;

}
form {
  display: flex;
  flex-direction: column; 
  align-items: center;   
  width: 300px;          
  padding: 20px;         
   border: 1px solid #ccc; 
  border-radius: 8px;     
  position: relative;
  left: 50px;
  top: 40px;
}
.register{
    width: 400px;
    height: 600px;
    background: #4444FF;
    position: absolute; 
    right: 550px;
    top: 110px; 
}


input, button { 
  margin-bottom: 20px;  /* Espacement entre les champs */
  padding: 10px;        /* Espacement interne des champs */
  width: 100%;          /* Largeur à 100% pour que les champs prennent toute la largeur */
  border-radius: 4px;   /* Coins arrondis pour les champs */
  border: 1px solid #ccc;
 
}

button {
  background-color: #4CAF50; 
  color: white;            
  cursor: pointer;         
} 
p,
label,
h1{
color: white;
 font-weight: bold;
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