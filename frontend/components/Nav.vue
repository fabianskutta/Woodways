<template>
    <nav id="nav">
        <ul class="nav-links">
            <li><a class="menuItem" href="/">Home</a></li>
            <li><a class="menuItem" href="/store">Store</a></li>
            <li><a class="menuItem" href="/cafe">Cafe</a></li>
            <li><a class="menuItem" href="/events">Events</a></li>
            <li><a class="menuItem" href="/work-shops">Work-Shops</a></li>
        </ul>
        <a href="/">
            <img class="logo" :src="url + general.data.attributes.Logo.data.attributes.url" alt="" />
        </a>
        <ul class="nav-btns">
            <li>
                <a id="hamburger" class="navbtn">
                    <i class="fas fa-bars menuIcon"></i>
                    <i class="fas fa-times closeIcon"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    const url = useStrapiMedia();
    const { find } = useStrapi();
    const {data: general} = await useAsyncData('general', () => find('general', {
        populate: { Logo: true },
    }));
</script>

<style lang="scss" scoped>
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
            border-radius: 10px;
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
            border-radius: 10px;
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
        padding: 1rem;

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
            border-radius: 30px;
          }
          
          .showMenu {
            transform: translateY(10%);
            backdrop-filter: blur(1.35rem);;
            -webkit-backdrop-filter: blur(1.35rem);;
          }

          .closeIcon {
            display: none;
          }

          .menuItem {
            width: 100%;
            margin: 0.25rem;
            text-align: center;
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