<template>
    <div :class="['read-item', oneData.status]">
        <div class="todo-property">
            <strong>ID:</strong> {{ oneData.id }}
        </div>
        <input type="text" id="titre" placeholder="titre de la tache...." v-model="oneData.title" required>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="descrition de la tache...."
            v-model="oneData.content" required></textarea>
        <select name="status" id="status" v-model="oneData.status" required>
            <option value="active">active</option>
            <option value="end">terminé</option>
            <option value="archived">Archivé</option>
        </select>
        <button @click="updateTodo(oneData.id)">Modifier</button>
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
export default class Update extends Vue {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    oneData: any;
    created() {
        this.getOneTodo(this.$route.params.id);
    }
    getOneTodo(id: string): void {
        this.$store.dispatch('fetchOneData', id)
    }
    updateTodo(id: string): void {
        this.$store.dispatch('updateTodo', id)
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
    display: flex;
    flex-direction: column;
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
  


