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
        <button type="submit" :disabled="loading">Se connecter</button>
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
          // Ici tu appelles ton API pour la connexion
          // Exemple fictif : await axios.post('/api/login', { email: this.email, password: this.password });
  
          // Si la connexion réussit, redirige vers la page principale
          this.$router.push('/');
        } catch (error) {
          this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  