<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź wysokość i szerokość okna w mm</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<error-message v-if="incorrectSize" @close="confrimErrorSize">
    <template #default>
        <p>Wygląda na to, że nie oferujemy okna o podanych wymiarach.</p>
        <p>Jeżeli potrzebujesz nietypowego okna skontaktuj się z nami:</p>
        <p>e:mail: WK@windowscork.ie</p>
        <p>Phone: 087 467 4850</p>
    </template>
    <template #actions>
        <button @click="confrimErrorSize">Ok</button>
    </template>
</error-message>
 <div>
    <div class="header">
        <p> Wprowadź wysokość i szerokość okna w mm.</p>
    </div>
     
    <div :class="{invalid:widthValidity === 'invalid'}">
        <label to='winWidth'>Width</label>
        <input type='text' id='winWidth' v-model.trim="winWidth" @blur="validateWidth">
        <p v-if="widthValidity === 'invalid'">Wprowadź szerokość okna w mm</p>
    </div>
    <div class="imgAndHeight">
    <img :src='source' alt="window" width="434" height="295">
        <div :class="{invalid:heightValidity === 'invalid'}">        
            <label to='winHeight'>Height</label>
            <input type='text' id='winHeight' v-model.trim="winHeight" @blur="validateHeight">
            <p v-if="heightValidity === 'invalid'">Wprowadź wysokość okna w mm</p>      
        </div>
    </div>
</div>
    <div>Cena okna: {{ winSizePrice }}</div>
    <div>
        <button @click="navigateToWinType" type="button" class="previous">Poprzedni</button>
        <button @click="setWinSize" type="button" class="next">Następny</button>
    </div>   
</template>

<script>
    import { winSizePriceF } from '../winPriceF.js';
    import { winSizePriceR } from '../winPriceR.js';
    import { winSizePriceRRU } from '../winPriceRRU.js';
    import { winSizePriceRUF } from '../winPriceRUF.js';
    import { winSizePriceU } from '../winPriceU.js';
    import { winSizePriceRU } from '../winPriceRU.js';
    import { winSizePriceRRRU } from '../winPriceRRRU.js';
    import { winSizePriceFF } from '../winPriceFF.js';
    import { winSizePriceFFF } from '../winPriceFFF.js';
    import { winPriceDPSKF } from '../winPriceDPSKF.js';
    import { winPriceDPSKFPerfectherm } from '../winPriceDPSKFPerfectherm.js';
    import { winPriceHS } from '../winPriceHS.js';
    import { winPriceDsingle } from '../winPriceDsingle.js';
    import { winPriceDsingle1 } from '../winPriceDsingle1.js'
    import { winPriceDdoublePVC } from '../winPriceDdoublePVC.js'
    import { winPriceURU } from '../winPriceURU.js'
    import { winPriceRRUX2 } from '../winPriceRRUX2.js'
    import store from '../store/index.js';  // import the store    
    export default {
        data() {
            return {
                winWidth: null,
                winHeight: null,
                inputIsInvalid: false,
                incorrectSize: false,
                widthValidity: 'pending',
                heightValidity: 'pending',
                winType:''
            };
        },
        computed: {
            winSizePrice() {
            const wWidth = this.winWidth;
            const wHeight = this.winHeight;
            const winType = this.$store.state.winType;
            if(winType == 'fix w ramie') {
                 const winPrice = winSizePriceF(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'rozwierne'){
                const winPrice = winSizePriceR(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Rozwierne + rozwierno-uchylne'){
                const winPrice = winSizePriceRRU(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Rozwierno-uchylne + FIX'){
                const winPrice = winSizePriceRUF(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Uchylne'){
                const winPrice = winSizePriceU(wWidth, wHeight);
                return winPrice;                                
            } else if(winType == 'Rozwierno-uchylne'){
                const winPrice = winSizePriceRU(wWidth, wHeight);
                return winPrice;  
            } else if(winType == 'Uchylne + rozwierno-uchylne'){
                const winPrice = winPriceURU(wWidth, wHeight);
                return winPrice;  
            } else if(winType == 'Rozwierne + rozwierno-uchylne x 2'){
                const winPrice = winPriceRRUX2(wWidth, wHeight);
                return winPrice; 
            } else if(winType == 'Rozwierne + rozwierne + rozwierno-uchylne'){
                const winPrice = winSizePriceRRRU(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Stałe FIX + FIX'){
                const winPrice = winSizePriceFF(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Stałe FIX + FIX + FIX'){
                const winPrice = winSizePriceFFF(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Drzwi PSK + FIX'){
                const winPrice = winPriceDPSKF(wWidth, wHeight);
                return winPrice;     
            } else if(winType == 'Drzwi PSK + FIX Perfectherm'){
                const winPrice = winPriceDPSKFPerfectherm(wWidth, wHeight);
                return winPrice;   
            } else if(winType == 'Drzwi HS'){
                const winPrice = winPriceHS(wWidth, wHeight);
                return winPrice;    
            } else if(winType == 'Drzwi jednoskrzydłowe 1'){
                const winPrice = winPriceDsingle(wWidth, wHeight);
                return winPrice; 
            } else if(winType == 'Drzwi jednoskrzydłowe 2'){
                const winPrice = winPriceDsingle1(wWidth, wHeight);
                return winPrice;
            } else if(winType == 'Drzwi dwuskrzydłowe PVC'){
                const winPrice = winPriceDdoublePVC(wWidth, wHeight);
                return winPrice;                                              
            }  else {
                return 0;
            }
           
            },
        source() {
            const winType = this.$store.state.winType;
            if(winType == 'fix w ramie') {
                return '/images/WinSize/FIXwRamie1.png';
            } else if(winType == 'rozwierne'){
                return '/images/WinSize/rozwierne1.png';
            } else if(winType == 'Rozwierne + rozwierno-uchylne'){
                return '/images/WinSize/rozwierne+rozwierno-uchylne1.png';
            } else if(winType == 'Rozwierno-uchylne + FIX'){
                return '/images/WinSize/rozwierno-uchylne+FIX1.png';
            } else if(winType == 'Uchylne'){
                return '/images/WinSize/uchylne1.png';                                
            } else if(winType == 'Rozwierno-uchylne'){
                return '/images/WinSize/rozwierno-uchylne1.png';  
            } else if(winType == 'Rozwierne + rozwierne + rozwierno-uchylne'){
                return '/images/WinSize/rozwierne+rozwierne+rozwierno-uchylne1.png';   
            } else if(winType == 'Stałe FIX + FIX'){
                return '/images/WinSize/staleFIX+FIX1.png';   
            } else if(winType == 'Stałe FIX + FIX + FIX'){
                return '/images/WinSize/stałeFIX+FIX+FIX1.png';
            } else if(winType == 'Drzwi PSK + FIX'){
                return '/images/WinSize/DPSK+FIX.png';    
            } else if(winType == 'Drzwi PSK + FIX Perfectherm'){
                return '/images/WinSize/DPSK+FIX.png';   
            } else if(winType == 'Drzwi HS'){
                return '/images/WinSize/HS+FIX.png';  
            } else if(winType == 'Drzwi jednoskrzydłowe 1'){
                return '/images/WinSize/DrzwiJednoPVC1.png';   
            } else if(winType == 'Drzwi jednoskrzydłowe 2'){
                return '/images/WinSize/DrzwiJednoPVC2.png';   
            } else if(winType == 'Drzwi dwuskrzydłowe PVC'){
                return '/images/WinSize/DrzwiDwuPVC.png';  
            } else if(winType == 'Uchylne + rozwierno-uchylne'){
                return '/images/WinSize/uchylne+rozwierno-uchylne.png';   
            } else if(winType == 'Rozwierne + rozwierno-uchylne x 2'){
                return '/images/WinSize/rozwierne+rozwierno-uchylneX2.png';                                                  
            }  else {
                return 0;
            }
        }                 
        },
        methods: {
            setWinSize() {
                const winType = this.$store.state.winType;
                this.winType = winType;
                const windowWidth = this.winWidth;
                const windowHeight = this.winHeight;
                const winArea = ((windowHeight/1000) * (windowWidth/1000));
                const winSizePrice = this.winSizePrice;
                if(windowWidth == null || windowHeight == null || isNaN(this.winWidth) || isNaN(this.winHeight)) {
                    this.inputIsInvalid = true;
                    return;
                } else if(winSizePrice == 0) {
                    this.incorrectSize = true;
                    return;
                }
                this.$store.commit('setWidth', windowWidth);
                this.$store.commit('setHeight', windowHeight);
                this.$store.commit('setWinSizePrice', winSizePrice);
                this.$store.commit('setWinArea', winArea);
                if(winType == 'Drzwi PSK + FIX' || winType == 'Drzwi PSK + FIX Perfectherm' || winType == 'Drzwi HS') {
                    this.$router.push("/windowVenner")
                } else if(winType == 'Drzwi jednoskrzydłowe 1' || winType == 'Drzwi jednoskrzydłowe 2' || winType == 'Drzwi dwuskrzydłowe PVC') {
                    this.$store.commit('setWinBlindPrice', winSizePrice);
                    this.$store.commit('setBasketDisabled');  
                    this.$router.push("/summary")
                } else {
                this.$router.push("/windowProfile");                      
                }


            },
            navigateToWinType() {
                this.$router.push("/windowType");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },
            confrimErrorSize() {
                this.incorrectSize = false;
            },
            validateWidth() {
                if(this.winWidth === null || isNaN(this.winWidth)) {
                    this.widthValidity = 'invalid';
                } else {
                    this.widthValidity = 'valid';
                }
            },
            validateHeight() {
                if(this.winHeight === null || isNaN(this.winHeight)) {
                    this.heightValidity = 'invalid';
                } else {
                    this.heightValidity = 'valid';
                }
            },            
        },
        beforeRouteEnter(to, from, next){
                const winType = store.state.winType;
                next(winType !== '');
            }
    }
</script>

<style>
div {
    padding: 20px;
}
p {
    color: #5E5B58;
}
label {
    padding: 10px;
}
.next {
    float: right;
    padding: 10px 50px;
    display: inline-block;
    margin-right: 20px;
}
.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin-left: 20px;
}
.header {
    font-size: 20px;
    padding: 0;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0;
}
div.invalid input {
    border: 1px solid red;
}
div.invalid label {
    color: red;
}
.imgAndHeight {
    display:flex;
    flex-direction: row;
    align-items: center;
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