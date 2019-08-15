import { Vue, Component } from 'vue-property-decorator';
import SubmitDialog from './components/submit-dialog.component';

@Component({
  name: 'Contacts',
  components: { SubmitDialog },
})
export default class ContactsComponent extends Vue {
  private isOpenedSubmitDialog: boolean = false;

  private mounted() { }

  private sendEmail() {
    this.openSubmitDialog();
  }

  private openSubmitDialog() {
    this.isOpenedSubmitDialog = true;
  }

  private closeSubmitDialog() {
    this.isOpenedSubmitDialog = false;
  }
}
