import { Vue, Component, Prop } from 'vue-property-decorator';

import { StatusType } from '../project.interface';

@Component({
  name: 'StatusChip',
})
export default class StatusChipComponent extends Vue {
  @Prop() private readonly status: StatusType | undefined;

  private chipText: string | null = null;
  private chipColor: string | null = null;
  private isDark: boolean | null = null;

  private mounted(): void {
    if (this.status) {
      this.setChipColor(this.status);
    }
  }

  private setChipColor(status: StatusType): void {
    switch (status) {
      case 'progress':
        this.chipText = 'In Progress';
        this.chipColor = 'grey darken-3';
        this.isDark = true;
        break;
      case 'left':
        this.chipText = 'Left';
        this.chipColor = 'grey lighten-3';
        this.isDark = false;
        break;
    }
  }
}
