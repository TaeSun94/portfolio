<template>
  <v-container>
    <div class="row">
      <div class="col">
        <!-- <vue-typer text="{{message}}"></vue-typer> -->
        <span
          v-for="(text, index) in message"
          :key="index"
          class="item"
          :style="{animationDelay: index*100+'ms'}"
          v-text="text"
        />
        <!-- <vue-typer text="안녕하세요" type-delay='100' erase-style='backspace' :erase-on-complete='true'></vue-typer> -->
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
      message : "안녕하세요. 개발자 유태선입니다."
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
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>