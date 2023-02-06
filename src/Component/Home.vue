<template>
  <div>

  <div>
    <div id="2em">
      <p style="font-size:200%;font-weight: bold">Bienvenue dans le Jeu des mots</p>
      <div style="font-size: 125%; margin-bottom: 15px">
        Application développée par:
      </div>
        <div>
          <p v-for="presentation in NomPrenom">
            {{presentation}}
          </p>
          <p> {{Groupe}}</p>
        </div>
    </div>
    <div>
      <router-link to="/Jeu" >
        <button type="button" id="new-game" class="btn btn-primary" @click="Jouer" role ="link" style="margin-right: 7px; margin-top: 30px;">
          Commencer une nouvelle partie
        </button>
      </router-link>
      <router-link to="/PartiesPrecedentes" >
        <button type="button" id="button-stats" class="btn btn-primary" @click="Consulter" role="link" style="margin-top: 30px">
          Consulter les parties précédentes
        </button>
      </router-link>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "Home",
  data:function(){
    return{
      NomPrenom:["Benbouabdellah Chaïma", "Slimani Khaoula","Camps Pérez Oriol"],
      Groupe:"TPA41"
    }
  },
}
</script>

<style scoped>

</style>