import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import ProjectDetail from '../project-detail/project-detail.component';

@Component({
  name: 'Project',
  components: { ProjectDetail },
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
