<script>
  import ContentSlide from './lib/ContentSlide.svelte';
  import ListWrapper from './lib/ListWrapper.svelte';
  import Title from './slides/1_Title.svelte';
  import Introduction from './slides/2_Introduction.svelte';
  import WhoAmI from './slides/3_WhoAmI.svelte';
  import HowDidItStart from './slides/4_HowDidItStart.svelte';
  import ThePlan from './slides/5_ThePlan.svelte';
  import TheProgress from './slides/6_TheProgress.svelte';
  import TheProgress2 from './slides/7_TheProgress2.svelte';
  import LeaningNewThingsInTech from './slides/8_LeaningNewThingsInTech.svelte';
</script>

<Title />

<Introduction />

<WhoAmI />

<HowDidItStart />

<ThePlan />

<TheProgress />
<TheProgress2 />

<LeaningNewThingsInTech />

<ContentSlide>
  <svelte:fragment slot="title">Identifying goals</svelte:fragment>

  <ListWrapper>
    <li class="fragment">What do you want to do with this new skill?</li>
    <li class="fragment">How will you know when you've achieved it?</li>
    <li class="fragment">How strict are you about those answers?</li>
    <li class="fragment">Will there be a next level after you're done with this one?</li>
  </ListWrapper>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">Taking Small Steps</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Learn to walk before you run</li>
    <li class="fragment">Learn the basics of the syntax and/or foundational concepts</li>
    <li class="fragment">
      Follow some tutorials without changing much until you feel like experimenting
    </li>
    <li class="fragment">Find your pace, learning shouldn't be overwhelming, nor boring</li>
  </ListWrapper>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">Regular Practice and Immersion</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Make this technology and its learning a part of your life</li>
    <li class="fragment">Keep your exposure to it high</li>
    <li class="fragment">Blog posts, podcasts, conference talks... everything counts</li>
    <li class="fragment">Write about it, talk about it, share your experience so far</li>
    <li class="fragment">Do it regularly, even if it's just for a few minutes a day</li>
  </ListWrapper>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">Embracing your mistakes</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Failure is a natural part of the learning process</li>
    <li class="fragment">It's an opportunity to learn and improve</li>
    <li class="fragment">Don't be afraid to make mistakes</li>
    <li class="fragment">Don't be afraid to ask for help</li>
  </ListWrapper>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">The importance of focused communities</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Learning can be a great social activity</li>
    <li class="fragment">Join a community of learners</li>
    <li class="fragment">Attend meet-ups or conferences</li>
    <li class="fragment">Connect with others</li>
  </ListWrapper>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">Conclusion</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Set your goals</li>
    <li class="fragment">Take small steps</li>
    <li class="fragment">Practice regularly</li>
    <li class="fragment">Embrace your mistakes</li>
    <li class="fragment">Join a community</li>
  </ListWrapper>
</ContentSlide>
<ContentSlide>
  <svelte:fragment slot="title">Thank you</svelte:fragment>
</ContentSlide>
