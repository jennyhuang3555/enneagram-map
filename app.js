/* ============================================
   THE ENNEAGRAM MAP — Application
   ============================================ */

// ---- ENNEAGRAM TYPE DATA ----
const TYPES = {
  1: {
    name: "The Reformer",
    tagline: "The need to be perfect, good, and right",
    center: "Body / Gut",
    triad: "Competency",
    coreDesire: "To be good, to have integrity",
    coreFear: "Being corrupt, evil, or defective",
    gifts: ["Integrity and a strong moral compass", "Meticulous attention to detail and quality", "Reliability and a deep sense of responsibility", "The courage to speak up for what's right", "A drive to improve themselves and the world"],
    coreWound: "It's not okay to make mistakes",
    woundOrigin: "As a child, you felt that love was conditional on being good. You learned to suppress your natural impulses — anger, desire, playfulness — in order to earn approval. The inner critic formed early: a relentless voice that measures every action against an impossible standard.",
    description: [
      "You move through the world with an inner compass that always points toward <strong>what could be better</strong>. Where others see 'good enough,' you see the gap between what is and what should be. This isn't perfectionism for its own sake — it's a deep moral calling to improve, correct, and align with a higher standard.",
      "Your gift is integrity. You bring order to chaos, conscience to carelessness, and excellence to mediocrity. But the shadow side is a relentless inner critic that never lets you rest — a voice that says nothing is ever quite right, especially you.",
      "<strong>Integration direction (toward 7):</strong> You learn to relax, play, and accept imperfection as part of being alive. Joy doesn't have to be earned."
    ],
    triadDescription: "As a Body/Gut type, your core emotion is anger — though you may barely recognize it. You've spent a lifetime converting anger into 'righteous frustration' or suppressing it entirely. The anger isn't the problem; the denial of it is.",
    pathway: {
      title: "The Path Beyond Perfection",
      subtitle: "\"I am enough, even imperfect.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to make mistakes."</strong> This isn't just a preference for quality — it's a survival strategy. Somewhere early on, you absorbed the message that your worth depends on being correct, moral, and beyond reproach.</p>
<p>The wound doesn't announce itself as a wound. It disguises itself as high standards, responsibility, a "strong work ethic." It feels like virtue. That's what makes it so hard to see.</p>
<h4>How It Formed</h4>
<p>Most Ones experienced a childhood where love felt conditional. Perhaps a parent was strict, critical, or morally rigid. Perhaps chaos in the home made you the one who held things together. Either way, you learned: <em>If I'm good enough, I'll be safe. If I'm good enough, I'll be loved.</em></p>
<blockquote>The inner critic isn't your enemy. It's a child's best strategy for surviving a world that punished imperfection.</blockquote>`,
          reflection: "When was the first time you remember feeling that you had to be 'good' to be loved? What were you suppressing to achieve that?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>Your wound activates whenever the gap between <em>what is</em> and <em>what should be</em> becomes unbearable. The triggers are everywhere because the standard is impossible.</p>
<h4>Common Triggers</h4>
<ul>
<li>Someone does something "wrong" and doesn't seem to care</li>
<li>You make a mistake — even a small one — and the inner critic erupts</li>
<li>Others receive praise for mediocre work</li>
<li>You're asked to relax when there's still work to be done</li>
<li>Injustice or unfairness anywhere in your field of vision</li>
<li>Your own desires (especially for pleasure or rest) feel "selfish"</li>
</ul>
<h4>The Body Signal</h4>
<p>Notice where you hold tension. Ones typically carry anger in the jaw, shoulders, and gut. The body tightens as if bracing against a world that keeps falling short. This tension is the wound speaking through your muscles.</p>`,
          reflection: "This week, notice when your body tightens. Before correcting or criticizing, pause and ask: 'What am I actually feeling right now?' Name the emotion underneath the judgment."
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a closed loop: <strong>criticize → try harder → still not enough → criticize.</strong> Understanding the pattern is the first step to interrupting it.</p>
<h4>The Inner Critic Loop</h4>
<p>Your inner critic operates like a background process you never installed. It monitors everything — your work, your thoughts, your desires, even your attempts at relaxation — and issues constant verdicts. Nothing passes inspection.</p>
<p>The cruelest trick: the critic claims to be <em>helping</em> you. "If I stop holding myself to high standards, I'll become lazy, selfish, corrupt." This fear keeps the loop locked.</p>
<h4>The Anger Beneath</h4>
<p>Beneath the criticism lives a vast reservoir of anger. Not destructive rage, but <em>life force</em> — the raw energy of your desires, needs, and boundaries. You've converted this energy into resentment (directed outward as judgment) or self-punishment (directed inward as shame).</p>
<p>The pattern in relationships: you give and give, holding yourself to impossible standards of goodness, then resent others for not meeting those same standards. The resentment proves you're human. That's not a flaw — it's the wound asking to be seen.</p>`,
          reflection: "Write down the three harshest things your inner critic regularly says about you. Then ask: whose voice is that, really? Is it yours, or did you inherit it?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 7 — the Enthusiast</strong>. This doesn't mean becoming a Seven. It means recovering the parts of yourself you abandoned to be "good."</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>Deliberate imperfection:</strong> Once a day, do something "wrong" on purpose. Send an email with a typo. Leave a dish in the sink. Notice the anxiety — and that the world doesn't end.</li>
<li><strong>Reclaim desire:</strong> Ask yourself "What do I actually <em>want</em>?" not "What <em>should</em> I do?" Practice wanting without justifying.</li>
<li><strong>Move the anger:</strong> Physical movement — running, hitting a pillow, loud singing — gives the body's anger a channel that isn't criticism.</li>
<li><strong>Thank the critic, then redirect:</strong> When the inner voice starts, say "Thank you for trying to protect me. I'm safe now." Then choose a different response.</li>
<li><strong>Play without purpose:</strong> Engage in something with no goal, no product, no way to do it "right." Dancing, doodling, wandering. The joy IS the point.</li>
</ul>
<blockquote>Serenity is not the absence of imperfection. It is the full acceptance of what is — including yourself.</blockquote>`,
          reflection: "What is one thing you've been denying yourself because it feels 'irresponsible' or 'selfish'? What would it feel like to allow it — even just once?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>The wound never fully disappears. But your relationship to it transforms. You move from <em>being</em> the critic to <em>hearing</em> the critic — and choosing a different response.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You catch the inner critic <em>before</em> it takes over</li>
<li>You can laugh at your own rigidity</li>
<li>You feel anger and express it directly, without converting it to judgment</li>
<li>You rest without guilt</li>
<li>You see beauty in things that are broken, messy, or unfinished</li>
<li>You offer yourself the same compassion you'd give a friend</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become what you always wanted to be — not perfect, but <em>wise</em>. You still see what could be better, but you hold that vision with gentleness instead of rigidity. You become a model not of perfection, but of integrity with self-compassion. That's rarer, and more beautiful.</p>
<blockquote>You don't have to earn the right to exist. You already belong here — mistakes, desires, anger, and all.</blockquote>`,
          reflection: "Write a letter to your younger self — the child who first learned to be 'good.' What would you want them to know?"
        }
      ]
    }
  },

  2: {
    name: "The Helper",
    tagline: "The need to be needed, loved, and appreciated",
    center: "Heart / Feeling",
    triad: "Rejection",
    coreDesire: "To be loved and wanted",
    coreFear: "Being unwanted, unloved, or dispensable",
    gifts: ["Deep empathy and attunement to others", "Warmth, generosity, and genuine care", "The ability to make people feel seen and valued", "Natural talent for building meaningful connection", "Selfless devotion to those they love"],
    coreWound: "It's not okay to have your own needs",
    woundOrigin: "As a child, you learned that love flowed when you were giving, helpful, attuned to others. Your own needs felt dangerous — too much, too selfish. So you learned to meet everyone else's needs and wait for love to come back to you.",
    description: [
      "You have an extraordinary radar for what other people need — often before they know it themselves. You move toward connection instinctively, offering warmth, help, and emotional support that seems effortless. It's a genuine gift, rooted in deep empathy.",
      "But underneath the giving lives a question that rarely gets asked out loud: <strong>\"Who takes care of me?\"</strong> The shadow of the Helper is the belief that your own needs don't count — that you must earn love by being indispensable.",
      "<strong>Integration direction (toward 4):</strong> You learn to sit with your own emotions, honor your needs, and discover that you are lovable for who you are — not just for what you give."
    ],
    triadDescription: "As a Heart/Feeling type, your core emotion is shame — specifically, shame about having needs. You've built an identity around being needed, which protects you from the terrifying possibility of being truly seen (needs and all) and rejected.",
    pathway: {
      title: "The Path to Self-Love",
      subtitle: "\"I am worthy of love even when I'm not giving.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to have your own needs."</strong> This belief runs so deep that you may not even know what you need. You've become an expert at reading others while remaining a mystery to yourself.</p>
<p>The wound wears a beautiful mask. Generosity. Warmth. Being "the one everyone comes to." But beneath the giving, there's an unspoken contract: <em>I'll take care of you, and in return, you'll love me.</em></p>
<h4>How It Formed</h4>
<p>Many Twos grew up in environments where a parent was emotionally needy, absent, or overwhelmed. You stepped into the gap — becoming the little caretaker, the emotional translator, the one who kept everyone okay. You were praised for this, and the message sank in: <em>my value is in what I give.</em></p>
<blockquote>You learned to make yourself needed because being wanted for who you are felt too risky to hope for.</blockquote>`,
          reflection: "Think of a recent time you helped someone. Were you also hoping for something in return — recognition, closeness, proof that you matter? There's no wrong answer."
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates when your giving goes unrecognized, or when you're confronted with your own neediness — the thing you've worked so hard to hide.</p>
<h4>Common Triggers</h4>
<ul>
<li>Your help is refused, ignored, or taken for granted</li>
<li>Someone you care for turns to someone else for support</li>
<li>Being asked directly "What do YOU need?" (and going blank)</li>
<li>Feeling left out, forgotten, or not prioritized</li>
<li>Being called "too much," "clingy," or "manipulative"</li>
<li>Admitting you can't handle something alone</li>
</ul>
<h4>The Heart Signal</h4>
<p>Twos feel their wound in the chest — a tightening, a flush of hurt that gets quickly converted into more giving or into resentment. When triggered, you may find yourself doing unsolicited favors, becoming overly flattering, or emotionally withdrawing while insisting "I'm fine."</p>`,
          reflection: "The next time someone asks how you're doing, resist the urge to redirect to them. Stay with the question for 30 seconds. What comes up?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>give → hope for love → feel unseen → give more.</strong> The more you give, the harder it becomes to receive — because receiving means admitting you need, and need feels like weakness.</p>
<h4>The Pride Paradox</h4>
<p>The Enneagram tradition names the Two's passion as "pride" — not arrogance, but the prideful belief that <em>you don't need anything while everyone else does.</em> This is the wound's cleverest defense: elevating yourself above neediness while drowning in it.</p>
<h4>The Hidden Resentment</h4>
<p>When the unspoken contract goes unfulfilled — when you give and give and the love doesn't come back — resentment builds. You may express it indirectly: guilt-tripping, keeping score, emotional withdrawal disguised as "being busy." The resentment isn't wrong. It's your real needs, finally demanding to be heard.</p>
<p>In relationships, the pattern often looks like: merge with someone, lose yourself in their world, eventually feel unseen, then either double down on giving or blow up.</p>`,
          reflection: "Make a list of what you need — not what others need from you. Include physical needs, emotional needs, and desires. If this feels difficult, that IS the wound."
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 4 — the Individualist</strong>. This means turning inward, exploring your own emotional depths, and building a relationship with yourself that's as rich as the ones you build with others.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>The Need Inventory:</strong> Each morning, ask: "What do I need today?" Write three things. Then — this is the hard part — ask for one of them.</li>
<li><strong>Receive without reciprocating:</strong> When someone offers you something (a compliment, a coffee, help), practice saying "thank you" and nothing else. No returning the favor immediately.</li>
<li><strong>Scheduled solitude:</strong> Spend time alone doing something purely for yourself. Not "self-care" that's really recovery to give more. Something you want for no reason.</li>
<li><strong>Name the contract:</strong> When you catch yourself giving, pause and honestly ask: "Am I hoping for something back? What is it?" Name it without shame.</li>
<li><strong>Feel the emptiness:</strong> When the urge to help arises, sit with it instead of acting on it. The discomfort you feel is your own unmet needs, finally getting air.</li>
</ul>
<blockquote>The bravest thing a Two can do is not giving. It's receiving.</blockquote>`,
          reflection: "What would it mean to be loved for who you are — not for what you do? Can you imagine what that would feel like in your body?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, giving transforms. It stops being a transaction and becomes a genuine overflow — because you've filled your own cup first.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You can say "no" without guilt or elaborate justification</li>
<li>You know what you need and can ask for it directly</li>
<li>You give without keeping score</li>
<li>You enjoy solitude as much as connection</li>
<li>You let people struggle without rushing to rescue them</li>
<li>You can receive love without feeling you need to earn it</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you embody unconditional love — not the love that gives to get, but the love that flows from genuine fullness. You become someone who can hold space for others' pain without absorbing it, who can give freely because you've learned to receive freely. Your warmth becomes a fire that warms without consuming.</p>
<blockquote>You were never meant to be everyone's everything. You were meant to be fully yourself — and that is enough to be loved.</blockquote>`,
          reflection: "Write down one boundary you've been afraid to set. What would you need to believe about yourself to set it?"
        }
      ]
    }
  },

  3: {
    name: "The Achiever",
    tagline: "The need to be valuable, successful, and admired",
    center: "Heart / Feeling",
    triad: "Competency",
    coreDesire: "To be valuable and worthwhile",
    coreFear: "Being worthless or a failure",
    gifts: ["Drive, ambition, and remarkable efficiency", "Adaptability and sharp social intelligence", "The ability to inspire others through example", "Confidence, charisma, and focused execution", "A talent for turning vision into tangible results"],
    coreWound: "It's not okay to have your own feelings and identity",
    woundOrigin: "As a child, you learned that love came through achievement. Not for who you were, but for what you accomplished. You became a shapeshifter — reading the room, becoming whatever was valued, performing your way to love.",
    description: [
      "You are driven, adaptive, and magnetic. When you walk into a room, you instinctively assess what success looks like here — and you recalibrate to achieve it. This isn't shallow; it's a deeply ingrained survival skill that often produces genuinely remarkable results.",
      "The shadow: you've become so good at performing that you may have lost touch with <strong>who you actually are</strong> underneath the achievements. The question that haunts you, usually at 3am, is: \"If I stopped achieving, would anyone still want me?\"",
      "<strong>Integration direction (toward 6):</strong> You learn to trust, to be vulnerable, to let people see you without the polish. Real connection replaces performance."
    ],
    triadDescription: "As a Heart/Feeling type, your core emotion is shame — though you may be the least aware of it. You've outsourced your identity to external validation so effectively that feelings themselves can seem like an obstacle to performance.",
    pathway: {
      title: "The Path to Authenticity",
      subtitle: "\"I am valuable even when I'm not producing.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to have your own feelings and identity."</strong> So you adopted one that works — the winner, the star, the golden child. The self you present to the world is a masterful construction. So masterful that even you may have forgotten it's a construction.</p>
<h4>How It Formed</h4>
<p>Most Threes grew up in environments where performance was currency. A parent who lit up when you won, got good grades, or impressed the neighbors. The love felt real — but it was always tied to achievement. The message: <em>you are what you accomplish.</em></p>
<p>The child who wasn't performing? That child learned to disappear.</p>
<blockquote>You didn't lose yourself all at once. You traded yourself in, piece by piece, for approval — until the mask fit so well you forgot you were wearing one.</blockquote>`,
          reflection: "Strip away every title, role, and achievement. What's left? If you struggle to answer, that's not emptiness — it's the wound showing you where to look."
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates whenever your image of success is threatened — or whenever stillness forces you to face what's underneath the doing.</p>
<h4>Common Triggers</h4>
<ul>
<li>Failure — even small, private failures that no one else sees</li>
<li>Someone outperforming you in your domain</li>
<li>Being caught off-guard, unprepared, or looking foolish</li>
<li>Unstructured time with nothing to accomplish</li>
<li>Deep emotional conversations (especially about your feelings)</li>
<li>Being valued for who you are rather than what you do — this can feel disorienting</li>
</ul>
<h4>The Acceleration Response</h4>
<p>When triggered, Threes <em>speed up</em>. More projects. More goals. More activity. The body becomes a machine for output. The feelings that surfaced get buried under productivity. Notice when you feel the urge to "just stay busy" — that's the wound running the show.</p>`,
          reflection: "The next time you finish something, resist immediately starting the next thing. Sit in the gap between achievements. What do you feel?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>achieve → feel briefly valuable → emptiness returns → achieve more.</strong> No accomplishment ever fills the hole, because the hole isn't about achievement — it's about being seen.</p>
<h4>The Deceit Pattern</h4>
<p>The Enneagram names the Three's passion as "deceit" — not lying to others, but the more fundamental deceit of <em>presenting a false self so convincingly that you believe it yourself.</em> You're not being dishonest; you genuinely don't know which version of you is "real."</p>
<h4>The Feeling Desert</h4>
<p>Threes often describe a strange numbness in their emotional life. You can talk about feelings intellectually, but actually <em>sitting in</em> grief, fear, or even joy feels foreign. The feelings were obstacles to performance, so they got muted. Decades of muting creates a desert.</p>
<p>In relationships: you attract people with your shine, then struggle with intimacy because intimacy requires removing the polish. Partners may say they love you but don't really <em>know</em> you. They're right — and that's terrifying.</p>`,
          reflection: "Think of a version of yourself you present in different contexts — work, friends, family, dating. Are they the same person? What does each version hide?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 6 — the Loyalist</strong>. This means learning to trust, to be vulnerable, to value loyalty and connection over image and achievement.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>Fail on purpose:</strong> Do something you're bad at — in public. Take a beginner class. Be the worst person in the room. Notice what arises.</li>
<li><strong>The feeling pause:</strong> Three times a day, stop and ask: "What am I feeling right now?" Not thinking — <em>feeling</em>. Name it. Stay with it for 60 seconds.</li>
<li><strong>Confess a weakness:</strong> Tell someone you trust about something you're struggling with. Not a humble-brag. A real vulnerability.</li>
<li><strong>Be still:</strong> Meditation isn't productive. That's the point. Sit for 10 minutes and do nothing. The discomfort is the medicine.</li>
<li><strong>Let people see the draft:</strong> Share something unfinished, unpolished, imperfect. A half-formed idea. A rough attempt. Notice that you're still valued.</li>
</ul>
<blockquote>You are not your resume. You are the one who reads it and wonders if it's enough.</blockquote>`,
          reflection: "What's one thing about yourself that you've never let anyone see — because it doesn't fit the image? What would happen if you showed it?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, achievement doesn't stop — but it transforms. You do things because they matter to <em>you</em>, not because they'll impress. You start building a life that's yours, not a portfolio.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You can distinguish between what you want and what you think you should want</li>
<li>You feel your feelings in real time, not days later</li>
<li>You're comfortable being ordinary, average, unremarkable</li>
<li>You let people love you without performing for it</li>
<li>You rest without calling it "recovery for the next push"</li>
<li>You know who you are in the dark, when no one's watching</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become authentically inspiring — not because you've curated an image, but because you've done the harder work of becoming real. You show others that it's possible to be both excellent and honest, both ambitious and vulnerable. Your drive, freed from the wound, becomes a force for genuine good.</p>
<blockquote>The world doesn't need another performance. It needs you — unscripted, unpolished, and real.</blockquote>`,
          reflection: "Imagine you could never achieve anything again. The career is over. The accolades stop. Who would you call? What would you do with a Tuesday? That person, doing those things — that's you."
        }
      ]
    }
  },

  4: {
    name: "The Individualist",
    tagline: "The need to be unique, authentic, and deeply understood",
    center: "Heart / Feeling",
    triad: "Reactive",
    coreDesire: "To be themselves, to find their significance",
    coreFear: "Having no identity or personal significance",
    gifts: ["Deep emotional intelligence and self-awareness", "Creative originality and authentic expression", "The ability to find beauty and meaning in suffering", "Profound empathy for others in pain", "An unwavering commitment to living authentically"],
    coreWound: "It's not okay to be too functional or too happy",
    woundOrigin: "As a child, you felt a deep sense of abandonment or loss — a feeling that something essential was missing. You turned inward, developing a rich emotional inner world as both refuge and identity. Suffering became proof of depth; ordinariness felt like death.",
    description: [
      "You experience life at a depth that most people never access. Beauty, pain, meaning, longing — these aren't abstract concepts for you. They're the water you swim in. You have an extraordinary capacity to sit with difficult emotions and find truth in them.",
      "The shadow: you can become so identified with your emotional intensity that <strong>ordinary happiness feels threatening.</strong> If you're not in the depths, who are you? The wound turns your greatest gift — emotional depth — into a prison of perpetual longing.",
      "<strong>Integration direction (toward 1):</strong> You learn to channel emotional intensity into disciplined action. Feeling becomes the fuel, not the destination."
    ],
    triadDescription: "As a Heart/Feeling type, your core emotion is shame — experienced as a pervasive sense of being fundamentally flawed or deficient. Unlike Twos and Threes who flee from shame, you turn toward it, making it the core of your identity.",
    pathway: {
      title: "The Path Through Longing",
      subtitle: "\"What I'm searching for was never missing.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"Something essential is missing in me that others have."</strong> This creates a lifelong longing — for the right relationship, the right creative expression, the right understanding — that can never quite be satisfied, because the wound needs the longing to survive.</p>
<h4>How It Formed</h4>
<p>Many Fours experienced an early loss, abandonment, or disconnection — sometimes dramatic, sometimes subtle. A parent who was emotionally unavailable. A move. A family dynamic where you felt like the odd one out. Something told you early: <em>I don't belong here. Something is wrong with me.</em></p>
<p>Instead of burying that feeling, you did something remarkable: you turned toward it. You made the pain meaningful. You built an identity around depth, sensitivity, and emotional truth. But in doing so, you accidentally made suffering your home.</p>
<blockquote>The longing feels like it's pointing toward something you lost. But what if it's pointing toward something you never actually lacked?</blockquote>`,
          reflection: "What is the feeling of 'missing' that you carry? If you could name what's missing, what would it be? And have you ever had a moment where it wasn't missing — and felt disoriented by the peace?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates when you encounter ordinariness, when others seem to have what you lack, or when emotional depth is dismissed.</p>
<h4>Common Triggers</h4>
<ul>
<li>Seeing others living "normal," happy lives with apparent ease</li>
<li>Feeling misunderstood or having your depth dismissed</li>
<li>Being told to "cheer up" or "look on the bright side"</li>
<li>Moments of genuine happiness (which can feel untrustworthy or shallow)</li>
<li>Someone else's creative success that mirrors what you want</li>
<li>Feeling ordinary, generic, or interchangeable</li>
</ul>
<h4>The Emotional Undertow</h4>
<p>When triggered, Fours are pulled into what feels like an ocean of melancholy. The body gets heavy. The world goes gray. You may withdraw, romanticize the pain, or create something beautiful and devastating from the depths. The emotions are real — but the <em>story</em> the wound tells about them ("this proves I'm broken") is the trap.</p>`,
          reflection: "Next time you feel a strong pull toward melancholy, notice: are you feeling an emotion, or are you <em>amplifying</em> one? What would happen if you let the feeling be small?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>long for what's missing → compare yourself to others → feel deficient → retreat into emotional intensity → long more.</strong></p>
<h4>The Envy Spiral</h4>
<p>The Enneagram names the Four's passion as "envy" — not wanting others' possessions, but wanting their <em>being</em>. Their ease. Their belonging. Their apparent wholeness. Envy is the wound's way of confirming: <em>see, they have something I don't.</em></p>
<h4>The Identity Trap</h4>
<p>Here's the paradox: you've built your identity on being different, deep, and emotionally honest. But what happens when healing means becoming more... ordinary? More functional? More at peace? The wound whispers: <em>if you're not suffering, you're not real.</em></p>
<p>In relationships: you long for deep connection, but when someone offers stable, consistent love, it can feel boring. You're drawn to what's unavailable because unavailability mirrors the wound — it confirms the longing is justified.</p>
<p>The pattern keeps you searching for meaning in all the places it isn't: in the past, in the fantasy future, in the depths of emotion. But meaning is actually available in the ordinary present. That's what the wound can't accept.</p>`,
          reflection: "When was the last time you felt genuinely content — and then found a reason to feel bad again? Who would you be without the longing?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 1 — the Reformer</strong>. This means channeling your emotional depth into disciplined, consistent action. Not suppressing feeling, but <em>building with it</em>.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>Structure as container:</strong> Create a daily routine that holds your emotional life without being controlled by it. Regular sleep, exercise, work hours. The structure doesn't kill creativity — it gives it a vessel.</li>
<li><strong>Finish things:</strong> Start a project and complete it, even when the inspiration fades. Follow through is the muscle Fours most need to build.</li>
<li><strong>Welcome the ordinary:</strong> Practice finding beauty in mundane moments. A cup of tea. Sunlight on a wall. Let ordinary be enough.</li>
<li><strong>Equanimity practice:</strong> When emotions surge, label them ("this is sadness") without merging with them ("I AM sadness"). You have feelings; you are not your feelings.</li>
<li><strong>Gratitude as medicine:</strong> Each evening, write three things you have — not three things you want. This isn't toxic positivity; it's training your attention toward what's present.</li>
</ul>
<blockquote>Your depth is real. But depth isn't the same as suffering. The deepest water is often the most still.</blockquote>`,
          reflection: "Choose one small, ordinary action and commit to doing it every day for a week — regardless of how you feel. What does consistency teach you about yourself?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, your emotional depth doesn't diminish — it transforms. You still feel everything intensely, but you're no longer trapped by it. The longing becomes a creative force rather than a prison.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You can feel happy without suspecting it's shallow</li>
<li>You appreciate what you have, not just what you lack</li>
<li>You maintain creative output through dry spells, not just inspiration surges</li>
<li>You let yourself be ordinary and find it surprisingly liberating</li>
<li>You stay in relationships through the boring parts</li>
<li>You use your sensitivity to connect with others, not to isolate</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become what you always were beneath the wound — a bridge between the depths and the surface. You translate the unspeakable into art, words, presence. You give others permission to feel. Your gift isn't suffering — it's the courage to be emotionally honest in a world that runs from feeling.</p>
<blockquote>What you've been longing for is not somewhere else. It's the one looking.</blockquote>`,
          reflection: "If you could release the identity of 'the one who feels deeply,' what would take its place? Not nothing. Something realer."
        }
      ]
    }
  },

  5: {
    name: "The Investigator",
    tagline: "The need to be capable, competent, and self-sufficient",
    center: "Head / Thinking",
    triad: "Rejection",
    coreDesire: "To be capable and competent",
    coreFear: "Being helpless, useless, or overwhelmed",
    gifts: ["Intellectual depth, curiosity, and analytical precision", "The ability to think independently and objectively", "Focus, expertise, and true mastery of their domain", "Calm, clear-headed perspective in complex situations", "A respect for knowledge and truth above all else"],
    coreWound: "It's not okay to be comfortable in the world",
    woundOrigin: "As a child, you felt that the world was intrusive, overwhelming, or depleting. You discovered that the mind was a safe harbor — a place where you could retreat, observe, and make sense of things without being drained. Knowledge became your fortress.",
    description: [
      "You approach life as an investigator of reality. While others react, you observe. While others consume, you conserve. You have a remarkable capacity to see clearly, think deeply, and understand complex systems that others overlook.",
      "The shadow: your fortress of knowledge can become an <strong>ivory tower of isolation</strong>. You've learned to need so little that you've cut yourself off from the nourishment of engagement — with people, with feelings, with life's messy abundance.",
      "<strong>Integration direction (toward 8):</strong> You learn to step out, take space, express yourself with power, and trust that engagement won't deplete you."
    ],
    triadDescription: "As a Head/Thinking type, your core emotion is fear — experienced as a pervasive anxiety about being overwhelmed by the demands of life. You manage fear by minimizing your needs and maximizing your understanding.",
    pathway: {
      title: "The Path Into Engagement",
      subtitle: "\"The world won't deplete me. I have enough to give.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"The world is too much, and I don't have enough (energy, resources, capacity) to handle it."</strong> So you've built a life around conservation — of energy, emotion, time, and self. The less you need, the safer you are.</p>
<h4>How It Formed</h4>
<p>Many Fives experienced childhood environments that were intrusive, chaotic, or emotionally overwhelming. Perhaps a parent who didn't respect your boundaries. A household with no privacy. An emotional climate that felt like it could swallow you whole.</p>
<p>You discovered something powerful: the mind. In your thoughts, you were safe. You could observe without being seen. Understand without being touched. The retreat into intellect wasn't cowardice — it was brilliant adaptation.</p>
<blockquote>You built a fortress to survive. The question now is: can you open the gates from the inside?</blockquote>`,
          reflection: "When was the last time you felt truly depleted by another person? What exactly was being taken from you — and was it really gone, or just shared?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates when demands are placed on your time, energy, or emotional availability — or when you're asked to engage before you feel "ready."</p>
<h4>Common Triggers</h4>
<ul>
<li>Unexpected social obligations or emotional demands</li>
<li>Being put on the spot, especially emotionally</li>
<li>People who are "too much" — too loud, too needy, too present</li>
<li>Having your space or time invaded without permission</li>
<li>Being expected to share before you've fully formed your thoughts</li>
<li>Situations where you can't observe before participating</li>
</ul>
<h4>The Withdrawal Reflex</h4>
<p>When triggered, Fives <em>contract</em>. You pull inward — physically, emotionally, energetically. It can be subtle: the eyes glaze, the posture closes, the presence recedes. You're still there, but you've retreated behind the glass. Notice when you "leave" while still being physically present.</p>`,
          reflection: "This week, notice the exact moment you begin to withdraw in a conversation. What happened right before? What did your body do?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>feel overwhelmed → withdraw → gain knowledge/understanding → feel prepared → still avoid engagement → feel more isolated → withdraw more.</strong></p>
<h4>The Avarice of the Mind</h4>
<p>The Enneagram names the Five's passion as "avarice" — not greed for money, but an <em>emotional and energetic hoarding</em>. You accumulate knowledge, time, and privacy while giving out as little as possible. The fear: <em>if I give too much, I'll have nothing left.</em></p>
<h4>The Preparation Trap</h4>
<p>Fives often postpone living in favor of preparing to live. "Once I understand enough, I'll engage." "Once I feel ready, I'll take action." But readiness never comes, because the wound needs you to believe you're not ready yet.</p>
<p>In relationships: you want connection but on your terms — controlled, boundaried, with guaranteed alone time. Partners may experience you as emotionally unavailable or detached. The truth is you feel deeply — but you feel it privately, behind walls.</p>
<p>The deepest irony: the fortress that protects you from depletion is itself the thing depleting you. Isolation is expensive. Loneliness costs more than engagement ever would.</p>`,
          reflection: "What are you waiting to understand before you act? What if understanding can only come through action?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 8 — the Challenger</strong>. This means stepping into your body, claiming space, expressing yourself with confidence, and engaging with life's fullness instead of observing it from a distance.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>Act before you're ready:</strong> Once a day, do something without fully understanding it first. Send the message. Start the conversation. Begin the project. Trust that you'll figure it out in the doing.</li>
<li><strong>Physical engagement:</strong> Get into your body. Martial arts, dancing, running, cold showers. The body is not a vehicle for the brain — it's where life actually happens.</li>
<li><strong>Give first:</strong> Share an insight, offer help, initiate contact — without being asked. Practice generosity with your energy and watch what happens: it replenishes.</li>
<li><strong>Stay 10% longer:</strong> In social situations, stay a little past your comfort zone. You'll survive. The discomfort is the growth edge.</li>
<li><strong>Express in real-time:</strong> Practice saying what you think and feel <em>as you think and feel it</em>, not after you've had hours to process. Imperfect expression beats perfect silence.</li>
</ul>
<blockquote>Knowledge is a map. But you can't eat a map. At some point, you have to enter the territory.</blockquote>`,
          reflection: "What's one thing you know deeply but have never acted on? What would it take to bring that knowledge into the world?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, your brilliant mind doesn't dim — it becomes embodied. You think AND feel AND act. The observer becomes a participant.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You share your inner world without needing to control the response</li>
<li>You can be spontaneous without anxiety</li>
<li>You feel energized by connection, not just drained</li>
<li>You take up space — physically, socially, emotionally</li>
<li>You act on knowledge rather than just accumulating it</li>
<li>You let people in without requiring them to prove they won't overwhelm you</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become what the world desperately needs: someone who sees clearly AND engages fully. Your gift for understanding, combined with the courage to act, makes you a visionary. Not the kind who watches from the tower, but the kind who walks among people carrying rare insight and offers it freely.</p>
<blockquote>You have always had enough. The universe is not a zero-sum game, and neither are you.</blockquote>`,
          reflection: "What would your life look like if you truly believed you had enough energy, enough knowledge, enough capacity for whatever comes? Live one day as if that were true."
        }
      ]
    }
  },

  6: {
    name: "The Loyalist",
    tagline: "The need to be safe, supported, and certain",
    center: "Head / Thinking",
    triad: "Reactive",
    coreDesire: "To have security and support",
    coreFear: "Being without support, guidance, or security",
    gifts: ["Fierce loyalty and commitment to those they trust", "The ability to anticipate risks and prepare thoroughly", "Courage to question and challenge authority when needed", "Warm, dependable presence that others lean on", "A sharp instinct for spotting what could go wrong"],
    coreWound: "It's not okay to trust yourself",
    woundOrigin: "As a child, you experienced an environment where trust was unreliable — authority figures were inconsistent, threatening, or untrustworthy. You developed a hypervigilant mind that constantly scans for danger, becoming your own security system in a world that didn't feel safe.",
    description: [
      "You are the most attuned to reality of all the types. Where others see a stable world, you see the fault lines. Your mind is a sophisticated threat-detection system, capable of anticipating problems that others miss. This makes you exceptionally loyal, prepared, and courageous.",
      "The shadow: your vigilance can become <strong>a cage of anxiety</strong>. The same mind that protects you also generates endless worst-case scenarios. You seek certainty in a world that can never fully provide it — and the search itself becomes the source of your suffering.",
      "<strong>Integration direction (toward 9):</strong> You learn to relax, trust life's unfolding, and find the inner peace that no external authority can provide."
    ],
    triadDescription: "As a Head/Thinking type, your core emotion is fear — and you're the type most in touch with it. While Fives withdraw from fear and Sevens flee from it, you face it head-on (or are paralyzed by it). Your courage isn't the absence of fear but the willingness to act despite it.",
    pathway: {
      title: "The Path to Inner Authority",
      subtitle: "\"I can trust myself. I can trust life.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to trust yourself."</strong> So you look outward — to authorities, systems, friends, ideologies — for the certainty you can't find within. And then you doubt those too, because if you can't trust yourself, how can you trust your choice of who to trust?</p>
<h4>How It Formed</h4>
<p>Many Sixes grew up with unreliable authority figures. A parent who was loving one moment and volatile the next. Rules that changed without warning. An environment where danger was real — or where the <em>possibility</em> of danger was ever-present.</p>
<p>You developed the most adaptive trait you could: <em>vigilance</em>. Your mind became a security system that never turns off. If you could anticipate every danger, you'd be safe. But the system has no off switch — and now it generates threats that don't exist.</p>
<blockquote>The mind that kept you safe as a child is now the thing generating the danger. The threat is coming from inside the house.</blockquote>`,
          reflection: "What's the worst thing you believe could happen? Sit with it. Now ask: how many of your worst-case scenarios have actually come true?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates whenever certainty is threatened — which is almost always, because certainty is an illusion.</p>
<h4>Common Triggers</h4>
<ul>
<li>Ambiguity — situations without clear rules or expectations</li>
<li>Authority figures (you're drawn to them AND suspicious of them)</li>
<li>Being asked to make decisions without enough information</li>
<li>Someone acting unpredictably or inconsistently</li>
<li>Feeling unsupported or alone with a big problem</li>
<li>Success (which creates new things to lose)</li>
</ul>
<h4>The Two Responses</h4>
<p>Sixes respond to fear in two ways — sometimes both in the same day:</p>
<p><strong>Phobic:</strong> Move toward safety. Seek reassurance. Comply with authority. Avoid risk. The body contracts, the mind races, and you look for someone to tell you it's going to be okay.</p>
<p><strong>Counterphobic:</strong> Move toward the fear. Confront it aggressively. Challenge authority. Take risks to prove you're not afraid. The body tenses, the jaw sets, and you dare the world to try you.</p>
<p>Both are the same wound, just different armor.</p>`,
          reflection: "Which response — phobic or counterphobic — do you default to? In what situations do you flip to the other? What are you really trying to control?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>doubt → seek certainty → find temporary relief → doubt the relief → seek more certainty.</strong> The mind generates problems faster than you can solve them.</p>
<h4>The Doubt Machine</h4>
<p>Your mind is extraordinarily good at generating "what if" scenarios. Every decision spawns counter-arguments. Every trust earns a suspicion. You can argue both sides of anything — which means you can never fully commit to either.</p>
<p>This isn't indecisiveness. It's a mind that was trained to check every corner before entering a room. The problem: life has infinite corners.</p>
<h4>The Authority Paradox</h4>
<p>You seek authority figures who can provide certainty — then rebel against them when they do. You want someone to trust — then test them relentlessly. You want guidance — then resent being told what to do. The paradox isn't a flaw; it's the wound playing out both sides of a child's relationship with unreliable parents.</p>
<p>In relationships: you test loyalty. You create scenarios (sometimes unconsciously) to see if people will stay. You project your fears onto partners, then react to the projections as if they're real. The tragedy: the testing often creates the very betrayal you feared.</p>`,
          reflection: "Name one person you trust. Now notice: do you actually trust them, or do you trust them while maintaining a contingency plan? What would real trust feel like?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 9 — the Peacemaker</strong>. This means learning to relax into life's uncertainty, finding peace within yourself instead of security from outside, and trusting that you are more resilient than your fears suggest.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>The decision muscle:</strong> Make small decisions quickly, without second-guessing. What to eat. What to wear. Which route to take. Practice trusting your first instinct.</li>
<li><strong>Sit with uncertainty:</strong> When anxiety arises, don't immediately try to resolve it. Breathe. Say "I don't know what will happen, and that's okay." The tolerance builds slowly.</li>
<li><strong>Body over mind:</strong> When the mental spiral starts, drop into the body. Feel your feet. Your breath. The chair. The mind lies, but the body is always in the present.</li>
<li><strong>Trust the trust:</strong> When you catch yourself doubting someone you've decided to trust, pause. Remind yourself: "I chose to trust this person. I can choose to trust my choice."</li>
<li><strong>Courage accounting:</strong> Each evening, write down one courageous thing you did — however small. Sixes are braver than they know, and evidence helps.</li>
</ul>
<blockquote>Security is not the absence of danger. It's the presence of self-trust.</blockquote>`,
          reflection: "What if the authority you've been seeking has been inside you all along? What decision have you been outsourcing that you already know the answer to?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, the vigilant mind doesn't disappear — it becomes an ally instead of a tyrant. You still see risks; you just don't drown in them.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You make decisions and stand by them without compulsive second-guessing</li>
<li>You trust your own authority as much as external ones</li>
<li>You can sit with "I don't know" without spiraling</li>
<li>You let people be imperfect without testing their loyalty</li>
<li>You take risks based on what you want, not just what's safe</li>
<li>You sleep well — the security system has an off switch now</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you embody <em>true courage</em> — not the reckless kind, but the kind that sees danger clearly and acts anyway. You're the friend who shows up. The one who asks the hard questions. The one who stays loyal when everyone else leaves. Your gift is faithfulness — to people, to principles, to truth. When you finally trust yourself, that loyalty turns inward, and you become unshakable.</p>
<blockquote>You have survived everything your mind warned you about. That's not luck. That's you — stronger than your fear.</blockquote>`,
          reflection: "Write a list of every crisis you've navigated, every fear you've faced, every hard thing you've survived. Read it back. That's your resume of courage."
        }
      ]
    }
  },

  7: {
    name: "The Enthusiast",
    tagline: "The need to be happy, stimulated, and free",
    center: "Head / Thinking",
    triad: "Competency",
    coreDesire: "To be satisfied and content",
    coreFear: "Being deprived, trapped in pain, or limited",
    gifts: ["Infectious optimism and enthusiasm for life", "Creative thinking and generation of bold new ideas", "Resilience and the ability to reframe difficulty", "Spontaneity, playfulness, and genuine joy", "A gift for making experiences feel vivid and worthwhile"],
    coreWound: "It's not okay to depend on anyone for anything",
    woundOrigin: "As a child, you experienced some form of pain, deprivation, or emotional absence that was too much to bear. You discovered that the mind could generate its own pleasure — through planning, fantasizing, and reframing. You learned to outrun pain by always having something to look forward to.",
    description: [
      "You approach life with an infectious energy that lights up every room. Your mind is a generator of possibilities — plans, ideas, connections, adventures. You see potential where others see limits. This genuine enthusiasm is a gift that inspires everyone around you.",
      "The shadow: beneath the sunshine lives a <strong>profound fear of pain</strong>. Your relentless positivity isn't just optimism — it's a sophisticated avoidance strategy. Every plan, every new experience, every reframe is a way of staying one step ahead of the grief, boredom, or emptiness you refuse to feel.",
      "<strong>Integration direction (toward 5):</strong> You learn to go deep instead of wide, to sit with discomfort, and to find that stillness holds treasures that motion never can."
    ],
    triadDescription: "As a Head/Thinking type, your core emotion is fear — though you're the least likely type to admit it. You manage fear through mental escape: planning, fantasizing, and keeping your options open. The thinking isn't careful analysis (that's Five) or worst-case scanning (that's Six) — it's an endless generation of positive futures to outrun present pain.",
    pathway: {
      title: "The Path Into Depth",
      subtitle: "\"I can feel the pain and still be free.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"Pain is unbearable, and I must stay ahead of it."</strong> So you've built a life of motion — new experiences, new plans, new possibilities. The moment one thing stops being exciting, you're already planning the next. The future is always brighter than the present.</p>
<h4>How It Formed</h4>
<p>Most Sevens experienced some form of early emotional deprivation — not necessarily dramatic, but a child who was left to self-soothe, who had a parent too busy or too sad to be emotionally present, or who experienced a painful event they had no tools to process.</p>
<p>You discovered the escape hatch: the mind. Through imagination, reframing, and planning, you could <em>create</em> good feelings. Why sit with pain when you can think your way into pleasure?</p>
<blockquote>You didn't run from pain because you're weak. You ran because a child shouldn't have to carry that alone. But you're not a child anymore.</blockquote>`,
          reflection: "What's the pain you've been running from? You don't have to name it precisely — just notice the shape of the thing you never let yourself feel."
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates when you're forced to slow down, when options close, or when pain insists on being felt.</p>
<h4>Common Triggers</h4>
<ul>
<li>Being stuck — in a boring meeting, a stale routine, or a commitment with no exit</li>
<li>Someone else's grief, depression, or heavy emotions</li>
<li>Limitations on your freedom or options</li>
<li>The gap between fantasy and reality</li>
<li>Completing something (because then what?)</li>
<li>Silence, stillness, having nothing planned</li>
</ul>
<h4>The Reframe Reflex</h4>
<p>When triggered, Sevens <em>reframe</em>. The mind instantly finds the silver lining, the lesson, the bright side. "It's not that bad." "At least..." "But think about all the good things." This isn't lying — it's a survival mechanism so fast you don't even notice it happening.</p>
<p>Watch for the moment when discomfort arises and your mind <em>immediately</em> jumps to planning, fixing, or positive thinking. That's the wound pulling you out of the present.</p>`,
          reflection: "The next time something hurts, resist the urge to reframe it. Don't find the lesson. Don't look for the bright side. Just feel it for 60 seconds. What happens?"
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>feel discomfort → plan something exciting → feel temporary relief → discomfort returns → plan more.</strong> You never arrive because arriving means stopping — and stopping means feeling.</p>
<h4>The Gluttony of the Mind</h4>
<p>The Enneagram names the Seven's passion as "gluttony" — not for food, but for <em>experience, stimulation, and possibility</em>. You consume experiences the way the wound consumes your attention: voraciously, never satisfied, always needing more.</p>
<h4>The Depth Problem</h4>
<p>Sevens go wide, not deep. You know a little about a lot. You start ten projects and finish three. You have many friends but few who truly know you. Not because you can't go deep — but because depth requires staying, and staying means meeting whatever you've been running from.</p>
<p>In relationships: you're magnetic, fun, and generous — until things get heavy. When a partner brings grief, conflict, or deep emotional need, you may mentally check out, change the subject, or find a way to lighten the mood. You're not heartless; you're terrified that their pain will pull you under.</p>
<p>The deepest fear: that if you stop moving, you'll discover that the life you've been building to avoid pain is itself painful — because it's been a beautiful distraction from actually living.</p>`,
          reflection: "What's one area of your life where you keep things deliberately shallow? What do you think you'd find if you dove deeper?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 5 — the Investigator</strong>. This means learning to go deep, to be still, to find that less can be more, and that the present moment holds everything you've been seeking in the future.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>The sobriety practice:</strong> Choose one area of excess (screens, plans, substances, social media) and reduce it by half for a week. Sit with the discomfort that arises.</li>
<li><strong>Finish before starting:</strong> Commit to completing one project before beginning another. When the shiny new idea arrives, write it down — then return to the current thing.</li>
<li><strong>Feel the pain:</strong> Set a timer for 5 minutes. Close your eyes. Let whatever emotion is there come to the surface. You don't have to do anything with it. Just let it exist.</li>
<li><strong>One thing at a time:</strong> Practice single-tasking. One conversation. One meal. One walk. When the mind reaches for the next thing, gently return to this thing.</li>
<li><strong>The "enough" moment:</strong> After something good happens, pause. Don't immediately plan the next good thing. Let this one be enough. Savor it. Let it complete.</li>
</ul>
<blockquote>Freedom isn't having unlimited options. Freedom is needing none of them to be okay.</blockquote>`,
          reflection: "What would 'enough' look like? Not the fantasy version — the real, present-tense version. What if this moment, right now, with nothing added, were enough?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, your enthusiasm doesn't fade — it deepens. You stop skimming the surface of life and start actually tasting it.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You can sit with sadness, grief, or boredom without escaping</li>
<li>You finish what you start and find satisfaction in completion</li>
<li>You choose depth over breadth — fewer things, done fully</li>
<li>You're present in conversations instead of planning your next sentence</li>
<li>You let good things end naturally instead of grasping for more</li>
<li>You support others through pain without trying to fix or reframe it</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become a source of genuine joy — not the manic, fleeing-from-pain kind, but the deep, grounded kind that comes from someone who has faced the darkness and still chooses to celebrate life. Your gift is the capacity to find wonder in the ordinary, to synthesize ideas, and to remind everyone that even in suffering, life is astonishing.</p>
<blockquote>The thing you've been running from is not as big as the life you've been running through. Stand still. You're already free.</blockquote>`,
          reflection: "If you knew you could feel any pain and survive it — what would you stop running from? What would you finally let yourself grieve?"
        }
      ]
    }
  },

  8: {
    name: "The Challenger",
    tagline: "The need to be strong, in control, and self-reliant",
    center: "Body / Gut",
    triad: "Reactive",
    coreDesire: "To protect themselves and control their own destiny",
    coreFear: "Being controlled, harmed, or violated by others",
    gifts: ["Natural leadership, decisiveness, and commanding presence", "The courage to act when others hesitate", "Fierce protectiveness of people they care about", "Directness, honesty, and intolerance for pretense", "Enormous energy, resilience, and willingness to fight for what matters"],
    coreWound: "It's not okay to be vulnerable or to trust others",
    woundOrigin: "As a child, you encountered a world that required toughness. Vulnerability was punished — by a harsh parent, a dangerous environment, or a culture that rewarded strength and despised weakness. You armored up early, and the armor worked so well it became your identity.",
    description: [
      "You move through life with a force that others can feel before you speak. You have an instinct for power dynamics, a commitment to truth (especially uncomfortable truth), and a protective impulse that can be fiercely beautiful. When you're in the room, things are <em>real</em>.",
      "The shadow: the armor that protects you also <strong>imprisons you</strong>. Beneath the strength lives a tender heart you've been guarding since childhood. The softness, the vulnerability, the need for love — it's all still there, locked behind walls so thick even you've forgotten what's inside.",
      "<strong>Integration direction (toward 2):</strong> You learn to let the armor down, to care openly, and to discover that vulnerability is not weakness — it's the greatest strength you haven't tried yet."
    ],
    triadDescription: "As a Body/Gut type, your core emotion is anger — and unlike Nines and Ones, you have full access to it. Anger is your fuel, your radar, your language. The challenge isn't feeling anger; it's feeling what's underneath it: the hurt, the need, the tenderness.",
    pathway: {
      title: "The Path to Tenderness",
      subtitle: "\"I can be strong and soft at the same time.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to be vulnerable or trust others."</strong> So you became the strongest person in every room. You took control because losing control once — as a child — was devastating. The logic is simple: if I'm the most powerful, I can never be hurt again.</p>
<h4>How It Formed</h4>
<p>Most Eights experienced early betrayal, harshness, or injustice. A parent who was controlling or abusive. A neighborhood where weakness was exploited. A family where emotions were dismissed. Somewhere, the soft child inside you learned: <em>this world will crush you if you let it. So crush it first.</em></p>
<p>You didn't choose to be tough. Toughness chose you — and it saved you. But the child who needed protecting is still in there, still waiting for someone strong enough to reach them. That someone is you.</p>
<blockquote>The armor was necessary. The question is: are you still in a war zone, or did the war end without anyone telling you?</blockquote>`,
          reflection: "When was the last time you felt truly vulnerable — not in danger, but emotionally exposed? What did you do with that feeling?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates whenever you feel controlled, deceived, or when vulnerability is demanded.</p>
<h4>Common Triggers</h4>
<ul>
<li>Being lied to or manipulated — even suspected dishonesty</li>
<li>Feeling controlled by rules, authority, or another person's expectations</li>
<li>Witnessing injustice, especially against the powerless</li>
<li>Being asked to be "soft," "gentle," or to "calm down"</li>
<li>Your own tears or emotional softness (which can feel like weakness)</li>
<li>Dependence on someone — needing something you can't provide yourself</li>
</ul>
<h4>The Escalation Response</h4>
<p>When triggered, Eights <em>expand</em>. The voice gets louder. The energy gets bigger. The body moves forward. You take up more space, make more demands, assert more control. This isn't aggression for its own sake — it's the wound's emergency response: <em>I must be the biggest thing in this room so nothing can hurt me.</em></p>
<p>Notice the moment before the escalation. There's a flash of something underneath the anger — hurt, fear, betrayal. That flash is the wound itself, before the armor covers it.</p>`,
          reflection: "Think of a recent time you got intensely angry. Before the anger, what was the feeling? Hurt? Fear? Helplessness? Name the feeling under the feeling."
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>feel vulnerable → armor up → dominate → push people away → feel alone → refuse to be vulnerable.</strong> The strength that protects you is the same strength that isolates you.</p>
<h4>The Lust for Intensity</h4>
<p>The Enneagram names the Eight's passion as "lust" — not just sexual, but a lust for <em>intensity itself</em>. You want things real, raw, unfiltered. Anything less feels fake. This drives you toward confrontation, excess, and extremes — because moderation feels like suppression, and suppression reminds you of being controlled.</p>
<h4>The Tenderness Problem</h4>
<p>Here's the core paradox: you protect the vulnerable — in others. You fight for the underdog, defend the weak, take on the bullies. But you cannot extend that same tenderness to yourself. The vulnerable child inside you is the one person you refuse to protect — because acknowledging their existence feels like it would destroy you.</p>
<p>In relationships: you test people by pushing them. If they stand up to you, you respect them. If they cave, you lose respect. But this test eliminates the very people who might offer what you actually need — not strength, but gentleness. The people who would treat your tenderness with care are the ones your armor pushes away first.</p>`,
          reflection: "Who in your life have you pushed away because they got too close to the soft place? What were you actually protecting?"
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 2 — the Helper</strong>. This means letting your fierce protective energy turn inward — caring for yourself as tenderly as you care for those you protect. It means opening the heart you've armored shut.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>Let someone in:</strong> Choose one person you trust. Tell them something you've never told anyone — not a war story, but a vulnerability. A fear. A need. Watch what happens when the armor comes down and you're still safe.</li>
<li><strong>Soften the body:</strong> Eights hold tension like a coiled spring. Practice progressive relaxation — deliberately softening your jaw, shoulders, fists. When the body softens, the heart follows.</li>
<li><strong>Follow, don't lead:</strong> In low-stakes situations, let someone else take charge. Notice the discomfort. Stay with it. You don't have to control everything to be safe.</li>
<li><strong>Meet the child:</strong> Close your eyes and imagine your younger self — the one before the armor. What do they need to hear? Say it. This isn't weakness. This is the bravest thing you'll ever do.</li>
<li><strong>Gentleness as strength:</strong> Practice responding to confrontation with curiosity instead of force. "Tell me more" instead of "Back off." The restraint isn't suppression — it's a deeper kind of power.</li>
</ul>
<blockquote>You've proven you can survive anything. Now prove you can be tender — that's the fight that actually matters.</blockquote>`,
          reflection: "If strength is your identity, what happens to you when you're gentle? Not weak — gentle. Can you imagine power and tenderness existing in the same body?"
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, you don't lose your strength — you gain depth. The fire doesn't go out; it becomes a hearth instead of a wildfire.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You let people see you cry — and don't hate yourself for it</li>
<li>You ask for help without feeling diminished</li>
<li>You can be gentle without feeling weak</li>
<li>You fight for things instead of against things</li>
<li>You trust people and aren't constantly testing them</li>
<li>You use your power to empower others, not to dominate</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become what the Enneagram calls "the magnanimous heart" — a force of nature with the tenderness of a protector who guards not just bodies, but spirits. Your power, combined with vulnerability, makes you the kind of leader who people would follow into fire — not because they fear you, but because they know you'd walk through the fire first, and you'd carry them if they couldn't walk.</p>
<blockquote>The strongest thing you'll ever do is take off the armor and let someone love the person underneath it.</blockquote>`,
          reflection: "What would your life look like if you no longer needed to be the strongest? Not weak — just not constantly braced for war. What would peace feel like in your body?"
        }
      ]
    }
  },

  9: {
    name: "The Peacemaker",
    tagline: "The need to be at peace, harmonious, and undisturbed",
    center: "Body / Gut",
    triad: "Positive Outlook",
    coreDesire: "To have inner peace and harmony",
    coreFear: "Loss, separation, fragmentation, and conflict",
    gifts: ["The ability to hold space for all perspectives without judgment", "A calming, grounding presence that others deeply feel", "Natural talent for mediation and conflict resolution", "Patience, steadiness, and deep acceptance of others", "An ease with people that creates genuine belonging"],
    coreWound: "It's not okay to assert yourself or be too much",
    woundOrigin: "As a child, you learned that your presence, opinions, and anger were disruptive — that keeping the peace mattered more than expressing yourself. You merged with others' agendas, numbed your own desires, and became the calm center of every storm. But the calm was a forgetting.",
    description: [
      "You have a rare gift: the ability to see all perspectives, to hold space without judgment, to create calm in chaos. People feel at ease around you because you genuinely accept them as they are. Your presence itself is healing.",
      "The shadow: your peace comes at a <strong>devastating cost — yourself</strong>. You've merged so completely with others' needs, opinions, and energy that you may have lost touch with your own desires, your own anger, your own voice. The peacemaker who can't make peace with their own right to exist.",
      "<strong>Integration direction (toward 3):</strong> You learn to step forward, claim your place, pursue your own goals, and discover that your presence in the world matters — not as a background character, but as a protagonist."
    ],
    triadDescription: "As a Body/Gut type, your core emotion is anger — but you've buried it so deeply you may not recognize it. Nines 'fall asleep' to their anger, converting it into passive-aggression, stubbornness, or a pervasive numbness. The anger isn't gone; it's frozen.",
    pathway: {
      title: "The Path to Presence",
      subtitle: "\"I matter. My voice matters. I am here.\"",
      stages: [
        {
          title: "Recognizing the Wound",
          body: `<p>Your core wound tells you: <strong>"It's not okay to assert yourself."</strong> Your needs, your opinions, your anger — they're all too much, too disruptive, too risky. Better to go along, merge with others, keep things smooth. The wound doesn't feel like a wound. It feels like... nothing. And that's exactly the problem.</p>
<h4>How It Formed</h4>
<p>Many Nines grew up in environments where they were overlooked, overshadowed, or where conflict was so painful that disappearing felt like the safest option. Maybe a loud family where the quiet child was forgotten. Maybe parents so consumed by their own drama that there was no room for yours.</p>
<p>You learned the most self-erasing lesson a child can learn: <em>my presence doesn't matter. My absence makes things easier.</em> And you became so good at disappearing that you forgot you were doing it.</p>
<blockquote>You didn't lose yourself in a single moment. You gave yourself away in a thousand small surrenders — each one so tiny you didn't notice the total.</blockquote>`,
          reflection: "When was the last time someone asked what you wanted — and you genuinely didn't know? Not because the question was hard, but because the 'wanting' muscle has atrophied?"
        },
        {
          title: "Mapping Your Triggers",
          body: `<p>The wound activates when you're asked to assert yourself, when conflict arises, or when someone demands that you show up fully.</p>
<h4>Common Triggers</h4>
<ul>
<li>Being asked "What do YOU want?" (genuine blank)</li>
<li>Conflict — especially direct, emotional confrontation</li>
<li>Being overlooked, talked over, or treated as unimportant</li>
<li>Pressure to make decisions or take a stand</li>
<li>Someone else's anger directed at you</li>
<li>Being told you're "too passive" or "not showing up"</li>
</ul>
<h4>The Numbing Response</h4>
<p>When triggered, Nines <em>numb</em>. The mind gets foggy. The body gets heavy. You reach for comfort — food, TV, scrolling, sleep, busywork — anything that creates a buffer between you and the demand to be present. This isn't laziness. It's a dissociative response to a world that once told you your presence was unwelcome.</p>
<p>The numbing can also look like "going along." Agreeing when you don't agree. Smiling when you're angry. Saying "I don't mind" when you do. Each surrender feels small. Together, they're a slow erasure.</p>`,
          reflection: "This week, every time you say 'I don't mind' or 'whatever you want,' pause and ask yourself: 'But what do I actually prefer?' Even if you don't say it out loud, practice knowing it."
        },
        {
          title: "Seeing the Pattern",
          body: `<p>The wound creates a loop: <strong>suppress self → merge with others → lose sense of self → feel unable to assert → suppress more.</strong> You've been running on everyone else's fuel for so long that you've forgotten you have your own engine.</p>
<h4>The Sloth of Self-Forgetting</h4>
<p>The Enneagram names the Nine's passion as "sloth" — not physical laziness, but <em>a sloth of self-awareness</em>. You fall asleep to your own life. Your own priorities sink to the bottom. Your own anger gets buried so deep it fossilizes into stubbornness — the passive resistance of a self that won't be erased entirely.</p>
<h4>The Anger Beneath the Peace</h4>
<p>Here's what most people (including you) don't know: you are sitting on a <em>volcano</em> of anger. Decades of swallowed opinions, suppressed needs, and quiet surrenders have accumulated into a massive reservoir of rage. You don't feel it because feeling it might destroy the peace you've built — and peace is the only thing keeping you safe.</p>
<p>But the anger leaks out: in passive-aggression, in stubbornness, in "forgetting" to do things, in the quiet resentment you carry. And sometimes it erupts — shocking everyone, especially you — in a fury that seems disproportionate to the trigger. It's not. It's every swallowed "no" arriving at once.</p>
<p>In relationships: you merge with your partner's identity, adopting their interests, opinions, and goals. This feels like love, but it's actually a form of self-abandonment. Partners may feel they can't reach you — because the "you" they're reaching for has been filed away.</p>`,
          reflection: "What are you angry about? Not a little annoyed — genuinely angry? If the answer doesn't come easily, that IS the answer. The feeling is there; you've just been sitting on it."
        },
        {
          title: "The Integration Practice",
          body: `<p>Your growth direction points toward <strong>Type 3 — the Achiever</strong>. This means waking up to your own ambitions, stepping into the spotlight, pursuing your own goals with the same energy you've spent supporting everyone else's.</p>
<h4>Practices for Integration</h4>
<ul>
<li><strong>State a preference:</strong> Once a day, express a preference without being asked. "I'd like to go here." "I want this." "I disagree." Start small. The muscle will build.</li>
<li><strong>Claim your anger:</strong> When you feel the slightest irritation, don't suppress it. Name it: "I'm angry about this." You don't have to act on it — just let it exist without converting it into compliance.</li>
<li><strong>Set one goal:</strong> Choose something YOU want (not something someone else wants for you) and take one step toward it today. Your goals matter. Your ambitions matter.</li>
<li><strong>Move with purpose:</strong> Physical movement that requires presence — martial arts, running, weights. Not to zone out, but to wake up. Feel your body taking up space in the world.</li>
<li><strong>Practice saying no:</strong> Say no to one thing each day that you'd normally agree to out of habit. The discomfort is a sign you're breaking the pattern.</li>
</ul>
<blockquote>Your peace is real. But real peace includes you — not a version of you that's been edited for everyone else's comfort.</blockquote>`,
          reflection: "If you could do anything with your life — not what others expect, not what's easiest — what would you choose? Let the answer come slowly. It's been buried a long time."
        },
        {
          title: "Living Beyond the Wound",
          body: `<p>As you heal, your gift for peace doesn't disappear — it transforms. You become someone who creates harmony not by disappearing, but by showing up fully.</p>
<h4>Signs of Growth</h4>
<ul>
<li>You know what you want — and ask for it</li>
<li>You express anger directly and cleanly</li>
<li>You have your own goals and pursue them with energy</li>
<li>You show up fully in relationships instead of merging</li>
<li>You can tolerate conflict without numbing or fleeing</li>
<li>You feel awake — present, engaged, alive</li>
</ul>
<h4>Your Gift to the World</h4>
<p>At your healthiest, you become what the Enneagram tradition calls "an indomitable force for peace" — not the passive kind that avoids conflict, but the active kind that creates genuine harmony. You hold space for all perspectives because you <em>choose</em> to, not because you can't find your own. Your presence becomes a sanctuary — not because you've disappeared, but because you've arrived. Fully, finally, here.</p>
<blockquote>You are not the background. You are not the supporting character. You are here, and your being here changes everything.</blockquote>`,
          reflection: "Write a declaration of your own existence. Not what you do for others. Not your role. Just: I am here. I matter. This is what I want. Say it out loud. Feel how it shakes loose something ancient."
        }
      ]
    }
  }
};

// ---- QUIZ DATA — ROUND 1 (Likert, 2 per type × 9 = 18) ----
const R1_QUESTIONS = [
  { type: 1, text: "I feel a moral obligation to meet higher standards than I expect from others." },
  { type: 1, text: "I automatically notice what's wrong or could be improved, and feel compelled to fix it." },
  { type: 2, text: "I feel most fulfilled when I'm helping others and making them feel valued." },
  { type: 2, text: "I naturally tune into others' needs and feelings before attending to my own." },
  { type: 3, text: "I feel good about myself when I'm seen as competent and successful." },
  { type: 3, text: "I focus on accomplishing goals — it can be hard for me to slow down or do nothing." },
  { type: 4, text: "I experience emotions more intensely than most and find deep meaning in beauty and self-expression." },
  { type: 4, text: "I often feel misunderstood and long to be truly seen for who I am." },
  { type: 5, text: "I feel drained when others make too many social or emotional demands on me." },
  { type: 5, text: "I prefer to understand things thoroughly before I act or share my views." },
  { type: 6, text: "I frequently anticipate what could go wrong and try to prepare for it." },
  { type: 6, text: "I feel more secure when I have clear expectations and trustworthy people I can rely on." },
  { type: 7, text: "I feel restless or trapped when stuck in routines or limitations." },
  { type: 7, text: "I'm drawn to new ideas, experiences, and possibilities — I love keeping my options open." },
  { type: 8, text: "I feel strong and self-reliant, and I rarely let others see when I'm feeling vulnerable." },
  { type: 8, text: "I speak directly, dislike weakness, and have no problem taking charge of a situation." },
  { type: 9, text: "I go out of my way to avoid conflict and keep things peaceful." },
  { type: 9, text: "I find it easy to see all sides of a situation and to go along with what others want." },
  { type: 1, text: "I find it hard to relax when I see something that needs correcting or could be done better." },
  { type: 2, text: "I sense what others need and often find myself offering help before they even ask." },
  { type: 3, text: "I feel most energized when I'm working toward a meaningful goal and making visible progress." },
  { type: 4, text: "I often feel fundamentally different from others and search for a place where I truly belong." },
  { type: 5, text: "I need significant time alone to recharge and I guard my privacy carefully." },
  { type: 6, text: "I tend to question whether things will work out and look for reassurance or evidence that they will." },
  { type: 7, text: "I find it easy to stay positive and reframe difficult situations in a more optimistic light." },
  { type: 8, text: "I naturally push back when I feel someone is trying to control or limit me." },
  { type: 9, text: "I often put off decisions and find myself drifting toward comfort rather than action." },
];

// ---- QUIZ DATA — ROUND 2 (Rank-order pool, 5 per type) ----
// All statements use "I value..." so every option within a question has the same stem.
// Each type appears 9 times across 12 questions; 5 statements cycle 0→1→2→3→4→0→1→2→3
// so worst-case repeat is 2× (statements 0 and 1), most appear only once.
const R2_POOL = {
  1: [
    "I value doing things the right way and holding myself to high standards.",
    "I value integrity, honesty, and taking responsibility seriously.",
    "I value fairness and upholding principles, even when it's uncomfortable.",
    "I value order, precision, and correcting what's wrong.",
    "I value being morally consistent and beyond reproach.",
  ],
  2: [
    "I value being there for others and making them feel truly cared for.",
    "I value warmth, generosity, and nurturing the people I love.",
    "I value creating deep connections and being someone others can rely on.",
    "I value tuning into others' needs and offering help before being asked.",
    "I value building meaningful relationships and making others feel seen.",
  ],
  3: [
    "I value achievement, efficiency, and being seen as capable.",
    "I value setting ambitious goals and doing whatever it takes to reach them.",
    "I value productivity, results, and making the most of every opportunity.",
    "I value being recognized for my competence and accomplishments.",
    "I value adapting to what's needed to succeed and excel.",
  ],
  4: [
    "I value authenticity, originality, and deep emotional truth.",
    "I value being truly understood and expressing my unique inner world.",
    "I value depth of feeling and finding meaning in beauty and experience.",
    "I value self-expression and the freedom to show who I really am.",
    "I value intensity, depth, and a sense of personal significance.",
  ],
  5: [
    "I value knowledge, independence, and protecting my inner space.",
    "I value understanding how things work and thinking for myself.",
    "I value privacy, clear boundaries, and the freedom to observe before engaging.",
    "I value competence, self-sufficiency, and not needing others to function.",
    "I value having enough time and space to think things through fully.",
  ],
  6: [
    "I value loyalty, reliability, and being prepared for what's ahead.",
    "I value trust, security, and having people I can count on.",
    "I value commitment and knowing where I stand with others.",
    "I value anticipating risks and being ready for challenges before they arise.",
    "I value dependable relationships and clear expectations.",
  ],
  7: [
    "I value freedom, variety, and staying open to new experiences.",
    "I value excitement, creativity, and keeping life spontaneous.",
    "I value joy, possibility, and the freedom to explore.",
    "I value keeping my options open and not being tied down.",
    "I value stimulating ideas and the thrill of what's coming next.",
  ],
  8: [
    "I value strength, directness, and the ability to act decisively.",
    "I value honesty, courage, and protecting what matters to me.",
    "I value self-reliance, resilience, and not being controlled by others.",
    "I value being in control of my own decisions and resources.",
    "I value taking charge and standing up for what I believe in.",
  ],
  9: [
    "I value peace, harmony, and a sense of inner calm.",
    "I value acceptance, stability, and keeping relationships smooth.",
    "I value going with the flow and finding common ground.",
    "I value being easy to be around and not creating unnecessary conflict.",
    "I value comfort, consistency, and a life free from tension.",
  ],
};

// ---- QUIZ DATA — ROUND 3 (Forced choice completions, 5 per type) ----
// Displayed as: "What's more important to me is... [completion]"
const R3_POOL = {
  1: [
    "to be good, ethical, and beyond reproach",
    "to do things the right way and correct what's wrong",
    "to live with integrity and maintain my principles",
    "to improve myself and the world around me",
    "to be responsible and never compromise my values",
  ],
  2: [
    "to be loved and feel indispensable to others",
    "to be needed and to express love through giving",
    "to feel appreciated for how much I care",
    "to be close to the people I love and feel their affection",
    "to make others feel good and know I matter to them",
  ],
  3: [
    "to be admired and seen as successful",
    "to accomplish meaningful things and be recognized for them",
    "to win, excel, and prove my worth through results",
    "to be valued for what I achieve and how I perform",
    "to feel effective and be respected by others",
  ],
  4: [
    "to be truly known and understood as I am",
    "to express my unique identity and be seen in my depth",
    "to feel that my life has beauty, meaning, and significance",
    "to connect with something rare and emotionally profound",
    "to be authentic and belong without losing myself",
  ],
  5: [
    "to feel capable and self-sufficient",
    "to understand the world and protect my inner resources",
    "to have enough knowledge and space to feel secure",
    "to think clearly without being pulled into others' emotions",
    "to be competent and maintain my independence",
  ],
  6: [
    "to feel safe, supported, and certain about what to expect",
    "to find people and systems I can truly trust",
    "to be prepared for whatever might go wrong",
    "to feel a sense of belonging in a reliable community",
    "to have guidance and know I won't be abandoned",
  ],
  7: [
    "to stay free, stimulated, and open to what's next",
    "to avoid pain and keep experiencing joy and possibility",
    "to never feel trapped, limited, or cut off from options",
    "to be fully alive — curious, playful, and expansive",
    "to pursue happiness and resist anything that constrains me",
  ],
  8: [
    "to be strong and never be controlled by others",
    "to protect myself and those I care about from harm",
    "to have power over my own life and decisions",
    "to be respected for my strength and directness",
    "to face challenges head-on and never back down",
  ],
  9: [
    "to have inner peace and avoid conflict at all costs",
    "to feel connected and accepted without having to fight for it",
    "to maintain harmony and keep things calm around me",
    "to feel settled, comfortable, and free from tension",
    "to be at ease with myself and with those around me",
  ],
};

const TOTAL_QUESTIONS = R1_QUESTIONS.length + 12 + R3_POOL[1].length; // 27 + 12 + 5 = 44

const QUESTIONS = []; // legacy placeholder

// ---- STATE ----
let quizPhase = 'r1';
let r1Questions = [], r1Index = 0, r1Scores = {};
let top4Types = [], r2Questions = [], r2Index = 0, r2Scores = {}, r2Submitting = false;
let top2Types = [], r3Index = 0, r3Scores = {};
let resultType = null; // set at end of R3, used by results + pathway
let currentStage = 0;
let quizHistory = []; // history stack for back navigation

function saveHistory() {
  quizHistory.push({
    phase: quizPhase,
    r1Index, r1Scores: {...r1Scores},
    r2Index, r2Scores: JSON.parse(JSON.stringify(r2Scores)),
    r3Index, r3Scores: {...r3Scores},
    top4Types: [...top4Types], top2Types: [...top2Types],
  });
  updateBackButton();
}

function goBack() {
  if (quizHistory.length === 0) return;
  const prev = quizHistory.pop();
  quizPhase  = prev.phase;
  r1Index    = prev.r1Index;    r1Scores  = prev.r1Scores;
  r2Index    = prev.r2Index;    r2Scores  = prev.r2Scores;
  r3Index    = prev.r3Index;    r3Scores  = prev.r3Scores;
  top4Types  = prev.top4Types;  top2Types = prev.top2Types;
  updateBackButton();
  animateNextQuestion(() => {
    if (quizPhase === 'r1') renderR1();
    else if (quizPhase === 'r2') renderR2();
    else renderR3();
  });
}

function updateBackButton() {
  const btn = document.getElementById('quiz-back-btn');
  if (btn) btn.style.visibility = quizHistory.length > 0 ? 'visible' : 'hidden';
}

// ---- UTILITIES ----
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCombinations(arr, k) {
  const result = [];
  function recurse(start, combo) {
    if (combo.length === k) { result.push([...combo]); return; }
    for (let i = start; i < arr.length; i++) recurse(i + 1, [...combo, arr[i]]);
  }
  recurse(0, []);
  return result;
}

// ---- SCREEN MANAGEMENT ----
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active', 'fade-in'));
  const screen = document.getElementById(screenId);
  screen.classList.add('active');
  requestAnimationFrame(() => screen.classList.add('fade-in'));
  window.scrollTo(0, 0);
}

// ---- PROGRESS ----
function updateProgress(current) {
  const pct = (current / TOTAL_QUESTIONS) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${current + 1} / ${TOTAL_QUESTIONS}`;
}

// ---- ANIMATION ----
function animateNextQuestion(callback) {
  const container = document.getElementById('question-container');
  container.classList.add('exit');
  setTimeout(() => {
    container.classList.remove('exit');
    container.style.display = 'none';
    requestAnimationFrame(() => {
      container.style.display = '';
      callback();
    });
  }, 300);
}

// ---- ROUND 1 — LIKERT ----
function startQuiz() {
  quizPhase = 'r1';
  r1Scores = {};
  for (let i = 1; i <= 9; i++) r1Scores[i] = 0;
  r1Questions = shuffle([...R1_QUESTIONS]);
  r1Index = 0;
  quizHistory = [];
  showScreen('quiz');
  updateBackButton();
  renderR1();
}

function renderR1() {
  const q = r1Questions[r1Index];
  updateProgress(r1Index);

  document.getElementById('question-prompt').textContent = 'How much does this resonate with you?';
  document.getElementById('question-text').textContent = q.text;

  const optionsEl = document.getElementById('options');
  optionsEl.className = 'options';
  optionsEl.innerHTML = '';

  const likert = [
    { text: 'Strongly agree',    value: 5 },
    { text: 'Agree',             value: 4 },
    { text: 'Neutral',           value: 3 },
    { text: 'Disagree',          value: 2 },
    { text: 'Strongly disagree', value: 1 },
  ];

  likert.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt.text;
    btn.style.animationDelay = (idx * 0.06) + 's';
    btn.addEventListener('click', () => {
      saveHistory();
      btn.classList.add('selected');
      r1Scores[q.type] += opt.value;
      setTimeout(() => {
        r1Index++;
        if (r1Index >= r1Questions.length) finishR1();
        else animateNextQuestion(renderR1);
      }, 350);
    });
    optionsEl.appendChild(btn);
  });
}

function finishR1() {
  top4Types = Object.entries(r1Scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([t]) => parseInt(t));
  startR2();
}

// ---- ROUND 2 — RANK ORDER (round-robin) ----
function startR2() {
  quizPhase = 'r2';
  r2Scores = {};
  top4Types.forEach(t => r2Scores[t] = { points: 0, firstPlaces: 0 });
  r2Questions = generateR2Questions(top4Types);
  r2Index = 0;
  animateNextQuestion(renderR2);
}

function generateR2Questions(top4) {
  // C(4,3) = 4 combos × 3 reps = 12 questions
  // Each type appears 9 times; cycle through its 5 pool statements so
  // worst-case repeat is 2× (statements 0 and 1), rest appear only once
  const combos = getCombinations(top4, 3);
  const questions = [];
  const stmtCounter = {};
  top4.forEach(t => stmtCounter[t] = 0);
  for (let rep = 0; rep < 3; rep++) {
    combos.forEach(combo => {
      questions.push({
        types: [...combo],
        statements: combo.map(t => {
          const poolSize = R2_POOL[t].length;
          const stmt = { type: t, text: R2_POOL[t][stmtCounter[t] % poolSize] };
          stmtCounter[t]++;
          return stmt;
        })
      });
    });
  }
  return shuffle(questions);
}

function renderR2() {
  const q = r2Questions[r2Index];
  updateProgress(R1_QUESTIONS.length + r2Index);

  document.getElementById('question-prompt').textContent = 'Rank these from most to least true for you';
  document.getElementById('question-text').textContent = '';

  r2Submitting = false;
  const optionsEl = document.getElementById('options');
  optionsEl.className = 'options rank-options';
  optionsEl.innerHTML = '';

  let ranking = [];
  const displayStatements = shuffle([...q.statements]);

  displayStatements.forEach(stmt => {
    const card = document.createElement('div');
    card.className = 'rank-card';
    card.dataset.type = stmt.type;

    const badge = document.createElement('span');
    badge.className = 'rank-badge';

    const text = document.createElement('span');
    text.className = 'rank-text';
    text.textContent = stmt.text;

    card.appendChild(badge);
    card.appendChild(text);

    card.addEventListener('click', () => {
      if (r2Submitting) return;
      const pos = ranking.indexOf(stmt.type);
      if (pos !== -1) {
        ranking = ranking.slice(0, pos);
      } else if (ranking.length < 3) {
        ranking.push(stmt.type);
      }

      // Refresh all card states
      displayStatements.forEach(s => {
        const c = optionsEl.querySelector(`.rank-card[data-type="${s.type}"]`);
        const b = c.querySelector('.rank-badge');
        const p = ranking.indexOf(s.type);
        c.className = 'rank-card' + (p !== -1 ? ` ranked rank-${p + 1}` : '');
        b.textContent = p !== -1 ? p + 1 : '';
      });

      if (ranking.length === 3) {
        r2Submitting = true;
        setTimeout(() => submitR2Ranking([...ranking]), 400);
      }
    });

    optionsEl.appendChild(card);
  });
}

function submitR2Ranking(ranking) {
  saveHistory();
  const pts = [3, 2, 1];
  ranking.forEach((typeNum, i) => {
    r2Scores[typeNum].points += pts[i];
    if (i === 0) r2Scores[typeNum].firstPlaces++;
  });
  r2Index++;
  if (r2Index >= r2Questions.length) finishR2();
  else animateNextQuestion(renderR2);
}

function finishR2() {
  top2Types = [...top4Types]
    .sort((a, b) => {
      if (r2Scores[b].points !== r2Scores[a].points) return r2Scores[b].points - r2Scores[a].points;
      if (r2Scores[b].firstPlaces !== r2Scores[a].firstPlaces) return r2Scores[b].firstPlaces - r2Scores[a].firstPlaces;
      return r1Scores[b] - r1Scores[a];
    })
    .slice(0, 2);
  startR3();
}

// ---- ROUND 3 — FORCED CHOICE ----
function startR3() {
  quizPhase = 'r3';
  r3Scores = { [top2Types[0]]: 0, [top2Types[1]]: 0 };
  r3Index = 0;
  animateNextQuestion(renderR3);
}

function renderR3() {
  const [typeA, typeB] = top2Types;
  updateProgress(R1_QUESTIONS.length + r2Questions.length + r3Index);

  document.getElementById('question-prompt').textContent = 'Which feels truer?';
  document.getElementById('question-text').textContent = "What's more important to me is...";

  const optionsEl = document.getElementById('options');
  optionsEl.className = 'options';
  optionsEl.innerHTML = '';

  const options = shuffle([
    { type: typeA, text: R3_POOL[typeA][r3Index] },
    { type: typeB, text: R3_POOL[typeB][r3Index] },
  ]);

  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt.text;
    btn.style.animationDelay = (idx * 0.08) + 's';
    btn.addEventListener('click', () => {
      saveHistory();
      btn.classList.add('selected');
      r3Scores[opt.type]++;
      setTimeout(() => {
        r3Index++;
        const total = R3_POOL[typeA].length;
        if (r3Index >= total) finishR3();
        else animateNextQuestion(renderR3);
      }, 350);
    });
    optionsEl.appendChild(btn);
  });
}

function finishR3() {
  const [a, b] = top2Types;
  resultType = r3Scores[a] >= r3Scores[b] ? a : b;
  document.getElementById('progress-bar').style.width = '100%';
  setTimeout(() => showResults(), 400);
}

// ---- SCORE NORMALIZATION ----
// R1 is the primary signal for all 9 types (0–100).
// Advancing rounds add small capped bonuses so tier gaps stay marginal:
//   Top-4: R1 score + up to +8 from R2 performance
//   Top-2: above    + up to +5 more from R3 performance
// This ensures R2 types are only marginally ahead of R1-only types,
// and the R3 winner is only slightly ahead of the runner-up.
function getNormalizedScore(type) {
  const r1Max = R1_QUESTIONS.filter(q => q.type === type).length * 5;
  const r1Score = (r1Scores[type] || 0) / r1Max * 100;

  if (!top4Types.includes(type)) {
    return Math.round(r1Score);
  }

  const r2Bonus = (r2Scores[type].points / 27) * 8; // up to +8

  if (!top2Types.includes(type)) {
    return Math.round(r1Score + r2Bonus);
  }

  const r3Bonus = ((r3Scores[type] || 0) / 5) * 5; // up to +5
  return Math.round(r1Score + r2Bonus + r3Bonus);
}

// Returns the highest-scoring type in each of the two centers that aren't the dominant type's center.
function getSecondaryTypes() {
  const centers = {
    body:  [1, 8, 9],
    heart: [2, 3, 4],
    head:  [5, 6, 7],
  };
  const centerLabels = { body: 'Body Center', heart: 'Heart Center', head: 'Head Center' };
  const dominantCenter = Object.keys(centers).find(c => centers[c].includes(resultType));
  const secondaries = [];
  Object.entries(centers).forEach(([center, types]) => {
    if (center === dominantCenter) return;
    const best = [...types].sort((a, b) => getNormalizedScore(b) - getNormalizedScore(a))[0];
    secondaries.push({ type: best, centerLabel: centerLabels[center] });
  });
  return secondaries;
}

function showResults() {
  const type = TYPES[resultType];
  const secondaries = getSecondaryTypes();

  // Dominant type
  document.getElementById('type-number').textContent = resultType;
  document.getElementById('type-name').textContent = type.name;
  document.getElementById('type-tagline').textContent = type.tagline;

  // Description
  const descEl = document.getElementById('type-description');
  descEl.innerHTML = type.description.map(p => `<p>${p}</p>`).join('');

  // Gifts, motivation, fears
  const profileEl = document.getElementById('type-profile');
  profileEl.innerHTML = `
    <div class="profile-grid">
      <div class="profile-card">
        <h4 class="profile-card-title">Gifts &amp; Strengths</h4>
        <ul class="profile-list">
          ${type.gifts.map(g => `<li>${g}</li>`).join('')}
        </ul>
      </div>
      <div class="profile-card">
        <h4 class="profile-card-title">Core Motivation</h4>
        <p class="profile-text">${type.coreDesire}</p>
        <h4 class="profile-card-title profile-card-title--fear">Core Fear</h4>
        <p class="profile-text">${type.coreFear}</p>
      </div>
    </div>
  `;

  // Secondary types
  const secEl = document.getElementById('secondary-types');
  secEl.innerHTML = `
    <h3 class="secondary-heading">Influential Types</h3>
    <p class="secondary-subheading">Your highest type in each of the other two centers</p>
    <div class="secondary-cards">
      ${secondaries.map(s => `
        <div class="secondary-card">
          <div class="secondary-badge">${s.type}</div>
          <div class="secondary-info">
            <span class="secondary-center">${s.centerLabel}</span>
            <span class="secondary-name">${TYPES[s.type].name}</span>
            <span class="secondary-tagline">${TYPES[s.type].tagline}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Normalized scores chart
  const chartEl = document.getElementById('scores-chart');
  chartEl.innerHTML = '';
  const allScores = {};
  for (let i = 1; i <= 9; i++) allScores[i] = getNormalizedScore(i);
  const scoreValues = Object.values(allScores);
  const maxNorm = Math.max(...scoreValues);
  const minNorm = Math.min(...scoreValues);
  const scoreRange = maxNorm - minNorm;

  const secondaryTypes = secondaries.map(s => s.type);
  // Fixed order grouped by center: Body (1,8,9) → Heart (2,3,4) → Head (5,6,7)
  const centeredOrder = [
    { label: 'Body', types: [1, 8, 9] },
    { label: 'Heart', types: [2, 3, 4] },
    { label: 'Head', types: [5, 6, 7] },
  ];
  let idx = 0;
  centeredOrder.forEach(({ label, types }) => {
    const groupHeader = document.createElement('p');
    groupHeader.className = 'score-group-label';
    groupHeader.textContent = label;
    chartEl.appendChild(groupHeader);
    types.forEach(t => {
      const score = allScores[t];
      const typeNum = t;
    // Min-max scale: lowest type = ~8% bar, highest = 100%, amplifies visual spread
    const pct = scoreRange > 0 ? 8 + ((score - minNorm) / scoreRange) * 92 : 100;
    const isDominant = t === resultType;
    const isSecondary = secondaryTypes.includes(t);
    const fillClass = isDominant ? 'top-type' : isSecondary ? 'secondary-type' : '';

    const row = document.createElement('div');
    row.className = 'score-row';
    row.innerHTML = `
      <span class="score-label">${typeNum}: ${TYPES[typeNum].name}</span>
      <div class="score-bar-container">
        <div class="score-bar-fill ${fillClass}" style="width: 0%"></div>
      </div>
    `;
    chartEl.appendChild(row);

      requestAnimationFrame(() => {
        setTimeout(() => {
          row.querySelector('.score-bar-fill').style.width = pct + '%';
        }, 80 + idx * 40);
      });
      idx++;
    });
  });

  // Triad info
  const triadEl = document.getElementById('triad-info');
  triadEl.innerHTML = `
    <h4>${type.center} Center</h4>
    <p>${type.triadDescription}</p>
  `;

  renderResultsWheel(secondaryTypes);
  showScreen('results');
}

function renderResultsWheel(secondaryTypes = []) {
  const svg = document.getElementById('results-svg');

  // Point positions for types 1-9 around the enneagram (9 at top)
  const positions = {
    9: { x: 150, y: 20 },
    1: { x: 233, y: 68 },
    2: { x: 280, y: 150 },
    3: { x: 267, y: 228 },
    4: { x: 210, y: 275 },
    5: { x: 90, y: 275 },
    6: { x: 33, y: 228 },
    7: { x: 20, y: 150 },
    8: { x: 70, y: 68 }
  };

  // Remove old points
  svg.querySelectorAll('.result-point, .result-label').forEach(el => el.remove());

  for (let i = 1; i <= 9; i++) {
    const pos = positions[i];
    const isResult = i === resultType;
    const isSecondary = secondaryTypes.includes(i);

    // Circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', pos.x);
    circle.setAttribute('cy', pos.y);
    circle.setAttribute('r', isResult ? 12 : isSecondary ? 8 : 5);
    circle.setAttribute('fill', isResult ? '#c9a84c' : isSecondary ? '#c9a84c66' : '#c9a84c22');
    circle.setAttribute('class', 'result-point');
    if (isResult) circle.setAttribute('filter', 'url(#glow)');
    svg.appendChild(circle);

    // Label
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', pos.x);
    text.setAttribute('y', pos.y + (isResult ? 5 : isSecondary ? 4 : 4));
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', isResult ? '#07070d' : isSecondary ? '#c9a84c' : '#c9a84c55');
    text.setAttribute('font-size', isResult ? '14' : isSecondary ? '11' : '10');
    text.setAttribute('font-family', 'Inter, sans-serif');
    text.setAttribute('font-weight', isResult ? '600' : '400');
    text.setAttribute('class', 'result-label');
    text.textContent = i;
    svg.appendChild(text);
  }

  // Add glow filter if not present
  if (!svg.querySelector('#glow')) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    `;
    svg.insertBefore(defs, svg.firstChild);
  }
}

// ---- PATHWAY ----
function showPathway() {
  currentStage = 0;
  const type = TYPES[resultType];
  const pw = type.pathway;

  document.getElementById('pathway-title').textContent = pw.title;
  document.getElementById('pathway-subtitle').textContent = pw.subtitle;

  // Build nav dots
  const navEl = document.getElementById('pathway-nav');
  navEl.innerHTML = '';
  pw.stages.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'pathway-dot' + (idx === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToStage(idx));
    navEl.appendChild(dot);
  });

  // Build stage cards
  const stagesEl = document.getElementById('pathway-stages');
  stagesEl.innerHTML = '';
  pw.stages.forEach((stage, idx) => {
    const card = document.createElement('div');
    card.className = 'stage-card' + (idx === 0 ? ' active' : '');
    card.innerHTML = `
      <p class="stage-number">Stage ${idx + 1} of ${pw.stages.length}</p>
      <h3 class="stage-title">${stage.title}</h3>
      <div class="stage-body">${stage.body}</div>
      ${stage.reflection ? `
        <div class="reflection-prompt">
          <h5>Reflection</h5>
          <p>${stage.reflection}</p>
        </div>
      ` : ''}
    `;
    stagesEl.appendChild(card);
  });

  document.getElementById('pathway-complete').style.display = 'none';
  document.querySelector('.pathway-footer').style.display = 'flex';
  updateStageNav();

  showScreen('pathway');
}

function goToStage(idx) {
  if (idx < 0 || idx >= TYPES[resultType].pathway.stages.length) return;
  currentStage = idx;

  const cards = document.querySelectorAll('.stage-card');
  cards.forEach((c, i) => {
    c.classList.toggle('active', i === idx);
  });

  updateStageNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStageNav() {
  const stages = TYPES[resultType].pathway.stages;
  const dots = document.querySelectorAll('.pathway-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentStage);
    dot.classList.toggle('completed', idx < currentStage);
  });

  const prevBtn = document.getElementById('prev-stage');
  const nextBtn = document.getElementById('next-stage');
  prevBtn.style.visibility = currentStage === 0 ? 'hidden' : 'visible';

  if (currentStage === stages.length - 1) {
    nextBtn.textContent = 'Complete Journey';
    nextBtn.onclick = completePathway;
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.onclick = () => goToStage(currentStage + 1);
  }
}

function completePathway() {
  document.querySelector('.pathway-footer').style.display = 'none';
  document.getElementById('pathway-stages').innerHTML = '';
  document.getElementById('pathway-complete').style.display = 'block';

  // Mark all dots completed
  document.querySelectorAll('.pathway-dot').forEach(dot => {
    dot.classList.add('completed');
    dot.classList.remove('active');
  });
}

// ---- EVENT LISTENERS ----
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('explore-wound-btn').addEventListener('click', showPathway);
  document.getElementById('back-to-results').addEventListener('click', () => showScreen('results'));
  document.getElementById('prev-stage').addEventListener('click', () => goToStage(currentStage - 1));
  document.getElementById('next-stage').addEventListener('click', () => goToStage(currentStage + 1));
  document.getElementById('retake-btn').addEventListener('click', () => {
    showScreen('landing');
  });
});
