import { api } from "boot/axios";
export default {
  getCategories() {
    return api.get("postCategories");
  },

  deleteCat(categoryId) {
    return api.delete(`postCategories/${categoryId}`);
  },
  // show(songId) {
  //   return Api().get(`songs/${songId}`);
  // },

  postCategories(post) {
    return api.post("postCategories", post);
  },
};
