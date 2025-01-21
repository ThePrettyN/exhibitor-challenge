import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-exhibitor-add',
  templateUrl: './addExhibitor.component.html',
  styleUrls: ['./addExhibitor.component.scss'],
  standalone: false,
})
export class AddExhibitor {
  constructor(private readonly store: Store) {}
  @Input() addFunction!: () => void;

  addExh() {
    this.addFunction();
  }
}
