import { api } from "boot/axios";

export default {

  createPost(post) {
    return api.post("events", post);
  },
  getEvents() {
    return api.get("events");
  },
  showpost(postId) {
    return api.get(`events/${postId}`);
  },
  sigleUserPosts(userId) {
    return api.get(`events/userpost/${userId}`);
  },
  getCategories(categoryId) {
    return api.get(`events/category/${categoryId}`);
  },
  getRelated(relatedId) {
    return api.get(`events/related/${relatedId}`);
  },

  getTags(tagsId) {
    return api.get(`events/tags/${tagsId}`);
  },
  addcomment(comment) {
    return api.post(`comments`, comment);
  },
  getComments(postId) {
    return api.get(`comments/${postId}/comments`);
  },

  deleteData(ID) {
    return api.delete(`events/${ID}`);
  },
  getRelated(relatedId) {
    return api.get(`events/related/${relatedId}`);
  },

};
