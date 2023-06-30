<script>
  import ContentSlide from '../lib/ContentSlide.svelte';
  import ListWrapper from '../lib/ListWrapper.svelte';
  import Notes from '../lib/Notes.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">How did it start?</svelte:fragment>
  <ListWrapper>
    <li class="fragment">It was June 2020, pandemic and lockdown</li>
    <li class="fragment">Needed to keep sane</li>
    <li class="fragment">Decided on learn Spanish instead of baking sourdough</li>
  </ListWrapper>
</ContentSlide>
