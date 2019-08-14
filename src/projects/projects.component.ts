import { Vue, Component } from 'vue-property-decorator';
import Project from './project/project.component';

@Component({
  name: 'Projects',
  components: { Project },
})
export default class ProjectsComponent extends Vue {
  private isLoading: boolean = false;

  private projects: Project.Project[] = [];

  private mounted() {
    return this.fetchProjects();
  }

  private async fetchProjects() {
    this.startLoading();

    return this.$store.dispatch('Projects/fetchProjects')
    .then(() => this.projects = this.$store.getters['Projects/getProjects'])
    .then(() => this.endLoading());
  }

  private startLoading() {
    this.isLoading = true;
  }

  private endLoading() {
    this.isLoading = false;
  }
}
