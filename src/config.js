import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';

// Import theme
// import 'reveal.js/dist/theme/black.css';

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
  // App Config
  app: {
    name: 'Lessons Learned',
  },
  // Reveal Config
  reveal: {
    plugins: [Highlight, Markdown, RevealNotes],
    hash: true,
  },
};
