module.exports = {
  docs: {
    'Get Started': [
      'introduction',
      'add-script',
      'script-reference',
      'error-tracking',
      'integration-guides',
      {
        type: 'category',
        label: 'Integrations',
        items: [
          'integrations/wordpress',
          'integrations/webflow',
          'integrations/framer',
          'integrations/wix',
          'integrations/ghost',
          'integrations/docusaurus',
          'integrations/django',
          'integrations/google-tag-manager',
          'integrations/sveltekit',
        ],
      },
      'troubleshooting',
    ],
    'Site settings': [
      'sitesettings/how-to-access-site-settings',
      'sitesettings/how-to-invite-users-to-your-website',
      'sitesettings/embed-your-analytics-dashboard-into-your-website',
      'sitesettings/get-analytics-email-reports',
      'sitesettings/get-traffic-alerts',
      'sitesettings/reset-sites-data',
    ],
    'Account settings': [
      // 'accountsettings/2-factor-authentication',
      'accountsettings/change-email',
      'accountsettings/change-password',
      'accountsettings/delete-account',
    ],
    'Billing & Subscription': [
      'billing/exceeding-plan-limits',
      'billing/update-subscription',
      'billing/cancel-subscription',
      'billing/faq',
    ],
    Adblockers: [
      'adblockers/how-to-deal-with-adblockers',
      {
        type: 'category',
        label: 'Proxy guides',
        items: [
          {
            id: 'adblockers/guides/netlify',
            type: 'doc',
            label: 'Netlify',
          },
          {
            id: 'adblockers/guides/nextjs',
            type: 'doc',
            label: 'Next.js',
          },
          {
            id: 'adblockers/guides/nginx',
            type: 'doc',
            label: 'Nginx',
          },
        ],
      },
    ],
    'Affiliate program': ['affiliate/about', 'affiliate/terms'],
    'Extensions SDK': ['ext-sdk-introduction', 'ext-sdk-faq', 'ext-sdk-reference'],
    API: ['api/stats', 'api/events', 'api/admin'],
    CAPTCHA: ['captcha/introduction', 'captcha/client-side-usage', 'captcha/server-side-validation', 'captcha/testing'],
    'Self-hosting': ['selfhosting/how-to', 'selfhosting/configuring'],
    Contribute: ['contribute/how-to'],
  },
}
