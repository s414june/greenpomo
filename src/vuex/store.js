import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        displayTime: null,
        time: {
            pomo: 3,
            shortBreak: 1,
            longBreak: 2,
        },
    },
    mutations: {
        initDisplayTime() {
            this.state.displayTime = this.state.time.pomo
        }
    }
})