import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TariffProps {
  name: string;
  audience: string;
  priceDescription: string;
  features: string[];
  isPopular?: boolean;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}