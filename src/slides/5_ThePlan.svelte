<script>
  import ContentSlide from '../lib/ContentSlide.svelte';
  import ListWrapper from '../lib/ListWrapper.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">My Plan</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Exchange at least 50 messages a day</li>
    <li class="fragment">Watch videos in Spanish with Spanish subtitles</li>
    <li class="fragment">Start listening to music in Spanish</li>
  </ListWrapper>
</ContentSlide>
