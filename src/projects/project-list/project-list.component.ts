import { Vue, Component } from 'vue-property-decorator';
import ProjectCard from '../project-card/project-card.component';

@Component({
  name: 'ProjectList',
  components: { ProjectCard },
})
export default class ProjectListComponent extends Vue {
  private isLoading: boolean = false;

  private get projects(): Project.Project[] {
    return this.$store.getters['Projects/getProjects'];
  }

  private mounted(): void {
    this.fetchProjects();
  }

  private async fetchProjects(): Promise<void> {
    this.startLoading();
    await this.$store.dispatch('Projects/fetchProjects');
    this.endLoading();
  }

  private startLoading(): void {
    this.isLoading = true;
  }

  private endLoading(): void {
    this.isLoading = false;
  }
}