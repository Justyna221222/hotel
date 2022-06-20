<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wybierz typ okna.</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<div><p class="header">Wprowadź typ okna</p></div>
<div class="container">
    <div class="choose"> 
        <div class="listItem">
            <div class="description">Stałe FIX w ramie</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='fixWRamie'>  
                <input type="radio" id="fixWRamie" value="fix w ramie" v-model="windowType">
                <img src='/images1/FIXwRamie.png' alt="Fix w ramie" width="96" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Rozwierne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne'>   
                <input type="radio" id="Rozwierne" value="rozwierne" v-model="windowType">
                <img src='/images1/rozwierne.png' alt="Rozwierne" width="92" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Rozwierne + rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierno-uchylne" value="Rozwierne + rozwierno-uchylne" v-model="windowType">
                <img src='/images1/rozwierne+rozwierno-uchylne.png' alt="Rozwierne + rozwierno-uchylne" width="173" height="170">
            </label>   
        </div>    
        <div class="listItem">
            <div class="description">Rozwierno-uchylne + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozweirno-uchylne + FIX'>  
                <input type="radio" id="Rozweirno-uchylne + FIX" value="Rozwierno-uchylne + FIX" v-model="windowType">
                <img src='/images1/rozwierno-uchylne+FIX.png' alt="Rozweirno-uchylne + FIX" width="171" height="170">
            </label>   
        </div> 
        <div class="listItem">
            <div class="description">Uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Uchylne'>  
                <input type="radio" id="Uchylne" value="Uchylne" v-model="windowType">
                <img src='/images1/uchylne.png' alt="Uchylne" width="170" height="88">
            </label>   
        </div>       
        <div class="listItem">
            <div class="description">Rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierno-uchylne'>  
                <input type="radio" id="Rozwierno-uchylne" value="Rozwierno-uchylne" v-model="windowType">
                <img src='/images1/rozwierno-uchylne.png' alt="Rozwierno-uchylne" width="92" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">Rozwierne + rozwierne + rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierne + rozwierno-uchylne" value="Rozwierne + rozwierne + rozwierno-uchylne" v-model="windowType">
                <img src='/images1/rozwierne+rozwierne+rozwierno-uchylne.png' alt="Rozwierne + rozwierne + rozwierno-uchylne" width="250" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">Stałe FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX" value="Stałe FIX + FIX" v-model="windowType">
                <img src='/images1/staleFIX+FIX.png' alt="Stałe FIX + FIX" width="171" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Stałe FIX + FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX + FIX" value="Stałe FIX + FIX + FIX" v-model="windowType">
                <img src='/images1/stałeFIX+FIX+FIX.png' alt="Stałe FIX + FIX + FIX" width="248" height="170">
            </label>   
        </div>
    </div>
    <div>
        <button @click="setWinType" type="button" class="next">Następny</button>
    </div>   
</div>
</template>

<script>
 export default {
     data() {
         return {
            windowType:'',
            inputIsInvalid: false
         };
     },
     methods: {
         setWinType() {
             const winType = this.windowType;
             if(winType == '') {
                 this.inputIsInvalid = true;
                 return;
             }
             this.$store.commit('setWinType', winType);
             this.$router.push("/windowSize");
         },
         confrimError() {
             this.inputIsInvalid = false;
         }
     }
 }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    margin: 50px auto 0 auto;
}
 .choose {
     display: grid;
     grid: 20% / auto auto auto auto;
    /* flex-direction: row;
     flex-flow: row wrap;
     justify-content: center;*/
     margin: 0 auto;
     padding: 0;
 }
 .next {
     float: right;
     padding: 10px 50px;
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
.header {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    background-color: #f3e0d1;
    margin: 0;
    padding: 0;
}
.description {
    font-size: 16px;
    text-align: center;
    font-family: 'Merienda', cursive;
    font-family: 'Montserrat', sans-serif;
    color: #5E5B58;
}
.listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>