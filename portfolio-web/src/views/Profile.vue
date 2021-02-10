<template>
    <v-container>
        <ProfileCard/>
        <Experience/>
        <CertificatesAndAwards/>
    </v-container>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import Experience from '@/components/Experience.vue';
import CertificatesAndAwards from '@/components/CertificatesAndAwards.vue';

export default {
    name: "Profile",
    components:{
        ProfileCard,
        Experience,
        CertificatesAndAwards
    }
}
</script>

<style scoped>

</style>