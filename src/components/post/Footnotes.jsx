import React, { useRef, useEffect, useState } from 'react';

// Create ordered mapping of footnote IDs to numbers
const footnotes = [
  {
    id: 'goodharts_law',
    text: (
      <>
        interesting parallel to <a href="https://en.wikipedia.org/wiki/Goodhart%27s_law" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Goodhart's law</a> here - as soon as any social metric becomes target, it ceases to be good measure. see friendster→myspace→facebook progression. each solved previous platform's problems but created new failure modes. pattern keeps repeating with increasing speed (tiktok engagement decay faster than fb's was). suggests fundamental rather than implementation issue.
      </>
    )
  },
  {
    id: 'timeline_metrics',
    text: 'precise timeline w/metrics: clubhouse: peak 10m DAU feb 2021 → <1m by dec 2021; houseparty: 17m dl march 2020 → shutdown sept 2021; among us: 500m users sept 2020 → 85% player drop by dec 2020; vine: 200m users 2015 → shutdown 2017; google+: $585m spent, never passed 2m active users. notice acceleration of lifecycle. early platforms (myspace) took years to decline. recent ones (clubhouse) collapse in months. suggests users learning to recognize/anticipate decay patterns?'
  },
  {
    id: 'core_mechanism',
    text: 'core mechanism seems to be intersection of: dunbar number constraints (150 stable relationships) vs platform growth pressures; status game theory: zero-sum competition inevitable when social capital made fungible/measurable; evolutionary mismatch: digital social metrics lack correlation w/actual fitness indicators; attention economics: platforms must increase stimulation to maintain engagement, creating tolerance effects; network effects trap users in degrading experience until coordinated exodus occurs. see hanson\'s "elephant in the brain" p.136-140 re: prestige economy dynamics. also relevant: henrich\'s stuff around cultural evolution of social hierarchies & how they maintain stability through opacity/ambiguity - exactly what digital metrics destroy.'
  },
  {
    id: 'unsolvable',
    text: 'possibly unsolvable? every "solution" creates predictable failure cascade through incentive structures. algorithmic solutions (fb feed evolution 2009-2023 instructive) trigger rapid user adaptation & hedonic treadmill effects; relationship limits face economic pressures (cf. path\'s 50-friend experiment); might even be provable via some adaptation of arrow\'s impossibility theorem to social platform constraints. bread and butter are present: (preference cycles, strategic behavior, mutually exclusive constraints). (most obv counterargument: religious communities sometimes maintain stable social rewards for centuries. but rely on physical presence + unquantified status hierarchies. digital analogues tried and flopped: online churches during covid showed same decay patterns as other platforms.)'
  },
  {
    id: 'johnsalvatier2017',
    text: (
      <>
        John Salvatier, <a href="http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reality has a surprising amount of detail</a>, 13 May 2017. It’s that reality has a surprising amount of detail.
      </>
    )
  },
  {
    id: 'lockdown_experiment',
    text: (
      <>
        The scale of this experiment really was unprecedented - ~3.9 billion ppl experienced some form of lockdown by April 2020 (add citation) while tragic, it represents arguably the largest forced change in human social interaction patterns since urbanization. particularly interesting was the natural A/B test between regions with different lockdown policies, though confounders make clean analysis difficult..don't even want to think about it. <a href="https://tmb.apaopen.org/pub/nonverbal-overload/release/2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">paper from above</a>.
      </>
    )
  },
  {
    id: 'miller1956',
    text: 'Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63(2), 81-97.',
    link: 'https://doi.org/10.1037/h0043158'
  },
  {
    id: 'goldin2000',
    text: 'Goldin, C., & Rouse, C. (2000). Orchestrating Impartiality: The Impact of "Blind" Auditions on Female Musicians. American Economic Review, 90(4), 715-741.',
    link: 'https://doi.org/10.1257/aer.90.4.715'
  },
  {
    id: 'mehrabian1971',
    text: 'Mehrabian, A. (1971). Silent Messages: Implicit Communication of Emotions and Attitudes. Wadsworth Publishing Company.',
    link: 'https://psycnet.apa.org/record/1971-07455-000'
  },
  {
    id: 'callstudy',
    text: 'Personal study: Call quality ratings (1-10) and modality tracked for 3 months (n=127 calls). Voice calls averaged 7.8/10 vs 6.4/10 for video (p<0.01). Notable confound: self-selection into preferred modalities likely inflates both scores.'
  },
  {
    id: 'edison2024',
    text: 'Edison Research. (2024). The Infinite Dial 2024: Podcast Statistics & Demographics. Methodology questions remain about active vs inactive show counts.',
    link: 'https://www.edisonresearch.com/wp-content/uploads/2024/05/The-Podcast-Consumer-2024-Presentation.pdf'
  }
];

// Create a map of IDs to numbers
const footnoteNumbers = Object.fromEntries(
  footnotes.map((note, index) => [note.id, index + 1])
);

const Footnotes = () => {
  // Store references to both footnotes and citations
  const footnoteRefs = useRef({});
  const citationRefs = useRef({});
  
  // Keep track of which citations exist for each footnote
  const [citationLocations, setCitationLocations] = useState({});

  // Register citation locations when they're rendered
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newLocations = {};
      footnotes.forEach(note => {
        const citations = document.querySelectorAll(`[data-footnote-id="${note.id}"]`);
        newLocations[note.id] = Array.from(citations).map(citation => citation.getBoundingClientRect());
      });
      setCitationLocations(newLocations);
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const scrollToElement = (element) => {
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      // Add a brief highlight effect
      element.classList.add('bg-yellow-100');
      setTimeout(() => {
        element.classList.remove('bg-yellow-100');
      }, 1000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-32">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Notes
      </h2>
      
      <div className="space-y-6">
        {footnotes.map((note, index) => (
          <div 
            key={note.id}
            ref={el => footnoteRefs.current[note.id] = el}
            className="group flex gap-4 items-baseline"
          >
            <div className="flex-none">
              <button
                onClick={() => {
                  const citations = document.querySelectorAll(`[data-footnote-id="${note.id}"]`);
                  if (citations.length > 0) {
                    scrollToElement(citations[0]);
                  }
                }}
                className="text-sm px-2 py-1 -ml-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 
                  text-gray-500 dark:text-gray-400 transition-colors"
                aria-label={`Return to citation ${index + 1}`}
                title="Return to citation"
              >
                ↑
              </button>
            </div>
            
            <div className="flex-1">
              <div 
                id={note.id}
                className="text-gray-700 dark:text-gray-300 text-[0.95rem] leading-relaxed"
              >
                {index + 1}. {note.text}
                {note.link && (
                  <a 
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FootnoteReference = ({ id }) => {
  const citationRef = useRef(null);

  const scrollToFootnote = () => {
    const footnote = document.getElementById(id);
    if (footnote) {
      footnote.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Add a brief highlight effect
      footnote.classList.add('bg-yellow-100');
      setTimeout(() => {
        footnote.classList.remove('bg-yellow-100');
      }, 1000);
    }
  };

  return (
    <sup
      ref={citationRef}
      data-footnote-id={id}
      onClick={scrollToFootnote}
      className="cursor-pointer text-blue-600 dark:text-blue-400 hover:underline ml-0.5 mr-1 transition-colors"
      title={`Go to footnote ${footnoteNumbers[id]}`}
    >
      {footnoteNumbers[id]}
    </sup>
  );
};

export { Footnotes, FootnoteReference };