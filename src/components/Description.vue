<template>
  <article>
    <h2>About me</h2>
    <p>
      I am a Telematics Engineer graduated from the University of Colima, currently I'm working as a Mobile Developer II at Herbalife. In my role, I handle maintenance tasks and I play an active role in the development of new products and features. Utilizing React Native, I contribute to the enhancement and maintenance of existing applications, catering to both iOS and Android platforms. I have a huge passion for continuous learning, exploring new technologies to enhance my Developer skills.
      <br>
      <br>As an enthusiastic participant in the tech community, I am an active member of Web Dev Talks in Colima as an organizer of Meetups, hackathons and workshops. My love for scientific and technological outreach drives me to contribute to the dissemination of knowledge. I really love to collaborate within diverse and international teams, fuels my personal and professional growth, allowing me to both contribute with my expertise and embrace learning opportunities.
    </p>
    <ul>
      <li>
        <img src="../assets/icons/js.svg" alt="javascipt" />
      </li>
      <li>
        <img src="../assets/icons/vue.svg" alt="vuejs" />
      </li>
      <li>
        <img src="../assets/icons/nodejs.svg" alt="nodejs" />
      </li>
      <li>
        <img src="../assets/icons/photoshop.svg" alt="photoshop" />
      </li>
      <li>
        <img src="../assets/icons/ruby.svg" alt="ruby" />
      </li>
       <li>
        <img src="../assets/icons/rails.svg" alt="rails" />
      </li>
       <li>
        <img src="../assets/icons/bootstrap.svg" alt="bootstrap" />
      </li>
      <!--<li>
        maybe next version
        <a :href="pdf" download>
          <button>Resume</button>
        </a>
      </li>-->
    </ul>
  </article>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";
export default {
  name: "Description",
  data() {
    return {
      //pdf: require("../assets/resume.pdf"),
    };
  },
  methods: {
    reactiveHighlight() {
      const tl = new TimelineLite();
      const { reactive } = this.$refs;
      tl.to(reactive, {
        backgroundColor: "#1a1a1a",
        color: "white",
      });
    },
    reactiveHighlightRemove() {
      const tl = new TimelineLite();
      const { reactive } = this.$refs;
      tl.to(reactive, {
        backgroundColor: "#141414",
        color: "#8d8d8d",
      });
    },
    uiHighlight() {
      const tl = new TimelineLite();
      const { uidesign } = this.$refs;
      tl.to(uidesign, {
        backgroundColor: "#1a1a1a",
        color: "white",
      });
    },
    uiHighlightRemove() {
      const tl = new TimelineLite();
      const { uidesign } = this.$refs;
      tl.to(uidesign, {
        backgroundColor: "#141414",
        color: "#8d8d8d",
      });
    },
    gHighlight() {
      const tl = new TimelineLite();
      const { gdesign } = this.$refs;
      tl.to(gdesign, {
        backgroundColor: "#1a1a1a",
        color: "white",
      });
    },
    gHighlightRemove() {
      const tl = new TimelineLite();
      const { gdesign } = this.$refs;
      tl.to(gdesign, {
        backgroundColor: "#141414",
        color: "#8d8d8d",
      });
    },
  },
};
</script>

<style scoped>
p {
  font-size: clamp(16px, 1.2vw, 1.2vw);
  line-height: 2;
  color: #9d9d9d;
}
h2 {
  font-size: clamp(24px, 3vw, 3vw);
  font-weight: 300;
  margin: 0;
}
ul {
  margin-top: clamp(3em, 4vw, 4vw);
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
img {
  height: 30px;
  filter: grayscale();
  transition: filter 0.2s ease-in-out;
}
button {
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: 900;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button:hover {
  background-color: #ADCFE6;
}
img:hover {
  filter: none;
}
span {
  background-color: #141414;
  margin: 0.3em;
  padding: 0.3em 0.7em;
  color: #8d8d8d;
}
@media (max-width: 700px) {
  img,
  button {
    height: 20px;
  }
}
</style>