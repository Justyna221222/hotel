<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj okleiny</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>

    <div class="header">
        <p > Wprowadź rodzaj okleiny.</p>
    </div>
     
<div class="choose">
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="type1" value="jednostronna" v-model="winVenner">
            <img src='/images/jednostronna.jpg' alt="window glass" width="256" height="256">
            <p> Okleina jednostronna</p>
            <p class="small"> Strona zewnętrzna - kolor, strona wewnętrzna - biała</p>
        </label>   
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="type2" value="dwustronna" v-model="winVenner">
            <img src='/images/dwustronna.jpg' alt="window glass" width="256" height="256">
            <p> Okleina dwustronna</p>
            <p class="small"> Strona zewnętrzna i wewnętrzna w kolorze</p>
        </label>
    </div>
</div>

    <div>Cena okna na podstawie profili: {{ this.$store.state.winProfilePrice }}</div>
    <div>Okleina: {{ winVenner }} </div>
    <div>
        <button @click="navigateToWinProfile" type="button" class="previous">Poprzedni</button>
        <button @click="setWinVenner" type="button" class="next">Następny</button>
    </div>   
</template>

<script>
    import store from '../store/index.js';  // import the store
    import { winPriceHSDoubleColor } from '../winPriceHSDoubleColor.js';
    export default {
        data() {
            return {
                winVenner: "",
                inputIsInvalid: false,
                winType: "cos"
            };
        },
        methods: {
            setWinVenner() {
                const windowVenner = this.winVenner;
                const winSizePrice = this.$store.state.winSizePrice;
                var winProfilePrice;
                const winType = this.$store.state.winType;
                const wWidth = this.$store.state.width;
                const wHeight = this.$store.state.height;
                if(winType == 'Drzwi PSK + FIX' || winType == 'Drzwi PSK + FIX Perfectherm') {
                    winProfilePrice = winSizePrice;
                } else {
                    winProfilePrice = this.$store.state.winProfilePrice;
                } 
                if(windowVenner == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(winType == 'Drzwi HS' && windowVenner == 'jednostronna') {
                    const winVennerPrice = winSizePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else if(winType == 'Drzwi HS' && windowVenner == 'dwustronna') {
                    const winVennerPrice = winPriceHSDoubleColor(wWidth, wHeight);
                    this.$store.commit('setWinVennerPrice', winVennerPrice);                
                } else if(windowVenner == 'jednostronna') {
                    const winVennerPrice = (Math.round((winSizePrice * 0.25) * 100) / 100) + winProfilePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else if (windowVenner == 'dwustronna') {
                    const winVennerPrice = (Math.round((winSizePrice * 0.44) * 100) / 100) + winProfilePrice;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else {
                    return 0;
                }
                if(winType == 'Drzwi HS') {
                    this.$store.commit('setWinGlass', 'dwukomorowe');
                    this.$store.commit('setWinVenner', windowVenner);
                    this.$router.push('/windowFrames');                    
                } else {
                    this.$store.commit('setWinVenner', windowVenner);
                    this.$router.push('/windowGlass');                    
                }

            },
            navigateToWinProfile() {
                this.$router.push("/windowProfile");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },
        },
            beforeRouteEnter(to, from, next){
                const winWidth = store.state.width;
                const winHeight = store.state.height;
                const winType = store.state.winType;
                    next(winType !=='' && winType !== 'Drzwi jednoskrzydłowe 1' && winType !== 'Drzwi jednoskrzydłowe 2' && winType !== 'Drzwi dwuskrzydłowe PVC' && winHeight !=='' && winWidth !== '');
            }
    }

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
label p {
    padding: 0;
    margin: 0;
}
.small {
    font-size: 15px;
    padding: 0;
    margin: 0;
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