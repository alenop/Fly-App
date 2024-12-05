<template>
  <div class="search flex column">
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
</template>

<style>

.flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.search {
  min-height: 100vh;
  /* align-items: center; */
}
</style>
