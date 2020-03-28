import { Vue, Component } from 'vue-property-decorator';
import { VuetifyObject } from 'vuetify';

import TopBar from '@/top-bar/top-bar.component';
import Footer from '@/footer/footer.component';
import ProjectList from '@/projects/project-list/project-list.component';

@Component({
  components: {
    TopBar,
    Footer,
    ProjectList,
  },
})
export default class AppComponent extends Vue {
  private scroller: Scroller = new Scroller(this.$vuetify);

  private mounted() {
    this.goToTop();
  }

  private goToTop() {
    this.scroller.goToTop();
  }
}

class Scroller {
  private vuetify: VuetifyObject;

  constructor(vuetify: VuetifyObject) {
    if (!vuetify) {
      throw new Error('Invalid vuetify object');
    }

    this.vuetify = vuetify;
  }

  public goToTop() {
    this.vuetify.goTo(0);
  }
}
