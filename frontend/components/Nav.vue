<template>
    <nav id="nav">
        <ul class="nav-links" :class="{ showMenu: isMenuVisible }">
            
            
            <li><nuxt-link to="/" class="menuItem" active-class="menuItem-active" @click="toggleShowMenu">Home</nuxt-link></li>
            <li><nuxt-link to="/conceptstore" class="menuItem" active-class="menuItem-active" @click="toggleShowMenu">Conceptstore</nuxt-link></li>
            <li><nuxt-link to="/cafe" class="menuItem" active-class="menuItem-active" @click="toggleShowMenu">Café</nuxt-link></li>
            <li><nuxt-link to="/Veranstaltungen" class="menuItem" active-class="menuItem-active" @click="toggleShowMenu">Veranstaltungen</nuxt-link></li>
        </ul>
        <a href="/">
            <img class="logo" :src="url + general.data.attributes.Logo.data.attributes.url" alt="" />
        </a>
        <ul class="nav-btns">
            <li>
                <a id="hamburger" class="navbtn" @click="toggleShowMenu">
                    <i v-if="!isMenuVisible" class="fas fa-bars menuIcon"></i>
                    <i v-if="isMenuVisible" class="fas fa-times closeIcon"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: general} = await useAsyncData('general', () => find('general?populate=*'), {
    });

    const isMenuVisible = ref(false);

    const toggleShowMenu = () => {
        isMenuVisible.value = !isMenuVisible.value;
    };
</script>

<style lang="scss" scoped>

.menuItem::before {
    content: "";
  display: block;
  position: absolute;
  z-index: -1;
  height: 4px;
  background: var(--accent1);
  left: 5px;
  right: 5px;
  height: 8px;
  bottom: 14px;
  opacity: 0;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
  -webkit-transform: translate(0,10px);
  transform: translateY(10px);
}

.menuItem:hover::before {
    opacity: 1;
    transform: translateY(0);
}

.menuItem-active::before {
    opacity: 1;
    transform: translateY(0);
}
nav {
    position: fixed;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left:0;
    right:0;
    top: 0;
    box-sizing: border-box;
    z-index: 600;
    background-color: var(--background1);
    color: var(--text2);
    font-weight: 600;

    .nav-links {
        left: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 0;
        padding: 0;
        position: absolute;

        li {
            margin: 0 1rem;
            font-size: 18px;
            list-style: none;
            z-index: 600;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        a {
            padding: 0.75rem 1rem;
            transition: 0.3s;
        }

    }

    .nav-btns {
        left: 0;
        display: flex;
        margin: 0;
        padding: 0;

        li {
            margin: 0 0.25rem;
            font-size: 21px;
            list-style: none;
            z-index: 600;
        }

        a {
            display: inline-block;
            padding: 0.75rem 1rem;
            width: 45px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;

            i {
                position: absolute;
            }

            .menuIcon {
                transform: translateX(-10%);
            }
            
        }
    }

    .logo {
        margin: 0;
        height: 80px;
    }

    #hamburger {
        display: none;
    }

}

  @media screen and (max-width: 1200px) {

    nav {

        #hamburger {
            display: inline-block;
          }
          
          .nav-links {
            position: fixed;
            display: block;
            transform: translateY(-100%);
            transition: transform 0.2s;
            z-index: -1;
            list-style: none;
            padding: 200px 0 50px 0;

          }
          
          .showMenu {
            transform: translatey(20%);
            background-color: var(--background1);
          }

          .menuItem {
            margin: 0.25rem;

          }
    }
  }

  @media screen and (max-width: 900px) {

    nav {
          h1 {
            font-size: 1.75rem;
        }
    }
  }
</style>