<template>
  <div id="defeat-page">
  <div style="font-weight:bold; font-size: 125%">
    😢 Dommage! Partie perdue 😢
  </div>
    <br>
  <div>
    Vous pouvez revenir à l'accueil et retenter votre chance ou accéder directement aux statistiques de toutes les parties que vous avez jouées
  </div>
  <router-link to="/" >
    <button type="button" class="btn btn-primary" role ="link" style="margin-right: 7px; margin-top: 20px;">
      Revenir à l'accueil
    </button>
  </router-link>
  <router-link to="/PartiesPrecedentes" >
    <button type="button" class="btn btn-primary" role ="link" style="margin-right: 7px; margin-top: 20px;">
      Voir les statitsiques
    </button>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "DefaitePage"
}
</script>

<style scoped>

</style>