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

  <ul slot="notes">
    <li>7m30</li>
    <li>Exchange at least 50 messages a day in Spanish</li>
    <li>Find a good series to watch, in Spanish with Spanish subtitles</li>
    <li>Find podcasts and music in Spanish to listen to whilst I was doing other things</li>
  </ul>
</ContentSlide>
