// Run with: node generate-questions-csv.js
// Outputs: questions.csv

const fs = require('fs');

const TYPE_NAMES = {
  1: 'The Reformer',
  2: 'The Helper',
  3: 'The Achiever',
  4: 'The Individualist',
  5: 'The Investigator',
  6: 'The Loyalist',
  7: 'The Enthusiast',
  8: 'The Challenger',
  9: 'The Peacemaker',
};

const R1_QUESTIONS = [
  { type: 1, text: "I feel a moral obligation to meet higher standards than I expect from others." },
  { type: 1, text: "I automatically notice what's wrong or could be improved, and feel compelled to fix it." },
  { type: 1, text: "I find it hard to relax when I see something that needs correcting or could be done better." },
  { type: 2, text: "I feel most fulfilled when I'm helping others and making them feel valued." },
  { type: 2, text: "I naturally tune into others' needs and feelings before attending to my own." },
  { type: 2, text: "I sense what others need and often find myself offering help before they even ask." },
  { type: 3, text: "I feel good about myself when I'm seen as competent and successful." },
  { type: 3, text: "I focus on accomplishing goals — it can be hard for me to slow down or do nothing." },
  { type: 3, text: "I feel most energized when I'm working toward a meaningful goal and making visible progress." },
  { type: 4, text: "I experience emotions more intensely than most and find deep meaning in beauty and self-expression." },
  { type: 4, text: "I often feel misunderstood and long to be truly seen for who I am." },
  { type: 4, text: "I often feel fundamentally different from others and search for a place where I truly belong." },
  { type: 5, text: "I feel drained when others make too many social or emotional demands on me." },
  { type: 5, text: "I prefer to understand things thoroughly before I act or share my views." },
  { type: 5, text: "I need significant time alone to recharge and I guard my privacy carefully." },
  { type: 6, text: "I frequently anticipate what could go wrong and try to prepare for it." },
  { type: 6, text: "I feel more secure when I have clear expectations and trustworthy people I can rely on." },
  { type: 6, text: "I tend to question whether things will work out and look for reassurance or evidence that they will." },
  { type: 7, text: "I feel restless or trapped when stuck in routines or limitations." },
  { type: 7, text: "I'm drawn to new ideas, experiences, and possibilities — I love keeping my options open." },
  { type: 7, text: "I find it easy to stay positive and reframe difficult situations in a more optimistic light." },
  { type: 8, text: "I feel strong and self-reliant, and I rarely let others see when I'm feeling vulnerable." },
  { type: 8, text: "I speak directly, dislike weakness, and have no problem taking charge of a situation." },
  { type: 8, text: "I naturally push back when I feel someone is trying to control or limit me." },
  { type: 9, text: "I go out of my way to avoid conflict and keep things peaceful." },
  { type: 9, text: "I find it easy to see all sides of a situation and to go along with what others want." },
  { type: 9, text: "I often put off decisions and find myself drifting toward comfort rather than action." },
];

const R2_POOL = {
  1: ["I value doing things the right way and holding myself to high standards.","I value integrity, honesty, and taking responsibility seriously.","I value fairness and upholding principles, even when it's uncomfortable.","I value order, precision, and correcting what's wrong.","I value being morally consistent and beyond reproach."],
  2: ["I value being there for others and making them feel truly cared for.","I value warmth, generosity, and nurturing the people I love.","I value creating deep connections and being someone others can rely on.","I value tuning into others' needs and offering help before being asked.","I value building meaningful relationships and making others feel seen."],
  3: ["I value achievement, efficiency, and being seen as capable.","I value setting ambitious goals and doing whatever it takes to reach them.","I value productivity, results, and making the most of every opportunity.","I value being recognized for my competence and accomplishments.","I value adapting to what's needed to succeed and excel."],
  4: ["I value authenticity, originality, and deep emotional truth.","I value being truly understood and expressing my unique inner world.","I value depth of feeling and finding meaning in beauty and experience.","I value self-expression and the freedom to show who I really am.","I value intensity, depth, and a sense of personal significance."],
  5: ["I value knowledge, independence, and protecting my inner space.","I value understanding how things work and thinking for myself.","I value privacy, clear boundaries, and the freedom to observe before engaging.","I value competence, self-sufficiency, and not needing others to function.","I value having enough time and space to think things through fully."],
  6: ["I value loyalty, reliability, and being prepared for what's ahead.","I value trust, security, and having people I can count on.","I value commitment and knowing where I stand with others.","I value anticipating risks and being ready for challenges before they arise.","I value dependable relationships and clear expectations."],
  7: ["I value freedom, variety, and staying open to new experiences.","I value excitement, creativity, and keeping life spontaneous.","I value joy, possibility, and the freedom to explore.","I value keeping my options open and not being tied down.","I value stimulating ideas and the thrill of what's coming next."],
  8: ["I value strength, directness, and the ability to act decisively.","I value honesty, courage, and protecting what matters to me.","I value self-reliance, resilience, and not being controlled by others.","I value being in control of my own decisions and resources.","I value taking charge and standing up for what I believe in."],
  9: ["I value peace, harmony, and a sense of inner calm.","I value acceptance, stability, and keeping relationships smooth.","I value going with the flow and finding common ground.","I value being easy to be around and not creating unnecessary conflict.","I value comfort, consistency, and a life free from tension."],
};

const R3_POOL = {
  1: ["to be good, ethical, and beyond reproach","to do things the right way and correct what's wrong","to live with integrity and maintain my principles","to improve myself and the world around me","to be responsible and never compromise my values"],
  2: ["to be loved and feel indispensable to others","to be needed and to express love through giving","to feel appreciated for how much I care","to be close to the people I love and feel their affection","to make others feel good and know I matter to them"],
  3: ["to be admired and seen as successful","to accomplish meaningful things and be recognized for them","to win, excel, and prove my worth through results","to be valued for what I achieve and how I perform","to feel effective and be respected by others"],
  4: ["to be truly known and understood as I am","to express my unique identity and be seen in my depth","to feel that my life has beauty, meaning, and significance","to connect with something rare and emotionally profound","to be authentic and belong without losing myself"],
  5: ["to feel capable and self-sufficient","to understand the world and protect my inner resources","to have enough knowledge and space to feel secure","to think clearly without being pulled into others' emotions","to be competent and maintain my independence"],
  6: ["to feel safe, supported, and certain about what to expect","to find people and systems I can truly trust","to be prepared for whatever might go wrong","to feel a sense of belonging in a reliable community","to have guidance and know I won't be abandoned"],
  7: ["to stay free, stimulated, and open to what's next","to avoid pain and keep experiencing joy and possibility","to never feel trapped, limited, or cut off from options","to be fully alive — curious, playful, and expansive","to pursue happiness and resist anything that constrains me"],
  8: ["to be strong and never be controlled by others","to protect myself and those I care about from harm","to have power over my own life and decisions","to be respected for my strength and directness","to face challenges head-on and never back down"],
  9: ["to have inner peace and avoid conflict at all costs","to feel connected and accepted without having to fight for it","to maintain harmony and keep things calm around me","to feel settled, comfortable, and free from tension","to be at ease with myself and with those around me"],
};

function q(str) {
  // CSV-escape: wrap in quotes, double any internal quotes
  return '"' + String(str).replace(/"/g, '""') + '"';
}

const rows = [
  ['Round', 'Type Number', 'Type Name', 'Statement #', 'Format / Prompt', 'Current Statement', 'Updated Version (your edits)']
];

// R1 — grouped by type
for (let t = 1; t <= 9; t++) {
  const qs = R1_QUESTIONS.filter(r => r.type === t);
  qs.forEach((item, i) => {
    rows.push(['R1 — Likert', t, TYPE_NAMES[t], i + 1, 'How much does this resonate with you? [1–5]', item.text, '']);
  });
}

// R2 — grouped by type
for (let t = 1; t <= 9; t++) {
  R2_POOL[t].forEach((text, i) => {
    rows.push(['R2 — Rank order', t, TYPE_NAMES[t], i + 1, 'Rank from most to least true (stem: "I value...")', text, '']);
  });
}

// R3 — grouped by type
for (let t = 1; t <= 9; t++) {
  R3_POOL[t].forEach((text, i) => {
    rows.push(['R3 — Forced choice', t, TYPE_NAMES[t], i + 1, 'What\'s more important to me is... [completion]', text, '']);
  });
}

const csv = rows.map(r => r.map(q).join(',')).join('\n');
fs.writeFileSync('questions.csv', csv, 'utf8');
console.log(`✓ questions.csv written — ${rows.length - 1} questions across R1/R2/R3`);
