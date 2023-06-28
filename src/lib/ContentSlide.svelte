<script>
  import Notes from './Notes.svelte';
  import Slide from './Slide.svelte';

  export let transition = 'fade-in-then-out';
</script>

<Slide {transition} class="text-3xl flex flex-col">
  <p data-id="slide-title" class="text-5xl font-bold mb-2">
    <slot name="title"><!-- optional fallback --></slot>
  </p>
  <div>
    <slot><!-- optional fallback --></slot>
  </div>

  <Notes>
    <slot name="notes"><!-- optional fallback --></slot>
  </Notes>
</Slide>
