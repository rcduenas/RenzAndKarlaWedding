<template>
    <v-app-bar clipped-left app flat color="primary" density="compact">
        <v-btn v-if="isMobile" @click.stop="mobileMenu = true" icon>
            <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn>
        <template v-else>
            <v-toolbar-title class="font-weight-bold">Renz & Karla</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="font-weight-bold" to="/" text>Home</v-btn>
            <v-btn class="font-weight-bold" to="/our-story" text>Our Story</v-btn>
            <v-btn class="font-weight-bold" to="/schedule" text>Schedule</v-btn>
            <v-btn class="font-weight-bold" to="/rsvp" text>RSVP</v-btn>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="mobileMenu" location="left" mobile class="text-primary">
        <v-list>
            <v-list-item title="Home" prepend-icon="" to="/RenzAndKarlaWedding"></v-list-item>
            <v-list-item title="Our Story" prepend-icon="" to="/our-story"></v-list-item>
            <v-list-item title="Schedule" prepend-icon="" to="/schedule"></v-list-item>
            <v-list-item title="RSVP" prepend-icon="" to="/rsvp"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
const isMobile = computed(() => !mdAndUp.value)
let mobileMenu = ref(null);
</script>
