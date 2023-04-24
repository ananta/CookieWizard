/**
 * Creates a new feature extraction input object from the raw cookie data.
 * @param  {Object} cookie    Raw cookie data as received from the browser.
 * @return {Promise<object>}  Feature Extraction input object.
 */

export const createFEInput = (cookie: chrome.cookies.Cookie) => {
  return {
    name: escapeString(cookie.name),
    domain: escapeString(cookie.domain),
    path: escapeString(cookie.path),
    current_label: -1,
    label_ts: 0,
    storeId: escapeString(cookie.storeId),
    variable_data: [
      {
        host_only: cookie.hostOnly,
        http_only: cookie.httpOnly,
        secure: cookie.secure,
        session: cookie.session,
        expirationDate: cookie.expirationDate,
        expiry: datetimeToExpiry(cookie),
        value: escapeString(cookie.value),
        same_site: escapeString(cookie.sameSite),
        timestamp: Date.now()
      }
    ]
  };
};

/**
 * Remove URL encoding from the string
 * @param  {String} str   Maybe URL encoded string.
 * @return {String}       Decoded String.
 */
const escapeString = (str: string) => {
  if (typeof str != "string") {
    str = String(str);
  }
  return unescape(encodeURIComponent(str));
};

/**
 * Given a cookie expiration date, compute the expiry time in seconds,
 * starting from the current time and date.
 * @param  {Object} cookie  Cookie object that contains the attributes "session" and "expirationDate".
 * @return {Number}         Expiration time in seconds. Zero if session cookie.
 */
export const datetimeToExpiry = (cookie: chrome.cookies.Cookie) => {
  let curTS = Math.floor(Date.now() / 1000);
  return cookie.session
    ? 0
    : cookie.expirationDate
    ? cookie.expirationDate - curTS
    : 0;
};
