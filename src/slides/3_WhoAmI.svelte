<script>
  import ContentSlide from '../lib/ContentSlide.svelte';
  import EnbyFlag from '../lib/EnbyFlag.svelte';
  import ListWrapper from '../lib/ListWrapper.svelte';
</script>

<ContentSlide>
  <svelte:fragment slot="title">Who am I?</svelte:fragment>

  <ListWrapper>
    <li>Leo Melo 🦄</li>
    <li>Non-binary <EnbyFlag /></li>
    <li>Born in 🇧🇷</li>
    <li>Lived in Jersey 🇯🇪 (UK 🇬🇧) for 12 years</li>
    <li>Living in Castro Marim 🏰, Portugal 🇵🇹 since October 2021</li>
    <li>Love Typescript and functional programming 🧑‍💻</li>
    <li>Senior full-stack developer 🤓</li>
  </ListWrapper>

  <ul slot="notes">
    <li>4m30</li>
    <li>Leo Melo</li>
    <li>Non-binary</li>
    <li>Born in 🇧🇷</li>
    <li>Lived in Jersey 🇯🇪 (UK 🇬🇧) for 12 years</li>
    <li>Living in Castro Marim 🏰, Portugal 🇵🇹 since October 2021</li>
    <li>Love Typescript and functional programming 🧑‍💻</li>
    <li>Senior full-stack developer 🤓</li>
  </ul>
</ContentSlide>
