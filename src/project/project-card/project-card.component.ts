import { Vue, Component, Prop } from 'vue-property-decorator';

import { IProject } from '../project.interface';
import StatusChipComponent from '../components/status-chip.component';

@Component({
  name: 'ProjectCard',
  components: {
    StatusChipComponent,
  },
})
export default class ProjectCardComponent extends Vue {
  @Prop() private readonly project: IProject | undefined;

  private openProjectModal(): void {
    this.$store.dispatch('Project/openProjectModal', this.project);
  }
}
