<template>
<div class="summary" v-if="!this.$store.state.basketDisabled">
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
            <td>Szerokość</td>
            <td>{{ this.$store.state.width }}</td>
        </tr>
        <tr>
            <td>Wysokość</td>
            <td>{{ this.$store.state.height }}</td>
        </tr>
        <tr>
            <td>Profil</td>
            <td>{{ this.$store.state.winProfile }}</td>
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
            <td>Roleta</td>
            <td>{{ this.$store.state.winBlind }}</td>
        </tr>
        <tr>
            <td>Podsumowanie</td>
            <td>{{ this.$store.state.winBlindPrice }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

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
