import { createAction, props } from '@ngrx/store';
import { Exhibitor } from '../../state/main/exhibitor.model';

export class ExhibitorAction {
  private static readonly Identification = 'Exhibitor ';

  public static readonly AddExhibitorAction = createAction(`${this.Identification} AddExhibitorAction`);

  public static readonly InitializeExhibitorAction = createAction(`${this.Identification} InitializeExhibitorAction`);

  public static readonly ChangeExhibitorAction = createAction(
    `${this.Identification} ChangeExhibitorAction`,
    props<{
      data: Exhibitor;
    }>()
  );

  public static readonly SpliceExhibitorAction = createAction(
    `${this.Identification} SpliceExhibitorAction`,
    props<{ index: number }>()
  );

  public static readonly ClearExhibitorAction = createAction(`${this.Identification} ClearExhibitorAction`);
}
