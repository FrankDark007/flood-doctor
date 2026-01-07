import { ChecklistItem, EmergencyPageData, TrustSignal } from './types';

export const EMERGENCY_DATA: EmergencyPageData = {
  companyName: "Flood Doctor",
  phoneNumber: "(877) 497-0007",
  phoneHref: "tel:+18774970007",
  smsHref: "sms:+18774970007?body=I have a water emergency, please help.",
  responseTime: "60 min or less",
  serviceArea: "Northern Virginia, DC & Maryland"
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 1, text: "Turn off water main immediately", important: true },
  { id: 2, text: "Do NOT enter room if standing water is near outlets", important: true },
  { id: 3, text: "Move valuables to higher ground" },
  { id: 4, text: "Take photos of damage for insurance" },
  { id: 5, text: "Wait for our dispatch team outside if safe" }
];

export const TRUST_SIGNALS: TrustSignal[] = [
  { id: 1, text: "Licensed & Insured", iconName: "shield" },
  { id: 2, text: "24/7 Dispatch", iconName: "clock" },
  { id: 3, text: "Direct Insurance Billing", iconName: "file-check" }
];