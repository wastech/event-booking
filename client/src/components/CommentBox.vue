<template>
  <div class="main">
    <div>
      <q-timeline color="primary">
        <q-timeline-entry
          v-for="comment in comments"
          :key="comment.id"
          :title="comment.userId.name"
          :avatar="comment.userId.avatar.url"
          :subtitle="moment(comment.createdAt).fromNow()"
          :body="comment.body"
        />
      </q-timeline>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["comments"],
  data() {
    return {};
  },
  created: function () {
    this.moment = moment;
  },
};
</script>
