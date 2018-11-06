const defaultConfig = {
  campaignReference: "ce84ab7f7b737d",
  checkByDefaultTypes: [],
  companyLogo: null,
  cookieHandler: () => {},
  cssAutoLoad: true,
  displayOnlyForEU: true,
  expirationTime: 0,
  position: "left_bottom",
  privacyUrl: "https://lviv.com/policy",
  requestDataTypes: ["application_cookie", "statistics_cookie", "usage_cookie"],
  targetUrl: null,
  termsUrl: "https://lviv.com/terms",
  testMode: true,
  textMessage: { "en-us": "This site uses cookies. Use this panel to adjust your preferences." },
};
const cookieTypes = [
  {
    id: 0,
    key: "application_cookie",
    model: "application",
    localeKey: "CookieKit.ApplicationCookieName",
    url: "https://www.xcoobee.com/docs/xcoobee-concepts/cookies/application-cookies",
  },
  {
    id: 1,
    key: "usage_cookie",
    model: "usage",
    localeKey: "CookieKit.UsageCookieName",
    url: "https://www.xcoobee.com/docs/xcoobee-concepts/cookies/personalization-cookies",
  },
  {
    id: 2,
    key: "statistics_cookie",
    model: "statistics",
    localeKey: "CookieKit.StatisticsCookieName",
    url: "https://www.xcoobee.com/docs/xcoobee-concepts/cookies/statistics-cookies",
  },
  {
    id: 3,
    key: "advertising_cookie",
    model: "advertising",
    localeKey: "CookieKit.AdvertisingCookieName",
    url: "https://www.xcoobee.com/docs/xcoobee-concepts/cookies/advertising-and-marketing-cookies",
  },
];
const locales = ["EN", "DE", "FR", "ES"];
const tokenKey = "xcoobeeAccessToken";
const xcoobeeCookiesKey = "xcoobeeCookies";
const links = {
  poweredBy: "https://www.xcoobee.com",
  login: "https://testapp.xcoobee.net/auth/minlogin",
  manage: "https://testapp.xcoobee.net/user/consentCenter/consent",
};
const animations = {
  noAnimation: "default",
  userSettings: "blue",
  knownSite: "green",
  crowdIntelligence: "yellow",
  companySettings: "red",
};
const cssHref = "xcoobee-cookie-kit.min.css";
const euCountries = ["AT", "BE", "BG", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];
const requiredFields = ["privacyUrl", "termsUrl", "textMessage"];
const consentStatuses = {
  open: "open",
  complete: "complete",
  closed: "closed",
};

export {
  animations,
  cookieTypes,
  consentStatuses,
  cssHref,
  defaultConfig,
  euCountries,
  links,
  locales,
  requiredFields,
  tokenKey,
  xcoobeeCookiesKey,
};
