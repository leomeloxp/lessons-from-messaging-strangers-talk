<script>
  import ListWrapper from '../lib/ListWrapper.svelte';
  import berto from '../assets/memes/berto.gif';
  import ContentSlide from '../lib/ContentSlide.svelte';
</script>

<ContentSlide transition="fade-in">
  <svelte:fragment slot="title">But then</svelte:fragment>
  <div class="flex justify-center gap-4 fragment">
    <img src={berto} alt="Screenshot of Apple messages app with messages in Spanish" />
  </div>
  <ListWrapper>
    <li class="fragment">I started to recall things quicker</li>
    <li class="fragment">I could understand most native accents</li>
    <li class="fragment">Verb conjugations became easier</li>
    <li class="fragment">Still have a weird/mixed accent though 😒</li>
  </ListWrapper>
</ContentSlide>

<style>
  img {
    width: auto;
    max-height: 20vh;
    object-fit: contain;
  }
</style>
