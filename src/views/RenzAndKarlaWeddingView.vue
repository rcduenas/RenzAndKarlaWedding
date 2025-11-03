<template>
    <div class="bg-primary pb-4">
        <div id="home">
            <v-img :src="homeImage" width="100wh" :cover="$vuetify.display.mdAndUp ? true : false"
                class="d-flex align-end justify-center">
                <v-img :src="monogram" :width="$vuetify.display.mdAndUp ? '50%' : '100%'" />
                <div class="text-center text-white">
                    <v-btn color="secondary" size="small" @click="scrollToRsvp" elevation="2">RSVP Now</v-btn>
                </div>
                <v-row class="justify-center my-4" dense>
                    <v-col v-for="(value, key, i) in countdown" :key="key" cols="2" sm="1"
                        class="d-flex flex-column align-center">
                        <v-card class="count-box d-flex align-center justify-center pa-2 bg-secondary">
                            <span class="text-h6 font-weight-bold">{{ value.toString().padStart(2, '0')
                            }}</span>
                        </v-card>
                        <div class="text-body-2 mt-2 font-weight-meduim"
                            style="color: black; text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px  1px 0 white, 1px  1px 0 white;">
                            {{ key }}
                        </div>
                        <div v-if="i < Object.keys(countdown).length - 1" class="divider-dot"></div>
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <!-- 🌿 Countdown Section -->
        <div class="pa-4 text-center">
            <v-card class="bg-white" rounded="large">
                <div class="pt-3 px-3">WELCOME TO OUR WEDDING WEBSITE</div>
                <div class="text-caption text-justify pl-4">
                    <div class="pa-3">We’re beyond excited to celebrate our special day with you! Take your time
                        exploring
                        our page — we’re so grateful for your love and support, and we can’t wait to share this
                        unforgettable moment together.</div>
                    <div class="pa-3">While we would love to invite everyone, this celebration is an intimate gathering
                        with
                        our dearest family and friends. We truly appreciate your understanding, as we want to ensure
                        every
                        guest has a seat and enjoys a delightful meal.
                    </div>
                </div>
            </v-card>
        </div>

        <v-carousel :show-arrows="false" cycle hide-delimiters style="height:300px; overflow:hidden;">
            <v-carousel-item v-for="(src, i) in carouselItems" :key="i" :src="src" reverse-transition="fade-transition"
                transition="fade-transition" cover></v-carousel-item>
        </v-carousel>

        <!-- 🌸 Quote Section -->
        <div class="px-4 text-center" id="story" style="margin-top: -1rem;">
            <v-card rounded="large" class="bg-white pr-2">
                <div class="pt-3 px-3 text-center" style="font-family: 'Great Vibes', cursive; font-size: 1.5rem;">
                    A Love Written by Fate ❤️</div>
                <div class="text-caption text-justify pl-4">
                    <div class="pa-3">In August 2023, at the most unexpected moment and under the most unlikely
                        circumstances, Karla and Renz’s paths crossed — a meeting that would change their lives forever.
                    </div>
                    <div class="pa-3">Karla was going through a difficult time, but as always, God works in mysterious
                        and wonderful ways. He used two instruments to bring light into her life: her first cousins
                        Jesper and Jewo — the best friend of the groom.</div>
                    <div class="pa-3">During a casual conversation, Jesper mentioned that Renz was single and might be a
                        good match for Karla. Jewo, ever the joker, teased Karla that his best friend would come all the
                        way to meet her if she agreed. Thinking it was just another one of Jewo’s playful antics —
                        especially since Canlubang was far from Agdangan — Karla said yes, not expecting anything to
                        come of it.
                        But to her surprise, Renz did come. He traveled all the way, and Jewo introduced him to Karla.
                        That moment marked the beginning of their love story.</div>
                    <div class="pa-3">Their first date was spent at Padre Pio in Sto. Tomas, Batangas, with a chaperone
                        😂— both of them shy and unsure, yet curious about what destiny had in store. From that day
                        forward, they exchanged messages daily, never missing a single one. Through endless
                        conversations and heartfelt exchanges, they discovered a growing affection that neither of them
                        could ignore.</div>
                    <div class="pa-3">Eventually, they realized they had fallen for each other. It felt as though they
                        had known one another for years — perhaps that’s what we call Tadhana (destiny).</div>
                    <div class="pa-3">Their journey wasn’t always easy. They were still getting to know each other,
                        learning to adjust and compromise. Renz, calm and reserved, balanced Karla’s cheerful and bubbly
                        nature. There were moments of tampuhan (silent misunderstandings) and even small disagreements,
                        but each challenge only deepened their bond and strengthened their love.
                    </div>
                    <div class="pa-3">Then, on January 11, Renz got down on one knee and proposed. Without hesitation,
                        Karla said yes.
                    </div>
                    <div class="pa-3">And just like that, a love story born from a joke, a long drive, and a leap of
                        faith became a beautiful tale of destiny fulfilled.
                    </div>
                </div>
            </v-card>
        </div>
        <div class="text-center ma-4" id="sponsors">
            <v-img :src="sponsors1" width="100wh" />
            <v-img :src="sponsors2" width="100wh" />
            <v-img :src="sponsors3" width="100wh" />
        </div>

        <v-carousel :show-arrows="false" cycle hide-delimiters style="height:auto; overflow:hidden;">
            <v-carousel-item :src="carousel1" />
            <v-carousel-item :src="carousel2" />
            <v-carousel-item :src="carousel3" />
            <v-carousel-item :src="carousel4" />
            <v-carousel-item :src="carousel5" />
            <v-carousel-item :src="carousel6" />
            <v-carousel-item :src="carousel7" />
            <v-carousel-item :src="carousel8" />
            <v-carousel-item :src="carousel9" />
        </v-carousel>

        <div class="text-center my-4" id="dress">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Dress Code</div>
            <v-img :src="dressCode1" width="100wh" />
            <v-img :src="dressCode2" width="100wh" />
        </div>
        <div class="text-center ma-4" id="venue">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Venue</div>
            <v-carousel :show-arrows="false" cycle hide-delimiter-background class="mt-6"
                style="height:auto; overflow:hidden; overlay: 1px;">
                <v-carousel-item :src="church">
                    <div
                        style="position:absolute; inset:0; background:rgba(0,0,0,0.4); display:flex; flex-direction: column; align-items:center; justify-content:center; color:white; font-size:1rem; font-weight:500; ">
                        <div style="font-family: 'Georgia', serif; color:white; font-size:2rem; font-weight:500;">
                            Ceremony</div>
                        <div style="color:white; font-size:1rem; font-weight:500;">Minor Basilica of St. Michael the
                            Archangel</div>
                        <v-btn class="mt-2" color="secondary" size="small"
                            href="https://www.google.com/maps/place/Minor+Basilica+and+Parish+of+St.+Michael+the+Archangel/@14.0259915,121.5884058,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd4d7d0753897f:0xe0dda9263f349499!8m2!3d14.0259863!4d121.5909807!16s%2Fm%2F064nmk0?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                            elevation="2">View Map
                        </v-btn>
                    </div>
                </v-carousel-item>
                <v-carousel-item :src="venue">
                    <div
                        style="position:absolute; inset:0; background:rgba(0,0,0,0.4); display:flex; flex-direction: column; align-items:center; justify-content:center;">
                        <div style="font-family: 'Georgia', serif; color:white; font-size:2rem; font-weight:500;">
                            Reception</div>
                        <div style="color:white; font-size:1rem; font-weight:500;">La Casa Esperanza</div>
                        <v-btn class="mt-2" color="secondary" size="small"
                            href="https://www.google.com/maps/place/La+Casa+Esperanza+Catering+Services/@14.0210694,121.6021204,17z/data=!4m14!1m7!3m6!1s0x33bd4d57abf2594d:0xd78928bc8b0cee05!2sLa+Casa+Esperanza!8m2!3d14.0207363!4d121.6060686!16s%2Fg%2F11h5rz9mrd!3m5!1s0x33bd4d9abd7f29df:0xf5cd571f750537c0!8m2!3d14.0214297!4d121.6038791!16s%2Fg%2F11s___hs61?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
                            elevation="2">View Map
                        </v-btn>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>

        <v-img :src="end" width="100wh" />

        <div class="ma-4" id="qa">
            <div class="text-center" style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Your Questions,
                Answered</div>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-email-outline</v-icon>RSVP
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            As much as we would love to accommodate all our friends and family, we have a limited number
                            of guests. Please understand that this event is strictly by invitation only. Guests not
                            found on the guest list provided will not be allowed to enter. <br><br>The favor of a reply
                            is
                            required on or before November 20, 2025.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-car</v-icon>Is there parking space available for my car?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            Yes, there is parking available for everyone at the venue. However, please take note that it
                            is first come, first served basis, so you might not want to be late.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-list-status</v-icon>I said "NO" to the RSVP but I had a change
                        of plans-I
                        can attend now! What should I do?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <ul class="pl-4">
                            <li>Please check with us first. Unfortunately, we have a strict guest list.</li>
                            <li>Kindly inform us if your schedule clears up, so we can try to accommodate you.</li>
                            <li>If seats become available, we will let you know as soon as possible.</li>
                            <li>Please do not attend unannounced, as we may not have any available seats for you.</li>
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-hand-wave</v-icon>When is the appropriate time to leave?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            This event took us months to plan, and we want to celebrate it with the people that are very
                            dear to our hearts. We want you to have fun! Celebrate with us until the end of the program!
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-party-popper</v-icon>How can I help the couple have a great time
                        during their
                        wedding?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <ul class="pl-4">
                            <li>Pray with us for favorable weather and the continuous blessings of our Lord as we enter
                                this new chapter of our lives as husband and wife.</li>
                            <li>RSVP as soon as your schedule is cleared.</li>
                            <li>Dress appropriately and follow our wedding motif.</li>
                            <li>Be on time.</li>
                            <li>Follow the seating arrangement in the reception.</li>
                            <li>Stay until the end of the program.</li>
                            <li>Join the activities and enjoy!</li>
                        </ul>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-account-plus</v-icon>May I invite a "PLUS ONE" to the event?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            As much as we would love to accommodate all our friends and family, we have a limited number
                            of guests.<br><br>Please understand that this event is strictly by invitation only. Kindly
                            check
                            our invitation to know the number of seats allotted for you. Guests not found on the
                            guestlist provided will not be allowed to enter.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-calendar-remove</v-icon>What if I RSVP'd but cannot attend?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            We would love to have you at our wedding, but we understand that there are circumstances
                            beyond our control. However, please let us know as soon as possible so we can reallocate
                            your seat/s.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-table-chair</v-icon>Can I sit anywhere at the reception?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            Please don't. It took us a lot of effort and discussion to finish the seating arrangement,
                            which is planned for everyone's convenience and preference, but there is no need to worry!
                            You'll surely be seated with your friends or people that you have same interest
                            with.<br><br>Our
                            coordinators will gladly assist you in finding your designated seat after registration. Feel
                            free to ask them for assistance and they will gladly help you.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-camera</v-icon>Am I allowed to take pictures and/or videos
                        during the
                        ceremony?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            We request everyone to keep the ceremony camera-free. While our I Do’s are unplugged, our
                            reception is not and definitely as a couple who loves pictures, you’ll get tons of options
                            to take your pictures. We prepared for this event wholeheartedly.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="my-1">
                    <v-expansion-panel-title static color="secondary" class="font-weight-bold">
                        <v-icon start color="white">mdi-check-circle-outline</v-icon>Do we really need to RSVP? We
                        already said "YES" to the
                        couple?
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="text-justify">
                            Yes, please. We will be needing your formal RSVP to consolidate guest details and finalize
                            the headcount for catering and seating purposes.
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        <div class="text-center ma-4" id="prenup">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Prenup</div>
            <v-responsive>
                <iframe src="https://www.youtube.com/embed/9NHBMP6u74U" width="100%" height="100%"
                    style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </v-responsive>
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">RSVP</div>
            <v-card class="bg-white text-justify pa-4">
                <v-alert v-if="message" class="mb-4"
                    :type="message == 'Thank you for your response! 💕' ? 'success' : 'error'" variant="tonal"
                    dismissible>
                    {{ message }}
                </v-alert>
                <v-form ref="rsvpFormRef" v-model="valid" id="rsvp">
                    <div class="text-caption mb-4">
                        Please enter your name to search the guest list below:
                    </div>
                    <v-autocomplete v-model="form.name" :items="allowedGuests" label="Your Name *" variant="outlined"
                        :rules="[v => !!v || 'Name is required']"></v-autocomplete>
                    <v-text-field v-model="form.number" label="Phone Number (optional)"
                        variant="outlined"></v-text-field>
                    <v-select v-model="form.attendance" :items="['Yes', 'No']" label="Will you attend? *"
                        variant="outlined" :rules="[v => !!v || 'Please select one']"></v-select>
                    <v-textarea v-model="form.message" label="Message (optional)" variant="outlined"></v-textarea>
                    <v-btn color="primary" block class="mt-4" :loading="loading" @click.stop="submitRSVP">
                        Submit
                    </v-btn>
                </v-form>
                <div class="text-caption mt-2">
                    Note: If you can’t find your name on the list, please don’t hesitate to message us.
                </div>
            </v-card>
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    </link>
</template>
<script setup>
import homeImage from '../assets/images/Home.jpg'
import car1 from '../assets/images/Car1.jpg'
import car2 from '../assets/images/Car2.jpg'
import car3 from '../assets/images/Car3.jpg'
import car4 from '../assets/images/Car4.jpg'
import car5 from '../assets/images/Car5.jpg'
import car6 from '../assets/images/Car6.jpg'
import car7 from '../assets/images/Car7.jpg'
import car8 from '../assets/images/Car8.jpg'
import car9 from '../assets/images/Car9.jpg'
import car10 from '../assets/images/Car10.jpg'
import car11 from '../assets/images/Car11.jpg'
import car12 from '../assets/images/Car12.jpg'
import car13 from '../assets/images/Car13.jpg'
import car14 from '../assets/images/Car14.jpg'
import car15 from '../assets/images/Car15.jpg'
import car16 from '../assets/images/Car16.jpg'
import car17 from '../assets/images/Car17.jpg'
import car18 from '../assets/images/Car18.jpg'
import car19 from '../assets/images/Car19.jpg'
import car20 from '../assets/images/Car20.jpg'
import car21 from '../assets/images/Car21.jpg'
import car22 from '../assets/images/Car22.jpg'
import car23 from '../assets/images/Car23.jpg'
import car24 from '../assets/images/Car24.jpg'
import car25 from '../assets/images/Car25.jpg'
import car26 from '../assets/images/Car26.jpg'
import car27 from '../assets/images/Car27.jpg'
import car28 from '../assets/images/Car28.jpg'
import car29 from '../assets/images/Car29.jpg'
import car30 from '../assets/images/Car30.jpeg'
import car31 from '../assets/images/Car31.jpg'
import car32 from '../assets/images/Car32.jpg'
import carousel1 from '../assets/images/Carousel1.jpg'
import carousel2 from '../assets/images/Carousel2.jpg'
import carousel3 from '../assets/images/Carousel3.jpg'
import carousel4 from '../assets/images/Carousel4.jpg'
import carousel5 from '../assets/images/Carousel5.jpg'
import carousel6 from '../assets/images/Carousel6.jpg'
import carousel7 from '../assets/images/Carousel7.jpg'
import carousel8 from '../assets/images/Carousel8.jpg'
import carousel9 from '../assets/images/Carousel9.jpg'
import end from '../assets/images/End.jpg'
import sponsors1 from '../assets/images/Sponsors1.png'
import sponsors2 from '../assets/images/Sponsors2.png'
import sponsors3 from '../assets/images/Sponsors3.png'
import dressCode1 from '../assets/images/1.png'
import dressCode2 from '../assets/images/2.png'
import venue from '../assets/images/Venue.png'
import church from '../assets/images/Church.png'
import monogram from '../assets/images/Monogram.png'
import { ref, onMounted, reactive } from 'vue'

const allowedGuests = ref([]);
const valid = ref(false);
const loading = ref(false);
const message = ref('');
const rsvpFormRef = ref(null);
const weddingDate = new Date('2025-12-12T00:00:00');
const countdown = ref({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
const form = reactive({
    name: '',
    number: '',
    attendance: '',
    message: ''
});

const carouselItems = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, car16, car17, car18, car19, car20, car21, car22, car23, car24, car25, car26, car27, car28, car29, car30, car31, car32]

const scrollToRsvp = () => {
    const el = document.getElementById('rsvp')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const submitRSVP = async () => {
    const { valid } = await rsvpFormRef.value.validate()
    if (!valid) return

    loading.value = true
    try {
        await fetch('https://script.google.com/macros/s/AKfycbxIK7tDhZffSLmWGHlzhnav00vojkLrEpUNJk0Wq4T9Q2ySbm715ZsCBSnC5CKkFGrN/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })

        message.value = 'Thank you for your response! 💕'
        allowedGuests.value = allowedGuests.value.filter(item => item != form.name)
        form.name = ''
        form.number = ''
        form.attendance = ''
        form.message = ''
    } catch (err) {
        console.error(err)
        message.value = 'Something went wrong. Please try again later.'
    } finally {
        loading.value = false
    }
}

const updateCountdown = () => {
    const now = new Date()
    const diff = weddingDate - now

    if (diff <= 0) {
        countdown.value = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 }
        return
    }

    countdown.value = {
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / (1000 * 60)) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
    }
}

onMounted(async () => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
    try {
        const guestRes = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSjGNB-49I0IodhS5LuBXfbfzZjksVaDOO45qpoO1goV6U8WWZS1ppQ1Vt0gpWGvhnv8ICBr3Q5Yh5L/pub?gid=2089181879&single=true&output=csv')
        const rsvpRes = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTn9P227iJuLVtAIGgpVgh0pW70JWmloHkT_0aAEJmAECZIR7Jh0XKablqh56-_nieDmqzahv5SZJEj/pub?output=csv')
        const guestText = await guestRes.text()
        const rsvpText = await rsvpRes.text()
        const guestLines = guestText.split('\n').map(line => line.trim()).filter(Boolean)
        const rsvpLines = rsvpText.split('\n').map(line => line.trim()).filter(Boolean)

        // Remove header row (if any)
        const rsvpList = rsvpLines.slice(1).map(rLine => {
            const name = rLine.split(',')[1].replace(/^"|"$/g, '').trim()
            return name
        })
        const guestList = guestLines.slice(1).map(gLine => {
            const name = gLine.split(',')[0].replace(/^"|"$/g, '').trim()
            return name
        })
        allowedGuests.value = guestList.filter(item => !rsvpList.includes(item));
    } catch (err) {
        console.error('❌ Failed to load guest list', err)
    }
})
</script>