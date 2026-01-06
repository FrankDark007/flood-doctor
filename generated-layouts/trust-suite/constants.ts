import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Star, 
  CheckCircle, 
  Zap, 
  Phone 
} from 'lucide-react';
import { TrustItem } from './types';

export const TRUST_DATA: TrustItem[] = [
  {
    id: 'iicrc',
    label: 'IICRC Certified',
    value: 'Certified',
    subtext: 'Firm #123456',
    icon: ShieldCheck,
    variant: 'success'
  },
  {
    id: 'license',
    label: 'VA Licensed',
    value: '#2705155505',
    subtext: 'Class A Contractor',
    icon: Award,
    variant: 'primary'
  },
  {
    id: 'experience',
    label: 'Experience',
    value: '20+ Years',
    subtext: 'Serving Virginia',
    icon: Clock,
    variant: 'neutral'
  },
  {
    id: 'rating',
    label: 'Google Rating',
    value: '4.9/5.0',
    subtext: 'Based on 500+ reviews',
    icon: Star,
    variant: 'warning'
  },
  {
    id: 'jobs',
    label: 'Jobs Completed',
    value: '5,000+',
    subtext: 'Restoration projects',
    icon: CheckCircle,
    variant: 'success'
  },
  {
    id: 'response',
    label: 'Response Time',
    value: '60 Min',
    subtext: 'On-site guarantee',
    icon: Zap,
    variant: 'warning'
  },
  {
    id: 'service',
    label: 'Emergency',
    value: '24/7 Open',
    subtext: 'Always available',
    icon: Phone,
    variant: 'primary'
  },
  {
    id: 'bbb',
    label: 'BBB Rating',
    value: 'A+',
    subtext: 'Accredited Business',
    icon: Award,
    variant: 'primary'
  }
];

export const PRIMARY_COLOR = '#1a73e8';