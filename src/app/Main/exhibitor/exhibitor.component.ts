import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompanyOption } from '../../stores/selectors/main/main.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import html2canvas from 'html2canvas';
import { Country } from './exhibitor.difinition';

@Component({
  selector: 'app-main-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.scss'],
  standalone: false,
})
export class ExhibitorComponent implements OnInit {
  eventType = 0;
  company = '';
  exhibitors: { id: number; group: FormGroup; isOpen: boolean; country: string; touched: boolean }[] = [];
  private apiuri = environment.apiUrl + '/add-exhibitor';
  private countryUrl = 'https://staging-fha-2024.occamlab.com.sg/public/provinces.json';
  countries: string[] = [];
  @ViewChild('codeContainer', { static: false }) codeContainer!: ElementRef;

  constructor(
    private readonly store: Store,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.store.select(selectCompanyOption).subscribe((data) => {
      this.initializeForm();
      this.company = data.company;
      this.eventType = data.eventType;
    });

    this.http
      .get<Country[]>(this.countryUrl)
      .pipe()
      .subscribe(
        (response) => {
          let prevCountry = '';
          this.countries = response
            .map((country) => country.coutry_code)
            .filter((country) => {
              if (country != prevCountry) {
                prevCountry = country;
                return true;
              }
              return false;
            });
        },
        (error) => {
          console.error('Error:', error);
          this.countries = ['US', 'CA', 'GB'];
        }
      );
  }

  addForm = () => {
    const newForm = new FormGroup({
      nameOnBadgeInput: new FormControl('', Validators.required),
      jobTitleInput: new FormControl('', Validators.required),
      companyOnBadgeInput: new FormControl('', Validators.required),
      emailInput: new FormControl('', [Validators.required, Validators.email]),
    });

    this.exhibitors.push({
      id: this.exhibitors.length + 1,
      group: newForm,
      isOpen: false,
      country: '',
      touched: false,
    });
  };

  initializeForm() {
    this.exhibitors = [];
    this.addForm();
  }

  deleteForm(index: number) {
    if (this.exhibitors.length === 1) {
      alert('at least one exhibitor is required');
      return;
    }

    this.exhibitors.splice(index, 1);

    this.exhibitors = this.exhibitors.map((exhibitor, i) => ({
      ...exhibitor,
      id: i + 1,
    }));
  }

  toggleDropdown(i: number) {
    this.exhibitors[i].isOpen = !this.exhibitors[i].isOpen;
    this.exhibitors[i].touched = true;
  }

  selectCountry(i: number, country: string) {
    this.exhibitors[i].country = country;
    this.exhibitors[i].isOpen = false;
  }

  register() {
    const validForms = this.exhibitors.filter((exhibitor) => exhibitor.group.valid);

    this.exhibitors.forEach((exhibitor) => {
      exhibitor.group.controls['emailInput'].markAsTouched();
      exhibitor.group.controls['nameOnBadgeInput'].markAsTouched();
      exhibitor.group.controls['jobTitleInput'].markAsTouched();
      exhibitor.group.controls['companyOnBadgeInput'].markAsTouched();
      exhibitor.touched = true;
    });
    if (validForms.length !== this.exhibitors.length) {
      return;
    }

    const formData = this.exhibitors.map((form) => {
      return {
        S_added_via: 'Web Form',
        S_email_address: form.group.controls['emailInput'].value,
        S_group_reg_id: '12312',
        S_name_on_badge: form.group.controls['nameOnBadgeInput'].value,
        S_job_title: form.group.controls['jobTitleInput'].value,
        S_country: form.country,
        S_company_on_badge: form.group.controls['companyOnBadgeInput'].value,
        SB_event_fha: this.eventType === 1,
        SB_event_prowine: this.eventType === 2,
      };
    });

    let success = true;
    formData.forEach((data) => {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.apiuri, data, { headers }).subscribe(
        () => {
          alert('successfully submitted!');
          this.initializeForm();
        },
        () => {
          alert('error occured:');
          success = false;
        }
      );
    });
    if (success == true) this.openModal();
  }
  isVisible = false;
  code = 'FKSJD';

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  saveAsImage() {
    html2canvas(this.codeContainer.nativeElement).then((canvas) => {
      const image = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = image;
      link.download = 'code-image.png';
      link.click();
    });
  }
}
