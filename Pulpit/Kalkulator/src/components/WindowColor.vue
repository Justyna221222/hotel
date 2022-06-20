<template>
    <div class="header">
        <p > Wprowadź kolor okna.</p>
    </div>
    <div class="choose">
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color1" value="złoty dąb" v-model="windowColor">
            <img src='/images/kolor1.png' alt="window color" width="203" height="236">
        </label>   
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color2" value="orzech" v-model="windowColor">
            <img src='/images/kolor2.png' alt="window color" width="203" height="236">
        </label>
    </div>
    <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color3" value="mahoń" v-model="windowColor">
            <img src='/images/kolor3.png' alt="window glass" width="203" height="236">
        </label>
    </div>
        <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color4" value="ciemny dąb" v-model="windowColor">
            <img src='/images/kolor4.png' alt="window glass" width="203" height="236">
        </label>
    </div>
        <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color5" value="antracyt" v-model="windowColor">
            <img src='/images/kolor5.png' alt="window glass" width="203" height="236">
        </label>
    </div>
        <div>
        <label class="shadow p-3 mb-5 bg-white rounded">
            <input type="radio" id="color6" value="montana" v-model="windowColor">
            <img src='/images/kolor6.png' alt="window glass" width="203" height="236">
        </label>
    </div>
</div>
<div>{{ this.$store.state.winGlassPrice }}</div>
<div>
    <button @click="navigateToWinGlass" type="button" class="btn btn-danger previous">Poprzedni</button>
    <button @click="setColor" type="button" class="btn btn-danger next">Podsumowanie</button>
</div>
</template>

<script>
    export default {
        data(){
            return {
                windowColor: ''
            };
        },
        methods: {
            setColor() {
                const winColor = this.windowColor;
                this.$store.commit('setWinColor', winColor);
                this.$router.push("/basket");
            },
            navigateToWinGlass() {
                this.$router.push("/windowGlass");
            }            
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
  outline: 2px solid black;
}
.previous {
    float: left;
    padding: 10px 50px;
    display: inline-block;
    margin-left: 20px;
}
.header {
    font-size: 20px;
    padding: 5px;
    text-align: center;
    background-color: #D7DBDD;
    margin: 0;
    padding: 0;
}
</style>