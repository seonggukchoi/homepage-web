import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'FromTo',
})
export default class FromToComponent extends Vue {
  @Prop() private readonly from: string | null | undefined;
  @Prop() private readonly to: string | null | undefined;
}
