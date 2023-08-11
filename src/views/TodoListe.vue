<template>
    <div class="home">
        <create />
        <h3>La liste de vos tâches</h3>
        <div class="content">
            <Read v-for="(todo, index) in data" :key="index" :data="todo" />
        </div>
        <InfoTodo />
    </div>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Create from '@/components/todos/Create.vue';
import Read from '@/components/todos/Read.vue'
import InfoTodo from '@/components/todos/InfoTodo.vue'
import Update from '@/components/todos/Update.vue';
import { mapState } from 'vuex';

@Component({
    components: {
        Create,
        Read,
        InfoTodo,
        Update
    },
    computed: mapState(["data"]),


})
export default class HomeView extends Vue {
    data: unknown;
    created() {
        this.getTodos()
    }
    private getTodos(): void {
        this.$store.dispatch('fetchTodos')
    }
}
</script>
<style>
.content {
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
}
</style>