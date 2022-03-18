import { api } from "boot/axios";
export default {
  getTags() {
    return api.get("tags");
  },

  deleteTag(tagId) {
    return api.delete(`tags/${tagId}`);
  },

  postTags(tag) {
    return api.post("tags", tag);
  },
};
