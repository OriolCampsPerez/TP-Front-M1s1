<template>
  <div style="font-weight: bolder; font-size: 200%">
    Bienvenue dans la page de jeu
  </div>
  <br>
  <div class="row">
    <div class="column">
      <div style="font-weight:bold" >
        🔡 Devinez le mot (il est composé d'exactement 5 lettres), n'oubliez pas que seulement les mots grammaticalement correct et français font partie de la liste.
      </div>
      <div style="color: darkred; font-weight: bold">
        ⚠️ Vous n'avez que 6 tentatives !
      </div>
      <br>
      <div>
        <input type="text" id="new-word" v-model="reponse" @keyup.enter="soumettre()" @keyup="active()"/>
      </div>
      <div>
        <button type="button" id="verif-the-word" class="btn btn-success"  @click="soumettre" style="margin-top: 5px; margin-right: 7px" disabled=true>
          ✅ Valider
        </button>
        <router-link to="/DefaitePage" >
          <button type="button" id="abandon" class="btn btn-danger" @click="finPartie" role ="link" style="margin-top: 5px; ">
            ❌ Abandonner la partie
          </button>
        </router-link>
        <router-link to="/" >
          <button type="button" class="btn btn-primary" @click="finPartie" style="margin-top: 5px; margin-left: 7px">
            🏠 Revenir à l'accueil
          </button>
        </router-link>
      </div>
      <div>
        <div v-if="valide===1" id="valid-word"> Le mot est valide !</div>
        <div v-else-if="valide===2" id="not-valid-word">Oh non 😢, le mot n'existe pas, Réessayez-en un autre !</div>
        <div v-else-if="valide===3" id="repeated-word"> Ce mot a été déjà essayé. Un peu plus d'imagination pardi! </div>
        <div v-else-if="valide===4"> <br> </div>

      </div>
      <br>
      <div>
        <div>
          📈 Progrès:
          {{ this.etatMotTrouve.toString().replace(/,/g,' ') }}
        </div>
        <div>
          Lettres trouvées, qui constituent le mot:
          {{ this.setToString(this.lettresEnDesordre) }}
        </div>
      </div>
      <div>
        Mots essayés:
        {{ this.setToString(this.setMotsEssayes) }}
      </div>
    </div>
    <div class="column">
      <div>
        <Chrono @timeIsUp="timeIsUp"></Chrono>
      </div>
      <div style="font-weight:bold; font-size: 120%; margin-top: 3px">
        Tentatives Restantes:
      </div>
      <div>
        {{ tentatives.tentativesRest }}
      </div>
    </div>
  </div>
  <div>
    <Clavier @recevoirLettre="clavierVirtuel"></Clavier>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import axios from "axios";
import Chrono from "@/Component/Chrono";
import Clavier from"@/Component/Clavier";
export default {
  name: "Jeu",
  components: {Chrono, Clavier},
  data:function(){
    return {
      // info jeu
      motCible: "",

      jeuTermine: false,
      jeuGagne: false,

      tentatives: {
        tentativesMax: 6,
        tentativesUtilises: 0,
        tentativesRest: 6,
      },
      date: new Date(),

      // variables tmp
      reponse: "",
      motFrancais: false,
      valide:4,

      etatMotTrouve: ['_', '_', '_', '_', '_'],
      lettresEnDesordre: new Set(),
      setMotsEssayes: new Set(),
    }
  },

  methods: {
    ...mapMutations([
      // stockage parties
      'addGame',

      // chrono
      'startChrono',
      'stopChrono',
      'updateChrono',
    ]),
    ...mapGetters([
      // stockage parties
      'getListeGlob',

      // chrono
      'getRunningChrono',
      //'getTempsInitChrono',
      //'getTempsChrono',
      'getTempsPasse',
      //'timeOutChrono',

    ]),
    setToString: function (monSet) {
      let str= "";
      for (const mot of monSet.values()) {
        str+= mot + "  "
      }
      return str;
    },
    soumettre: async function () {
      if (document.getElementById("new-word").value.length !== 5) return;
      //console.log(this.motCible);
      if (this.motCible === this.reponse) {
        this.jeuGagne= true;
        this.jeuTermine= true;

        this.finPartie();
        await this.$router.push("/GainPage");
      } else {
        if (!this.setMotsEssayes.has(this.reponse)) {
          this.setMotsEssayes.add(this.reponse);
          this.tentatives.tentativesRest--;
          this.tentatives.tentativesUtilises++;
        }
        else {
          this.valide=3;
          return;
        }
      }
      if (this.tentatives.tentativesRest === 0) {
        this.jeuGagne= false;
        this.jeuTermine= true;

        this.finPartie();
        await this.$router.push("/DefaitePage");
      }
      if (this.tentatives.tentativesRest !== 0 && this.motCible !== this.reponse)  {
        let response= await axios.post("https://vue-project-backend-eta.vercel.app/api/check-word", {
          word: this.reponse
        });
        this.motFrancais= response.data.isWord ;
        if(this.motFrancais===true){
          this.valide=1;
          const motCibleLettres = this.motCible.split('');
          const reponseLettres = this.reponse.split('');
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
              if (motCibleLettres[j]===reponseLettres[i]){
                if (i===j){
                  this.etatMotTrouve[j] = reponseLettres[i];
                }
                this.lettresEnDesordre.add(reponseLettres[i]);
              }
            }
          }
        }
        else{
          this.valide=2;
        }
      }
    },
    active: function () {
      document.getElementById("verif-the-word").disabled = document.getElementById("new-word").value.length !== 5;
    },
    nouveauMot: async function () {
      axios.get("https://vue-project-backend-eta.vercel.app/api/new-game", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
          .then(response => {
            this.motCible = response.data.word;
          });
    },
    finPartie: function () {
      this.stopChrono();

      // attente 1,1 sec -- synchro
      setTimeout('', 1100);

      let dataJeuASauvgarder = {
        date: this.date.getDate() + '-' + this.date.getMonth() + '-' + this.date.getFullYear(),

        jeuTermine: this.jeuTermine,
        jeuGagne: this.jeuGagne,

        motCible: this.motCible,

        tentatives: this.tentatives,
        tempsUtilise: this.$store.getters.getTempsPasse,
      };
      this.addGame(dataJeuASauvgarder);
    },
    timeIsUp: async function (){
      this.jeuGagne=false;
      this.jeuTermine=true;
      this.finPartie();
      await this.$router.push("/DefaitePage");
    },
    clavierVirtuel: function(val){
      if ( "back" === val) {
        this.reponse = this.reponse.slice(0, -1);
      }
      else {
        this.reponse = this.reponse + val;
      }
      document.getElementById("verif-the-word").disabled = this.reponse.length !== 5;
    }
  },
  mounted() {
    this.nouveauMot();
  },
}
</script>

<style>

.column {
  float: top;
  width: 50%;
  padding: 20px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>
