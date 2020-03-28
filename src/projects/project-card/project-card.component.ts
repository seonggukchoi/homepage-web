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

  private isOpenedProjectDetail: boolean = false;

  private openProjectDetail(): void {
    this.isOpenedProjectDetail = true;
  }

  private closeProjectDetail(): void {
    this.isOpenedProjectDetail = false;
  }
}
