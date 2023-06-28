<script>
  import risitasSerio from '../assets/memes/risitas-serio.avif';
  import ContentSlide from '../lib/ContentSlide.svelte';
  import ListWrapper from '../lib/ListWrapper.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">How did it go?</svelte:fragment>

  <div class="flex justify-center gap-4">
    <img
      class="fragment"
      src={risitasSerio}
      alt="Screenshot of Apple messages app with messages in Spanish"
    />
  </div>
  <ListWrapper>
    <li class="fragment">Knowing Portuguese didn't help as much as I thought it would</li>
    <li class="fragment">Had to use apps for dictionary and translations all the time</li>
    <li class="fragment">Had an awful accent</li>
  </ListWrapper>

  <ul slot="notes">
    <li>
      I already am a native speaker of Brazilian portuguese, that meant I had a B1 level in
      Portunhol
    </li>
    <li>It didn't account for much</li>
    <li>
      I'd start with things like
      <ul>
        <li>Hola, como estás?</li>
        <li>Estoy aprendiendo español, puedes ayudarme?</li>
        <li>Google Translate</li>
      </ul>
    </li>
    <li>I kept going, looking up words, verbs, watching series, etc</li>
  </ul>
</ContentSlide>

<style>
  img {
    width: auto;
    max-height: 20vh;
    object-fit: contain;
  }
</style>
