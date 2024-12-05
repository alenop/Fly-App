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
        <p>
          <input type="submit" value="Inscription">
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
