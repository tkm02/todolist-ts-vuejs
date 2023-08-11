<template>
  <div :class="['read-item', oneData.status]">
    <h2 class="todo-title">Info de la tâche: <strong>{{ oneData.title }}</strong></h2>
    <div class="todo-details">
      <div class="todo-property">
        <strong>ID:</strong> {{ oneData.id }}
      </div>
      <div class="todo-property">
        <strong>Contenu:</strong> {{ oneData.content }}
      </div>
      <div class="todo-property">
        <strong>Statut:</strong> {{ oneData.status }}
      </div>
      <div class="todo-property">
        <strong>Date de création:</strong> {{ formatDate(oneData.createdAt) }}
      </div>
      <div>
        <button class="links delete" @click="removeOneTodo(oneData.id)">Supprimer</button>
        <router-link :to="'/todos/update/' + oneData.id">
          <button class="links update">Modifier</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import { mapState } from 'vuex';



@Component(
  {
    computed: mapState(["oneData"]),
  })
export default class InfoTodo extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oneData: any;
  created() {
    this.getOneTodo(this.$route.params.id);
  }
  getOneTodo(id: string): void {
    this.$store.dispatch('fetchOneData', id)
  }
  removeOneTodo(id: string): void {
    this.$store.dispatch('removeOneTodo', id)
  }
  updateTodo(id: string): void {
    this.$store.dispatch('updateTodo', id)
  }
  formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  }
}
</script>
<style>
.read-item {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin: 50px auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  transition: background-color 0.3s ease;
  width: 60%;
}
.links{
  border: 0px;
  padding: 8px;
  width: 25%;
  margin: 0 5px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}
.update{
  background-color: #07673c;
}
.delete{
  background-color: rgb(102, 11, 11);
}
.todo-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.todo-details {
  margin-top: 20px;
}

.todo-property {
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  border-radius: 5px;
  color: #333;
  background-color: #fff;
}

.todo-property strong {
  font-weight: bold;
}

.todo-property:last-child {
  margin-bottom: 0;
}

.active {
  background-color: #41B883;
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
  


