import { Vue, Component, Prop } from 'vue-property-decorator';
import { IProject } from '../project.interface';
import StatusChip from '../components/status-chip.component';
import ProjectModal from '../project-modal/project-modal.component';

@Component({
  name: 'ProjectCard',
  components: {
    StatusChip,
    ProjectModal,
  },
})
export default class ProjectCardComponent extends Vue {
  @Prop() private readonly project: IProject | undefined;

  private openProjectModal(): void {
    this.$store.dispatch('Projects/openProjectModal', this.project);
  }
}
