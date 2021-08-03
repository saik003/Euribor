<template >
  <div>
    <Euribor msg="-0,481%." />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import Euribor from "./components/Euribor.vue";


export default defineComponent({
  name: "App",
  components: {
    Euribor,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
    display: flex;
  justify-content: center;
  flex-direction: column;
}

body {
  background: rgb(242, 250, 251);
  background: -moz-radial-gradient(
    circle,
    rgba(242, 250, 251, 1) 0%,
    rgba(216, 240, 242, 1) 35%,
    rgba(105, 189, 194, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(242, 250, 251, 1) 0%,
    rgba(216, 240, 242, 1) 35%,
    rgba(105, 189, 194, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(242, 250, 251, 1) 0%,
    rgba(216, 240, 242, 1) 35%,
    rgba(105, 189, 194, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2fafb",endColorstr="#69bdc2",GradientType=1);
}
</style>
