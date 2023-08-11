<template>
  <div class="read-item">
    <ul :class="data.status">
      <li class="titre">{{ data.title }}</li>
      <li class="description">{{ truncateText(data.content) }}</li>
      <router-link :to="'/todos/' + data.id" class="link"
        >Plus d'info</router-link
      >
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { ITodo } from "@/Interfaces";
import { RouterLink } from "vue-router";

@Component({
  components: {
    RouterLink,
  },
})
export default class Read extends Vue {
  @Prop() readonly data!: ITodo;

  truncateText(text: string) {
    if (text.length <= 90) {
      return text;
    } else {
      return text.substring(0, 90) + "...";
    }
  }
}
</script>

<style scoped>
.read-item {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  margin: 2px;
}

.link {
  text-decoration: none;
  background-color: #35495e;
  border-radius: 3px;
  padding: 5px;
  color: #fff;
  transition: background 0.3s ease-in-out;
}

.link:hover {
  background-color: #fff;
  border: 1px solid #35495e;
  color: #35495e;
}

.titre {
  background-color: #f1f1f1;
  padding: 5px;
  color: #000;
}

.description {
  padding: 20px;
}

.active {
  background-color: #41b883;
  color: #f1f1f1;
}

.end {
  background-color: brown;
  color: #f1f1f1;
}

.archived {
  background-color: #f1f1f1;
  color: #333;
}
</style>
