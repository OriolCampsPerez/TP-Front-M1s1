<template>
  <div>
    <div style="font-weight:bold; font-size: 120%">
      Temps restant :
    </div>
    <div>
      {{ secToMinString(this.getTempsChrono) }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

  export default {
    name: "Chrono",
    data: function () {
    },
    methods: {
      clock: function () {
        const _this = this;
        let intervalID = setInterval(function () {
          _this.updateChrono();
          if (!_this.getRunningChrono) {
            clearInterval(intervalID);
          }
          if (_this.timeOutChrono) {
            clearInterval(intervalID);
            _this.stopChrono();
            _this.$emit('timeIsUp');
          }
        }, 1000)
      },
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
      ...mapMutations([
          'startChrono',
          'stopChrono',
          'updateChrono',
      ]),
    },
    computed: {
      ...mapGetters([
        'getRunningChrono',
        'getTempsInitChrono',
        'getTempsChrono',
        'timeOutChrono',
      ])
    },
    mounted() {
      this.startChrono();
      this.clock();
    },
  }

</script>

<style scoped>

</style>