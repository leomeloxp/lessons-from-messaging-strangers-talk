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

  <ul slot="notes">
    <li>What can we bring in from learning spoken language that applies to tech?</li>
    <li>This list is not comprehensive but should help you at the beginning at least</li>
    <li>Read list</li>
    <li>Let's talk about each one of these in more detail</li>
  </ul>
</ContentSlide>
