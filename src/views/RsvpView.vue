<template>
    <v-container class="py-12">
        <h2 class="text-center text-h4 mb-8">RSVP</h2>
        <v-form @submit.prevent="submitRSVP" ref="form">
            <v-text-field v-model="form.name" label="Your Name" required></v-text-field>
            <v-select v-model="form.attendance" :items="['Yes', 'No']" label="Will you attend?" required></v-select>
            <v-text-field v-model="form.guests" label="Number of Guests" type="number"></v-text-field>
            <v-textarea v-model="form.message" label="Message (optional)"></v-textarea>
            <v-btn color="primary" type="submit" class="mt-4">Send RSVP</v-btn>
        </v-form>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', attendance: '', guests: 0, message: '' })
const submitRSVP = () => {
    console.log('RSVP:', form.value)
    alert(`Thank you, ${form.value.name}! Your RSVP has been recorded.`)
}
</script>
