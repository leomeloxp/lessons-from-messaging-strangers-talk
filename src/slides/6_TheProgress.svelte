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
</ContentSlide>

<style>
  img {
    width: auto;
    max-height: 20vh;
    object-fit: contain;
  }
</style>
