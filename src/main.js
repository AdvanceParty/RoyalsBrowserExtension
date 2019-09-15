import App from './App.svelte';
import './css/main.css';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});

// Security model prvents browser extensions
// from using anchor tags to link directly to
// external web pages. You have to use the browser API instead.
// ToDo: Update WrapLinks to a more Svelte-y approach
// function wrapLinks() {
//   const links = Array.from(document.querySelectorAll('[data-browser-link]'));
//   links.map(link => {
//     link.addEventListener('click', function(evt) {
//       navigateToURL(evt.target.href);
//     });
//   });
// }

// function navigateToURL(url) {
//   chrome.tabs.create({ active: true, url });
// }

// wrapLinks();

export default app;
