<template>
    <section class="about">
        <div class="column2">
            <h2>Herzlich Willkommen im Woodways</h2>
            <p>Entdecke eine Welt voller handverlesener Schätze, von skandinavischen Marken bis zu regionalen Besonderheiten. Hier findest du nicht nur schöne Dinge, sondern auch eine Oase der Entschleunigung und Gemütlichkeit.</p></div>
            <div class="column1"><img src="https://cms.woodways.ms/uploads/melanie_b32537e5fd.jpg" alt=""></div>
    </section>
</template>

<style lang="scss" scoped>
.about {
 margin: 2rem 0 4rem 0;
 display: flex;
 width: 100%;
 
 p {
  font-family: "Avenir Next W05 Medium";
  font-weight: 400;
    font-size: 1.25rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    font-weight: 500;
  }
}
.column1 {
    flex-basis: calc(30% - 2rem);
    padding: 2rem;
    display: flex;
    justify-content: center;
  img {
    width: 250px;
    border-radius: 500px;
  }
}

.column2 {
    flex-basis: calc(70% - 2rem);
    padding: 2rem;

  img {
    width: 250px;
    border-radius: 500px;
  }
}

@media screen and (max-width: 1000px) {

    .about {
        flex-direction: column-reverse;
    }

}

</style>