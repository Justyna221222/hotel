<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj profilu okiennego</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Wprowadź rodzaj profilu okiennego</p>
    </div>
    <div class="choose">
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="sonarolClassic" value="sonarol classictherm" v-model="windowProfile">
            <img src='/images/Sonarolclasictherm.png' alt="window profile" width="250" height="250">
            <p>Sonarol Classictherm</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="schuco" value="schuco" v-model="windowProfile">
            <img src='/images/schucoliving.png' alt="window profile" width="250" height="250">
            <p>Schuco Living</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="sonarol" value="sonarol" v-model="windowProfile">
            <img src='/images/sonarolperfectherm.png' alt="window profile" width="250" height="250">
            <p>Sonarol Perfektherm</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="veka" value="veka" v-model="windowProfile">
            <img src='/images/veka82.png' alt="window profile" width="250" height="250">
            <p>Veka 82</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="aluplast4000" value="aluplast 4000" v-model="windowProfile">
            <img src='/images/Aluplast4000.png' alt="window profile" width="250" height="250">
            <p>Aluplast 4000</p>
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="aluplast" value="aluplast" v-model="windowProfile">
            <img src='/images/aluplast8000.png' alt="window profile" width="250" height="250">
            <p>Aluplast 8000</p>
        </label>
    </div>
</div>
<div>Cena okna z rozmiarem: {{ this.$store.state.winSizePrice }}</div>
<div>
    <button @click="navigateToWinSize" type="button" class="previous">Poprzedni</button>
    <button @click="setProfile" type="button" class="next">Następny</button>
</div>
<div>{{ this.$store.state.winProfilePrice }}</div>
<div>{{ this.$store.state.winProfile }}</div>
</template>

<script>
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowProfile: '',
                area:'',
                inputIsInvalid: false,
            };
        },
        methods: {
            setProfile() {
                const winProfile = this.windowProfile;
                const winSizePrice = this.$store.state.winSizePrice;
                const winArea = this.$store.state.winArea;
                this.area = winArea;
                if(winProfile == '') {
                    this.inputIsInvalid = true;
                    return;
                } else if(winProfile == 'sonarol classictherm') {
                    const winProfilePrice = Math.round(winSizePrice) * 100/100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else if(winProfile == 'schuco') {
                    const winProfilePrice = Math.round(winSizePrice * 1.15) * 100/100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else if(winProfile == 'sonarol') {
                    const winProfilePrice = Math.round(winSizePrice * 1.07) * 100 / 100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else if(winProfile == 'veka') {
                    const winProfilePrice = Math.round(winSizePrice * 1.13) * 100 / 100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else if(winProfile == 'aluplast 4000') {
                    const winProfilePrice = Math.round(winSizePrice * 1.05) * 100 / 100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else if(winProfile == 'aluplast') {
                    const winProfilePrice = Math.round(winSizePrice * 1.10) * 100 / 100;
                    this.$store.commit('setWinProfilePrice', winProfilePrice);
                } else {
                    return 0;
                }
                this.$store.commit('setWinProfile', winProfile);
                this.$router.push("/windowVenner");
            },
            navigateToWinSize() {
                this.$router.push("/windowSize");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },            
        },
        beforeRouteEnter(to, from, next){
                const winHeight = store.state.height;
                const winType = store.state.winType;
                //next(winHeight !== '' || winType !== 'Drzwi PSK + FIX');
                next(winType !== 'Drzwi PSK + FIX' && winType !== 'Drzwi PSK + FIX Perfectherm' && winType !== 'Drzwi HS'&& winType !=='' && winType !== 'Drzwi jednoskrzydłowe 1' && winType !== 'Drzwi jednoskrzydłowe 2' && winType !== 'Drzwi dwuskrzydłowe PVC' && winHeight !=='');
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