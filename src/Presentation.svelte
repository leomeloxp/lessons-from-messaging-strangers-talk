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

  <ul slot="notes">
    <li>14m30</li>
    <li>Before you start, you should identify our goals.</li>
    <li><strong>Read points</strong></li>
    <li>Learn new language</li>
    <li>Get into new industry, e.g. cyber security</li>
    <li>These questions are asked everywhere, but that's because they're important.</li>
  </ul>
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

  <ul slot="notes">
    <li>17m00</li>
    <li>Good, you know what the end will look like, now let's go back to the beginning</li>
    <li>Learn some syntax</li>
    <li>Copy a basic tutorial so you start to see what working code looks like</li>
    <li>In the case of DevOps, create a basic deployment of a server that returns a hello world</li>
    <li>
      Try and change parts of it to get a feel for how things work and what causes them to break
    </li>
    <li>These are your baby steps</li>
  </ul>
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

  <ul slot="notes">
    <li>19m30</li>
    <li>Make it a part of your life</li>
    <li>
      Keep your exposure to what you're learning high:
      <ul>
        <li>Read blog posts</li>
        <li>Listen to podcasts</li>
        <li>Watch video tutorials or read source code</li>
        <li>
          Join some discord servers and what others are talking about in relation to this tech
        </li>
      </ul>
    </li>
    <li>
      Whichever way you choose to do it, make sure you're doing it regularly, even if it's just for
      a few minutes a day
    </li>
  </ul>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">Embracing your mistakes</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Failure is a natural part of the learning process</li>
    <li class="fragment">It's an opportunity to learn and improve</li>
    <li class="fragment">Don't be afraid to make mistakes</li>
    <li class="fragment">Don't be afraid to ask for help</li>
  </ListWrapper>

  <ul slot="notes">
    <li>22m00</li>
    <li>you will probably make a lot of mistakes</li>
    <li>it is important to accept them as part of the process.</li>
    <li>
      Think about the nature of your mistakes:
      <ul>
        <li>Did you break a hard rule?</li>
        <li>Did you not follow a best practice?</li>
        <li>
          Is it a matter of offending the language's grammar/syntax or just not matching a regional
          accent?
        </li>
      </ul>
    </li>
  </ul>
</ContentSlide>

<ContentSlide>
  <svelte:fragment slot="title">The importance of focused communities</svelte:fragment>

  <ListWrapper>
    <li class="fragment">Learning can be a great social activity</li>
    <li class="fragment">Join a community of learners</li>
    <li class="fragment">Attend meet-ups or conferences</li>
    <li class="fragment">Connect with others</li>
  </ListWrapper>

  <ul slot="notes">
    <li>24m30</li>
    <li>There will always be others learning the same things as you</li>
    <li>Mentors can speed up learning</li>
    <li>Could help you further your career</li>
  </ul>
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

  <ul slot="notes">
    <li>27m00</li>
    <li>Are you learning something new at the moment that you'd like to talk about?</li>
    <li>I for instance have been learning Rust, and I'm really enjoying it</li>
  </ul>
</ContentSlide>
<ContentSlide>
  <svelte:fragment slot="title">Thank you</svelte:fragment>

  <ul slot="notes">
    <li>29m30</li>
    <li>Thank you!</li>
    <li>The slides will be posted online</li>
    <li>I'll try and put together a blog post as well</li>
    <li>Any questions?</li>
  </ul>
</ContentSlide>
