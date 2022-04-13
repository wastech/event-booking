<template>
  <div class="q-my-xl">
    <div class="" style="max-width: 100%">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-grey q-py-lg"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="SPEAKER" label="SPEAKER" />
          <q-tab name="TICKET & PRICE" label="TICKET & PRICE" />
          <q-tab name="COMMENTS" label="COMMENTS" />
          <q-tab name="CONTACT" label="CONTACT" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="SPEAKER">
            <event-speaker :item="item" />
          </q-tab-panel>

          <q-tab-panel name="TICKET & PRICE">
            <event-ticket :item="item"  />
          </q-tab-panel>

          <q-tab-panel name="COMMENTS">
            <event-comment />
          </q-tab-panel>
          <q-tab-panel name="CONTACT">
            <event-contact />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import EventTicket from "./EventTicket.vue";
import EventContact from "./EventContact.vue";
import EventSpeaker from "./EventSpeaker.vue";
import EventComment from "./EventComment.vue";

export default {
  components: { EventTicket, EventContact, EventSpeaker, EventComment },
    props:['item'],
  setup() {
    return {
      tab: ref("SPEAKER"),
    };
  },
};
</script>
