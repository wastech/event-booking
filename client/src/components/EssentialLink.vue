<template>
  <div>
    <q-item-label header> Dashboard </q-item-label>

    <q-expansion-item icon="unarchive" label="Draft Box ">
      <q-list class="q-pl-lg">
        <q-item
          to="/admin/createpost"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Post box</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="compost" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Event box</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="fas fa-object-group" label="Post Category">
      <q-list class="q-pl-lg">
        <q-item
          to="/admin/post-category"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create Post Category</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="pages" label="Posts">
      <q-list class="q-pl-lg">
        <q-item
          to="/admin/createpost"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create Post</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/admin/tag" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create tag</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          to="/admin/post-table"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="compost" />
          </q-item-section>
          <q-item-section>
            <q-item-label>posts</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="fas fa-object-group" label="Event Category">
      <q-list class="q-pl-lg">
        <q-item
          to="/admin/event-category"
          active-class="q-item-no-link-highlighting"
        >
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create Category</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="event" label="Events">
      <q-list class="q-pl-lg">
        <q-item to="/create-event" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create event</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="compost" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Events</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>

    <q-expansion-item icon="far fa-user" label="profile">
      <q-list class="q-pl-lg">
        <q-item to="/setting" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Setting</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/users" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="compost" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-expansion-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
});
</script>
