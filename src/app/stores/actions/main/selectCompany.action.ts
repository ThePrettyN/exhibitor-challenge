import { createAction, props } from '@ngrx/store';

export class SelectCompanyAction {
  private static readonly Identification = 'SelectCompanyAction';

  public static readonly SelectedCompanyAction = createAction(
    `${this.Identification} SelectedCompanyAction`,
    props<{
      eventType: number;
      company: string;
    }>()
  );
}
