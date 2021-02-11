<template>
    <v-container>
        <canvas id="historyLine"></canvas>
    </v-container>
</template>
<script>
export default {
    mounted(){
        var canvas = document.getElementById("historyLine");
        this.canvas = canvas.getContext('2d');
    }
}
</script>

<style scoped>

#historyLine{
    background: red;
    width: 80px;
    height: 60px;
}
</style>