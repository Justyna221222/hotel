<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wprowadź rodzaj rolety lub wybierz opcję okna bez rolety</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
    <div class="header">
        <p> Wprowadź rodzaj rolety lub wybierz okno bez rolety.</p>
    </div>
    <div class="choose">
        <div class="narrow">
            <div class="brak">
                <div class="noFrame">
                 <input type="radio" id="brak" value="brak" name ="winBlind" v-model="windowBlind">
                 <label for="brak">Wybieram okno bez rolety.</label>    
                </div>   
            </div>  
        </div>
        <hr>
            <div class="chooseItems">
                    <div class="blindItem">
                        <div class="narrow">
                            <input type="radio" id="reczna" value="ręczna" name ="winBlind" v-model="windowBlind">
                            <label for="reczna">Roleta ręczna</label>
                        </div>
                        <img src='/images/roletazewnetrzna.png' alt="roleta ręczna" width="138" height="250">
                    </div>          
                    <div class="blindItem">
                        <div class="narrow">                        
                            <input type="radio" id="zsilnikiem" value="z silnikiem" name ="winBlind" v-model="windowBlind">
                            <label for="zsilnikiem">Roleta z silnikiem</label>
                        </div>
                        <img src='/images/roletaSilnik1.png' alt="window blind" width="184" height="250">
                    </div>      
                    <div class="blindItem">
                        <div class="narrow">                        
                            <input type="radio" id="zsilnikiemzprzeciazeniem" value="z silnikiem z przeciążeniem" name ="winBlind" v-model="windowBlind">
                            <label for="zsilnikiemzprzeciazeniem">Roleta z silnikiem z przeciążeniem</label>
                        </div>
                        <img src='/images/roletaSilnik2.png' alt="window blind" width="157" height="250">
                    </div>      
            </div>
</div>
<div>Cena okna po wybraniu nawiewników: {{this.$store.state.winDiffuserPrice}}</div>
<div>
    <button @click="navigateToWinDiffusers" type="button" class="previous">Poprzedni</button>
    <button @click="setBlind" type="button" class="next">Następny</button>
</div>
</template>

<script>
    import store from '../store/index.js';  // import the store  
    export default {
        data(){
            return {
                windowBlind: '',
                inputIsInvalid: false
            };
        },
        methods: {
            setBlind() {
                const winBlind = this.windowBlind;
                const winDiffuserPrice = this.$store.state.winDiffuserPrice;
                const winArea = this.$store.state.winArea;
                var winBlindPrice;
                if(winBlind == ''){
                    this.inputIsInvalid = true;
                    return;
                } else if (winBlind == 'brak') {
                    winBlindPrice = Math.round(winDiffuserPrice);
                } else if(winBlind == 'ręczna') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300));
                } else if(winBlind == 'z silnikiem') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300) + 210);
                } else if(winBlind == 'z silnikiem z przeciążeniem') {
                    winBlindPrice = Math.round(winDiffuserPrice + (winArea * 300) + 340);
                } else {
                    return 0;
                }
                this.$store.commit('setWinBlind', winBlind);
                this.$store.commit('setWinBlindPrice', winBlindPrice);
                this.$store.commit('setBasketDisabled');               
                this.$router.push("/summary");
            },
            navigateToWinDiffusers() {
                this.$router.push("/windowDiffusers");
            },
            confrimError() {
                this.inputIsInvalid = false;
            },              
        },
            beforeRouteEnter(to, from, next){
                const winDiffuser = store.state.winDiffuser;
                next(winDiffuser !== '');
            }
    };
</script>

<style scoped>

p {
    font-size: 18px;
    margin: 0;
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
.blindItem {
    display: flex;
    flex-direction: column;
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
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
 }
.narrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.narrow p {
    margin: 0 0 0 15px;
}
input {
    padding: 0;
    margin: 0;
}
  [type=radio] + label {
    cursor: pointer;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}
[type=radio] + p {
    cursor: pointer;
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