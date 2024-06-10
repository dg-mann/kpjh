<template>
    <h3>
        Unsere Werte und Normen
    </h3>
    <div class="grid-container">
        <p>
            In der KPJH treffen Menschen unterschiedlichen Alters, Herkunft, Glaube, Geschlecht und Orientierung aufeinander. Uns ist es wichtig, dass niemand sich ausgeschlossen fühlt und wir ein freudiges Miteinander schaffen können.
            Wir nehmen einander ernst und lassen niemanden allein.
            <br /> <br />
            Bei uns entscheiden alle Mitglieder gemeinsam über die Leitungen und Inhalte des Vereins. Wir setzen uns auch darüber hinaus für eine demokratische, gleichberechtigte und solidarische Gesellschaft ein. Wir treten aktiv gegen Ausgrenzung, Unterdrückung und Umweltzerstörung ein und streben nach gleichen Rechten für alle. 
            <br /> <br />
            Wir engagieren uns kontinuierlich für ein besseres Miteinander und bemühen uns, diese Werte den Kindern zu vermitteln, damit sie zu einem respektvollen Umgang miteinander ermutigt werden.
            <br /> <br />
            Bei uns ist jeder Willkommen!
        </p>
    </div>
</template>
<style scoped lang="scss">

h3 {
    margin-top: 3rem;
    font-family: 'ylee MHIM';
    font-size: 50px;
}
.grid-container {
    display: grid;
    justify-items: center;
    line-height: 2;
    margin: 2rem 5rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
@media (max-width: 900px) {
    .grid-container {
        display: block;
        margin: 1rem 1rem;
        align-items: center;
        translate: none;
    }
}
</style>