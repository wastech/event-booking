import { api } from "boot/axios";

export default {
  // addcomment(postId, comment) {
  //   return Api().post(`posts/${postId}/comments`, comment);
  // },
  // getcomment(postId) {
  //   return Api().get(`posts/${postId}/comments`);
  // },
  // allpost() {
  //   return Api().get("allpost");
  // },
  createPost(post) {
    return api.post("posts", post);
  },
  getPosts() {
    return api.get("posts");
  },
  // getUserPosts() {
  //   return Api().get("posts/userpost");
  // },
  showpost(postId) {
    return api.get(`posts/${postId}`);
  },
  sigleUserPosts(userId) {
    return api.get(`posts/userpost/${userId}`);
  },
  getCategories(categoryId) {
    return api.get(`posts/category/${categoryId}`);
  },
  getRelated(relatedId) {
    return api.get(`posts/related/${relatedId}`);
  },

  getTags(tagsId) {
    return api.get(`posts/tags/${tagsId}`);
  },
  addcomment(comment) {
    return api.post(`comments`, comment);
  },
  getComments(postId) {
    return api.get(`comments/${postId}/comments`);
  },
  // deleteData(ID) {
  //   return Api().delete(`posts/${ID}`);
  // },
  deleteData(ID) {
    return api.delete(`posts/${ID}`);
  },
  getRelated(relatedId) {
    return api.get(`posts/related/${relatedId}`);
  },
  // like(data, userId) {
  //   return Api().put(`${data}/like`, {
  //     userId,
  //   });
  // },
};
