import { Vue, Component } from 'vue-property-decorator';
import FromTo from '../components/from-to.component';
import StatusChip from '../components/status-chip.component';
import { IProject } from '../project.interface';

@Component({
  name: 'ProjectModal',
  components: {
    FromTo,
    StatusChip,
  },
})
export default class ProjectModalComponent extends Vue {
  private get isOpenedProjectModal(): boolean {
    return this.$store.getters['Projects/getIsOpenedProjectModal'];
  }

  private get project(): IProject | null {
    return this.$store.getters['Projects/getProject'];
  }

  private closeProjectModal() {
    this.$store.dispatch('Projects/closeProjectModal');
  }
}
