import { Vue, Component, Emit } from 'vue-property-decorator';

@Component({
  name: 'SubmitDialog',
})
export default class SubmitDialogComponent extends Vue {
  private mounted() { }

  @Emit('close')
  private closeSubmitDialog() { }
}
