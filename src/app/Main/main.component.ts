import { Component } from '@angular/core';
import { selectCompanyOption } from '../stores/selectors/main/main.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false,
})
export class MainComponent {
  isExhibitorShow!: boolean;

  constructor(private readonly store: Store) {
    store
      .select(selectCompanyOption)
      .pipe()
      .subscribe((data) => {
        if (data.company != '' && data.company != 'Please Select') this.isExhibitorShow = true;
        else this.isExhibitorShow = false;
      });
  }
}
