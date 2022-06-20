<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj ciepłej ramki lub wybierz opcję okna bez ciepłej ramki</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p > Wprowadź kolor ciepłej ramki.</p>
    </div>
    <div class="frame brakRamki">
        <label class="noFrame">
            <input type="radio" id="brak" value="brak" v-model="windowFrame">
            <p>Wybieram okno bez ciepłej ramki</p>
        </label>   
    </div> 
    <div class="choose">
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="czarna" value="czarna" v-model="windowFrame">
            <img src='/images/ramkaCzarna.png' alt="window frame" width="49" height="286">
            <p>Czarna</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="szara" value="szara" v-model="windowFrame">
            <img src='/images/ramkaSzara.png' alt="window frame" width="49" height="286">
            <p>Szara</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="ciemnyBraz" value="ciemny brąz" v-model="windowFrame">
            <img src='/images/ramkaCiemnyBraz.png' alt="window frame" width="49" height="286">
            <p>Ciemny brąz</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="jasnyBraz" value="jasny brąz" v-model="windowFrame">
            <img src='/images/ramkaJasnyBraz.png' alt="window frame" width="49" height="286">
            <p>Jasny brąz</p>
        </label>   
    </div>
    <div class="frame">
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="biala" value="biała" v-model="windowFrame">
            <img src='/images/ramkaBiala.png' alt="window frame" width="49" height="286">
            <p>Biała</p>
        </label>   
    </div>   
</div>
<div>Cena okna po określeniu typu szyby: {{ this.$store.state.winGlassPrice }}</div>
<div>
    <button @click="navigateToWinGlass" type="button" class="previous">Poprzedni</button>
    <button @click="setFrames" type="button" class="next">Następny</button>
</div>
</template>

<script>
    import {winFramesPriceSingle} from '../winFramesPriceSingle.js'
    import {winFramesPriceDouble} from '../winFramesPriceDouble.js'
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowFrame: '',
                winFramesPrice: '',
                winGlass:'',
                inputIsInvalid: false

            };
        },
        methods: {
            setFrames() {
                const winFrames = this.windowFrame;
                const winGlass = this.$store.state.winGlass;
                this.winGlass = winGlass;
                const area = this.$store.state.winArea;
                const winGlassPrice = this.$store.state.winGlassPrice;
                if(winFrames == ''){
                    this.inputIsInvalid = true;
                    return;
                }
                else if(winGlass == 'jednokomorowe') {
                    const winFramesPrice = winFramesPriceSingle(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;                  
                } else if(winGlass == 'dwukomorowe') {
                    const winFramesPrice = winFramesPriceDouble(area, winFrames, winGlassPrice);
                    this.$store.commit('setWinFramePrice', winFramesPrice);
                    this.winFramesPrice = winFramesPrice;
                } else {
                    this.winFramesPrice = 0;
                }
                this.$store.commit('setWinFrames', winFrames);                
                this.$router.push("/windowMuntins");
            },
            navigateToWinGlass() {
                this.$router.push("/windowGlass");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },             
        },
        beforeRouteEnter(to, from, next){
                const winGlass = store.state.winGlass;
                next(winGlass !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 0 15px;
}
.frame {
    text-align: center;
}
.choose {
     display: flex;
     flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;
 }

.brakRamki {
    display: flex;
    flex-direction: column;
}
.noFrame {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 20px auto auto 20%;
    justify-content: center;
    align-items: center;
}
  [type=radio]:not(#brak) { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}
[type=radio] + p {
    cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked:not(#brak) + img {
  outline: 3px solid red;
}

[type=radio]:checked:not(#brak) + p {
  outline: 2px solid red;
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
    margin: 0 0 10px 0;
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