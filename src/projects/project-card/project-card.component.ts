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

  private isOpenedProjectModal: boolean = false;

  private openProjectModal(): void {
    this.isOpenedProjectModal = true;
  }

  private closeProjectModal(): void {
    this.isOpenedProjectModal = false;
  }
}
