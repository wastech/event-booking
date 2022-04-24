import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


 export default createStore({
   // strict: true,
   plugins: [createPersistedState()],
   state: {
     token: null,
     user: null,
     isUserLoggedIn: false,
     cart: JSON.parse(localStorage.getItem("cart")) || [],
     charge: {},
   },
   getters: {
     getCart: (state) => state.cart,
     getCharge: (state) => state.charge,
   },
   mutations: {
     setCart: (state, payload) => {
       state.cart.push(payload);
     },
     setToken(state, token) {
       state.token = token;
       state.isUserLoggedIn = !!token;
     },
     setUser(state, user) {
       state.user = user;
     },
     setQuantity: (state, payload) => {
       let item = state.cart.find((product) => {
         return product.id === payload.id;
       });
       item.qty = payload.qty;
     },
     setPrice: (state, payload) => {
       let item = state.cart.find((product) => {
         return product.id === payload.id;
       });
       item.subtotal = payload.subtotal;
     },
     setCharge: (state, payload) => {
       state.charge = payload;
     },
   },
   actions: {
     setToken({ commit }, token) {
       commit("setToken", token);
     },
     setUser({ commit }, user) {
       commit("setUser", user);
     },
   },

   modules: {
     // example
   },

   // enable strict mode (adds overhead!)
   // for dev mode and --debug builds only
   strict: process.env.DEBUGGING,
 });


