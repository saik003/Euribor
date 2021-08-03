<template>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <img
              src="./../assets/logo-euribor.png"
              class="md:max-w-xs lg:max-w-lg"
            />
          </div>
          <h2 class="pt-16 text-7xl font-bold text-green-500">
            {{ euValue }}%
          </h2>
          <p class="pt-4 font-bold">Valor a fecha: {{dateNow}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent } from "vue";
import { onMounted } from "vue";
import { db } from "./../firebase.js";
export default defineComponent({
  name: "Euribor",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    let euValue = ref(0);
    const current = new Date();
    const dateNow = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const getEuriborValue = async () => {
      let acEuriborRef = db.collection("euribor").doc("actual");
      

      acEuriborRef
        .get()
        .then((doc: any) => {
          if (doc.exists) {
            euValue.value = doc.data().value;
          } else {
            console.log("No such document!");
          }
        })
        .catch((error: any) => {
          console.log("Error getting document:", error);
        });
    };
    onMounted(getEuriborValue);
    return {
      euValue,
      dateNow
    };
  },
});
</script>

<style scoped>
.container-flex img {
  max-width: 50vh;
}
.container-flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
