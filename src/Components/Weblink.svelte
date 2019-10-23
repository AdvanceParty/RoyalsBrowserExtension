<script>
  export let href, className;
  const handleClick = e => {
    if (window.chrome.tabs) {
      window.chrome.tabs.create({ active: false, url: e.target.href });
      e.preventDefault();
    }
  };
</script>

<a {href} {className} on:click={handleClick}>
  <slot />
</a>
