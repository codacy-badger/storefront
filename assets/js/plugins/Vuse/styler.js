import Styler from './components/VuseStyler.vue';
import { getTypeFromTagName, getTypeFromSchema } from './util';

function installStyler ({ builder, Vue }) {
  const StylerInstance = Vue.extend(Styler).extend({
    beforeCreate () {
      this.$builder = builder;
    }
  });

  builder.styler = {
    inserted (el, binding, vnode) {
      const newNode = document.createElement('div');
      const section = vnode.context.$section;
      const rootApp = vnode.context.$root.$el;
      let name, type;

      rootApp.appendChild(newNode);
      el.classList.add('is-editable');

      if (binding.arg == 'index') {
          name = binding.value;
      } else {
          name = binding.expression;
      }

      section.stylers.push(new StylerInstance({
        propsData: {
          el,
          section: section,
          type: ( binding.arg != 'index' && binding.arg ) || getTypeFromSchema(name, section.schema) || getTypeFromTagName(el.tagName),
          name: name
        }
      }).$mount(newNode));
    }
  };
}

export default installStyler;
