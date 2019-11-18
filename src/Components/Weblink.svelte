<script>
  export let href;
  export let className;

  /**
   * The security model of Chrome extensions blocks <a> links from accessing pages outside of extension's own packaged assets. To open a web page from an extension, we need to use the chome.tabs API.
   * @param e {Event} Event object passed from the element that was clicked
   */
  const handleClick = e => {
    if (window.chrome.tabs) {
      window.chrome.tabs.create({ active: false, url: e.target.href }, tab => {
        window.chrome.tabs.update(tab.id, { highlighted: true });
      });
      e.preventDefault();
    }
  };
</script>

<a {href} {className} on:click={handleClick}>
  <slot />
</a>
