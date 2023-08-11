import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { ITodo } from "@/Interfaces";

Vue.use(Vuex);
interface State {
  data: ITodo[];
  oneData: ITodo[];
}
const store: StoreOptions<State> = {
  state: {
    data: [],
    oneData: [],
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.data = payload;
    },
    SET_ONE_DATA(state, payload) {
      state.oneData = payload;
    },
    UPDATE_ITEM(state, payload) {
      const dataIndex = state.data.findIndex((p) => p.id === payload.id);
      if (dataIndex !== -1) {
        Object.assign(state.data[dataIndex], payload);
        localStorage.setItem("todos", JSON.stringify(state.data));
        //j'ai des problemes ici
      }
    },
  },
  actions: {
    fetchTodos({ commit }) {
      let dataTmp = [];
      const todoFromLocal: string | null = localStorage.getItem("todos");
      if (todoFromLocal !== null) {
        dataTmp = JSON.parse(todoFromLocal);
      }
      commit("SET_TODOS", dataTmp);
    },
    fetchOneData({ commit }, id) {
      let dataTmp: ITodo[] = [];
      const todoFromLocal: string | null = localStorage.getItem("todos");
      if (todoFromLocal !== null) {
        dataTmp = JSON.parse(todoFromLocal);
      }
      const oneTodo = dataTmp.find((todo) => todo.id == id);
      commit("SET_ONE_DATA", oneTodo);
    },
    removeOneTodo({ commit }, id) {
      let dataTmp: ITodo[] = [];
      const todoFromLocal: string | null = localStorage.getItem("todos");
      if (todoFromLocal !== null) {
        dataTmp = JSON.parse(todoFromLocal);
      }
      const oneTodo = dataTmp.findIndex((todo) => todo.id == id);

      dataTmp.splice(oneTodo, 1);
      localStorage.setItem("todos", JSON.stringify(dataTmp));
      commit("SET_ONE_DATA", dataTmp);
      alert("tâche supprimer");
      //redirection vers la page precedente ???
    },
    updateTodo({ commit }, updatedTodo) {
      commit("UPDATE_ITEM", updatedTodo);
      //j'ai des problemes ici
    },
  },
  modules: {},
};

export default new Vuex.Store(store);
