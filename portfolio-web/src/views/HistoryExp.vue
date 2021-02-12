<template>
    <div id="container">
        <h1>History</h1>
        <RoadMap />
    </div>
</template>

<script>
import RoadMap from '@/components/HistoryRoadMap.vue';
export default {
    name:"HistoryEx",
    components: {
        RoadMap
    }
}
</script>

<style scoped>
#container {
    justify-items: center;
    align-items: center;
}
#branch{
    justify-content: center;
    align-content: center;
}
</style>