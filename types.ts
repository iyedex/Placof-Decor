
// Fix: Import React to provide the React namespace for ReactNode types
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ProjectItem {
  title: string;
  location: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}