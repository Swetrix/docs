---
title: Get traffic alerts
slug: /get-traffic-alerts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can set up alerts to get notified when your website's traffic exceeds a certain threshold, or when a certain custom event occurs (like sale, or a signup). You can also set up alerts to be notified when there are client-side errors on your website.

You can set up integrations with Telegram, Slack or Discord to get alert notifications in real-time there.

### Connect your Slack, Telegram or Discord

On the [account settings page](https://swetrix.com/user-settings), go to the "Communication" section. There you will see the list of currently supported integrations by Swetrix, and their status (connected or not).

To connect an integration, click on the "Add integration" button and follow the instructions.

<img alt="Connect integrations screen" src={useBaseUrl('img/sitesettings/connect_integrations.png')} />

### How to set up traffic alerts

After you connected your integration, all the alerts will be sent there. You can set up alerts for different projects (websites) and they all will trigger independent of each other.

To set up an alert,

1. Go to your website's analytics page.
2. Navigate to the "Alerts" tab.
3. Click on the "Add alert" button.

<img alt="Alerts screen" src={useBaseUrl('img/sitesettings/set_up_alert.png')} />

When you click on the "Add alert" button, you will see a screen where you can create a new alert. You can set it up to trigger for different metrics, for example:
 - when the number of pageviews exceeds a certain threshold (traffic spikes)
 - when the number of online users is less than 10
 - on every custom event (like a sale, or a signup)
 - on every new error on your website
 - when the number of users on your website is less than 5 during the last 24 hours
 - ... and more

From the same "Alerts" tab you can also see the list of all the alerts you have set up and the last time they triggered. You can edit or delete them by clicking on the "Edit" or "Delete" buttons.
