import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import FromTo from '../components/from-to.component';
import StatusChip from '../components/status-chip.component';

@Component({
  name: 'ProjectDetail',
  components: {
    FromTo,
    StatusChip,
  },
})
export default class ProjectDetailComponent extends Vue {
  @Prop() private readonly project: object | undefined;

  private mounted() { }

  @Emit('close')
  private closeProjectDetail() { }
}
