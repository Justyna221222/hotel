<template>
<div class="summary">
    <table class="table table-striped">
        <tbody>
        <tr class="highlighted">
            <th>Element okna</th>
            <th>Wybrano</th>
        </tr>  
        <tr>
            <td>Typ</td>
            <td>{{ this.$store.state.winType }}</td>
        </tr>  
        <tr>
            <td>Rozmiar</td>
            <td>{{ this.$store.state.width }} x {{this.$store.state.height }}</td>
        </tr>
        <tr>
            <td>Okleina</td>
            <td>{{ this.$store.state.winVenner }}</td>
        </tr>
        <tr>
            <td>Szyba</td>
            <td>{{ this.$store.state.winGlass }}</td>
        </tr>
        <tr>
            <td>Ciepłe ramki</td>
            <td>{{ this.$store.state.winFrame }}</td>
        </tr>
        <tr>
            <td>Szprosy</td>
            <td>{{ this.$store.state.winMuntins }}</td>
        </tr>
        <tr>
            <td>Nawiewniki</td>
            <td>{{ this.$store.state.winDiffuser }}</td>
        </tr>
        <tr>
            <td>Podsumowanie</td>
            <td>{{ this.$store.state.winDiffuserPrice }}</td>
        </tr>
        </tbody>
    </table>
    <div>
        <p class="big">Gratulujemy! Cena Twojego okna jest już obliczona. Jeżeli chcesz ją poznać, wyślemy Ci wiadomość na Twój adres e-mail.</p> 
        <p class="small">To nie jest zapis na newsletter. Nie będziemy przysyłać Ci żadnych seryjnych wiadomości.</p>      
    </div>

<div>
    <p>E-mail</p>
    <input id='yourName' type='email' v-model='yourEmail'>
</div >
<div class="buttons">
    <div>
        <button @click="sendEmail">Wyślij cenę okna</button>
    </div>
    <div>
        <button @click="fromBeginning">Oblicz cenę okna jeszcze raz</button>
    </div>
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
import store from '../store/index.js';  // import the store  
export default {
    data() {
        return {
            yourEmail: '',
            emailSend: false,
            errSend: false
        };
    },
    methods: {
        sendEmail() {
const templateParams = {
winType: this.$store.state.winType,
winWidth: this.$store.state.width,
winHeight: this.$store.state.height,
winVenner: this.$store.state.winVenner,
winGlass: this.$store.state.winGlass,
winFrame: this.$store.state.winFrame,
winMuntins: this.$store.state.winMuntins,
winDiffuser: this.$store.state.winDiffuser,
price: this.$store.state.winDiffuserPrice,
yourEmail: this.yourEmail
};
emailjs.send('service_u5bo6u3','template_7qaf81v', templateParams, 'Bk9OW_oJI8NKfrxhJ')
.then((response) => {
this.emailSend = true;
console.log('SUCCESS!', response.status, response.text);
}, (err) => {
this.errSend = true;
console.log('FAILED...', err);
});
        },
        fromBeginning() {
            this.$store.state.winType = '',
            this.$store.state.width = '',
            this.$store.state.height = '',
            this.$store.state.winVenner = '',
            this.$store.state.winGlass = '',
            this.$store.state.winFrame = '',
            this.$store.state.winMuntins = '',
            this.$store.state.winDiffuser = '',
            this.$store.state.winDiffuserPrice = '',
            this.$store.state.basketDisabled = false
            this.yourEmail = '',
            this.$router.push("/windowType");
        }
    },
    beforeRouteEnter(to, from, next){
                const winDiffuser = store.state.winDiffuser;
                next(winDiffuser !== '');
            }
}
</script>

<style scoped>
.summary {
    font-size: 16px;
}
table {
    border: 1px solid black;
}
.highlighted {
  background-color: #f3c2bd;
}
table {
    margin: 0;
    padding: 0;
}
.big {
    font-size: 19px;
    font-weight: bold;
    color: #cb2c2c;
    margin: 20px 0 0 0;
}
.small {
    font-size: 15px;
}
.emailSend p{
    color: green;
    font-size: 18px;
    font-weight: bold;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;
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
