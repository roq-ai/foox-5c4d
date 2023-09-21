interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own freelancer profile',
    'Apply to jobs',
    'Manage worklog for assigned jobs',
    'View hiring details',
  ],
  ownerAbilities: [
    'Manage hiring process',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage users',
    'Manage companies',
    'Manage jobs',
    'Manage applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3a2352a6-a535-4133-a1e9-b54a018d056d',
};
