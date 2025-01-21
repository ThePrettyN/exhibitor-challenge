import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { SelectCompanyAction } from '../../../stores/actions/main/selectCompany.action';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-main-selection_div-select_div',
  templateUrl: './select-div.component.html',
  styleUrls: ['./select-div.component.scss'],
  standalone: false,
})
export class SelectDivComponent implements OnInit {
  companyOptions: { id: number; S_event: number; name: string }[] = [];
  companyData: { id: number; S_event: number; name: string }[] = [];
  selectedOption = 0;
  selectedCompany = '';
  showComponent = false;

  standardData = [
    { id: 1, S_event: 1, name: 'company1' },
    { id: 2, S_event: 1, name: 'company2' },
    { id: 3, S_event: 1, name: 'company3' },
    { id: 4, S_event: 2, name: 'company4' },
    { id: 5, S_event: 2, name: 'company5' },
    { id: 6, S_event: 2, name: 'company6' },
  ];

  @ViewChild('selectInput') selectInput!: ElementRef<HTMLSelectElement>;
  @Output() showComponentEvent = new EventEmitter<boolean>();

  constructor(
    private readonly store: Store,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const apiUrl = environment.apiUrl + '/exhibitor-company-list';

    this.http
      .get<{ id: number; S_event: number; name: string }[]>(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .subscribe(
        (response) => {
          this.companyData = response;
          if (this.companyData.length === 0) {
            this.companyData = this.standardData;
          }
        },
        () => {
          this.companyData = this.standardData;
        }
      );
  }

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCompany(company: string) {
    this.selectedCompany = company;
    this.isOpen = false;
    this.store.dispatch(
      SelectCompanyAction.SelectedCompanyAction({
        eventType: this.selectedOption,
        company: company,
      })
    );
  }

  changeCategory(n: number) {
    if (n == this.selectedOption) return;
    this.selectedOption = n;
    this.fetchOptions();
  }

  fetchOptions(): void {
    this.companyOptions = this.companyData.filter((item) => item.S_event === this.selectedOption);
    this.showComponent = false;
    this.selectedCompany = '';
    this.store.dispatch(
      SelectCompanyAction.SelectedCompanyAction({
        eventType: this.selectedOption,
        company: this.selectedCompany,
      })
    );
  }

  onSelectChange($event: Event): void {
    const selectedValue = ($event.target as HTMLSelectElement).value;
    this.store.dispatch(
      SelectCompanyAction.SelectedCompanyAction({
        eventType: this.selectedOption,
        company: selectedValue,
      })
    );
  }
}
