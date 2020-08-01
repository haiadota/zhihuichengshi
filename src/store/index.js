import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        widescreenFlag: true,
    },
    mutations: {
        widescreenShow (state) {
            state.widescreenFlag = true
        },
        widescreenHide (state) {
            state.widescreenFlag = false
        }
    }
})

export default store