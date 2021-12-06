<template>
    <div class="main-container">
        <h1>My social networks</h1>
        <div class="find-me-container">
            <img
                ref="img"
                src="../assets/images/sntander.jpg"
                alt="Miguel's picture"
                @mouseenter="imagePopup"
                @mouseleave="imagePopdown"
            />
            <div class="icons">
                <SocialMediaIcons
                class="email"
                title="email"
                content="migueloceguera.m@gmail.com"
                />
                <SocialMediaIcons
                title="github"
                content="MiguelOcegueraM"
                link="https://github.com/MiguelOcegueraM"
                />
                <SocialMediaIcons
                title="medium"
                content="miguelocegueram"
                link="https://medium.com/@miguelocegueram"
                />
                <SocialMediaIcons
                title="linkedin"
                content="miguelocegueram"
                link="https://www.linkedin.com/in/miguelocegueram/"
                />
                <SocialMediaIcons
                title="twitter"
                content="mikeoceguera"
                link="https://twitter.com/mikeoceguera"
                />
                <SocialMediaIcons
                title="instagram"
                content="mikeoceguera"
                link="https://instagram.com/mikeoceguera"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";
import SocialMediaIcons from "../components/SocialMediaIcons";
export default {
  name: "FindMe",
  components: {
    SocialMediaIcons,
  },
  methods: {
    imagePopup() {
      const img = this.$refs.img;
      const tl = new TimelineLite();
      tl.to(img, {
        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.55)",
        scale: 1.1,
      });
    },
    imagePopdown() {
      const img = this.$refs.img;
      const tl = new TimelineLite();
      tl.to(img, {
        scale: 1,
      });
    },
  },
};
</script>

<style scoped>
.main-container {
  padding-bottom: 20em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: url("../assets/pattern/lines.svg");
}
h1 {
  margin-top: 1em;
  text-align: center;
}
img {
  border: 10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
.find-me-container {
  margin-top: 3em;
  width: 80vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
.icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
}
@media (max-width: 700px) {
  img {
    margin-bottom: 2em;
  }
  .icons {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2em;
  }
}
</style>