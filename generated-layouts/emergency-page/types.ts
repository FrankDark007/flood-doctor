export interface EmergencyPageData {
  companyName: string;
  phoneNumber: string;
  phoneHref: string;
  smsHref: string;
  responseTime: string;
  serviceArea: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
  important?: boolean;
}

export interface TrustSignal {
  id: number;
  text: string;
  iconName: string;
}