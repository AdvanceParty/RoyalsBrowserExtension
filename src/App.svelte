<script>
  import Weblink from "./components/Weblink.svelte";
  const handleClick = e => {
    chrome.tabs.create({ url: e.target.href });
    return false;
  };
</script>

<header />
<main>
  <p>
    Hello. I am a
    <Weblink href={'http://www.google.com'} on:click={handleClick}>
      link
    </Weblink>
    .
  </p>

  <button on:click={handleClick}>HEllo</button>
</main>
<footer />
