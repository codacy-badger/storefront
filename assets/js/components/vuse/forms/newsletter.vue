<template>
  <section class="header" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
      <div class="container">
        <div class="grid is-center">
          <div class="row">
            <h3 class="header-title">Sign up for our newsletter</h3>
          </div>
          <form class="row" @submit.prevent="onSubmit">
            <div class="column is-desktop-4">
              <div class="input-group has-itemAfter">
                <input class="input" type="text" name="email" placeholder="Email address" v-model="$sectionData.form.email"/><a class="button" @click.prevent="onSubmit" :class="$sectionData.action.classes" :href="$sectionData.action.href" v-html="$sectionData.action.text" v-styler="$sectionData.action"></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>

<script>
    import { types } from 'vuse';

    export default {
      name: 'Newsletter',
      cover: 'img/covers/newsletter.png',
      group: 'forms',
      $schema: {
        classes: types.ClassList,
        action: types.Button,
        form: {
          email: ''
        }
      },
      props: {
        id: {
          type: Number,
          required: true
        }
      },
      methods: {
        onSubmit () {
          if (this.$builder.isEditing) return;

          const endpoint = this.$sectionData.action.href;
          console.log(`Pinging ${endpoint} with ${this.$sectionData.form.email}`);
          // SEND DATA TO ENDPOINT
        }
      }
    };
</script>
