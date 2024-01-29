module.exports = {
  docs: {
    'Get Started': [
      'introduction',
      'add-script',
      'script-reference',
      'integration-guides',
      {
        type: 'category',
        label: 'Integrations',
        items: ['integrations/wordpress', 'integrations/webflow', 'integrations/framer', 'integrations/wix', 'integrations/ghost', 'integrations/django', 'integrations/sveltekit'],
      },
      'troubleshooting',
    ],
    'Affiliate program': [
      'affiliate/about',
      'affiliate/terms',
    ],
    'Extensions SDK': [
      'ext-sdk-introduction',
      'ext-sdk-faq',
      'ext-sdk-reference',
    ],
    'API': [
      'api/stats',
      'api/events',
      'api/admin',
    ],
    'CAPTCHA': [
      'captcha/introduction',
      'captcha/client-side-usage',
      'captcha/server-side-validation',
      'captcha/testing',
    ],
    'Self-hosting': [
      'selfhosting/how-to',
      'selfhosting/configuring',
    ],
    'Contribute': [
      'contribute/how-to',
    ],
  },
}
