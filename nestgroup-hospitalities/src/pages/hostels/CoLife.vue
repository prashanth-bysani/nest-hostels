<template>
    <PGView :srcs="pgData.images" :pgInfo="pgData.pgInfo" :map-url="pgData.location" />
</template>

<script setup>
import PGView from '@/components/pgview/PGView.vue';
const pgData = {
    title: 'Nest Co-Life',
    pgInfo: {
        name: 'NEST CO-LIFE',
        caption: 'Home away from home',
        type: "CoLive",
        roomTypes: ['Single share', 'Double Share', 'Triple Share'],
        ammenities: [
            '24/7 CCTV Surveillance & Lift',
            'Free Wi-Fi (Separate Routers for each floor)',
            'Drinking water dispensers and refrigerators for each floor',
            'Three times homely food (South Indian and North Indian)',
            'Common Laundry area',
            'Daily room cleaning'
        ]
    },
    images: ['https://cdn.vuetifyjs.com/images/cards/hotel.jpg', 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'],
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.211380819531!2d78.38616937535757!3d17.449594001009746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91914634d511%3A0x4cf21bc573bcbe80!2sNest%20Co%20Life%20-%20Qualia!5e0!3m2!1sen!2sin!4v1737210486106!5m2!1sen!2sin" width="400" height="300" style="border:0;'
};
</script>
