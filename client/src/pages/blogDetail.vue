<template>
  <q-page class="q-my-xl main">
    <div class="bg">
      <div class="bg_cover"></div>
    </div>
    <div class="text__section">
      <div class="header__text">
        <div class="text-h2 text-white ova_title q-mb-xl">
          {{ item.title }}
        </div>
        <!-- <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" />
          <div v-if="postcategoryId">
          <q-breadcrumbs-el :label="item.postcategoryId.title" />
          </div>
          <q-breadcrumbs-el :label="item.title" />
        </q-breadcrumbs> -->
      </div>
      <div class="row text__row q-col-gutter-xl">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <div class="">
            <div class="carousel__section" v-if="item.imageUrl">
              <q-img :src="item.imageUrl.url" :alt="item.title">
                <div
                  class="text-h6 text-capitalized q-mt-xl"
                  v-if="item.postcategoryId"
                >
                  <q-btn
                    flat
                    style="color: #fff"
                    :label="item.postcategoryId.title"
                  />
                </div>
              </q-img>
            </div>
            <q-card-actions>
              <div class="q-mr-xl">
                <q-icon name="calendar_today" />
                <span>{{ moment(item.createdAt).fromNow() }}</span>
              </div>
              <div class="">
                <q-icon name="message" /> <span>Comment off</span>
              </div>
            </q-card-actions>
            <div class="">
              <div class="text-body1" v-html="item.description"></div>
            </div>

            <q-card-actions align="between" class="text-weight-medium">
              <div class="">
                <span v-if="item.tags">
                  <q-icon name="local_offer" class="q-mr-sm" /> Tags:
                  <span class="q-mr-md" v-html="item.tags.title"></span>

                  <!-- <a href="" class="text-caption">tourist</a> -->
                </span>
              </div>
            </q-card-actions>
          </div>

          <q-separator class="q-my-md" />
          <related-post :postcategoryId="item.postcategoryId" />
          <q-separator class="q-my-md" />
          <comment-box :comments="comments" />
          <q-separator class="q-my-xl" />
          <form action="" @submit.prevent="onSubmit">
            <div class="title">
              <div class="text-h5 text-weight-bold">Drop a Comment</div>
            </div>
            <div style="max-width: 100%" class="q-my-md">
              <q-input outlined v-model="body" type="textarea" />
            </div>
            <q-btn
              style="background: #ff0080; color: white"
              label="Post Comment"
              type="submit"
              no-caps
            />
          </form>
        </div>

        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <recent-posts />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import moment from "moment";
import postService from "../services/postService";
import commentService from "../services/commentService";

import RecentPosts from "../components/RecentPosts.vue";
import CommentBox from "../components/CommentBox.vue";
import RelatedPost from "src/components/RelatedPost.vue";
// import BackgrounHeader from "../components/BackgrounHeader.vue";
export default {
  components: { RecentPosts, CommentBox, RelatedPost },
  // components: { BackgrounHeader },
  // name: 'PageName',
  data() {
    return {
      // slug: this.$route.params.slug,
      // rText: "",
      id: this.$route.params.id,
      // showInside: false,
      // rName: "",
      // weblink: "",
      // rEmail: "",
      comments: [],
      // replies: [],
      body: "",
      item: {},
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    async getSinglePost() {
      try {
        await postService.showpost(this.id).then((response) => {
          this.item = response.data.post;
          this.getComments();
        });
      } catch (err) {
        console.log(err);
      }
    },
    async getComments() {
      try {
        await commentService.getComments(this.id).then((response) => {
          this.comments = response.data.data;
          // this.replies = response.data.data.replies;
        });
      } catch (err) {
        console.log(err);
      }
    },

    async onSubmit() {
      const comment = {
        postId: this.id,
        body: this.body,
      };
      try {
        await commentService.addcomment(comment).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Comment sent",
          });
          this.getComments();
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: error.response.data.error,
        });
      }
      this.body = "";
    },
  },

  mounted() {},

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.getSinglePost();
        this.getComments();
      },
    },
  },
};
</script>
<style scoped>
.bg {
  background-image: url(https://ovatheme.com/em4u/wp-content/themes/em4u/assets/img/bg_heading-compressor.jpg);
  padding: 277px 0px 80px 0px;

  position: relative;
  height: 50vh !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg_cover {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.text__section {
  width: 65% !important;
  margin: 0 auto;
  margin-top: -24em;
  position: relative;
  height: 100%;

  z-index: 2;
}
.header__text {
  color: white;
}
.ova_title {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0;
  color: #fff;
  /* line-height: 60px; */
}
.text__row {
  margin-top: 4em;
}
.text-body1 {
  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  color: #242b46;
}
.q-icon {
  color: #f53f7b;
}
a {
  background-color: transparent;
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #f53f7b;
}
a:focus {
  color: #f53f7b;
}
.q-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
</style>
