<template>
  <section class="pages__page pages__page_hero"  v-styler:section="$sectionData.classes" :class="$sectionData.classes">
          <div class="page-2-stain medium-hide"></div>
          <div class="pages__wrap flex flex_columns ie-height-fix">
              <div class="l-title flex__item">
                  <h1 class="l-title__title" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"/>
                  <div class="l-title__subtitle" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"/>
              </div>
              <div class="p-split flex__item flex__item_full flex flex_center">
                  <div class="p-split__tiles flex__item flex__item_size-2 clearfix">
                      <div class="hero-tile hero-tile_bigboy" data-hero="bigboy">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/bigboy_small.jpg" alt="bigboy"/>
                          </div>
                          <div class="hero-tile__name">Big Boy</div>
                      </div>
                      <div class="hero-tile hero-tile_cindy" data-hero="cindy">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/cindy_small.jpg" alt="cindy"/>
                          </div>
                          <div class="hero-tile__name">Cindy</div>
                      </div>
                      <div class="hero-tile hero-tile_killjoy" data-hero="killjoy">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/killjoy_small.jpg" alt="killjoy"/>
                          </div>
                          <div class="hero-tile__name">Kill Joy</div>
                      </div>
                      <div class="hero-tile hero-tile_natasha" data-hero="natasha">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/natasha_small.jpg" alt="natasha"/>
                          </div>
                          <div class="hero-tile__name">Natasha</div>
                      </div>
                      <div class="hero-tile hero-tile_papi" data-hero="papi">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/papi_small.jpg" alt="papi"/>
                          </div>
                          <div class="hero-tile__name">Papi</div>
                      </div>
                      <div class="hero-tile hero-tile_phoenix" data-hero="phoenix">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/phoenix_small.jpg" alt="phoenix"/>
                          </div>
                          <div class="hero-tile__name">Phoenix</div>
                      </div>
                      <div class="hero-tile hero-tile_queen" data-hero="queen">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/queen_small.jpg" alt="queen"/>
                          </div>
                          <div class="hero-tile__name">Queen</div>
                      </div>
                      <div class="hero-tile hero-tile_rhino" data-hero="rhino">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/rhino_small.jpg" alt="rhino"/>
                          </div>
                          <div class="hero-tile__name">Rhino</div>
                      </div>
                      <div class="hero-tile hero-tile_rumblejack" data-hero="rumblejack">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/rumblejack_small.jpg" alt="rumblejack"/>
                          </div>
                          <div class="hero-tile__name">Rumble Jack</div>
                      </div>
                      <div class="hero-tile hero-tile_lady" data-hero="lady">
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" src="/images/funtoplay3/heros/lady_small.jpg" alt="lady"/>
                          </div>
                          <div class="hero-tile__name">The lady</div>
                      </div>
                  </div>
                  <div class="p-split__detail flex__item flex__item_size-1 hero-detail loader">
                      <div class="loader__content">
                          <div class="hero-detail__name h1"></div>
                          <div class="hero-detail__img"></div>
                          <div class="hero-detail__bio"></div>
                      </div>
                  </div>
              </div>
              <div class="btn-container flex__item">
                <span class="btn-container__button" @click.prevent="onClick" :class="$sectionData.buttons[0].classes" :href="$sectionData.buttons[0].href" v-html="$sectionData.buttons[0].text" v-styler="$sectionData.buttons[0].button">
                </span>
              </div>
          </div>
      </section>

</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
      name: 'Gallery 1',
      cover: '',
      group: 'galleries',
      $schema: {
        classes: types.ClassList,
        buttons: [
           {
               text: 'Choose character',
               href: "#",
               button: types.Button,
           },
        ],
        slogan: [
                {
                    title: 'Who are you in Battle Carnival?',
                    text: types.Title,
                },
                {
                    title: 'Choose your character. Choose carefully!',
                    text: types.Title,
                },
        ],
      },
      props: {
        id: {
          type: Number, required: true
        }
      },
      methods: {
          onClick () {
               if (this.$builder.isEditing) return;

               const endpoint = this.$sectionData.buttons[0].href;
          },
        }
    };
</script>
