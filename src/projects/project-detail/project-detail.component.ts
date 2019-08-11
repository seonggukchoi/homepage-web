import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  name: 'ProjectDetail',
})
export default class ProjectDetailComponent extends Vue {
  @Prop() private readonly project: object | undefined;

  private mounted() { }

  @Emit('close')
  private closeProjectDetail() { }
}
