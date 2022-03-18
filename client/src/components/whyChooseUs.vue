<template>
  <div
    class="main"
    v-bind:style="
      $q.screen.lt.sm
        ? {
            'margin-top': '2px',
            'padding-bottom': '40px',
            'padding-top': '5px',
          }
        : {
            'margin-top': '60px',
            'padding-bottom': '80px',
            'padding-top': '5px',
          }
    "
  >
    <div class="title text-center">
      <div class="text-h6 text-weight-bold q-my-xl underline-small">
        WHY CHOOSE US
      </div>
    </div>

    <div
      class="row row_section q-col-gutter-lg"
      v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '75%' }"
    >
      <div
        class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
        v-for="item in items"
        :key="item"
      >
        <div class=" mt__card">
          <q-item>
            <q-item-section top avatar class="q-my-md">
              <q-avatar color="primary" text-color="white">{{
                item.count
              }}</q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle2 q-my-md">{{
                item.subtitle
              }}</q-item-label>
              <q-item-label caption class="text-body2">{{
                item.text
              }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {
      items: [
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "MULTIPLE EVENTS",
          count: "01",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "EVENT MANAGEMENT",
          count: "02",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "CREADIT CARD PAYMENT",
          count: "03",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "Location Management",
          count: "04",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "FREE REGISTRING MANAGEMENT",
          count: "05",
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib",
          subtitle: "EASY TO USE",
          count: "06",
        },
      ],
    };
  },
};
</script>
<style scoped>
.row_section {
  margin: 0 auto;
}
.main {
  /* padding-bottom: 80px !important; */
  /* padding-top: 50px !important; */
  background-color: #fafafa !important;
}
.underline-small {
  display: inline-block;
  position: relative;
}

.underline-small::after {
  content: "";
  height: 3px;
  width: 20%;
  background: #f53f7b;
  position: absolute;
  left: calc(50% - 10%);
  bottom: -12px;
}
.mt__card{
  transition: transform .2s;

  padding: 40px 40px 40px 40px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  display: inline-block;

}
.mt__card:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  background-color: #fff;

}
</style>
