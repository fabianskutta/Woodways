<template>
    <footer>
        <div class="footer-container">
            <ul class="footer-logo">
                <img :src="url + general.data.attributes.FooterLogo.data.attributes.url" alt="">
            </ul>
            <ul>
                <h4>Was jetzt?</h4>
                <li><a href="/conceptstore">Conceptstore</a></li>
                <li><a href="/cafe">Café</a></li>
            </ul>
            <ul>
                <h4>Rechtliches</h4>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
            <ul class="socialmedia">
                <h4>Folge uns</h4>
                <a target="_blank" href="https://www.instagram.com/woodways_hofladen/"><i class="fab fa-instagram"></i></a>
                <a target="_blank" href="https://www.facebook.com/EBikesausHolzimMuensterland"><i class="fab fa-facebook"></i></a>
            </ul>
        </div>
        <div class="copyright">© Woodways {{ new Date().getFullYear() }}&nbsp;
        </div>
    </footer>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: general} = await useAsyncData('general', () => find('general?populate=*'), {
    });
</script>

<style lang="scss">
.iframe {
  margin: 0;
  padding: 0;
}

footer {
    background-color: var(--accent1);
    color: #ffffff;
    padding: 2rem 0;

    .footer-container {
        font-size: 18px;
        margin-bottom: 3rem;
        display: flex;
        justify-content: space-evenly;

        ul {
          padding: 0 2rem;
        }

        li {
          list-style-type: none;
          padding: 0.25rem 0;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-family: "Avenir Next W05 Medium"; 
          i {
            margin-right: 8px;
          }
        }

        .socialmedia {
          i {
            font-size: 40px;
            margin-right: 8px;
          }
        }
    }

    .copyright {
        text-align: center;
        font-size: 15px;
        font-weight: 400;
          font-family: "Avenir Next W05 Medium";

        display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  .fabian-text {
    width: fit-content;
    margin-right: 8px;
    font-weight: 400;
          font-family: "Avenir Next W05 Medium";
    .fa-heart {
      color: #f9063b;
    }
  }
  .fabian-profile {
    width: fit-content;
    display: flex;
    color: #ffffff;
    font-weight: 500;
    background-color: #ffffff4b;
    border-radius: 50px;
    padding: 5px;
    transition: all 0.3s;
    align-items: center;
    font-weight: 400;
          font-family: "Avenir Next W05 Medium";
    img {
      border-radius: 100%;
      width: 1.25rem;
      height: auto;
      margin-right: 5px;
    }
  }
  .fabian-profile:hover {
    background-color: #ffffff;
    color: #000000;
    transform: scale(0.96);
    box-shadow: 0px 0px 0px 4px #ffffff4d;
  }
    }
}

.footer-logo {
    display: flex;
    align-items: center;
  img {
    width: 100px;

  }
}

@keyframes gradientText {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media screen and (max-width: 1000px) {
  footer {
    .footer-container {
      flex-direction: column;
      margin: 0 1.25rem 3rem;

      ul {
        padding: 0;
        width: 300px;
      }
  }
  .copyright {
    font-size: 13px;
  } 
}
}
</style>