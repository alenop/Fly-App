<head>
</head>
<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" required />
        </div>
       <div class="se connecter"><button type="submit" :disabled="loading" style="position: relative; top: 20px;">Se connecter</button></div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        errorMessage: '',
      };
    },
    methods: {
      async login() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
        
          this.$router.push('/home');
        } catch (error) {
          this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  