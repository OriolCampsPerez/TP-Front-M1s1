import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            // chrono
            runningChrono: false,
            chronoTempsData: {
                nbSecMax: 600, //600 = 10 m
                nbSecRestants: 0,
            },

            // stockage parties
            listeGlobParties: [],
        }
    },
    getters: {
        // chrono
        getRunningChrono: (state) => state.runningChrono,
        getTempsInitChrono: (state) => state.chronoTempsData.nbSecMax,
        getTempsChrono: (state) => state.chronoTempsData.nbSecRestants,
        getTempsPasse: (state) => state.chronoTempsData.nbSecMax - state.chronoTempsData.nbSecRestants,
        timeOutChrono: (state) => state.chronoTempsData.nbSecRestants <= 0,

        // stockage parties
        getListeGlob: (state) => state.listeGlobParties
    },

    mutations: {
        // chrono
        startChrono (state) {
            state.chronoTempsData.nbSecRestants = state.chronoTempsData.nbSecMax;
            state.runningChrono = true;
        },
        stopChrono (state) {
            state.runningChrono = false;
        },
        updateChrono (state) {
          if (state.chronoTempsData.nbSecRestants > 0) {
              state.chronoTempsData.nbSecRestants--;
          }
        },

        // stockage parties
        addGame(state, game) {
            state.listeGlobParties.push(game);
        }
    }

})
