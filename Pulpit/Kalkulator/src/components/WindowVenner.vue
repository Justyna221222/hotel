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
        </label>   
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="type2" value="dwustronna" v-model="winVenner">
            <img src='/images/dwustronna.jpg' alt="window glass" width="256" height="256">
            <p> Okleina dwustronna</p>
        </label>
    </div>
</div>

    <div>Cena okna na podstawie rozmiaru: {{ this.$store.state.winSizePrice }}</div>
    <div>Okleina: {{ winVenner }} </div>
    <div>
        <button @click="navigateToWinSize" type="button" class="previous">Poprzedni</button>
        <button @click="setWinVenner" type="button" class="next">Następny</button>
    </div>   
</template>

<script>
    import store from '../store/index.js';  // import the store
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
                if(windowVenner == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(windowVenner == 'jednostronna') {
                    const winVennerPrice = Math.round((winSizePrice * 1.25) * 100) / 100;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else if (windowVenner == 'dwustronna') {
                    const winVennerPrice = Math.round((winSizePrice * 1.44) * 100) / 100;
                    this.$store.commit('setWinVennerPrice', winVennerPrice);
                } else {
                    return 0;
                }
                this.$store.commit('setWinVenner', windowVenner);
                this.$router.push('/windowGlass');
            },
            navigateToWinSize() {
                this.$router.push("/windowSize");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },
        },
            beforeRouteEnter(to, from, next){
                const winWidth = store.state.width;
                    next(winWidth !== '');
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