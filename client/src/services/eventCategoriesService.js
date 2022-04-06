import { api } from "boot/axios";
export default {
  getCategories() {
    return api.get("eventCategories");
  },

  deleteCat(categoryId) {
    return api.delete(`eventCategories/${categoryId}`);
  },
  // show(songId) {
  //   return Api().get(`songs/${songId}`);
  // },

  postCategories(post) {
    return api.post("eventCategories", post);
  },
};
