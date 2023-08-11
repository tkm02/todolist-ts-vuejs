<template>
    <form @submit="submitTodo">
        <input type="text" id="titre" placeholder="titre de la tache...." v-model="titleProp" required>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="descrition de la tache...."
            v-model="contentProp" required></textarea>

        <select name="status" id="status" v-model="statusProp" required>
            <option value="active">active</option>
            <option value="end">terminé</option>
            <option value="archived">Archivé</option>
        </select>
        <button type="submit">Valider</button>
    </form>
</template>
  
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue'
import { ITodo } from '@/Interfaces'

@Component({})
export default class Create extends Vue implements ITodo {
    @Prop({ default: "titre de la tâche" }) readonly titleProp!: string;
    @Prop({ default: "Description" }) readonly contentProp!: string;
    @Prop({ default: "active" }) readonly statusProp!: string;

    id!: ITodo['id']
    title!: ITodo['title']
    content!: ITodo['content']
    status!: ITodo['status']
    createdAt!: ITodo['createdAt']

    created() {
        this.title = this.titleProp;
        this.content = this.contentProp;
        this.status = this.statusProp;
        this.createdAt = new Date();
    }

    submitTodo(ev: Event) {
        ev.preventDefault()
        let data: ITodo[] = []
        const local: string | null = localStorage.getItem('todos')

        if (local !== null) {
            data = JSON.parse(local)
        }

        let formData: ITodo = {
            id: Math.random() * (1000000000 - 100) + 100,
            title: this.titleProp,
            content: this.contentProp,
            status: this.statusProp,
            createdAt: new Date()
        }

        data.push(formData)
        this.$store.commit("SET_TODOS", data);
        localStorage.setItem('todos', JSON.stringify(data))
        alert('Tâche enregistrée!')
    }

}

</script>
<style scoped lang="scss">
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input,
textarea,
select {
    padding: 10px;
    margin: 10px;
    border: 0;
    width: 50%;
    background-color: #f1f1f1;
    outline: none;
    border-radius: 3px;
}

select {
    background-color: #41B883;
    color: #f1f1f1;
    width: 51%;

}

option {
    background-color: #f1f1f1;
    color: #000;
}

button {
    border-radius: 3px;
    padding: 10px;
    border: 0;
    background-color: #35495E;
    color: #f1f1f1;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    width: 51%;
    margin: 0 0 5px 0;
    cursor: pointer;
    transition: background .3s ease-in-out;

}

button:hover {
    background-color: transparent;
    color: #35495E;
    border: 1px solid;
}
</style>
    