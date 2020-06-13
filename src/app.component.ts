import { Vue, Component } from 'vue-property-decorator';
import { Framework } from 'vuetify';

import TopBar from '@/top-bar/top-bar.component';
import Footer from '@/footer/footer.component';
import ProjectList from '@/project/project-list/project-list.component';

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
  private vuetify: Framework;

  constructor(vuetify: Framework) {
    if (!vuetify) {
      throw new Error('Invalid vuetify object');
    }

    this.vuetify = vuetify;
  }

  public goToTop() {
    this.vuetify.goTo(0);
  }
}
