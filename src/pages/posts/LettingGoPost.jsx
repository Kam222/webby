import React from 'react';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';

const BlogImage = ({ src, alt, caption }) => (
  <figure className="my-16 w-full">
    <img
      src={`/images/${src}`}
      alt={alt}
      className="w-full rounded-lg aspect-[3/2] object-cover"
    />
    {caption && (
      <figcaption className="mt-4 text-center text-base text-gray-500 dark:text-gray-400 font-serif italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

const TallBlogImage = ({ src, alt, caption }) => (
  <figure className="my-16 w-full">
    <img
      src={`/images/${src}`}
      alt={alt}
      className="w-full rounded-lg aspect-[9/16] object-cover"
    />
    {caption && (
      <figcaption className="mt-4 text-center text-base text-gray-500 dark:text-gray-400 font-serif italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

const Subtitle = ({ children }) => (
  <h2 className="font-geliat text-[24px] mt-16 mb-6 text-gray-900 dark:text-gray-100 leading-snug">
    {children}
  </h2>
);

const SubtleText = ({ children }) => (
  <p className="text-center font-serif text-lg text-gray-500 dark:text-gray-400 my-16 italic leading-relaxed">
    {children}
  </p>
);

const Quote = ({ children, author, date }) => (
  <blockquote className="my-12 pl-6 border-l-2 border-gray-200 dark:border-gray-700">
    <p className="font-serif text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
    {(author || date) && (
      <footer className="mt-4 font-serif text-base text-gray-500 dark:text-gray-400">
        {author && <span>— {author}</span>}
        {date && <span>, {date}</span>}
      </footer>
    )}
  </blockquote>
);

const MaturityBadge = () => (
  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-mono mb-6">
    <span>●●○</span>
    <span>tree</span>
  </div>
);

const LettingGoPost = () => {
  useEffect(() => {
    document.title = 'the delicate art of letting go | khalid';
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6">
        <article className="py-16">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6 font-sans">
              Note
            </div>
            <MaturityBadge />
            <h1 className="text-[36px] font-geliat mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              the delicate art of letting go
            </h1>
            <p className="text-lg font-serif text-gray-600 dark:text-gray-400 italic mb-8 leading-relaxed">
              within every hello, the seeds of a goodbye
            </p>
            <div className="flex items-center justify-center gap-4 text-base text-gray-500 dark:text-gray-400 font-serif">
              <span>Khalid</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>Oct 20, 2024</time>
              </div>
            </div>
          </header>

          <BlogImage
            src="monkbythesea.jpeg"
            alt="The Monk by the Sea painting"
            caption="The Monk by the Sea, Caspar David Friedrich"
          />

          <div className="prose-container">
            <Subtitle>i. quiet arrivals</Subtitle>
            
            <p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
              October unravels gently. The air cools, the light shifts—changes you don't track until they're already here. 
              Leaves don't drift so much as drop. Deliberate, unhurried, final.
            </p>

            <p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
              Life moves like that: slow cycles of holding on and releasing. I've been thinking about this as I prepare 
              to leave Minneapolis. Departures force a certain introspection. How should one think about endings? We imagine 
              we'll know—graduations, one last hug at the airport—but most endings are sunsets. One minute, the world is 
              golden; the next, it's gone, and you're standing in the dark, wondering how you missed it.
            </p>

            <p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
              Yesterday, I watched a leaf fall—slow, certain. I wondered if it knew that morning would be its last connected 
              to all it had ever known. There's something unsettling in how many goodbyes slip by in the most ordinary of moments. 
              How often do we stand at the precipice of an ending, unaware? The last time you opened up to each other, the last 
              shared laugh, the final quiet drive, the last photo together. The last moment you meant to tell them they mattered—but 
              didn't. Moments rarely register as important until you're looking back, searching for the precise second it all changed.
            </p>

            <p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
              There's no perfect English word for it, but <span className="italic">物の哀れ mono no aware</span>—the pathos of 
              things—captures something close. It's the awareness of fragility, not with despair but reverence. Understanding that 
              their impermanence is what imbues them with meaning. It's a quiet tenderness that doesn't need healing, just 
              acknowledgment. It sits with you like an old friend, reminding you to stay present—not because you can hold the 
              moment, but because you can't.
            </p>

            <p className="font-serif text-xl leading-[1.8] my-12 text-gray-800 dark:text-gray-200 italic text-center">
              Not because you can hold the moment, but because you can't.
            </p>
            <p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  I’ve been thinking about this a lot lately, especially with people. There are people whom I’ve already seen for the last time, and I didn’t know it. Think about that. Their faces, voices, little quirks that I loved about them—all now just memory. It’s on my mind as I approach these last ten weeks. Time isn’t distant anymore; it’s compressing, running out. I want to be intentional, to make each hour fuller, more deliberate, as if that might help them last longer.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  But I know how this works: soon enough, it’ll be October 2026, and I’ll be looking back at this, wondering if I did enough, or if they blurred past me in the usual way.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  Maybe I should freeze this moment. I’ll take a photo, a small token for my future self, sitting here, thinking about this. 
  <BlogImage 
              src="101924lh.jpeg"
              alt="A moment captured"
              caption="10/19/24-LH"
            />
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  As I was saying, I want to do better. Make time for people, not just in passing, but something deliberate. I want to look back and think, <span className="italic">Glad we did that. I didn’t let things slip by.</span> I want them to know I love them. Capture these days—photos, writing—not as if it could stop time, but as a way to hold it, even briefly.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  But goodbyes are funny things. You expect a kind of lightness, but each tightens the grip of what remains—the music they made me listen to, the books they placed in my hands, insisting, <span className="italic">‘This is for you.’</span> We treat these gestures as minor, but they’re anything but. They’re encoded—information transfers of their worldview, their inner life, compressed into objects. The book gathers dust on a shelf until the day I finally realize it wasn’t a casual recommendation. It was a fragment of their identity, something that made their heart beat a little faster, and they hoped, maybe, it would do the same for you, and in that, share a part of themselves they couldn’t quite express in words.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  I used to overlook this: a song or book—it seemed trivial. Now I understand it as emotional data encoded in art, preserved for future retrieval. Each of these transfers is an act of subtle self-preservation. A way to inscribe something essential from them into you, without either of you being fully aware. When you finally open that book or press play on the playlist, you’re not just consuming content—you’re receiving an invitation into their world, refracted through your own perspective.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  These small exchanges add up. It’s easy to think they fade into irrelevance, but they don’t. The book waits. The music waits. Each gesture exists in latency, a quiet potential waiting to unfold. And when it resurfaces, it’s not just the object—it’s the person behind it, the shared history, the exact emotional resonance you didn’t realize had been sitting deep inside you.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  We embed ourselves in one another like this, in ways so subtle they go unnoticed. It isn’t about legacy or memory; it’s a diffusion of influence. It’s how people continue on—stored in the neural architecture of others. A book handed off isn’t a casual act; it’s a piece of their internal model, externalized and offered to you. When you finally open it, you’re updating your own mind with theirs, even if they’re long gone.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  We don't notice it at the time. That's the catch. The last time you saw them didn't feel final. The goodbye wasn't significant. 
  It was another day, another interaction. But later, you realize that moment holds more weight than you gave it credit for. 
  This isn't nostalgia; it's deeper. It's realizing that what seems transient is actually foundational.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  Goodbyes carry this quiet inheritance. You walk away carrying pieces of their world, fragments of their mind encoded in trivial 
  objects and shared moments. And over time, those fragments reassemble themselves in your thoughts, guiding you in ways you never 
  consciously attribute to them. It's not linear—there's no neat timeline. These things pulse in and out of relevance, sometimes 
  long after they're gone.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  There's a kind of transcendence in this. The more connections you leave, the more of you exists in the world, not as a static 
  memory, but as living thought embedded in someone else's cognition. It's not about being remembered. It's about being part of 
  the ongoing process of someone else's life, altering their path, nudging their decisions, their worldview. You exist not as a 
  name or face but as an effect.
</p>

<SubtleText>
  Do you ever pause to wonder if a moment is the last time you'll experience something?
</SubtleText>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200 italic text-center">
  every now and then the universe shows off
</p>

<Subtitle>ii: objects in motion</Subtitle>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  I spent a lot of my childhood bouncing between different corners of Australia, Africa, Europe, and North America. I've realized 
  the transit wasn't just between places but between selves. There's an odd disorientation that settles into you when your life 
  isn't measured in years but in departures...
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  At first, I thought that was a kind of superpower. Look at me, I thought, I can adapt to anything. Like some kind of chameleon, 
  blending into new environments, new social circles, new norms. I think this is why I bond really quickly with international school 
  kids, because they (we) all know how to wear that mask. We thrived on the illusion of rootlessness, feeling like it set us apart. 
  That we weren't bound by the constraints of nationality, or even history, the way others were. We could reinvent, restart.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  There was a certain pride in that. We'd all feel it, a camaraderie, when an adult asked, "..and where are you from?"—the question 
  that never quite fit. It was like a game. Our eyes would inevitably find each other across the classroom. I'd see them, across 
  the room, eyebrows raised, half-smiling, silent wagers being placed, waiting for my answer. Would it be the short version, or 
  the long one? As I answered, I felt their gaze—warm, expectant.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  But when I reflect on it now, there's a crack in the narrative. The idea that we could effortlessly move through these worlds, 
  that our adaptability was synonymous with strength—it was a useful story, but maybe it was also a defense mechanism. The ability 
  to leave isn't a skill; it's a habit. And habits can be destructive when they're used to avoid pain. What if all this time, 
  I've been conflating resilience with detachment? What if I didn't become more resilient with every move, but just more efficient 
  at shutting parts of myself off?
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  That raises an uncomfortable question: how much of my "adaptability" is just a more sophisticated way of running from attachment? 
  The exchanges of that knowing look every time someone asks where we were from, but there was something darker beneath it. Maybe 
  we weren't just being clever when we gave half-answers; maybe we didn't know anymore. Maybe the real answer was something like, 
  <span className="italic">I'm from wherever I'm not currently standing.</span>
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  I think about the memories we made, all the people we promised ourselves we'd stay close to. We were good at pretending the 
  distance didn't matter, as if modern technology had somehow erased geography itself. But it didn't. The connections thinned, 
  like a thread pulled taut across time zones, and eventually, it snapped.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  It's a strange kind of loneliness, realizing that the people who knew you best—really knew you—are scattered across a world 
  that you're no longer a part of. You enter someone's life, but always mid-chapter. You learn how to read the room, make 
  connections fast, but you're always conscious of the fact that you won't be around for the ending. And maybe they know it too, 
  whether they realize it or not.
</p>

<SubtleText>
  When was the last time you felt something you didn't want to end too soon?
</SubtleText>

<Subtitle>iii: a thousand origami cranes</Subtitle>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  The "home" I've been searching for was never in a particular city, neighborhood, or career. It's in those little threads we create 
  with others. It's the warmth that spreads through my chest when I see an old friend's face light up on FaceTime, their laughter 
  spilling into the quiet of my room. Or the way your heart lifts when a song you used to absolutely love fills a café, and you 
  notice the person next to you is humming along—two strangers, sharing a silence that says more than words could.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  And yet, these thoughts keep circling back to impermanence. We're always in the process of becoming, of updating our priors, 
  refining who we are. But every goodbye feels like a hard reset. And I wonder: maybe we've misunderstood resilience. Maybe the 
  real strength isn't in being able to leave, but in staying long enough to let yourself break. Staying long enough to let the 
  connections you make matter. Letting yourself feel deeply, not just brushing up against people's lives, but sinking into them, 
  allowing the risk of attachment, of pain, of loss.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  When you stay like that, goodbye is no longer about places or even people. They're about ourselves. The version of you that 
  existed in that place, with those people—that's who you're saying goodbye to. And you can't help but wonder what happens to 
  all those fragments of me, scattered across the world, in conversations now long faded, in laughter I can't quite recall.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  This realization that we're not static, not fixed and that the people we were will never exist again, except in the minds of 
  those who shared those moments with us. And maybe that's enough. Maybe we don't need to cling to permanence, to the idea that 
  we have to hold on to every experience forever. Maybe the awareness that it's all fleeting is what makes it meaningful.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  This impermanence holds its own beauty. We don't need much to feel whole—just a bit of awareness, a little presence. Life is 
  full of small, sacred moments that we often miss. The crisp air of early morning—a quiet reminder that we are alive, that we 
  are here. It's in those small, quiet things that we find our way back to ourselves, to each other.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  That's what I'm trying to lean into now—presence. The small, unnoticed moments that remind me I'm alive. A cup of tea, steam 
  rising in lazy spirals, becomes a universe unto itself, dissipating before I can fully grasp its form. Maybe if I can learn to 
  pay attention to them, I can learn to say goodbye with grace. With the understanding that it's not about loss, but about reverence 
  for what was, for the version of me that was.
</p>

<TallBlogImage 
  src="lights.jpeg"
  alt="Northern lights over a parking lot"
  caption="every now and then the universe shows off"
/>

<Quote author="M.O." date="February 16, 2023">
  Movement is nothing more than the endless process of folding and unfolding.
</Quote>

<Subtitle>iv: folding and unfolding</Subtitle>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  Someday soon, it will be the last goodbye. But when it happens, it won't announce itself—no grand gesture, no epiphany. 
  It will slip past, unnoticed, and they rarely come when we're ready. They arrive unmarked, and only later, in hindsight, 
  do we realize something ended. We imagine that we will recognize these moments, that they will be saturated with meaning, 
  but life has no obligation to give us closure. Most endings, like most deaths, are quiet.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  This used to make me really sad—that we're always losing things we don't realize. But now I understand that this quiet loss 
  is just a feature of time. It is the way things are meant to be. Time doesn't ask for our permission to move forward; it 
  simply moves, indifferent to whether we are ready to go. This reframe has been helpful: time doesn't just take from us; it 
  also gives. It spreads us into the world, distributes us into a thousand different futures. What I am—the sum total of every 
  thought, every feeling, every interaction—will continue to unfold, in lives we'll never see. Every choice ripples outward, 
  a pulse of causality.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  Goodbyes are fundamentally misunderstood. We think of them as endings, sharp delineations where one phase of life closes and 
  another begins, as if the self can be cut cleanly from its context and stored away in the past. But the human experience 
  doesn't really work like that. Time doesn't move in straight lines, and neither do we. The story continues without you, and 
  that's not a sad thing—it's beautiful. The moments you shared, the things you left behind—they will keep living, keep evolving, 
  long after you are gone. The people you love will move on, and that's the natural order of things. That's what life does. 
  It moves. It carries forward everything we thought we needed to cling to, but it does so without us.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  The goodbye is not an end, nor a severing. It is a transition, a quiet diffusion of the self into the future. We don't need 
  to be held onto. We only need to have been. It's not the preservation of ourselves that gives meaning to what we've shared; 
  it's the act of having shared it in the first place.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  So I guess that's what this essay boils down to, learning how to say goodbye, not just to people, but to pieces of yourself 
  and to the moments we shared that carved meaning into these years for me. I think I've realized there's no clean end, no final 
  closure. Even with the people you love the most—perhaps especially with them—the goodbye isn't all it's made out to be. They 
  don't just fade into some quiet memory bank; they stay with you, a constant, quiet presence shaping who you are, who you'll become. 
  So I know I won't truly be leaving them behind, and they won't leave me either.
</p>

<p className="font-serif text-lg leading-[1.8] mb-8 text-gray-800 dark:text-gray-200">
  If there was to be any kind of takeaway, it might be that: to say goodbye correctly is an act of trust—trust in the sufficiency 
  of what has been shared, trust that you shall persist in each other's lives maybe not in the most obvious ways, but through a 
  slow, subtle unfolding of time into the endless recursion of existence.
</p>

<p className="font-serif text-xl leading-[1.8] my-12 text-gray-800 dark:text-gray-200 italic text-center">
  There's no ending, just a quiet unfolding—an echo that lingers, soft but ever-present.
</p>

<BlogImage 
  src="monarch.jpeg"
  alt="Butterfly resting on a white sneaker"
/>


{/* End of article */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default LettingGoPost;