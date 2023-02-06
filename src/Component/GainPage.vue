<template>
  <div style="font-weight:bold; font-size: 200%">
    🥳🎉 Bravo!!!!!!!! Partie gagnée 🥳🎉
  </div>
  <br>
  <div style="font-size: 125%">
    Vous pouvez revenir à l'accueil ou accéder directement aux statistiques de toutes les parties que vous avez jouées
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
</template>

<script>
export default {
  name: "GainPage"
}
</script>

<style scoped>

</style>