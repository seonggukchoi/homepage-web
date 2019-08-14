import { Vue, Component, Prop } from 'vue-property-decorator';
import StatusChip from '../components/status-chip.component';
import ProjectDetail from '../project-detail/project-detail.component';

@Component({
  name: 'Project',
  components: {
    StatusChip,
    ProjectDetail,
  },
})
export default class ProjectsComponent extends Vue {
  @Prop() private readonly project: object | undefined;

  private isOpenedProjectDetail: boolean = false;

  private mounted() { }

  private openProjectDetail() {
    this.isOpenedProjectDetail = true;
  }

  private closeProjectDetail() {
    this.isOpenedProjectDetail = false;
  }
}
