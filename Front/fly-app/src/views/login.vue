<head>
</head>

<template>
   <h1 style="font-weight: bold; position: relative; top: -250px; left:     00px;">Bienvenue sur votre site de résevation de </h1>
    <div id="cardre-connexion">
      <h2 style="color: white; font-weight: bold; position: relative;  left: 10px;">Connexion</h2>
      <div style="position: relative; top: -20px;">
      <form @submit.prevent="login">
        <div style="position: relative; left: 108px; top: 30px;">
          <label for="email" style="color: white; position: relative; top: -20px; left: 50px; font-weight: bold;"> Email : </label>
          <input type="email" v-model="email" required />
        </div>
        <div style="position: relative; left: 50px; top: 60px;">
          <label for="password" style="color: white; position: relative; top: -20px; left: 105px; font-weight: bold;">Mot de passe : </label>
          <input type="password" v-model="password" required />
        </div>
       <div class="se connecter"><button type="submit" :disabled="loading" style="position: relative; top: -90px; right: 290px; background-color: rgb(54, 69, 79); ">Se connecter</button></div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form> 
    </div>  
            
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
        
          this.$router.push('/search');
        } catch (error) {
          this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  

<style>
body{
    background-color: white; 
    display:flex; 
    justify-content: center;
    align-items: center;
    height: 100vh;

}

#cardre-connexion{
    width: 400px;
    height: 200px;
    background: #4444FF;
    position: absolute; 
    right: 550px;
    top: 220px; 
}

.se.connecter{
    position: absolute; 
    left: 300px;
    top: 230px;     
}

</style>