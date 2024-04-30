---
title: How to deal with adblockers
slug: /adblockers/how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';

TODO: Explain why do people even need proxying and how do adblockers affect Swetrix here

## How to proxy Swetrix
The most efficient option to bypass ad-blockers is to proxy Swetrix script and calls made to Swetrix servers via this script.

A proxy is basically mapping our servers URLs through your domain. So analytics requests will not be sent to `https://api.swetrix.com/log`, but instead to `https://<your domain>/log`.

The advantage of this approach is that your website will only make first-party requests, preventing them being blocked by adblockers.

### How to proxy tracking script?
If you've installed [Swetrix using npm](/install-script#install-swetrix-via-npm), there's no need to proxy it, as it's already bundled in your web app's code.

If you installed Swetrix using our CDN (`swetrix.org/swetrix.js`), you need to proxy it to bypass adblockers. Please refer to one of the guides below on how to do it.

