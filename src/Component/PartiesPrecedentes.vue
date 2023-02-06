<template>
  <div class="row" id="stats-page">
  <div class="column">
    <div>
      <p style="font-size:200%;font-weight: bold">
        Statistiques globales des parties jouées:
      </p>
      <div>
        Temps moyen de jeu:
        {{ secToMinString(this.tempsMoy) }}
      </div>
      <div>
        Nombre moyen de tentatives:
        {{ this.nbMoyTentatives }}
      </div>
      <div>
        Pourcentage de victoires:
        {{ this.pourcentageVictoire }} %
      </div>
      <div>
        Nombre de parties terminées:
        {{ this.nbPartiesTermines }}
      </div>
    </div>

  <div>
    <router-link to="/" >
      <button type="button" class="btn btn-primary" role ="link" style="margin-right: 7px; margin-top: 30px;">
        Revenir à l'accueil
      </button>
    </router-link>
  </div>
  </div>


    <div class="column">
      <p style="font-size:200%; font-weight: bold">
        Liste des parties jouées:
      </p>
          <div v-for="jeu in getListeGlob" style="text-align: center; vertical-align: center">
            <p style="font-size: 125%; font-weight: bold; ">
              Date: {{ jeu.date }}
            </p>
            <div style="align-content: center">
              <li>
                Mot à trouver: {{ jeu.motCible }}
              </li>
              <li>
                {{ this.resultatToString(jeu) }}
              </li>
              <li>
                Nombre de tentatives: {{ jeu.tentatives.tentativesUtilises }}
              </li>
              <li>
                Temps passé : {{ secToMinString(jeu.tempsUtilise) }}
              </li>
              <br>
            </div>
        </div>
      </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PartiesPrecedentes",
  data: function () {
    return {
      tempsMoy: 0,
      nbMoyTentatives: 0,
      pourcentageVictoire: 0,
      nbPartiesTermines: 0,
    }
  },
  methods: {
    secToMinString: function (totalSec) {
      let min = Math.floor(totalSec/60);
      let sec = totalSec % 60;

      let strMin = min + '';
      let strSec = sec + '';
      if (min < 10) {
        strMin = '0' + min;
      }
      if (sec < 10) {
        strSec = '0' + sec;
      }

      return strMin + ':' + strSec;
    },
    resultatToString: function (jeu) {
      if (jeu.jeuGagne) return "Jeu gagné"
      if (!jeu.jeuTermine) return "Jeu abandonné"
      return "Jeu perdu"
    }
  },
  mounted() {
    this.getListeGlob.filter((partie) => partie.jeuTermine).forEach((partie) => {
      this.tempsMoy+= partie.tempsUtilise;
      this.nbMoyTentatives+= partie.tentatives.tentativesUtilises;
      if (partie.jeuGagne) this.pourcentageVictoire+= 1;
      if (partie.jeuTermine) this.nbPartiesTermines+= 1;
    });

    if (this.getListeGlob.length === 0) {
      this.tempsMoy= 0;
      this.nbMoyTentatives= 0;
    }
    else {
      this.tempsMoy/= this.getListeGlob.length;
      this.nbMoyTentatives/= this.getListeGlob.length;
    }
    if (this.nbPartiesTermines === 0) {
      this.pourcentageVictoire= 0;
    }
    else {
      this.pourcentageVictoire/= this.nbPartiesTermines;
    }
    this.pourcentageVictoire*= 100;

    this.tempsMoy = this.tempsMoy.toFixed();
    this.nbMoyTentatives = this.nbMoyTentatives.toFixed(2);
    this.pourcentageVictoire = this.pourcentageVictoire.toFixed(2);
  },
  computed: {
    ...mapGetters(['getListeGlob'])
  }
}
</script>

<style scoped>

</style>