export const GA_MEASUREMENT_ID = "G-CHHEXD2NKX";
export const GA_ID = "G-CHHEXD2NKX";

// track page view
export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// track events
export const event1 = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};