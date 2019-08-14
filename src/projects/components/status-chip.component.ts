import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'StatusChip',
})
export default class StatusChipComponent extends Vue {
  @Prop() private readonly status: Project.StatusType | undefined;

  private chipText: string | null = null;
  private chipColor: string | null = null;
  private isDark: boolean | null = null;

  private mounted() {
    if (this.status) {
      this.setChipColor(this.status);
    }
  }

  private setChipColor(status: Project.StatusType) {
    if (status === 'proceeding') {
      this.chipText = 'Proceeding';
      this.chipColor = 'grey darken-3';
      this.isDark = true;
    } else if (status === 'leave') {
      this.chipText = 'Leave';
      this.chipColor = 'grey lighten-3';
      this.isDark = false;
    }
  }
}
