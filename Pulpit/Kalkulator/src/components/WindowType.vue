<template>
<error-message v-if="inputIsInvalid" @close="confrimError">
    <template #default>
        <p>Wybierz typ okna lub drzwi</p>
    </template>
    <template #actions>
        <button @click="confrimError">Ok</button>
    </template>
</error-message>
<div><p class="header">Wprowadź typ okna lub drzwi</p></div>
<div><p class="header1">OKNA</p></div>

    <div class="choose"> 
        <div class="listItem">
            <div class="description">Stałe FIX w ramie</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='fixWRamie'>  
                <input type="radio" id="fixWRamie" value="fix w ramie" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/FIXwRamie.png' alt="Fix w ramie" width="96" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Rozwierne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne'>   
                <input type="radio" id="Rozwierne" value="rozwierne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne.png' alt="Rozwierne" width="92" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Rozwierne + rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierno-uchylne" value="Rozwierne + rozwierno-uchylne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierno-uchylne.png' alt="Rozwierne + rozwierno-uchylne" width="173" height="170">
            </label>   
        </div>    
        <div class="listItem">
            <div class="description">Rozwierno-uchylne + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozweirno-uchylne + FIX'>  
                <input type="radio" id="Rozweirno-uchylne + FIX" value="Rozwierno-uchylne + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierno-uchylne+FIX.png' alt="Rozweirno-uchylne + FIX" width="171" height="170">
            </label>   
        </div> 
        <div class="listItem">
            <div class="description">Uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Uchylne'>  
                <input type="radio" id="Uchylne" value="Uchylne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/uchylne.png' alt="Uchylne" width="170" height="88">
            </label>   
        </div>       
        <div class="listItem">
            <div class="description">Rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierno-uchylne'>  
                <input type="radio" id="Rozwierno-uchylne" value="Rozwierno-uchylne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierno-uchylne.png' alt="Rozwierno-uchylne" width="92" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">Uchylne + rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Uchylne + rozwierno-uchylne'>  
                <input type="radio" id="Uchylne + rozwierno-uchylne" value="Uchylne + rozwierno-uchylne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/uchylne+rozwierno-uchylne.png' alt="Uchylne + rozwierno-uchylne" width="118" height="170">
            </label>   
        </div>
            <div class="listItem">
            <div class="description">Rozwierne + rozwierno-uchylne x 2</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierno-uchylne x 2'>  
                <input type="radio" id="Rozwierne + rozwierno-uchylne x 2" value="Rozwierne + rozwierno-uchylne x 2" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierno-uchylneX2.png' alt="Uchylne + rozwierno-uchylne" width="116" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Rozwierne + rozwierne + rozwierno-uchylne</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Rozwierne + rozwierne + rozwierno-uchylne'>  
                <input type="radio" id="Rozwierne + rozwierne + rozwierno-uchylne" value="Rozwierne + rozwierne + rozwierno-uchylne" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/rozwierne+rozwierne+rozwierno-uchylne.png' alt="Rozwierne + rozwierne + rozwierno-uchylne" width="250" height="170">
            </label>   
        </div>  
        <div class="listItem">
            <div class="description">Stałe FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX" value="Stałe FIX + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/staleFIX+FIX.png' alt="Stałe FIX + FIX" width="171" height="170">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Stałe FIX + FIX + FIX</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Stałe FIX + FIX + FIX'>  
                <input type="radio" id="Stałe FIX + FIX + FIX" value="Stałe FIX + FIX + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/stałeFIX+FIX+FIX.png' alt="Stałe FIX + FIX + FIX" width="248" height="170">
            </label>   
        </div>
    </div>
<div><p class="header1">DRZWI</p></div>
    <div class="choose">
        <div class="listItem">
            <div class="description">Drzwi PSK + FIX</div>
            <div class="description1">ClassicTherm</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi PSK + FIX'>  
                <input type="radio" id="Drzwi PSK + FIX" value="Drzwi PSK + FIX" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DPSK+FIX.png' alt="Drzwi PSK + FIX" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Drzwi PSK + FIX</div>
            <div class="description1">Perfectherm</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi PSK + FIX Perfectherm'>  
                <input type="radio" id="Drzwi PSK + FIX Perfectherm" value="Drzwi PSK + FIX Perfectherm" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DPSK+FIX.png' alt="Drzwi PSK + FIX Perfectherm" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Drzwi HS</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi HS'>  
                <input type="radio" id="Drzwi HS" value="Drzwi HS" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/HS+FIX.png' alt="Drzwi HS" width="224" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Drzwi jednoskrzydłowe PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi jednoskrzydłowe 1'>  
                <input type="radio" id="Drzwi jednoskrzydłowe 1" value="Drzwi jednoskrzydłowe 1" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiJednoPVC1.png' alt="Drzwi jednoskrzydłowe PVC" width="115" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Drzwi jednoskrzydłowe PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi jednoskrzydłowe 2'>  
                <input type="radio" id="Drzwi jednoskrzydłowe 2" value="Drzwi jednoskrzydłowe 2" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiJednoPVC2.png' alt="Drzwi HS" width="113" height="230">
            </label>   
        </div>
        <div class="listItem">
            <div class="description">Drzwi dwuskrzydłowe PVC</div>
            <label class="shadow p-3 mb-5 bg-white rounded" for='Drzwi dwuskrzydłowe PVC'>  
                <input type="radio" id="Drzwi dwuskrzydłowe PVC" value="Drzwi dwuskrzydłowe PVC" v-model="windowType" @input="setWinType1($event)">
                <img src='/images1/DrzwiDwuPVC.png' alt="Drzwi HS" width="155" height="230">
            </label>   
        </div>
    </div>
    <div>
        <button @click="setWinType" type="button" class="next">Następny</button>
    </div> 
    <div class="woodenWindows">
       <h4> Powyższy kalkulator oblicza cenę okna dla okien <strong>PCV</strong>. Jeżeli interesują cię okna <strong>drewniane</strong> lub inne, 
           wypełnij poniższy formularz, a my wyślemy Ci cennik na Twój adres e-mail.</h4>

            <form>
                <h5>Interesują mnie: </h5>
                <input type="checkbox" id="oknaDrewniane" name="window" value="drewniane" v-model="windowPriceList" >
                <label for="oknaDrewniane"> Okna drewniane</label><br>
                <input type="checkbox" id="oknaAluminiowe" name="window" value="aluminiowe" v-model="windowPriceList">
                <label for="oknaAluminiowe"> Okna aluminiowe</label><br>
                <input type="checkbox" id="drewnianeZNakladkami" name="window" value="drewniane z nakładkami aluminiowymi" v-model="windowPriceList">
                <label for="drewnianeZNakladkami"> Okna drewniane z nakładkami aluminiowymi</label><br>
                <input type="checkbox" id="PPOZ" name="window" value="Stolarka PPOŻ Ei30 Ei60 Ei120" v-model="windowPriceList">
                <label for="PPOZ"> Stolarka PPOŻ Ei30 Ei60 Ei120</label><br>
            </form>
            <div class="email">
                <p>Twój adres e-mail</p>
                <input type="email" v-model="yourEmail">
            </div>
            <p class="small">To nie jest zapis na newsletter. Nie będziemy przysyłać Ci żadnych seryjnych wiadomości.</p>    
            <div>
                <button @click="sendEmail">Wyślij cennik</button>
            </div>
            <div v-if="emailSend" class="emailSend">
                <p>Wiadomość została wysłana, dziękujemy!</p>
            </div>
            <div v-if="errSend">
                <p>Coś poszło nie tak, spróbuj jeszcze raz!</p>
            </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
 export default {
     data() {
         return {
            windowType:'',
            inputIsInvalid: false,
            windowPriceList: [],
            yourEmail: '',
            emailSend: false,
            errSend: false
         };
     },
     methods: {
         setWinType1($event) {
             const type = $event.target.value;
             this.$store.commit('setWinType', type);
             this.$router.push("/windowSize");

         },
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
         },
        sendEmail() {
            const templateParams = {
            window: this.windowPriceList,
            email: this.yourEmail
            };
            emailjs.send('service_u5bo6u3','template_q47tvk5', templateParams, 'Bk9OW_oJI8NKfrxhJ')
            .then((response) => {
            this.emailSend = true;
            console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
            this.errSend = true;
            console.log('FAILED...', err);
            });
        },
     }
 }
</script>

<style scoped>
 .choose {
    display: grid;
  grid-template-columns: auto auto auto;

 }
 .choose::after {
    content: '';
    display: block;
    grid-column: sidebar-start / end;
    grid-row: 1 / 4;
}
 h3 {
     margin: 0;
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
.header1 {
    font-size: 18px;
    padding: 5px;
    text-align: center;
    background-color: #E6E6E6;
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
.description1 {
    font-size: 16px;
    text-align: center;
    font-family: 'Merienda', cursive;
    font-family: 'Montserrat', sans-serif;
    color: #5E5B58;
    padding: 0;
    margin: 0;
    font-weight: bold;
}
.listItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: 1px solid #E6E6E6;
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
.woodenWindows {
    margin: 50px 0;
}
.woodenWindows h5 {
    margin: 30px 0;
}
.woodenWindows [type=checkbox] + label {
    cursor: pointer;
}
.woodenWindows h4 {
    background-color: #f3e0d1;
    padding: 15px;
}
.email {
    margin: 30px 0 0 0;
}
.small {
    font-size: 15px;
}
.emailSend p{
    color: green;
    font-size: 18px;
    font-weight: bold;
}
</style>