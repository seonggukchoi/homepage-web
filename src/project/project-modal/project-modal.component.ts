import { Vue, Component } from 'vue-property-decorator';

import { IProject } from '../project.interface';
import FromToComponent from '../components/from-to.component';
import StatusChipComponent from '../components/status-chip.component';

@Component({
  name: 'ProjectModal',
  components: {
    FromToComponent,
    StatusChipComponent,
  },
})
export default class ProjectModalComponent extends Vue {
  private get isOpenedProjectModal(): boolean {
    return this.$store.getters['Project/getIsOpenedProjectModal'];
  }

  private get project(): IProject | null {
    return this.$store.getters['Project/getProject'];
  }

  private closeProjectModal(): void {
    this.$store.dispatch('Project/closeProjectModal');
  }
}
