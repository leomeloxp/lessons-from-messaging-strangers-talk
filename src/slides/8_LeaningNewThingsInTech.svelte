<script>
  import ContentSlide from '../lib/ContentSlide.svelte';
  import ListWrapper from '../lib/ListWrapper.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">Learning New Things in Technology</svelte:fragment>

  <p class="fragment text-left my-4">Parallels with learning a spoken language:</p>

  <ListWrapper>
    <li class="fragment">Identify goals</li>
    <li class="fragment">Take small steps</li>
    <li class="fragment">Practice regularly and immerse yourself in the technology</li>
    <li class="fragment">Embrace your mistakes</li>
    <li class="fragment">The importance of focused communities</li>
  </ListWrapper>
</ContentSlide>
