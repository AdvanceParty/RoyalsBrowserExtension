<script>
  /**
   * This is fine
   * @param arg {string} This will be logged to the console.
   */
  const doIt = arg => {
    console.log(arg);
  };
  import Weblink from "./components/Weblink.svelte";
  import PostalAddress from "./components/Microformats/PostalAddress.svelte";
  import StreetAddress from "./components/Microformats/StreetAddress.svelte";
  import Suburb from "./components/Microformats/Suburb.svelte";
  import Postcode from "./components/Microformats/Postcode.svelte";

  let academySearchTerm = "";
</script>

<header />
<main>
  <div id="academy">
    <p>Search on Academy</p>
    <input bind:value={academySearchTerm} />
    <br />
    <Weblink
      href={`https://sites.google.com/search/theroyals.com.au/royalsacademy?query=${academySearchTerm}&scope=site`}
      className="linky">
      Search
    </Weblink>
  </div>
  <PostalAddress>
    <StreetAddress>Level 712</StreetAddress>
    <StreetAddress>102 Hightower Skyrise Avenue</StreetAddress>
    <Suburb>Poshville</Suburb>
    <Postcode>90210</Postcode>
  </PostalAddress>
</main>
<footer />
