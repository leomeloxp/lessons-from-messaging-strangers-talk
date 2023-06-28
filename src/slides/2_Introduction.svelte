<script>
  import thatsAllFolks from '../assets/that-s-all-folks.gif';
  import ContentSlide from '../lib/ContentSlide.svelte';
  import Notes from '../lib/Notes.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">They did not like it.</svelte:fragment>

  <img
    class=" fragment text-center"
    src={thatsAllFolks}
    alt="Looney Tunes Closing sequence that reads: That's All Folks"
  />

  <p class="fragment text-5xl">No, there's actually a story to this.</p>

  <Notes>
    <p>3m00</p>
    <ul>
      <li>They did not like it</li>
      <li>Thanks for coming to my presentation. Any questions?</li>
      <li>No no, there's a story, let's go</li>
    </ul>
  </Notes>
</ContentSlide>

<style>
  img {
    width: auto;
    height: 40vh;
    object-fit: contain;
  }
</style>
