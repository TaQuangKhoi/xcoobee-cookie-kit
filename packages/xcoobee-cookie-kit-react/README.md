# React Cookie Kit 

## What is React Cookie Kit

The React Cookie Kit is special purpose build of the XcooBee Cookie Kit (XCK) Cookie Consent Management library for use in ReactJS environments. 

## The XcooBee Cookie Kit

The objective of the XcooBee Cookie Kit (XCK) is to enable websites to manage their Cookie consent more effectively and with less annoyance to their users. The XCK can work in concert with the XcooBee network to improve overall management for users and businesses but that is not required. When the XCK works independently of XcooBee some management functionality will not be available.

The XCK makes it easy to plugin cookie consent into your website. It handles all user interaction to obtain consent and lets the website know which cookies can be used for each users while they visit your website. Similarly, your website can now be informed when users change their consent even when they are not visiting it.

THe XCK is one of the most transparent and frictionless ways to manage cookies on your site. It will not pop-up, in, or otherwise hinder the user experience when it is not needed. Yet, at the same time, it provides full compliance with European e-directives and related GDPR rules.

Website owners can easily react to data-requests and report on privacy related requests if needed via the XcooBee network.

The XCK does not require a XcooBee connection to work for your website. You will still have access to the majority of user consent gathering but will not have central insight and consent management.

The XCK is responsive and will adjust easily to different screens including mobile uses.

Main components and further documentation:
- [XcookBee Cookie Kit Core](https://github.com/XcooBee/xcoobee-cookie-kit/tree/master/packages/xcoobee-cookie-kit-core)
- [XcookBee Cookie Kit Web](https://github.com/XcooBee/xcoobee-cookie-kit/tree/master/packages/xcoobee-cookie-kit-web)
- [React Cookie Kit](https://github.com/XcooBee/xcoobee-cookie-kit/tree/master/packages/xcoobee-cookie-kit-react)


## Using XCK with React

You need to add the cookie kit as dependency in your project

`npm install react-cookie-kit --save`


Inside your code you need to import the cookie kit

```js
import CookieKit from 'react-cookie-kit';

```

We also recommend that you import the style sheet

```js
import 'react-cookie-kit/dist/xck-react.css';
```

inside your render() method you can, then, use the cookie kit with all the available options:

```html
        <CookieKit
          cssAutoLoad={false}
          cookieHandler={this.onCookieConsentsChange}
          privacyUrl="https://google.com/privacy"
          requestDataTypes={['advertising', 'application', 'statistics', 'usage']}
          termsUrl="https://google.com/terms"
          textMessage={{
            "de-de": "Die Beschreibung.",
            "en-us": "The description.",
            "es-419": "La descripción.",
            "fr-fr": "La description.",
          }}
        />
```

For further information on the type of available options and their use please consult the general documentation under Full Parameter Reference.

- [Cookie Kit Options])(https://github.com/XcooBee/xcoobee-cookie-kit-web#full-parameter-reference)

### Example App

A ReactJS example app is available in zip format for you to use in the example directory of this package or online:

- [Cookie Kit React Example App on Github](https://github.com/XcooBee/xcoobee-cookie-kit/tree/monorepo/packages/xcoobee-cookie-kit-example-react)

