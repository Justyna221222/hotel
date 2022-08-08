<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj szyby</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Wprowadź typ szyby</p>
    </div>
    <div class="choose">
    <div v-if="glassAccepted">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="jednokomorowe" value="jednokomorowe" v-model="windowGlass">
            <img src='/images/glass2.jpg' alt="window glass" width="256" height="256">
            <p> Jednokomorowe</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="dwukomorowe" value="dwukomorowe" v-model="windowGlass">
            <img src='/images/glass3.jpg' alt="window glass" width="256" height="256">
            <p> Dwukomorowe</p>
        </label>
    </div>

</div>
<div v-if="!glassAccepted">
    <p>Profil {{ this.$store.state.winProfile }} jest dostępny wyłącznie z pakietem dwukomorowym</p>
</div>
<div>Cena okna z okleiną: {{ this.$store.state.winVennerPrice }}</div>
<div>
    <button @click="navigateToWinVenner" type="button" class="previous">Poprzedni</button>
    <button @click="setGlass" type="button" class="next">Następny</button>
</div>
</template>

<script>
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowGlass: '',
                area:'',
                inputIsInvalid: false
            };
        },
        computed: {
            glassAccepted() {
                const winProfile = this.$store.state.winProfile;
                if(winProfile == "schuco" || winProfile == "veka" || winProfile == "aluplast" || winProfile == "sonarol") {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {
            setGlass() {
                const winGlass = this.windowGlass;
                const winVennerPrice = this.$store.state.winVennerPrice;
                const winArea = this.$store.state.winArea;
                this.area = winArea;
                if(winGlass == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(winGlass == 'jednokomorowe') {
                    const winGlassPrice = winVennerPrice;
                    this.$store.commit('setWinGlassPrice', winGlassPrice);
                } else if(winGlass == 'dwukomorowe') {
                    const winGlassPrice = Math.round(winVennerPrice + (140 * winArea)) * 100 / 100;
                    this.$store.commit('setWinGlassPrice', winGlassPrice);
                } else {
                    return 0;
                }
                this.$store.commit('setWinGlass', winGlass);
                this.$router.push("/windowFrames");
            },
            navigateToWinVenner() {
                this.$router.push("/windowVenner");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },            
        },
        beforeRouteEnter(to, from, next){
                const winVenner = store.state.winVenner;
                const winType = store.state.winType;
                next(winVenner !== '' && winType !== 'Drzwi HS');
            }
    };
</script>

<style scoped>
.choose {
     display: flex;
     flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;
 }

.choose p {
    color: black;
    padding: 15px 0 0 0;
}
label {
    display: flex;
    flex-direction: column;
    align-items: center;
}

  [type=radio] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  outline: 3px solid red;
}
.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin-left: 20px;
}
.next {
    float: right;
    padding: 10px 50px;
    display: inline-block;
    margin-right: 20px;
}
.header {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0;
    padding: 0;
}
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #cb2c2c;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #690f0f;
  border-color: #270041;
}
</style>