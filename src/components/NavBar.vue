<template>
    <v-app-bar clipped-left app flat color="primary" density="compact">
        <v-btn v-if="isMobile" @click.stop="mobileMenu = true" icon>
            <v-icon size="x-large">mdi-menu</v-icon>
        </v-btn>
        <template v-else>
            <v-toolbar-title class="font-weight-bold">Renz & Karla</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="font-weight-bold" @click="scrollToHome" text>Home</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToOurStory" text>Our Story</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToSponsors" text>Sponsors</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToVenue" text>Venue</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToDressCode" text>Dress Code</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToTimeline" text>Timeline</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToQandA" text>Q and A</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToQandA" text>Prenup Photo</v-btn>
            <v-btn class="font-weight-bold" @click="scrollToRsvp" text>RSVP</v-btn>
        </template>
    </v-app-bar>
    <v-navigation-drawer v-model="mobileMenu" location="left" mobile class="text-primary">
        <v-list>
            <v-list-item title="Home" prepend-icon="" @click="scrollToHome"></v-list-item>
            <v-list-item title="Our Story" prepend-icon="" @click="scrollToOurStory"></v-list-item>
            <v-list-item title="Sponsors" prepend-icon="" @click="scrollToSponsors"></v-list-item>
            <v-list-item title="Venue" prepend-icon="" @click="scrollToVenue"></v-list-item>
            <v-list-item title="Dress Code" prepend-icon="" @click="scrollToDressCode"></v-list-item>
            <v-list-item title="Timeline" prepend-icon="" @click="scrollToTimeline"></v-list-item>
            <v-list-item title="Q and A" prepend-icon="" @click="scrollToQandA"></v-list-item>
            <v-list-item title="Prenup Photo" prepend-icon="" @click="scrollToPrenup"></v-list-item>
            <v-list-item title="RSVP" prepend-icon="" @click="scrollToRsvp"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
const isMobile = computed(() => !mdAndUp.value)
let mobileMenu = ref(null);
const scrollToHome = () => {
    const el = document.getElementById('home')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToRsvp = () => {
    const el = document.getElementById('rsvp')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToOurStory = () => {
    const el = document.getElementById('story')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToSponsors = () => {
    const el = document.getElementById('sponsors')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToVenue = () => {
    const el = document.getElementById('venue')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToDressCode = () => {
    const el = document.getElementById('dress')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToTimeline = () => {
    const el = document.getElementById('timeline')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToQandA = () => {
    const el = document.getElementById('qa')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
const scrollToPrenup = () => {
    const el = document.getElementById('prenup')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
