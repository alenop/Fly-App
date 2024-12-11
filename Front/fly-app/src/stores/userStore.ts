import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(null); // Make currentUser reactive

  function storeCurrentUser(user:any) {
    currentUser.value = user;
  }

  return { currentUser, storeCurrentUser };
});
