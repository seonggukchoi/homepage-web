import { Vue, Component, Prop } from 'vue-property-decorator';
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
  @Prop() private readonly project: Project.Project | undefined;

  private isOpenedProjectModal: boolean = false;

  private openProjectModal(): void {
    this.isOpenedProjectModal = true;
  }

  private closeProjectModal(): void {
    this.isOpenedProjectModal = false;
  }
}
