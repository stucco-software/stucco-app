<script>
  import { version } from '$app/environment';
</script>


<main>
  <h1>Stucco TL</h1>
  <p>Write and publish structured data vocabularies.</p>
  <p>
    <span>{version}</span>
  </p>
</main>

<style>

html {
  --bg-color: #fafafa;
  --txt-color: #2a2a2e;
  --code-bg: #eee;
  --pink: rgb(249,118,126);
  font-size: clamp(18px, 1.7vw, 28px);
}

.invert {
  --bg-color: #191919;
  --txt-color: #fafafa;
  --pink: rgb(235, 181, 190);
  --code-bg: #2a2a2e;
}

@media screen and (prefers-color-scheme: dark) {
  html {
    --bg-color: #191919;
    --txt-color: #fafafa;
    --code-bg: #2a2a2e;
    --pink: rgb(235, 181, 190);
    font-size: clamp(18px, 1.7vw, 28px);
  }
  .invert {
    --bg-color: #fafafa;
    --txt-color: #2a2a2e;
    --pink: rgb(249,118,126);
    --code-bg: #eee;
  }
}

  main {
    text-align: center;
  }
</style>