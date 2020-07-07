# GDPR Cookie Opt-out

Extension to opt-out of GDPR cookie measures by automatically clicking the buttons for you. The idea is to get Javascript to actuall imitate the clicks from the browser so this is harder to spot / block.

See [TODO.md](/TODO.md) for issues that need to be worked on and examples of GDPR cookie banners.


## Setup

The below instructions are for Chrome, other browsers differ slightly but the idea is the same. Run the dev build and load the unpacked extension.

1. Install the dependencies
    ```bash
    npm install

    ```
1. Build the development version of the extension (unpacked)
    ```bash
    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

    ```

1. Go to `[chrome://extensions](chrome://extensions)`
1. Click `Load Unpacked` top right
1. Navigate to `app/dist/chrome`


## Build

If you want to build a version to distribute:

```bash
    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge
```

## Built using

* [webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox)


## Currently working examples

*Note: These have not been checked in a while and may no longer be*

* Quantcast
    * https://www.neowin.net
    * https://www.quantcast.com/opt-out/
    * https://www.rugbypass.com/
    * http://www.cityam.com/
    * https://www.rugbydump.com
    * https://www.euronews.com/news/europe
    * https://www.trustedreviews.com
    * https://www.seriouseats.com/recipes/2008/06/traditional-old-fashioned-recipe.html
    * https://www.theatlantic.com/health/archive/2019/01/doctor-rapp/579634/
    * https://www.independent.co.uk/
* Oath
    * https://www.engadget.com/
* EZ cookie
    * https://www.techiediaries.com/react-ajax/
* Optanon OneTrust
    * https://www.onetrust.com/
    * https://www.cookielaw.org/optanon-eprivacy/
    * https://videologygroup.com/en/learn-about-interest-based-ads-opt-out
    * https://www.thetimes.co.uk/
    * https://www.thesun.co.uk/
* ShareThis
    * https://www.sharethis.com/support/faq/gdpr-compliance-tool-faq/
* Surbma (Wordpress plugin)
    * https://surbma.com/
* StreamAmp
    * https://www.wineturtle.com/
    * https://road.cc/
