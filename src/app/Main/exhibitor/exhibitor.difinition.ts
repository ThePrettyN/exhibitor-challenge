export interface RegistrationDetails {
  S_added_via: string;
  S_company: string;
  S_email_address: string;
  S_group_reg_id: string;
  S_name_on_badge: string;
  S_job_title: string;
  S_country: string;
  S_company_on_badge: string;
  SB_event_fha: boolean;
  SB_event_prowine: boolean;
}

export interface Country {
  city: string;
  country: string;
  coutry_code: string;
  level1_active: number;
  level2_active: number;
  level3_active: string;
  province: string;
}
