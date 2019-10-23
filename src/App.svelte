<script>
  import Weblink from "./components/Weblink.svelte";
  import PostalAddress from "./components/Microformats/PostalAddress.svelte";
  import StreetAddress from "./components/Microformats/StreetAddress.svelte";
  import Suburb from "./components/Microformats/Suburb.svelte";
  import Postcode from "./components/Microformats/Postcode.svelte";
</script>

<header />
<main>
  <p>
    Search on
    <Weblink href={'http://www.google.com'} className="linky">Google</Weblink>
    ! It's amazing.
  </p>
  <PostalAddress>
    <StreetAddress>Level 712</StreetAddress>
    <StreetAddress>102 Hightower Skyrise Avenue</StreetAddress>
    <Suburb>Poshville</Suburb>
    <Postcode>90210</Postcode>
  </PostalAddress>
</main>
<footer />
