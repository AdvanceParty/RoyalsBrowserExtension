const links = Array.from(document.querySelectorAll('.links a'));

links.map(link => {
  link.addEventListener('click', function(evt) {
    navigateToURL(evt.target.href);
  });
});

function navigateToURL(url) {
  chrome.tabs.create({ active: true, url });
}
