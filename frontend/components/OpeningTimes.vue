<template>
    <section id="openingTimes" class="openingTimes">
        <div class="openingTimes-container">
            <div class="column1">
                <h2>Komm doch mal vorbei:</h2>
                <p class="openingTimes-text">Freitag geschlossen!</p>
            </div>
            <div class="column2">
                <div class="openingTimes-times">
                    <p><span>DI + MI: </span>10:00 - 13:00 Uhr <br>15:00 - 17:30 Uhr</p>
                    <p><span>DO: </span>10:00 - 13:00 Uhr</p>
                    <p><span>FR + SA: </span>10:00 - 13:00 Uhr <br>15:00 - 17:30 Uhr</p>
                </div>
            </div>
        </div>
        <img class="openingTimes-bg" src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b77d292bc9.jpg">
    </section>
</template>

<style lang="scss" scoped>

.openingTimes {
    height: 400px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.openingTimes-container {
    display: flex;
    justify-content: space-between;
    padding: 4rem;
    position: absolute;
    background-color: #00000038;
    height: inherit;
    display: flex;
    width: 100%;
    color: #fff;

    h2 {
        font-size: 2rem;
    }

    .openingTimes-text {
        font-weight: 400;
        font-size: 1.25rem;
        font-family: 'Roboto', sans-serif;
    }

    .openingTimes-times {

        p {
        font-weight: 100;
        font-size: 1.5rem;
        text-align: right;

        span {
            font-weight: 700;
        }
    }
    }
}

.column1{
    flex-basis: calc(50% - 6rem);
    text-align: right;
}
.column2{
    flex-basis: calc(50% - 6rem);
    display: flex;
}

.openingTimes-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 1000px) {

    .openingTimes {
    height: 500px;
    justify-content: center;
    align-items: center;
}

    .openingTimes-container {
        flex-direction: column;
        padding: 2rem;
    }
    .column1{
    flex-basis: calc(100%);
    text-align: left;
}
    .column2{
        flex-basis: calc(100%);
        width: 100%;
    }
}

</style>