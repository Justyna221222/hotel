<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź nawiewnika lub wybierz opcję okna bez nawiewnika</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj nawiewnika lub wybierz opcję bez nawiwnika</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Wprowadź rodzaj nawiewnika.</p>
    </div>
    <div>
       <label>
           <div>
                <label class="noMuntin"> 
                    <input type="radio" id="brak" value="brak" v-model="windowDiffuser">
                    <p id="brakp">Wybieram okno bez nawiewnika</p>
                 </label> 
           </div>
         </label> 
    </div>
    <hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC ciśnieniowy</h3>
                <p>infiltracja 6-27 m²/h</p>
                <p>izolacyjność akustyczna 34 dB (32 dB otwarty)</p> 
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECcisnieniowybialy" value="VENTEC ciśnieniowy biały" v-model="windowDiffuser">
                            biały <b>98,00 zł</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECcisnieniowybialykolor" value="VENTEC ciśnieniowy biały/kolor" v-model="windowDiffuser">        
                            biały/kolor (karmel, brązowy, szary)  <b>110,00 zł</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECcisnieniowydwustronnykolor" value="VENTEC ciśnieniowy dwustronny kolor" v-model="windowDiffuser">   
                            dwustronny kolor (karmel, brązowy, szary) <b>122,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECmanualny.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC manualny</h3>
                <p>infiltracja 4-20 m²/h</p>
                <p>izolacyjność akustyczna 36 dB (33 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECmanualnybialy" value="VENTEC manualny biały" v-model="windowDiffuser">
                            biały <b>73,00 zł</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECmanualnybialykolor" value="VENTEC manualny biały/kolor" v-model="windowDiffuser">        
                            biały/kolor (karmel, brązowy, szary) <b>85,00 zł</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECmanualnydwustronnykolor" value="VENTEC manualny dwustronny kolor" v-model="windowDiffuser">   
                            dwustronny kolor (karmel, brązowy, szary) <b>98,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>              
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECautomatyczny.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>VENTEC automatyczny, akustyczny</h3>
                <p>infiltracja 6-20 m²/h</p>
                <p>izolacyjność akustyczna 44 dB (40 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECautomatycznybialy" value="VENTEC automatyczny biały" v-model="windowDiffuser">
                            biały <b>220,00 zł</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="VENTECautomatycznyybialykolor" value="VENTEC automatyczny biały/kolor" v-model="windowDiffuser">        
                            biały/kolor (karmel, brązowy, szary) <b>232,00 zł</b>
                        </label>                                      
                    </div>  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="VENTECautomatycznydwustronnykolor" value="VENTEC automatyczny dwustronny kolor" v-model="windowDiffuser">   
                            dwustronny kolor (karmel, brązowy, szary) <b>244,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>               
</div>
<hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOAMO103.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO AMO 103 ciśnieniowy + okap AB</h3>
                <p>infiltracja 6-27 m²/h</p>
                <p>izolacyjność akustyczna 33 dB (32 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOAMO103" value="AERECO AMO 103" v-model="windowDiffuser">
                            biały, karmel, brązowy, antracyt <b>98,00 zł</b>
                        </label>                    
                    </div>                             
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEMM707.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EMM 707 higrosterowany + okap AB</h3>
                <p>infiltracja 6-30 m²/h</p>
                <p>izolacyjność akustyczna 34 dB (32 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEMM707bialy" value="AERECO EMM 707 biały" v-model="windowDiffuser">
                            biały <b>250,00 zł</b>
                        </label>                    
                    </div>
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEMM707kolor" value="AERECO EMM 707 kolor" v-model="windowDiffuser">
                            karmel, brązowy, szary, antracyt <b>287,00 zł</b>
                        </label>                    
                    </div>                              
                </div>                                 
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEXR306.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EXR 306 higrosterowany z wytłumieniem akustycznym + okap AB</h3>
                <p>infiltracja 7-28 m²/h</p>
                <p>izolacyjność akustyczna 37 dB (35 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEXR306bialy" value="AERECO EXR 306 biały" v-model="windowDiffuser">
                            biały <b>323,00 zł</b>
                        </label>                    
                    </div>                 
                    <div class="listItem">
                        <label>
                            <input type="radio" id="AERECOEXR306kolor" value="AERECO EXR 306 kolor" v-model="windowDiffuser">   
                            karmel, brązowy, szary, antracyt <b>366,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>              
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/AERECOEXR306.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>AERECO EXR 309 higrosterowany z wytłumieniem akustycznym + okap akustyczny</h3>
                <p>infiltracja 7-28 m²/h</p>
                <p>izolacyjność akustyczna 44 dB (42 dB otwarty)</p>  
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="AERECOEXR309bialy" value="AERECO EXR 309 biały" v-model="windowDiffuser">
                            biały <b>433,00 zł</b>
                        </label>                    
                    </div>                  
                    <div class="listItem">
                        <label>
                            <input type="radio" id="AERECOEXR309kolor" value="AERECO EXR 309 kolor" v-model="windowDiffuser">   
                            karmel, brązowy, szary, antracyt <b>508,00 zł</b>
                        </label>                               
                    </div>                                       
                </div>                                 
        </label>               
</div>
<hr>
    <div class="choose">
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON TC45/24</h3>
                <p>infiltracja 98 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTC45" value="RENSON TC45/24" v-model="windowDiffuser">
                            biały <b>592,00 zł</b>
                        </label>                    
                    </div>  
                </div>                      
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON TC60/24</h3>
                <p>infiltracja 141 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTC60" value="RENSON TC60/24" v-model="windowDiffuser">
                            biały <b>616,00 zł</b>
                        </label>                    
                    </div>   
                </div>                     
        </label>
       <label class="shadow p-3 mb-5 bg-white rounded diffuserBrand">   
            <img src='/images/VENTECciesnieniowy.jpg' alt="window diffuser" width="400" height="141">                          
                <h3>RENSON THM90/24</h3>
                <p>infiltracja 46 m²/h</p>
                <div class="diffuserList">   
                    <div class="listItem">
                        <label> 
                            <input type="radio" id="RENSONTHM90" value="RENSON THM90/24" v-model="windowDiffuser">
                            biały <b>787,00 zł</b>
                        </label>                    
                    </div> 
                </div>                       
        </label>         
</div>              
<div class="brookvent">
    <p>W ofercie mamy także nawiewniki firmy <strong>Brookvent</strong>. Więcej informacji pod numerem telefonu: +48 662 320 792</p>
</div>
<div>Cena okna po uwzględnieniu szpros: {{ this.$store.state.winMuntinsPrice }}</div>
<div>
    <button @click="navigateToWinMuntins" type="button" class="previous">Poprzedni</button>
    <button @click="setDiffuser" type="button" class="next">Następny</button>
</div>
</template>

<script>
    import {winDiffuserPrice} from '../winDiffuserPrice.js'
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowDiffuser: '',
                winDiffuserPrice: '',
                winFramesPrice: '',
                winGlass:'',
                inputIsInvalid: false,
                disabledBasket: true

            };
        },
        methods: {
            setDiffuser() {
                const winDiffuser = this.windowDiffuser;
                const winMuntinPrice = this.$store.state.winMuntinsPrice;
                if(this.windowDiffuser == '') {
                    this.inputIsInvalid = true;
                    return;
                } else {
                    const winDiffusersPrice = winDiffuserPrice(winDiffuser, winMuntinPrice); 
                this.$store.commit('setDiffuser', winDiffuser);
                this.$store.commit('setDiffuserPrice', winDiffusersPrice);
                this.$router.push("/windowBlind");                    
                }
            },
            navigateToWinMuntins() {
                this.$router.push("/windowMuntins");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },             
        },
            beforeRouteEnter(to, from, next){
                const winMuntins = store.state.winMuntins;
                next(winMuntins !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 10px;
}
#brakp {
    font-size: 19px;
}
.frame {
    text-align: center;
}
h3 {
    font-size: 22px;
    font-weight: bold;
    color: #690f0f;
    padding: 0;
    margin: 0 auto 5px auto;
    width: 400px;
    word-wrap: wrap;

}
.choose {
     display: flex;
     flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;
     padding: 0;
     margin: 0;
 }
 .choose p:not(#brakp) {
     font-size: 13px;
     padding: 0;
     margin: 0;
     color: #535353;
 }
 label {
     font-size: 15.5px;
     word-wrap: wrap;
 }
 .noMuntin {
    display: flex;
    flex-direction: row;
    padding:0;
    margin: 10px 0;
    justify-content: center;
    align-items: center;
}
.noMuntin p {
    margin: 0 10px;
}

  [type=radio] { 
    padding: 0;
    margin: 0;
    cursor: pointer;
}
  label { 
    padding: 0;
    margin: 0;
    cursor: pointer;
}
.diffuserBrand {
    margin: 10px;
}
.diffuserList {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 15px 0 0 0;
    font-size: 16px;
}
.listItem {
    padding: 0;
    margin: 0;
}
/* IMAGE STYLES 
[type=radio] + img {
  cursor: pointer;
}
[type=radio] + p {
    cursor: pointer;
}*/

/* CHECKED STYLES 
[type=radio]:checked + img {
  outline: 2px solid red;
}

[type=radio]:checked + p {
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
hr {
     border: 1px solid #690f0f;
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
.brookvent {
    padding: 3px;
    background-color: #f3e0d1;
}
</style>