import { isEnabled } from './core';

const menuInbox = [{ title: 'Team Inbox', link: '/inbox/index' }];

const menuDeal = [{ title: 'Sales pipeline', link: '/deal/board' }];

const menuContacts = [
  { title: 'Visitors', link: '/contacts/visitor' },
  { title: 'Leads', link: '/contacts/lead' },
  { title: 'Customers', link: '/contacts/customer' },
  { title: 'Companies', link: '/companies' },
  isEnabled('clientportal')
    ? {
        title: 'Client Portal Users',
        link: '/settings/client-portal/user'
      }
    : { title: '', link: '' }
];

export { menuContacts, menuInbox, menuDeal };
