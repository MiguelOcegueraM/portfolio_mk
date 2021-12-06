<template>
    <nav>
        <img 
            class="close"
            @click="$emit('close')"
            src="../assets/icons/close.svg" 
            alt="close menu icon"
        />
        <ul @click="$emit('close')">
            <li>
                <a @click="openURL('me')">About me</a>
            </li>
            <li>
                <a @click="openURL('history')">My work</a>
            </li>
            <li>
                <a @click="openURL('social-media')">My Social Networks</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            openURL(url) {
                document.getElementById(url).scrollIntoView({ behavior: "smooth"});
            },
        },
    };
</script>


<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  background-color: white;
  width: 40vw;
  color: #1c1c1c;
}
ul {
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
}
li {
  font-size: clamp(40px, 5vw, 5vw);
  font-weight: 700;
  margin: 0.5em;
  cursor: pointer;
}
a {
  color: #1c1c1c;
  text-decoration: none;
}
a:hover {
  background-color: #1c1c1c;
  color: #ADCFE6;
}
.close {
  top: 2.5em;
  right: 1.8em;
  width: 30px;
  cursor: pointer;
  position: absolute;
}
@media (max-width: 700px) {
  nav {
    width: 100vw;
  }
}
</style>
