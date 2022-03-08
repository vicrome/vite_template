import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: "",
  }),
  getters: {
    getUser() {
      return this.user;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
      // localStorage.setItem("user", user);
    },
  },
});
