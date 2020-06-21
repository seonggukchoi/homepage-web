import { Vue, Component } from 'vue-property-decorator';
import { Framework } from 'vuetify';

import TopBarComponent from '@/top-bar/top-bar.component';
import FooterComponent from '@/footer/footer.component';
import ProjectListComponent from '@/project/project-list/project-list.component';

@Component({
  components: {
    TopBarComponent,
    FooterComponent,
    ProjectListComponent,
  },
})
export default class AppComponent extends Vue {
  private scroller: Scroller = new Scroller(this.$vuetify);

  private mounted(): void {
    this.goToTop();
  }

  private goToTop(): void {
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

  public goToTop(): void {
    this.vuetify.goTo(0);
  }
}
