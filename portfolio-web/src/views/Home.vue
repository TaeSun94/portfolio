<template>
  <v-container>
    <div class="row">
      <div class="col">
        <!-- <vue-typer text="{{message}}"></vue-typer> -->
        <vue-typer text="안녕하세요" type-delay='100' erase-style='backspace' :erase-on-complete='true'></vue-typer>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <v-btn @click="goIntroduce()"> 둘러 보기 </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      message : "Hello World! I was registered globally!"
    }
  },
  methods:{
    goIntroduce(){
      location.href=`/profile`;
    }
  }
};
</script>

<style scoped>
</style>