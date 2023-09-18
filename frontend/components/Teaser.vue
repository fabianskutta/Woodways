<template>
    <section class="teaser">
        <a class="teaser-item" href="/conceptstore">
            <div class="teaser-item-container">
                <h3>Conceptstore</h3>
                <ul class="teaser-tags">
                    <li>Regionale Prudukte</li>
                    <li>Test</li>
                </ul>
            </div>
            <img class="teaser-item-bg" src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0018_b77d292bc9.jpg">
        </a>
        <a class="teaser-item" href="/cafe">
            <div class="teaser-item-container">
                <h3>Cafe</h3>
                <ul class="teaser-tags">
                    <li>Casa Eis</li>
                    <li>veganes Café</li>
                    <li>Kuchen</li>
                </ul>
            </div>
            <img class="teaser-item-bg" src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0019_c7d335d873.jpg">
        </a>
        <a class="teaser-item" href="/eventlocation">
            <div class="teaser-item-container">
                <h3>Eventlocation</h3>
                <ul class="teaser-tags">
                    <li>Woodyval</li>
                    <li>Flohmarkt</li>
                    <li>Weihnachtsmarkt</li>
                </ul>
            </div>
            <img class="teaser-item-bg" src="https://cms.woodways.ms/uploads/IMG_20230908_WA_0017_d303205a98.jpg">
        </a>
    </section>
</template>

<style lang="scss" scoped>

.teaser {
    display: flex;
    flex-wrap: wrap;
}

.teaser-item {
    position: relative;
    flex-basis: calc(33.3333%);
    height: 400px;
    width: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.teaser-item-container {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #00000018;
    transition: .3s;
    color: #fff;

    h3 {
        font-size: 40px;
        margin: 0;
        text-shadow: 0 0 40px rgba(0,0,0,.69);
    }

    p {
        font-weight: 100;
        margin: 0 0 10px 0;
    }
}

.teaser-tags {
    list-style: none;
    transition: .3s;
    display: flex;
    margin: 0;
    padding: 0;
    opacity: 0;

    li {
        padding: 8px 10px;
        margin: 5px;
        background-color: #ffffff5e;
        border-radius: 50px;
    }
}

.teaser-item-container:hover {
    -webkit-backdrop-filter: blur(1.35rem);
    backdrop-filter: blur(0.35rem);
}

.teaser-item-container:hover .teaser-tags{
    opacity: 1;
}

@media screen and (max-width: 900px) {
    .teaser-item {
    flex-basis: calc(100%);
    height: 300px;
    width: 300px;
}

 .teaser-tags{
    opacity: 1;
}
}


.teaser-item-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


</style>