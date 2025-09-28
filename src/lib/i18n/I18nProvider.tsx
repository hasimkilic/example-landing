"use client";
import React, { createContext, useContext } from 'react';
import type { Locale } from './config';

interface I18nContextValue {
  locale: Locale;
  t: (path: string) => string;
  dict: any;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function access(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export const I18nProvider = ({ locale, dict, children }: { locale: Locale; dict: any; children: React.ReactNode }) => {
  const t = (path: string) => {
    const val = access(dict, path);
    if (val === undefined) return path;
    return val;
  };
  return <I18nContext.Provider value={{ locale, t, dict }}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
