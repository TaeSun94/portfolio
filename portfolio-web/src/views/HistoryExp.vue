<template>
    <v-container id="content">
        <h1>History</h1>
        <RoadMap />
    </v-container>
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
#content {
    flex: 1;
    justify-content: center;
}

#branch{
    justify-content: center;
    align-content: center;
}
</style>