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
              v-model="eventcategoryId"
              option-value="_id"
              option-label="title"
              label="select category"
            />
          </div>
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model="free_ticket"
                type="text"
                placeholder="Free Ticket"
                prefix="$"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model.number="silver_ticket"
                placeholder="Silver Ticket"
                type="number"
                prefix="$"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model.number="gold_ticket"
                placeholder="Gold Ticket"
                type="number"
                prefix="$"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model.number="number_of_free_ticket"
                type="number"
                placeholder="Free Ticket number"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model.number="number_of_silver_ticket"
                placeholder="Silver Ticket Number"
                type="number"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model.number="number_of_gold_ticket"
                placeholder="Gold Ticket Number"
                type="Number"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input
                filled
                v-model="address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input filled v-model="room" placeholder="Room" type="text" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <q-input filled v-model="venue" placeholder="Venue" type="text" />
            </div>
          </div>

          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <q-input
                filled
                v-model="start_date"
                type="date"
                placeholder="Start Date"
              />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <q-input
                filled
                v-model="end_date"
                placeholder="End Date"
                type="date"
              />
            </div>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <!-- {{ optionsT._id }} -->
            <!--    -->
            <q-select
              filled
              :options="[
                'business',
                'course business',
                'people',
                'course theme',
              ]"
              v-model="tags"
              use-input
              use-chips
              multiple
              :model-value="tags"
              emit-value
              map-options
              stack-label
              :rules="[(v) => (v && v.length >= 1) || 'Select at least 1 tag.']"
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
import postCategoriesService from "../services/eventCategoriesService";
import postService from "../services/eventService";
export default {
  data() {
    return {
      title: "",
      description: "",
      price: "",
      tags: null,
      eventcategoryId: "",
      venue: "",
      options: [],
      file: "",
      free_ticket: "Free",
      silver_ticket: 0,
      gold_ticket: 0,
      number_of_free_ticket: 0,
      number_of_silver_ticket: 0,
      number_of_gold_ticket: 0,
      start_date: 0,
      end_date: 0,
      room: "",
      address: "",
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
    onSelect() {
      this.file = this.$refs.file.files[0];
    },
    async onUpload() {
      try {
        let formData = new FormData();
        formData.append("imageUrl", this.file);
        formData.append("title", this.title);
        formData.append("description", this.description);
        formData.append("eventcategoryId", this.eventcategoryId);

        formData.append("tags", this.tags);

        // formData.append("tags", this.tags);
        formData.append("free_ticket", this.free_ticket);
        formData.append("number_of_free_ticket", this.number_of_free_ticket);
        formData.append("silver_ticket", this.silver_ticket);
        formData.append(
          "number_of_silver_ticket",
          this.number_of_silver_ticket
        );
        formData.append("gold_ticket", this.gold_ticket);
        formData.append("number_of_gold_ticket", this.number_of_gold_ticket);
        formData.append("start_date", this.start_date);
        formData.append("end_date", this.end_date);
        formData.append("room", this.room);
        formData.append("venue", this.venue);
        formData.append("address", this.address);
  
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
  },
};
</script>

<style lang="scss" scoped></style>
