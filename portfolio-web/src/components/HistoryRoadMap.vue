<template>
        <canvas id="historyLine"></canvas>
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
    height: 10px;
    align-self: center;
    width: 80%;
}
</style>