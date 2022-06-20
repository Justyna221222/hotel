<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj szprosy lub wybierz opcję okna bez ciepłej szprosy</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Wprowadź rodzaj i kolor szprosy.</p>
    </div>
    <div class="choose">
        <div class="narrow">
            <div class="brak">
                <label class="noFrame">
                 <input type="radio" id="brak" value="brak" v-model="windowMuntins">
                 <p>Wybieram okno bez naklejanych szpros</p>    
                </label>   
            </div>  
        </div>
        <hr>
        <div class='narrow'>
            <div><p>Szerokość szprosy: <b>26 mm</b></p></div>
            <div class="chooseItems">
                <div class="frame">
                    <label class="muntinItem">
                        <input type="radio" id="biala26" value="biała 26mm" v-model="windowMuntins">
                        <p>Biała</p>
                    <!--  <img src='/images/szprosaBiala.png' alt="window frame" width="54" height="54">-->
                    </label>          
                </div>  
                <div class="frame">
                    <label class="muntinItem">
                        <input type="radio" id="drewnopodobna26" value="drewnopodobna 26mm" v-model="windowMuntins">
                        <p>Drewnopodobna</p>
                    <!--  <img src='/images/szprosaDrewnopodobna.png' alt="window frame" width="51" height="51">-->
                    </label>      
                </div>  
            </div>    
        </div>
        <hr> 
        <div class='narrow'>
            <div><p>Szerokość szprosy: <b>45 mm</b></p></div>
            <div class="chooseItems">
                <div class="frame">
                    <label class="muntinItem">
                        <input type="radio" id="biala45" value="biała 45mm" v-model="windowMuntins">
                        <p>Biała</p> 
                        <!--<img src='/images/szprosaBiala.png' alt="window frame" width="54" height="54"> -->   
                    </label> 
                    
                </div>  
                <div class="frame">
                    <label class="muntinItem">
                        <input type="radio" id="drewnopodobna45" value="drewnopodobna 45mm" v-model="windowMuntins">
                        <p>Drewnopodobna</p>
                        <!-- <img src='/images/szprosaDrewnopodobna.png' alt="window frame" width="51" height="51">-->
                    </label> 
                      
                </div> 
            </div>     
        </div>  
        <hr> 
</div>
<div>Cena okna po wybraniu ciepłych ramek: {{this.$store.state.winFramePrice}}</div>
<div>
    <button @click="navigateToWinFrames" type="button" class="previous">Poprzedni</button>
    <button @click="setMuntins" type="button" class="next">Następny</button>
</div>
</template>

<script>
    import {winMuntinsPriceSingle} from '../winMuntinsPriceSingle.js';
    import {winMuntinsPriceDouble} from '../winMuntinsPriceDouble.js';
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowMuntins: '',
                winMuntinsPrice: '',
                inputIsInvalid: false
            };
        },
        methods: {
            setMuntins() {
                const winMuntins = this.windowMuntins;
                const winType = this.$store.state.winType;
                var winWidth = this.$store.state.width;
                winWidth = winWidth/1000;
                var winHeight = this.$store.state.height;
                winHeight = winHeight/1000;
                const winGlass = this.$store.state.winGlass;
                const winFramesPrice = this.$store.state.winFramePrice;
                if(winMuntins == ''){
                    this.inputIsInvalid = true;
                    return;
                } else if (winGlass == 'jednokomorowe') {
                    const winMuntinPrice = winMuntinsPriceSingle(winMuntins, winType, winWidth, winHeight, winFramesPrice);
                    this.winMuntinsPrice = winMuntinPrice;
                } else if(winGlass == 'dwukomorowe') {
                    const winMuntinPrice = winMuntinsPriceDouble(winMuntins, winType, winWidth, winHeight, winFramesPrice);
                    this.winMuntinsPrice = winMuntinPrice;
                } else {
                    return 0;
                }
                const winMuntinPrice = this.winMuntinsPrice;
                this.$store.commit('setWinMuntins', winMuntins);
                this.$store.commit('setWinMuntinsPrice', winMuntinPrice);               
                this.$router.push("/windowDiffusers");
            },
            navigateToWinFrames() {
                this.$router.push("/windowFrames");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },              
        },
            beforeRouteEnter(to, from, next){
                const winFrames = store.state.winFrame;
                next(winFrames !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 0;
}
.frame {
    text-align: center;
}
.brak p {
    text-align: center;
    padding: 0 15px;
}
.noFrame {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
}
.muntinItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
}
.muntinItem p {
    padding: 0 10px;
}
.choose {
     display: flex;
     flex-direction: column;
     justify-content: center;
 }
 .chooseItems {
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
 }
.narrow {
    display: flex;
    flex-direction: row;
    align-items: center;
}
input {
    padding: 0;
    margin: 0;
}
  /*[type=radio]:not(#brak) { 
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

/* CHECKED STYLES 
[type=radio]:checked:not(#brak) + img {
  outline: 2px solid red;
}

[type=radio]:checked:not(#brak) + p {
  outline: 2px solid red;
}*/
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