import { Vue, Component } from 'vue-property-decorator';
import Project from './project.component';

@Component({
  name: 'Projects',
  components: { Project },
})
export default class ProjectsComponent extends Vue {
  private projects = [
    { id: 1, title: 'Seongg.uk', description: 'Personal Projects', image: '' },
    { id: 2, title: 'ONDA Plus', description: 'ONDA Projects', image: '' },
    { id: 3, title: 'ONDA Hotel Extranet', description: 'ONDA Projects', image: '' },
    { id: 4, title: 'ONDA Wave', description: 'ONDA Projects', image: '' },
  ];

  private mounted() { }
}
