<template>
    <div class="buttons">
        <div class="buttonFrame">
            <router-link to="/windowType" type="button" class="button">Typ</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowSize" type="button" class="button">Rozmiar</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowProfile" type="button" class="button">Profile</router-link>
        </div>        
        <div class="buttonFrame">
            <router-link to="/windowVenner" type="button" class="button">Okleina</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowGlass" type="button" class="button">Szyba</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowFrames" type="button" class="button">Ciepłe ramki</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowMuntins" type="button" class="button">Szprosy</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowDiffusers" type="button" class="button">Nawiewniki</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/windowBlind" type="button" class="button">Roleta</router-link>
        </div>
        <div class="buttonFrame">
            <router-link to="/summary" type="button" class="button">Podsumowanie</router-link>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                whateverActivatesThisLink: true
            };
        },
    }
</script>

<style scoped>
.buttons {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0;
    padding: 0;
 }
/*.button {
    padding:10px 20px;
    float: left;
    min-width: 100px;
}*/
.button {
  padding: 1.2rem 2.2rem;
  margin: 0;
  font-family: inherit;
  background-color: #690f0f;
  border: 1px solid #690f0f;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.button:hover,
.button:active {
  background-color: #f3e0d1;
  border-color: #f3e0d1;
  color: black;
}
.buttonFrame {
    margin: 0;
    padding: 0;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f3e0d1;
}
a.router-link-active {
    color: black;
    background-color: #f3e0d1;
}
.highlighted {
    background-color: blue;
}
    
</style>