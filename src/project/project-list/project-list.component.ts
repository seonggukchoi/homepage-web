import { Vue, Component } from 'vue-property-decorator';

import { IProject } from '../project.interface';
import ProjectCardComponent from '../project-card/project-card.component';
import ProjectModalComponent from '../project-modal/project-modal.component';

@Component({
  name: 'ProjectList',
  components: {
    ProjectCardComponent,
    ProjectModalComponent,
  },
})
export default class ProjectListComponent extends Vue {
  private isLoading = false;

  private get isOpenedProjectModal(): boolean {
    return this.$store.getters['Project/getIsOpenedProjectModal'];
  }

  private get projects(): IProject[] {
    return this.$store.getters['Project/getProjects'];
  }

  private mounted(): void {
    this.fetchProjects();
  }

  private async fetchProjects(): Promise<void> {
    this.startLoading();
    await this.$store.dispatch('Project/fetchProjects');
    this.endLoading();
  }

  private startLoading(): void {
    this.isLoading = true;
  }

  private endLoading(): void {
    this.isLoading = false;
  }

  private closeProjectModal(): void {
    this.$store.dispatch('Project/closeProjectModal');
  }
}
