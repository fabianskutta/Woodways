<template>
    <header>
        <div class="container">
            <div class="text-container">
                <h1 v-motion-slide-visible-bottom>{{ title }}</h1>
                <p v-motion-slide-visible-bottom><slot></slot></p>
                <div v-motion-slide-visible-bottom class="event-btn-all"><Btn1 target="_blank" v-if="Btn" :href="BtnLink">{{ Btn }}</Btn1></div>
            </div>
        </div>
            <img class="bg" :src="bg">
    </header>
</template>

<script>
export default {
    props: {
      bg: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      Btn: {
        type: String,
        default: null
      },
      BtnLink: {
        type: String,
        default: null
      }
    }
  };
</script>

<style lang="scss" scoped>

.event-btn-all {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
}


header {
    height: 70vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-container {
    max-width: 1000px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container {
    position: absolute;
    height: inherit;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #00000023;

    img {
        height: 350px;
        width: auto;
    }

    h1 {
        padding-top: 3rem;
        color: #fff;
        font-size: 5rem;
        text-shadow: 0 0 40px rgba(0,0,0,.69);
        margin: 0;
    }

    p {
        color: #fff;
        font-size: 1.5rem;
        text-shadow: 0 0 40px rgba(0,0,0,.69);
        font-weight: 700;
        margin: 0;
    }

    .header-btns {
        display: flex;
        margin-bottom: 100px;
    }
}

.bg {
        width: 100%;
        object-fit: cover;
    }


@media screen and (max-width: 900px) {
    .container {

        h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1rem;
    }

        img {
            height: auto;
            width: 100%;
        }

        .header-btns {
        margin-bottom: 0;
    }
    }
    .bg {
        height: 100%;
    }

    header {
    height: 70vh;
}
}
</style>