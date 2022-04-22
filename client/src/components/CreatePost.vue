<template>
  <div class="q-my-sm flex flex-center">
    <q-form
      @submit.prevent="onUpload"
      v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '70%' }"
    >
      <div class="row q-col-gutter-sm">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-xs">
          <q-input
            filled
            v-model="title"
            :rules="[(val) => !!val || 'Field is required']"
            label="Title"
            stack-label
          />
        </div>

        <div>
          <div class="col-12 q-my-md">
            <input dark outlined type="file" ref="file" @change="onSelect()" />
            <!-- -->
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            {{ options._id }}
            <q-select
              filled
              :rules="[(val) => !!val || 'Field is required']"
              :options="options"
              emit-value
              map-options
              v-model="categoryId"
              option-value="_id"
              option-label="title"
              label="select category"
            />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <!-- {{ optionsT._id }} -->
            <!--    -->
            <q-select
              filled
              :options="optionsT"
              v-model="tags"
              emit-value
              map-options
              option-value="_id"
              option-label="title"
              multiple
              :rules="[(val) => !!val || 'Field is required']"
              use-chips
              label="Tags"
            />
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <q-editor
              :rules="[(val) => !!val || 'Field is required']"
              :dense="$q.screen.lt.md"
              v-model="description"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                  },
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                [
                  'bold',
                  'italic',
                  'strike',
                  'underline',
                  'subscript',
                  'superscript',
                ],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'size-1',
                      'size-2',
                      'size-3',
                      'size-4',
                      'size-5',
                      'size-6',
                      'size-7',
                    ],
                  },
                  {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'default_font',
                      'arial',
                      'arial_black',
                      'comic_sans',
                      'courier_new',
                      'impact',
                      'lucida_grande',
                      'times_new_roman',
                      'verdana',
                    ],
                  },
                  'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                ['undo', 'redo'],
                ['viewsource'],
              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana',
              }"
            />
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-my-sm"
          >
            <q-btn
              label="post"
              type="submit"
              class="full-width"
              color="primary"
            />
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>
 <script>
import postCategoriesService from "../services/postCategoriesService";
import postService from "../services/postService";
import tagService from "../services/tagService";
export default {
  data() {
    return {
      title: "",
      description: "",
      tags: [""],
      categoryId: "",
      options: [],
      file: "",
      optionsT: [],
    };
  },
  methods: {
    async getPosts() {
      try {
        await postCategoriesService.getCategories().then((response) => {
          this.options = response.data.data;
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    async getTags() {
      try {
        await tagService.getTags().then((response) => {
          this.optionsT = response.data.data;
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onUpload() {
      try {
        let formData = new FormData();
        formData.append("imageUrl", this.file);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("postcategoryId", this.categoryId);
        formData.append("tags", this.tags);
        await postService.createPost(formData).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Model Succesfully Created",
          });
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: "all fields are required",
        });
      }
    },
  },
  mounted() {
    this.getPosts();
    this.getTags();
  },
};
</script>

<style lang="scss" scoped></style>
