<template>
  <div class="register">
    <h1>Inscription</h1>
    <div>
      <form>
        <p>Nom d'utilisateur</p>
        <input/>
        <p>Email</p>
        <input/>
        <p>Mot de passe</p>
        <input/>
        <p>Confirmer le mot de passe</p>
        <input/>
      </form>
        <p>
          <button @click="sign()">ins</button>
        </p>
      
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
<script setup lang="ts">
import axios from 'axios';
async function sign(){
  console.log(await axios.get('http://10.8.95.159:3000/user'));
  //axios.post('');
}
</script>