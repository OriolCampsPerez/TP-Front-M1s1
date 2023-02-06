<template>
  <br>
  <br>
  <div style="font-size: 125%; font-weight: bold">
    Vous avez un clavier virtuel à disposition que vous pouvez utiliser
  </div>
  <div>
  <button type="button" class="btn btn-primary" @click="lettre('a')" style="margin-top: 3px; margin-left: 3px">
  A
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('z')" style="margin-top: 3px; margin-left: 3px">
    Z
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('e')" style="margin-top: 3px; margin-left: 3px">
    E
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('r')" style="margin-top: 3px; margin-left: 3px">
    R
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('t')" style="margin-top: 3px; margin-left: 3px">
    T
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('y')" style="margin-top: 3px; margin-left: 3px">
    Y
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('u')" style="margin-top: 3px; margin-left: 3px">
    U
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('i')" style="margin-top: 3px; margin-left: 3px">
    I
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('o')" style="margin-top: 3px; margin-left: 3px">
    O
  </button>
  </div>
  <div>
  <button type="button" class="btn btn-primary" @click="lettre('p')" style="margin-top: 3px; margin-left: 3px">
    P
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('q')" style="margin-top: 3px; margin-left: 3px">
    Q
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('s')" style="margin-top: 3px; margin-left: 3px">
    S
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('d')" style="margin-top: 3px; margin-left: 3px">
    D
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('f')" style="margin-top: 3px; margin-left: 3px">
    F
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('g')" style="margin-top: 3px; margin-left: 3px">
    G
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('h')" style="margin-top: 3px; margin-left: 3px">
    H
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('j')" style="margin-top: 3px; margin-left: 3px">
    J
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('k')" style="margin-top: 3px; margin-left: 3px">
    K
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('l')" style="margin-top: 3px; margin-left: 3px">
    L
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('m')" style="margin-top: 3px; margin-left: 3px">
  M
</button>
  </div>
  <div>
  <button type="button" class="btn btn-primary" @click="lettre('w')" style="margin-top: 3px; margin-left: 3px">
    W
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('x')" style="margin-top: 3px; margin-left: 3px">
    X
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('c')" style="margin-top: 3px; margin-left: 3px">
    C
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('v')" style="margin-top: 3px; margin-left: 3px">
    V
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('b')" style="margin-top: 3px; margin-left: 3px">
    B
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('n')" style="margin-top: 3px; margin-left: 3px">
    N
  </button>
  <button type="button" class="btn btn-primary" @click="lettre('back')" style="margin-top: 3px; margin-left: 3px">
    🔙
  </button>

  </div>

</template>

<script>
export default {
  name: "Clavier",

  methods: {
    lettre: function(val){
      this.$emit("recevoirLettre", val);
    }
  }
}
</script>

<style scoped>
button {
  background-color: grey;
  border-color: darkgrey;
  box-shadow: 3px 3px 3px black;
  height: 40px;
  width: 40px;
  text-align: center;
}

</style>