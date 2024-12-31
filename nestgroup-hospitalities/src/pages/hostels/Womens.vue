<template>
    <PGView :srcs="pgData.images" :address="pgData.address" :map-url="pgData.location" />
</template>

<script setup>
import PGView from '@/components/pgview/PGView.vue';
const pgData = {
    title: "Nest Women's Hostel",
    images: ['https://lh3.googleusercontent.com/d/1EOfFc3kS5GrC8BaMRYNUF-lqXD_Xc2Gj',
        'https://lh3.googleusercontent.com/d/1Gx-VHEOwClwwAN43-aXma4ZuYepfOHwA',
        'https://lh3.googleusercontent.com/d/1-UZcKS5WjQ3JK6zRfD9-RGvmqtJCnn8I',
        'https://lh3.googleusercontent.com/d/1GGpXigQg7v0Jww7HmRZvUMyoxbAxXca7'],
    address: `
    <span class="mdi mdi-map-marker"></span>
    <h2>Nest Women's Hostel</h2>
    <h4>Madhapur</h4>
    <h4>Hyderabad 500088</h4>`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.281886363231!2d78.3892688758118!3d17.446217201106432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911f673c00f7%3A0x664fedcb837bb3c7!2sNest%20Co-Home!5e0!3m2!1sen!2sin!4v1710004718345!5m2!1sen!2sin" width="400" height="300" style="border:0;'
};
</script>
