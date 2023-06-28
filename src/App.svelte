<script>
  import 'reveal.js/dist/reveal.css';
  import './app.css';

  import Reveal from 'reveal.js';
  import { onMount, tick } from 'svelte';
  import Presentation from './Presentation.svelte';

  export let app;
  export let reveal;

  onMount(async () => {
    await tick();
    const deck = new Reveal(reveal);
    deck.initialize();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
  <title>{app.name}</title>
</svelte:head>

<div class="reveal">
  <div class="slides">
    <Presentation />
  </div>
</div>
