// MGMT 440 course data. Format: see ../COURSES-FORMAT.md.
// Sources: the operative revised 09/25/2026 syllabus (overview at
// ~/workspace/school/440-course-overview-2026-10-20.md), the Class 1 prep brief
// (~/workspace/school/440-class1-prep-brief-2026-10-27.md), and Prof. Kaul's
// prior-year 2025 decks L2 to L5 as mapped in
// ~/workspace/school/440-prior-year-decks-2025-map-2026-10-28.md.
// Class 1 was rebuilt Oct 30, 2026 at full depth from the real Class 1 deck
// (UCLA_L1_Oct_29_2026.pdf, 55 pages, held in ~/workspace/school/slides/440/;
// notes at ~/workspace/school/440-class1-deck-notes-2026-10-29.md) and the
// Granola note "440 L1" (Oct 29, 2026). The lecture wins over the prep brief
// wherever they differ. The conflicting 09/01/2026 syllabus was NOT used.
// Every topic built from a 2025 deck is still provisional framework prep.
// Option order was balanced so correct answers do not cluster on one letter.
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA["mgmt-440"] = {
  "id": "mgmt-440",
  "name": "MGMT 440: Product Management",
  "banner": "images/mgmt-440.svg",
  "bannerAlt": "A path of three steps rising toward a marked destination",
  "professor": "Prof. Surbhi Kaul",
  "term": "Fall 2026",
  "examInfo": "No final exam. The quizzes are the exam equivalents: Quiz #1 due Sun Nov 1, 2026 and Quiz #2 due Sun Nov 22, 2026, both 11:59pm PT via the course site. Other graded work: Product Critique due Nov 8, Success Metrics and KPIs Exercise due Nov 15, Final Presentation and Written Response on Thu Dec 3, 2026. Classes meet Thursdays 1:00 to 3:50pm PT in Entrepreneurs Hall C301 (Oct 29, Nov 5, Nov 12, Nov 19, Dec 3).",
  "termDates": {
    "start": "2026-10-29",
    "end": "2026-12-03"
  },
  "deadlines": [
    {
      "id": "quiz1",
      "date": "2026-11-01",
      "label": "Quiz #1 due (11:59pm PT)"
    },
    {
      "id": "critique",
      "date": "2026-11-08",
      "label": "Product Critique due (11:59pm PT)"
    },
    {
      "id": "metrics",
      "date": "2026-11-15",
      "label": "Metrics Exercise due (11:59pm PT)"
    },
    {
      "id": "quiz2",
      "date": "2026-11-22",
      "label": "Quiz #2 due (11:59pm PT)"
    },
    {
      "id": "presentation",
      "date": "2026-12-03",
      "label": "Final Presentation (in class)"
    }
  ],
  "aiPolicy": "AI tools are allowed for brainstorming, research, and initial drafting. You must disclose and cite the tool, and submitted work must reflect your own thinking and analysis. AI should accelerate thinking, not replace it. On this site: attempt every framework call in your own words first, then check.",
  "productionMode": "typed",
  "gradeWeights": [
    {
      "label": "Quizzes",
      "weight": "20%"
    },
    {
      "label": "Product Critique",
      "weight": "20%"
    },
    {
      "label": "Success Metrics and KPIs Exercise",
      "weight": "15%"
    },
    {
      "label": "Participation",
      "weight": "15%"
    },
    {
      "label": "Final Presentation (group)",
      "weight": "30%"
    }
  ],
  "rules": [
    "The 2026 spine governs: Quiz #1 (Nov 1), Product Critique (Nov 8), Metrics and KPIs Exercise (Nov 15), Quiz #2 (Nov 22), Final Presentation (Dec 3). Prior-year decks are framework prep only, never 2026 assignment instructions.",
    "Name the framework before you apply it: state which framework fits the situation, and why, before using it.",
    "Attempt first, then check: write your own framework call before revealing any answer on this site.",
    "Participation is graded on relevance, thoughtful analysis, connection to themes, and preparedness. No mobile phones during class.",
    "AI use must be disclosed and cited; submitted work must be your own thinking and analysis."
  ],
  "chapters": [
    {
      "id": "class1",
      "title": "Class 1 (Thu Oct 29): Introduction to Product Management in the AI Era",
      "topics": [
        {
          "id": "class1-pm-role",
          "title": "The PM Role: CEO of the Product",
          "pieces": [
            {
              "id": "responsibility-without-authority",
              "name": "Responsibility without authority",
              "fn": "The PM owns the product's success without line authority over the people who build it. Kaul's deck: the PM manages ideation to launch to sunset, acts like CEO of the product, sets vision and strategy, sets success metrics and tracks feedback, sets pricing and manages P&L, and sits at the hub of finance, marketing, legal, support, sales, development, and customers.",
              "predict": "A launch slips because engineering reprioritized. Under the CEO of the product framing, whose problem is the slip, and which excuse is not available to the PM?"
            },
            {
              "id": "good-bad-contrasts",
              "name": "Good PM / bad PM contrasts",
              "fn": "Good PMs know the market, product, and competition cold, take written positions on hard calls, and decompose problems. Bad PMs wait to be told, opine verbally, fight fires all day, and chase competitor features.",
              "predict": "A PM spends the week relaying requests between sales and engineering and matching a rival's new feature. Which bad PM patterns is that, in one line each?"
            },
            {
              "id": "pm-skills-challenges",
              "name": "PM skills and challenges",
              "fn": "Fundamental skills in the deck: customer empathy, influential communication, curiosity, prioritization, analytical skills, ideation and problem solving, market trends and analysis, making a call with the data available, and high agency; IQ and EQ both critical. Challenges: jack of all trades, influence with no direct reports, the role looks different at different companies and within one company, context switching, ambiguity and cross-functional work, managing up, down, and sideways, and being a lifelong learner.",
              "predict": "Name two deck challenges that follow directly from having responsibility without authority, and say why each one follows."
            },
            {
              "id": "ai-strategic-lever",
              "name": "AI literacy, the new core skill",
              "fn": "The deck adds AI literacy as a new fundamental skill: evaluate models like vendors (capabilities, costs, failure modes before betting the roadmap), prototype before you staff, show data judgment about training data, and know the limits (hallucinations, bias, when only a human may decide). Kaul's line: the PMs who thrive will not be the most technical; they will have the best judgment about the tech.",
              "predict": "A team adds a chatbot because rivals have one. Using AI literacy, what should they have evaluated before betting the roadmap on it?"
            },
            {
              "id": "product-journey",
              "name": "The product journey, AI era",
              "fn": "Deck journey: problem, design, decide, development, launch, with the PM staying from ideation to sunset. New for 2026: AI works both sides of the arrow, mining reviews, tickets, and calls for ideation and writing code, copy, and mocks in build. The AI-era loop is ideate, prototype, validate BEFORE build: kill ten ideas in a week so engineering only builds the one that survived; validation moves before the build, not after.",
              "predict": "Put these in the AI-era order and say what changes versus the traditional journey: development, launch, ideation, validation."
            },
            {
              "id": "discovery-innovation",
              "name": "Product discovery and innovation",
              "fn": "Most innovation is incremental in a crowded field; a few products create a whole category (iPhone, Netflix, Keurig, Docusign, Tesla, Chobani, YouTube, ChatGPT, Gemini) and take outsized returns. Category creation needs a breakthrough product AND a breakthrough business model. Sustaining innovation is better on the dimensions mainstream customers already value; disruptive innovation starts worse on those measures, but cheaper, simpler, or more convenient, for the low end or a new market incumbents ignore.",
              "predict": "A well-managed company listens to its best customers, invests where margins are highest, and still fails. In the deck's terms, how does that happen?"
            }
          ],
          "lesson": [
            {
              "title": "Responsibility without authority",
              "body": "Horowitz's essay defines the product manager as the **CEO of the product**. That means **responsibility without authority**: the PM is measured by the product's success and makes no excuses about funding, headcount, or direction, while having no direct authority over engineering, design, or sales.\n\nKaul's deck states the role directly: the PM **manages the product from ideation to development to launch to sunset**, **sets vision and strategy**, **sets success metrics and tracks feedback**, **sets pricing and manages P&L**, and **plays to the team's strengths and fills gaps**. The PM sits at the **hub**: finance, marketing, legal, support, sales, development, and customers all connect through the PM.\n\nThe force of the framing is the excuse ban. If the product fails, the PM failed to find a way: to persuade, to re-scope, to escalate in writing, or to change the plan."
            },
            {
              "title": "Good PM / bad PM contrasts",
              "body": "Contrasts worth being able to say out loud:\n\n- Good PMs **know the market, the product, and the competition cold** and define the target and the what. Bad PMs wait to be told what to do.\n- Good PMs **take written positions** on hard calls. Bad PMs voice opinions verbally and blame the powers that be afterward.\n- Good PMs **anticipate serious flaws** and build real solutions. Bad PMs put out fires all day and become gofers for other teams.\n- Good PMs **decompose problems** into parts they can solve. Bad PMs merge every problem into one big one and obsess over matching competitor features instead of customers and revenue."
            },
            {
              "title": "PM skills and challenges",
              "body": "The deck's **fundamental skills**: **customer empathy, influential communication, curiosity, prioritization, analytical skills, ideation and problem solving, market trends and analysis, the ability to make a call with the data available, and high agency**. **IQ and EQ are both critical.**\n\nThe deck's **challenges** follow from the role's shape:\n\n- **Jack of all trades**: the job touches every function at the hub\n- **A role of influence**: no one reports to a PM\n- **The role looks different** at different companies, and even within one company\n- **Context switching** and **ambiguity and cross-functional work** are constant\n- The PM must **manage up, down, and sideways**, and stay a **lifelong learner**\n\nTest trick from the Friday restructure sheet: a question may call the PM a boss. The trap is authority. The PM leads by influence, not by orders."
            },
            {
              "title": "AI literacy, the new core skill",
              "body": "Class 1 adds **AI literacy** as a new fundamental skill. In the deck it has four parts:\n\n- **Evaluate models like vendors**: capabilities, costs, and failure modes, before betting the roadmap on a model\n- **Prototype before you staff**: mock the experience with AI first, before asking a team to build it\n- **Data judgment**: know your training data\n- **Know the limits**: hallucinations, bias, and the calls where only a human may decide\n\nKaul's line, verbatim in spirit: **the PMs who thrive will not be the most technical; they will have the best judgment about the tech.**\n\nThe guest session reinforced the same point from practice: in the AI era the fundamentals resurface (what are we building, why, will someone pay), and **evals are now a core PM skill**: identify pass and fail cases in writing before building, because that is how you train and test a model. Evals can start manually, even on paper."
            },
            {
              "title": "The product journey, AI era",
              "body": "The deck's journey runs **problem, design, decide, development, launch**, and the PM stays with the product through **sunset** as well.\n\nNew for 2026: **AI now works both sides of the arrow**. AI mines reviews, tickets, and calls for ideation, and writes code, copy, and mocks in build.\n\nThe AI-era loop, from the deck slide Ben verified in class: **IDEATE, AI PROTOTYPE, VALIDATE, DEV CYCLE, LAUNCH**. Validate means real users doing real tasks; what passes advances, what fails dies fast. Only the survivors get engineering. The caption's point: **the traditional journey validates AFTER the build; AI moves validation BEFORE it.** Kaul's working rule: **kill ten ideas in a week, so engineering only builds the one that survived.**",
              "workedExample": {
                "title": "Worked example: place validation",
                "body": "Question: in the AI-era journey, what comes right after the AI prototype?\n\nStep 1: recall the loop in order: ideate, prototype, validate, dev cycle, launch.\nStep 2: the prototype is step two, so the next box is validate.\nStep 3: say why it sits there: validation moved before the build, so a failing idea dies before engineering spends on it."
              }
            },
            {
              "title": "Product discovery and innovation",
              "body": "The deck separates **incremental** innovation (small steps in a crowded field) from **category creators**: iPhone, Netflix, Keurig, Docusign, Tesla, Chobani, YouTube, ChatGPT, Gemini. Category creators are a small share of the fastest-growing large companies but account for outsized returns. Creation needs **both** a breakthrough product **and** a breakthrough business model. Startups are better at breakthroughs; big companies are blocked by an inability to see beyond what they sell today.\n\n**Why good companies fail (the Innovator's Dilemma)**: they fail because they are **well managed**. They listen to their best customers, invest where margins are highest, and improve what the mainstream already values.\n\n- **Sustaining innovation**: better on the dimensions mainstream customers already value, sold to the best customers at the best margins\n- **Disruptive innovation**: worse on mainstream measures at first, but cheaper, simpler, or more convenient, sold to the low end or a new market the incumbent ignores. The disk drives case is the deck's example.\n\nThe deck's line: **the decisions that maximize today's business are the ones that forfeit tomorrow's.** On the **S-curve**, the dilemma zone is where the old curve flattens and the new one still looks small: the moment incumbents must choose. The Granola class note adds the guest and lecture color: growth, maturity, then the flattening where disruption hits, and product focus versus job focus (adding more horses to the carriage versus building the automobile)."
            }
          ],
          "examples": [
            {
              "title": "The gofer week",
              "scenario": "A PM's calendar is full of status meetings. Twice this week she dropped her roadmap work to hand-carry requests from a big customer to engineering, and she is now spec'ing a feature purely because the main rival shipped it.",
              "answer": "Two bad PM patterns from Horowitz: firefighting until she becomes a gofer for other teams, and obsessing over matching competitor features instead of customers and revenue. The good PM version: a written position on what the product should do, and problems decomposed into solvable parts.",
              "piece": "good-bad-contrasts",
              "principle": "bad-pm-patterns"
            },
            {
              "title": "Whose slip is it?",
              "scenario": "A launch date slips by a month. In the review, the PM says: engineering never told me, and anyway I do not control their priorities.",
              "answer": "Under the CEO of the product framing, the slip is the PM's problem. Responsibility without authority means no excuses about other teams: the PM's job was to persuade, re-scope, escalate in writing, or change the plan.",
              "piece": "responsibility-without-authority",
              "principle": "responsibility-without-authority"
            },
            {
              "title": "Chatbot because rivals",
              "scenario": "A meditation app team proposes an AI chat companion. Their deck's first slide is a screenshot of two competitors' chatbots. Nobody can say what users would hire the chat to do.",
              "answer": "The strategic lever question is unanswered: what job does the AI feature do for the customer, separate from the job the app already does? Without that answer this is feature matching, not strategy.",
              "piece": "ai-strategic-lever",
              "principle": "ai-job-first"
            },
            {
              "title": "Better and ignored",
              "scenario": "A new offering launches worse than the incumbent's flagship on the measures mainstream buyers rank first, but it is much cheaper and simpler, and customers the incumbent never served adopt it fast.",
              "answer": "Disruptive innovation in the deck's terms: worse on mainstream measures at first, cheaper and simpler, aimed at the low end or a new market the incumbent ignores. It is not a sustaining improvement, which would be better on the dimensions mainstream customers already value.",
              "piece": "discovery-innovation",
              "principle": "sustaining-vs-disruptive"
            },
            {
              "title": "The well-managed failure",
              "scenario": "A market leader polls its best customers, funds only the highest-margin improvements they ask for, posts record satisfaction, and three years later loses the market to a simpler entrant it had dismissed as too small.",
              "answer": "The Innovator's Dilemma: the leader failed because it was well managed. Listening to best customers and investing at the highest margins are exactly the decisions that maximize today's business and forfeit tomorrow's, while the new S-curve still looks small in the dilemma zone.",
              "piece": "discovery-innovation",
              "principle": "innovators-dilemma"
            },
            {
              "title": "Prototype before staffing",
              "scenario": "Before requesting two engineers for a quarter, a PM mocks the full AI experience herself, puts it in front of real users doing real tasks, and kills the idea in a week when users fail the core task.",
              "answer": "Two deck behaviours at once: AI literacy (prototype before you staff) and the AI-era journey (ideate, prototype, validate before build). The idea died in validation, so engineering only builds survivors.",
              "piece": "product-journey",
              "principle": "validate-before-build"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Call the pattern",
              "prompt": "A PM writes a one page position arguing the team should NOT build the integration the CEO asked for, with the customer evidence attached. Which good PM behaviour is this?",
              "solution": "Taking a written position on a hard call. Good PMs commit positions to writing, especially when the position is unpopular, so the reasoning can be examined and the call owned.",
              "selfExplain": "Why does writing it down change the quality of the call?"
            },
            {
              "rung": "full",
              "title": "Rewrite the bad week",
              "prompt": "Rewrite this PM's week as the good PM version, in three short lines: 'Merged the churn problem, the pricing problem, and the onboarding problem into one initiative. Spent Thursday firefighting a server outage's customer fallout. Copied the rival's new dashboard.'",
              "solution": "Decompose: split the merged initiative into separate problems (churn, pricing, onboarding) that can each be solved and measured. Anticipate: have a real solution and comms plan ready for predictable flaws instead of a day of firefighting. Customers over features: evaluate the rival's dashboard against what your customers hire your product to do and what it does to revenue, not as a copying instruction."
            },
            {
              "rung": "full",
              "title": "Dilemma verdict",
              "prompt": "A profitable incumbent sees a cheap, simpler entrant serving customers it does not want, with margins it would never accept. Its board votes to keep funding only improvements its best customers request. Write the deck's verdict in two lines: what kind of innovation the entrant is, and why the board's sensible vote is the risk.",
              "solution": "The entrant is disruptive innovation: worse on mainstream measures at first, cheaper and simpler, for a market the incumbent ignores. The board's vote is the Innovator's Dilemma in action: well-managed decisions (best customers, highest margins) maximize today's business and forfeit tomorrow's, especially while the new S-curve still looks small."
            }
          ],
          "questions": [
            {
              "id": "role-q01",
              "type": "mc",
              "prompt": "What does Horowitz mean by calling the PM the CEO of the product?",
              "options": [
                "The PM owns the product's success and makes no excuses, without having authority over the team",
                "The PM has final budget authority over the product team",
                "The PM manages the engineers who build the product",
                "The PM presents the product to the board each quarter"
              ],
              "answer": 0,
              "principle": "responsibility-without-authority",
              "difficulty": 1,
              "feedback": {
                "step": "The definition step: separate ownership from authority.",
                "why": "The essay's point is responsibility without authority: measured by the product's success, excused by nothing, in command of no one.",
                "cue": "The word CEO is doing metaphor work. Ask what the PM owns versus what the PM controls."
              }
            },
            {
              "id": "role-q02",
              "type": "mc",
              "prompt": "A PM says: 'The launch failed because marketing never gave me the launch plan and I cannot make them.' Under the course reading, this is:",
              "options": [
                "A fair defence, since the PM lacks authority",
                "A bad PM pattern: the excuse the CEO of the product framing rules out",
                "Good escalation practice",
                "A resourcing problem for the VP to solve"
              ],
              "answer": 1,
              "principle": "responsibility-without-authority",
              "difficulty": 2,
              "feedback": {
                "step": "Apply the excuse ban to the scenario.",
                "why": "Responsibility without authority means the PM finds a way: persuade, re-scope, escalate in writing, or change the plan. Blaming another team is the named failure.",
                "cue": "Listen for an excuse about another team's behaviour. That is the tell."
              }
            },
            {
              "id": "role-q03",
              "type": "mc",
              "prompt": "Which behaviour does the essay praise in a good PM facing a hard call?",
              "options": [
                "Voicing a strong opinion in the meeting so people remember it",
                "Waiting for the data team to decide",
                "Taking a written position that can be examined afterward",
                "Matching the loudest stakeholder's view"
              ],
              "answer": 2,
              "principle": "written-positions",
              "difficulty": 1,
              "feedback": {
                "step": "Pick the contrast the essay states directly.",
                "why": "Good PMs take written positions on hard calls; bad PMs voice opinions verbally and blame the powers that be afterward.",
                "cue": "Written versus verbal is the axis this contrast turns on."
              }
            },
            {
              "id": "role-q04",
              "type": "mc",
              "prompt": "A PM merges churn, pricing, and onboarding into one giant initiative because 'they are all growth.' The essay's diagnosis:",
              "options": [
                "Good systems thinking",
                "A sign the PM needs a bigger team",
                "Correct, since growth is one metric",
                "A bad PM pattern: merging every problem into one big problem instead of decomposing it"
              ],
              "answer": 3,
              "principle": "decompose-problems",
              "difficulty": 2,
              "feedback": {
                "step": "Name the failure: problems merged instead of decomposed.",
                "why": "Good PMs decompose problems into solvable parts. One merged initiative cannot be solved, staffed, or measured.",
                "cue": "When everything is one problem, nothing in it can be acted on. That is the cue."
              }
            },
            {
              "id": "role-q05",
              "type": "mc",
              "prompt": "A PM spends most days relaying requests between sales and engineering and putting out fires. The essay calls this becoming:",
              "options": [
                "A gofer for other teams",
                "The team's glue",
                "A strong operator",
                "A servant leader"
              ],
              "answer": 0,
              "principle": "bad-pm-patterns",
              "difficulty": 1,
              "feedback": {
                "step": "Match the behaviour to the essay's label.",
                "why": "Bad PMs put out fires all day and become gofers for other teams; good PMs anticipate serious flaws and build real solutions instead.",
                "cue": "Relaying and firefighting are the surface signs; the label is about who the PM ends up working for."
              }
            },
            {
              "id": "role-q06",
              "type": "mc",
              "prompt": "According to the essay, a good PM knows which three things cold?",
              "options": [
                "The roadmap, the backlog, and the sprint plan",
                "The market, the product, and the competition",
                "The budget, the headcount, and the OKRs",
                "The CEO, the board, and the investors"
              ],
              "answer": 1,
              "principle": "know-it-cold",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the essay's knowledge standard.",
                "why": "Good PMs know the market, the product, and the competition cold, and use that knowledge to define the target and the what instead of waiting to be told.",
                "cue": "The three are all outside the building or in the product itself, not internal process artefacts."
              }
            },
            {
              "id": "role-q07",
              "type": "mc",
              "prompt": "Put the product journey in the order the syllabus frames it:",
              "options": [
                "Build, discovery, define, launch",
                "Launch, discovery, build, define",
                "Discovery, define, build, launch",
                "Define, launch, discovery, build"
              ],
              "answer": 2,
              "principle": "product-journey-order",
              "difficulty": 1,
              "feedback": {
                "step": "Sequence the journey: discovery to launch.",
                "why": "Discovery finds the job, define sets the target and the what, build executes against it, launch meets the market. Any other order builds before knowing the job.",
                "cue": "The syllabus phrase is 'discovery to launch'. Anchor on its two ends."
              }
            },
            {
              "id": "role-q08",
              "type": "mc",
              "prompt": "A team proposes an AI summary feature for a notes app. Their only argument: 'Every rival notes app shipped one this year.' Using Class 1's AI as a strategic lever lens, the missing step is:",
              "options": [
                "A cost estimate for the AI vendor",
                "Checking whether engineering has capacity",
                "A/B testing the button colour",
                "Naming the job the AI feature does for the customer, separate from the job the app already does"
              ],
              "answer": 3,
              "principle": "ai-job-first",
              "difficulty": 2,
              "feedback": {
                "step": "Ask the job question before the build question.",
                "why": "The lever lens judges an AI feature by the customer job it does. A rival's roadmap is not a job; this is also the essay's feature matching trap in AI dress.",
                "cue": "When the argument is 'rivals have it,' the missing piece is the customer's job, not more competitor research."
              }
            },
            {
              "id": "role-q09",
              "type": "production",
              "prompt": "In two or three sentences, write the good PM response to this situation: your product's onboarding completion is falling, and a senior leader tells you to copy the market leader's onboarding flow exactly.",
              "solution": "Model answer: Refuse the copy instruction in writing, with reasoning. State what is known about your own customers and where they drop off (know the market and product cold), decompose the fall into its separate causes, and propose the flow your evidence supports, with the metric that will judge it. Matching a competitor's features instead of serving your customers and revenue is the named bad PM pattern.",
              "principle": "written-positions",
              "difficulty": 3,
              "feedback": {
                "step": "The response step: written position, own evidence, decomposed problem.",
                "why": "All three good PM behaviours appear: a written position on a hard call, knowledge of your own market and product, and decomposition instead of one merged fix. Copying the leader skips all three.",
                "cue": "Pressure from a senior leader plus a rival's feature is the classic setup for feature matching. Reach for the written position."
              }
            },
            {
              "id": "role-q10",
              "type": "mc",
              "prompt": "Which list matches the deck's fundamental PM skills?",
              "options": [
                "Customer empathy, influential communication, curiosity, prioritization, analytical skills, and high agency",
                "Budget ownership, hiring authority, and sprint management",
                "Only technical skills: SQL, prototyping tools, and model tuning",
                "Sales quota, pricing authority, and board reporting"
              ],
              "answer": 0,
              "principle": "pm-skills",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the deck's skills slide, not a generic PM job ad.",
                "why": "The deck lists customer empathy, influential communication, curiosity, prioritization, analytical skills, ideation and problem solving, market analysis, making a call with the data available, and high agency, with IQ and EQ both critical.",
                "cue": "If an option gives the PM direct authority or a quota, it contradicts responsibility without authority."
              }
            },
            {
              "id": "role-q11",
              "type": "mc",
              "prompt": "In the AI-era journey slide, what comes right after the AI prototype?",
              "options": [
                "Launch, so real users can judge the finished product",
                "Development, so engineering builds the prototype properly",
                "Validate: real users doing real tasks, and only survivors advance",
                "A pricing review with finance"
              ],
              "answer": 2,
              "principle": "validate-before-build",
              "difficulty": 1,
              "feedback": {
                "step": "Run the loop in order: ideate, prototype, validate, dev cycle, launch.",
                "why": "Validation moved before the build in the AI-era journey. The prototype is tested by real users on real tasks, and only what passes gets engineering.",
                "cue": "The loop's own name gives it away: ideate, prototype, then validate."
              }
            },
            {
              "id": "role-q12",
              "type": "mc",
              "prompt": "Which best illustrates category creation, not incremental innovation, in the deck's terms?",
              "options": [
                "A phone that is slightly faster than last year's model",
                "Netflix streaming versus Blockbuster rentals: a new category with a new business model",
                "A cheaper plan for the same product",
                "A laptop with a larger screen"
              ],
              "answer": 1,
              "principle": "category-creation",
              "difficulty": 1,
              "feedback": {
                "step": "Ask whether a new category and business model appeared, or only a better version of the same thing.",
                "why": "The deck's category creators (iPhone, Netflix, Keurig, Tesla, ChatGPT and others) create a category and take outsized returns; a faster or cheaper version of the same product is incremental.",
                "cue": "Better version of the same thing is incremental. New category plus new model is creation."
              }
            },
            {
              "id": "role-q13",
              "type": "mc",
              "prompt": "What does the S-curve describe, and where is the dilemma zone?",
              "options": [
                "A pricing model; the zone is the discount window",
                "A hiring funnel; the zone is the interview stage",
                "A sales forecast; the zone is the fourth quarter",
                "How products and companies grow, mature, and flatten; the dilemma zone is where the old curve flattens while the new curve still looks small"
              ],
              "answer": 3,
              "principle": "s-curve",
              "difficulty": 2,
              "feedback": {
                "step": "Place the curve first (growth, maturity, flattening), then locate the choice point.",
                "why": "In the deck, the S-curve is growth, maturity, then flattening where disruption hits. The dilemma zone is that flattening point, when the new curve still looks too small to chase.",
                "cue": "Flattening old curve plus small new curve is the incumbent's hard moment."
              }
            },
            {
              "id": "role-q14",
              "type": "mc",
              "prompt": "According to the deck, why do good companies fail under the Innovator's Dilemma?",
              "options": [
                "Because they are well managed: they listen to their best customers and invest where margins are highest, so they miss the disruptive curve",
                "Because their engineers stop innovating",
                "Because they spend too little on marketing",
                "Because startups always have more capital"
              ],
              "answer": 0,
              "principle": "innovators-dilemma",
              "difficulty": 2,
              "feedback": {
                "step": "State the paradox plainly: good management is the cause.",
                "why": "Listening to best customers and funding the highest margins maximize today's business and forfeit tomorrow's. Disruption starts worse, cheaper, and ignored, so the well-run process filters it out.",
                "cue": "If the explanation blames bad management, it is the opposite of the deck's claim."
              }
            },
            {
              "id": "role-q15",
              "type": "mc",
              "prompt": "A new entrant is worse than incumbents on the measures mainstream buyers value most, but cheaper and simpler, and ignored low-end buyers adopt it. This is:",
              "options": [
                "Sustaining innovation",
                "A pricing error",
                "Disruptive innovation",
                "Category maintenance"
              ],
              "answer": 2,
              "principle": "sustaining-vs-disruptive",
              "difficulty": 2,
              "feedback": {
                "step": "Check the three disruptive markers: worse at first, cheaper or simpler, ignored segment.",
                "why": "That pattern is the deck's definition of disruptive innovation. Sustaining innovation is better on the dimensions mainstream customers already value.",
                "cue": "Disruption does not start better. It starts worse, cheaper, and ignored."
              }
            },
            {
              "id": "role-q16",
              "type": "mc",
              "prompt": "Which behaviour is AI literacy as the deck defines it?",
              "options": [
                "Being the most technical person on the team",
                "Evaluating models like vendors, prototyping before staffing, knowing your training data, and knowing when only a human may decide",
                "Outsourcing every judgment call to the model",
                "Shipping the model with the highest benchmark score"
              ],
              "answer": 1,
              "principle": "ai-literacy",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the four parts of the deck's AI literacy skill.",
                "why": "AI literacy is judgment about the tech: vendor-style evaluation, prototype first, data judgment, and known limits including hallucinations and bias. The deck says the winners will not be the most technical.",
                "cue": "Most technical PM wins is the trap the deck names directly."
              }
            },
            {
              "id": "role-q17",
              "type": "production",
              "prompt": "In two or three sentences, explain Kaul's line that AI moves validation before the build, using the kill-ten-ideas rule.",
              "solution": "Model answer: In the traditional journey the product is built first and validated after, when fixing is expensive. In the AI-era loop the PM prototypes with AI and validates with real users on real tasks before engineering starts, so weak ideas die cheaply. Kill ten ideas in a week, so engineering only builds the one that survived.",
              "principle": "validate-before-build",
              "difficulty": 3,
              "feedback": {
                "step": "Contrast the two journeys, then state the resource consequence.",
                "why": "The move is sequencing, not tooling: validation before development changes what engineering time is spent on, which is why the kill rate is a feature, not a failure.",
                "cue": "After the build versus before the build is the whole axis."
              }
            }
          ]
        },
        {
          "id": "class1-jtbd",
          "title": "Jobs to Be Done",
          "pieces": [
            {
              "id": "hire-and-fire",
              "name": "Hire and fire",
              "fn": "Customers do not buy products; they hire them to make progress on a job in a specific circumstance, and they fire them when something does the job better. The deck's wording: do not ask what customers want; ask what progress they are trying to make. Find the struggling moment: that is where innovation starts.",
              "predict": "A commuter stops buying a breakfast sandwich and starts buying a thick milkshake for the drive. In JTBD language, what just happened?"
            },
            {
              "id": "job-dimensions",
              "name": "The three dimensions of a job",
              "fn": "Every job has a functional dimension (the task), an emotional dimension (how the buyer wants to feel), and a social dimension (how the buyer wants to be seen).",
              "predict": "A parent buys the same milkshake in the afternoon that a commuter buys in the morning. Which dimensions are probably doing the work in the afternoon purchase?"
            },
            {
              "id": "milkshake-study",
              "name": "The milkshake study",
              "fn": "Researchers stopped asking how to improve the shake and asked what job buyers hired it for. Morning commuters hired it to survive a long boring drive; afternoon parents hired it as a treat that lets them say yes to their kids. The deck's other hires: a banana (gone quickly, hungry after an hour), donuts and bagels (messy and challenging), and a Snickers (too much guilt).",
              "predict": "Why did asking customers 'how can we make the shake better?' fail, while watching when shakes were bought worked?"
            },
            {
              "id": "job-defines-competition",
              "name": "The job defines the competition",
              "fn": "Competition is whatever the customer could hire instead for the same job. For the morning shake that was bananas, bagels, and coffee, not other shakes.",
              "predict": "A video app says its competition is other video apps. What does the job lens say to check before believing that?"
            },
            {
              "id": "four-forces",
              "name": "The four forces of a hire",
              "fn": "Four forces decide whether a hire happens: Push (frustration with today), Pull (appeal of the new), Anxiety (what if it fails), and Habit (comfort with the present). A hire happens only when Push plus Pull outweigh Anxiety plus Habit.",
              "predict": "A customer says the new product is clearly better and still does not switch. Which forces are probably winning, and what evidence would tell you?"
            },
            {
              "id": "customer-data-not-enough",
              "name": "Customer data is not enough",
              "fn": "The deck's summary point: customer data alone is not enough, and correlation is not causation. Start with the end in mind: name the experience the customer should have, then work backwards to select the technology and the solution (the working-backwards idea behind a PRD). Observe and shadow customers instead of only asking them what to build.",
              "predict": "Two measures rise together in a clean dashboard chart. What does the deck say that chart does and does not prove?"
            }
          ],
          "lesson": [
            {
              "title": "Hire and fire",
              "body": "Christensen's **Jobs to Be Done** idea, as the prep brief states it: customers do not buy products, they **hire** them to make progress on a **job** in a specific circumstance, and they **fire** them when something does the job better.\n\nTwo consequences follow. First, the unit of analysis is the **job in its circumstance**, not the product category and not the customer's demographics. Second, switching is always a job verdict: the customer found a better hire, which may come from a completely different category."
            },
            {
              "title": "The three dimensions of a job",
              "body": "A job has three dimensions:\n\n- **Functional**: the practical task to get done.\n- **Emotional**: how the buyer wants to feel.\n- **Social**: how the buyer wants to be seen by others.\n\nProducts usually compete on the functional dimension and lose on the other two. The afternoon milkshake purchase in the next part is mostly emotional and social; the morning one is mostly functional. Same product, different jobs."
            },
            {
              "title": "The milkshake study",
              "body": "A fast food chain asked customers how to improve its milkshakes and got nowhere. Researchers instead watched **when** shakes were bought and asked what job the buyer was hiring the shake to do.\n\n- **Morning commuters** hired it to survive a long, boring drive: thick, slow to drink, one handed, no crumbs, filling until lunch.\n- **Afternoon parents** hired the same product for a different job: a treat that lets them say yes to their kids and feel like good parents.\n\nFixes followed the job, not the recipe: thicker consistency to last longer, a smaller straw to slow consumption, and fruit added to address the guilt dimension for parents (class note). Asking about the product produced product answers; asking about the job produced design answers.",
              "workedExample": {
                "title": "Worked example: name the real competition",
                "body": "Question: what competes with the morning milkshake?\n\nStep 1: name the job. Survive a long, boring, one handed drive and stay full until lunch.\nStep 2: list everything a commuter could hire for that job: a banana (too fast, still hungry), a bagel (crumbs, two hands), coffee (not filling), a breakfast sandwich (messy).\nStep 3: conclude. The shake's competition is bananas, bagels, and coffee. Other chains' shakes do not appear, because they are not what the commuter is choosing between at 7am."
              }
            },
            {
              "title": "The job defines the competition",
              "body": "The brief's one line version: **the job, not the product category or the customer's demographics, defines the competition and the design brief.**\n\nApplied as a test: before accepting any claim about who the competition is, ask what job the customer is hiring for, in what circumstance. Anything hirable for that job is competition, including doing nothing. Anything in your category that serves a different job is not."
            },
            {
              "title": "The four forces of a hire",
              "body": "The deck gives JTBD a switching model. **Four forces** decide every hire:\n\n- **Push**: frustration and pain with the current solution\n- **Pull**: the appeal of the new solution\n- **Anxiety**: what if the new one fails, costs too much, or embarrasses me\n- **Habit**: the comfort of the present, even when it is mediocre\n\n**A hire happens only when Push plus Pull outweigh Anxiety plus Habit.** That explains the common puzzle of a clearly better product that nobody switches to: the left side won on merit and still lost to anxiety and habit.\n\nThe deck's **Job Question**, in three parts: (1) what job is the customer hiring us for, naming the progress, not the product; (2) what do they hire instead today; (3) where does the current solution fail them, because the gap is the opportunity. And its instruction: **find the struggling moment; that is where innovation starts.** Organize around the job, not the product: Netflix did the Friday-night job better instead of building a better video store."
            },
            {
              "title": "Customer data is not enough",
              "body": "Kaul's summary slide lists this as its own Class 1 point: **customer data is not enough**, with the deck's shorthand that **correlation is not causation**.\n\nTwo measures rising together is a clue, not proof. You still need a reason and a test before the data picks the product. A clean chart is the trap.\n\nThe positive version is **customer centricity**: **start with the end in mind** (the PRD idea), name the experience the customer should have first, then **work backwards** to select the technology and the solution. The class note adds the field method: do not ask customers what to build; **shadow and observe them** instead. The PM is the bridge between the customer experience and engineering execution."
            }
          ],
          "examples": [
            {
              "title": "Two shakes, two jobs",
              "scenario": "At 7:15am a commuter buys the thickest shake on the menu and sips it for the whole drive. At 4pm a father buys the smallest shake for his daughter and smiles when she lights up.",
              "answer": "Same product, two jobs. Morning: a functional job, survive the drive and stay full, one handed. Afternoon: an emotional and social job, a treat that lets a parent say yes and feel like a good parent. Improving 'the shake' for one job (thicker, slower) can hurt the other.",
              "piece": "job-dimensions",
              "principle": "job-dimensions"
            },
            {
              "title": "The fired app",
              "scenario": "Users keep deleting a budgeting app and going back to a shared spreadsheet with their partner, even though the spreadsheet has none of the app's features.",
              "answer": "The app was fired: the spreadsheet does the actual job better. The job was probably not 'track spending' in the abstract but something like 'agree on money with my partner without a fight', a social and emotional job the app never addressed.",
              "piece": "hire-and-fire",
              "principle": "hire-and-fire"
            },
            {
              "title": "Better, and still no switch",
              "scenario": "Users agree a new tool is faster and cheaper than their current one, praise it in interviews, and almost none of them move over after three months.",
              "answer": "The four forces explain it: Push plus Pull were real but did not outweigh Anxiety (what if migration breaks my work) plus Habit (comfort with the present). The fix is not more features; it is lowering anxiety and habit costs at the struggling moment of switching.",
              "piece": "four-forces",
              "principle": "four-forces"
            },
            {
              "title": "The clean chart",
              "scenario": "A dashboard shows that users who enable a new feature retain far better than users who do not, so the team proposes forcing the feature on for everyone.",
              "answer": "Correlation is not causation: the feature may mark already-engaged users rather than create retention. The deck's point is that customer data alone is not enough; name the customer experience first, work backwards, and test the causal claim before building on it.",
              "piece": "customer-data-not-enough",
              "principle": "correlation-not-causation"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Spot the job",
              "prompt": "A gym member says: 'I do not come for the equipment. I come because at 6am nobody can ask me for anything.' Name the dimensions in play.",
              "solution": "The stated draw is emotional (an hour that is hers, relief from demands) with a social edge (how she sees herself), not the functional job of exercise equipment. A competitor for that job is anything that gives her an unreachable hour, not just other gyms.",
              "selfExplain": "Why does this change what the gym should improve?"
            },
            {
              "rung": "full",
              "title": "Write the job",
              "prompt": "A student hires a flashcard app every evening before a quiz. Write the job statement: the progress being made, the circumstance, and the dimensions. Then name two non-obvious competitors for that job.",
              "solution": "Model answer: Job: 'When I have 20 tired minutes the night before a quiz, help me find out what I do not know so I walk in calm.' Functional: expose gaps. Emotional: calm, confidence. Social: not looking unprepared in class. Non-obvious competitors: a study partner quizzing her (different category), re-reading notes (the do-nothing hire), and sleep itself, hired for the calm."
            },
            {
              "rung": "full",
              "title": "Force balance",
              "prompt": "A team has strong Push (users hate the manual workaround) and strong Pull (the demo delights), but signups stall at the payment step. Name the two forces most likely blocking the hire, and one design move aimed at each.",
              "solution": "Anxiety and Habit. Anxiety: fear the paid tool will fail or be hard to leave, answered with a trial, a guarantee, or visible pass and fail evals before commitment. Habit: comfort with the manual workaround, answered by importing the user's existing work so switching does not mean starting over. Push plus Pull only produce a hire when they outweigh Anxiety plus Habit."
            }
          ],
          "questions": [
            {
              "id": "jtbd-q01",
              "type": "mc",
              "prompt": "In Jobs to Be Done, what does a customer actually do when they 'buy' a product?",
              "options": [
                "They hire the product to make progress on a job in a specific circumstance",
                "They purchase the category leader",
                "They join the product's user segment",
                "They complete the seller's funnel"
              ],
              "answer": 0,
              "principle": "hire-and-fire",
              "difficulty": 1,
              "feedback": {
                "step": "The core definition step.",
                "why": "Customers hire products to make progress on a job and fire them when something does the job better. Category and segment language hides the job.",
                "cue": "If an option talks about categories or segments instead of progress in a circumstance, it is not the JTBD answer."
              }
            },
            {
              "id": "jtbd-q02",
              "type": "mc",
              "prompt": "Why did the morning commuters hire the milkshake instead of a banana or a bagel?",
              "options": [
                "It was the cheapest option on the menu",
                "It was thick, slow to drink, one handed, left no crumbs, and kept them full until lunch, which fit the drive",
                "It had more flavours than the alternatives",
                "It was marketed as a breakfast product"
              ],
              "answer": 1,
              "principle": "milkshake-job",
              "difficulty": 2,
              "feedback": {
                "step": "Match the product's properties to the job's demands.",
                "why": "The job was surviving a long boring drive: the shake's thickness, one handed use, cleanliness, and staying power fit it. Bananas vanish too fast; bagels crumble and need two hands.",
                "cue": "Judge every property against the circumstance (a long drive), not against other shakes."
              }
            },
            {
              "id": "jtbd-q03",
              "type": "mc",
              "prompt": "The afternoon parents in the milkshake study were mainly hiring the shake for:",
              "options": [
                "Nutrition before sports practice",
                "The lowest cost treat available",
                "An emotional and social job: a treat that lets them say yes to their kids and feel like good parents",
                "A functional meal replacement"
              ],
              "answer": 2,
              "principle": "job-dimensions",
              "difficulty": 2,
              "feedback": {
                "step": "Classify the purchase by dimension.",
                "why": "Nothing about the afternoon purchase is functional nutrition; it is about feeling like a good parent and being seen as one. Same product, different job from the morning.",
                "cue": "When the buyer's payoff is a feeling or an identity, you are in the emotional and social dimensions."
              }
            },
            {
              "id": "jtbd-q04",
              "type": "mc",
              "prompt": "According to the job lens, what defines a product's competition?",
              "options": [
                "Every product in the same category",
                "Whatever the sales team names in the CRM",
                "The three largest firms by market share",
                "The job the customer is hiring for: anything hirable for that job, including doing nothing"
              ],
              "answer": 3,
              "principle": "job-defines-competition",
              "difficulty": 1,
              "feedback": {
                "step": "Apply the competition rule.",
                "why": "The job, not the product category or demographics, defines the competition. The morning shake competed with bananas, bagels, and coffee.",
                "cue": "If the option defines competition by category membership, it fails the milkshake test."
              }
            },
            {
              "id": "jtbd-q05",
              "type": "mc",
              "prompt": "A team segments customers by age and income, then asks each segment how to improve the product, and gets useless answers, exactly like the milkshake chain did. The JTBD diagnosis:",
              "options": [
                "They asked about the product inside demographic segments; the useful question is what job the buyer hires the product to do, in what circumstance",
                "The sample size was too small",
                "They should have surveyed non-customers instead",
                "The product needs a rebrand first"
              ],
              "answer": 0,
              "principle": "ask-the-job",
              "difficulty": 2,
              "feedback": {
                "step": "Diagnose the research method, not the sample.",
                "why": "Asking how to improve the product, grouped by demographics, produced product answers. Watching when the product was bought and asking about the job produced design answers.",
                "cue": "Useless improvement answers are the signature of asking about the product instead of the job."
              }
            },
            {
              "id": "jtbd-q06",
              "type": "mc",
              "prompt": "A user fires a meditation app and hires evening walks with a friend instead. What does JTBD conclude?",
              "options": [
                "The app needed more content libraries",
                "The walk does the actual job better, likely calm plus connection, which the app was not hired for or stopped delivering",
                "The pricing page failed",
                "The user was never in the target segment"
              ],
              "answer": 1,
              "principle": "hire-and-fire",
              "difficulty": 2,
              "feedback": {
                "step": "Read the switch as a job verdict.",
                "why": "Firing means a better hire appeared. The walk bundles the functional job (wind down) with emotional and social jobs (calm, company). Feature counts inside the old category miss the reason.",
                "cue": "A switch to a different category is the loudest signal that the job was misread."
              }
            },
            {
              "id": "jtbd-q07",
              "type": "mc",
              "prompt": "Which of these is a job statement in JTBD form?",
              "options": [
                "Millennials who value convenience",
                "Users who open the app twice a week",
                "When my train is delayed, help me rebook fast so I do not miss the meeting I am travelling for",
                "Premium travellers with high income"
              ],
              "answer": 2,
              "principle": "job-statement-form",
              "difficulty": 1,
              "feedback": {
                "step": "Check the form: circumstance plus progress.",
                "why": "A JTBD statement names the circumstance and the progress sought. The other options are demographics, usage stats, and segments, none of which say what job is being hired for.",
                "cue": "Look for 'when [circumstance], help me [progress]'. That shape is the tell."
              }
            },
            {
              "id": "jtbd-q08",
              "type": "mc",
              "prompt": "A product team improves thickness and adds a faster pickup lane for its morning shake line, and morning sales rise while afternoon sales fall. The best explanation:",
              "options": [
                "Random variation in demand",
                "Afternoon customers dislike improvements",
                "The price must have changed",
                "The two dayparts are different jobs; the changes served the commuter job and hurt the treat job"
              ],
              "answer": 3,
              "principle": "milkshake-job",
              "difficulty": 3,
              "feedback": {
                "step": "Explain a split result with two jobs, not one product.",
                "why": "Thicker and slower serves 'survive the drive'; it works against 'a quick treat that makes a kid happy'. One product, two jobs, opposite effects.",
                "cue": "When one change helps one group and hurts another buying the same product, suspect two different jobs."
              }
            },
            {
              "id": "jtbd-q09",
              "type": "production",
              "prompt": "A campus app lets students trade textbooks. Its team says the competition is the campus bookstore. Write a two sentence JTBD correction: name the job students hire the app for, and the real competition that follows from it.",
              "solution": "Model answer: Students hire the app to get the exact book they need, cheaply, before the first homework is due (functional), without feeling ripped off (emotional). The real competition is anything hirable for that job: the bookstore, older students' group chats, library reserves, shared PDFs, and doing without the book. The bookstore is one rival hire among several, and not the one that sets the design brief.",
              "principle": "job-defines-competition",
              "difficulty": 3,
              "feedback": {
                "step": "The correction step: job first, competition second.",
                "why": "Once the job is stated with its circumstance (before the first homework) and dimensions, the competition set expands beyond the named category rival, which is exactly the milkshake lesson.",
                "cue": "If your competition list could have been written without mentioning the customer, you skipped the job."
              }
            },
            {
              "id": "jtbd-q10",
              "type": "mc",
              "prompt": "A hire happens, in the deck's four forces model, when:",
              "options": [
                "Push plus Pull outweigh Anxiety plus Habit",
                "The product has the most features in its category",
                "Anxiety is zero",
                "Habit has been banned by policy"
              ],
              "answer": 0,
              "principle": "four-forces",
              "difficulty": 1,
              "feedback": {
                "step": "Write the inequality before choosing.",
                "why": "Push (pain with today) and Pull (appeal of the new) must beat Anxiety (what if it fails) and Habit (comfort with the present). Feature counts are not in the model.",
                "cue": "If Push and Pull are strong but there is no hire, look for Anxiety or Habit winning."
              }
            },
            {
              "id": "jtbd-q11",
              "type": "mc",
              "prompt": "Which set is the deck's four forces?",
              "options": [
                "Price, place, promotion, product",
                "Push, Pull, Anxiety, Habit",
                "Awareness, interest, desire, action",
                "Speed, cost, quality, scope"
              ],
              "answer": 1,
              "principle": "four-forces",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the switching model, not a marketing mix.",
                "why": "The four forces are Push, Pull, Anxiety, and Habit. They describe the customer's internal contest at the moment of switching.",
                "cue": "Two forces move toward the new, two hold the customer in the present."
              }
            },
            {
              "id": "jtbd-q12",
              "type": "mc",
              "prompt": "Two measures rise together in the product data, week after week. The deck's verdict on that evidence alone:",
              "options": [
                "It proves the first measure causes the second",
                "It is enough to pick the roadmap",
                "Correlation is not causation: it is a clue that still needs a reason and a test",
                "It should be ignored entirely"
              ],
              "answer": 2,
              "principle": "correlation-not-causation",
              "difficulty": 1,
              "feedback": {
                "step": "Separate co-movement from proof.",
                "why": "Customer data is not enough on its own. A clean chart can mark a third cause or an already-engaged segment; the deck asks for the experience first, worked backwards, and a test.",
                "cue": "A clean chart is the trap. Data alone does not pick the product."
              }
            },
            {
              "id": "jtbd-q13",
              "type": "mc",
              "prompt": "What is the deck's three-part Job Question?",
              "options": [
                "Who is the user, what is their budget, when do they buy",
                "What job are they hiring for (the progress, not the product), what do they hire instead today, and where does the current solution fail them",
                "What features do they want, in what order, at what price",
                "Which segment are they in, and how big is it"
              ],
              "answer": 1,
              "principle": "job-question",
              "difficulty": 2,
              "feedback": {
                "step": "Recite the question in job language: progress, current hire, failure gap.",
                "why": "The opportunity lives in the third part: where the current solution fails them. Feature and segment questions skip the job entirely.",
                "cue": "Progress first, current hire second, gap third."
              }
            },
            {
              "id": "jtbd-q14",
              "type": "mc",
              "prompt": "In the deck's milkshake detail, why did commuters not hire a banana or a bagel for the drive instead?",
              "options": [
                "They cost more than the shake",
                "They were not sold in the morning",
                "The banana was gone quickly and left them hungry, and donuts and bagels were messy and hard to manage on the drive",
                "Shakes were discounted for commuters"
              ],
              "answer": 2,
              "principle": "milkshake-job",
              "difficulty": 2,
              "feedback": {
                "step": "Judge each rival hire against the drive circumstance.",
                "why": "The job was a long, boring, one-handed drive with fullness until lunch. The banana failed on duration, the bagel and donuts on mess and handling, and the Snickers on guilt in the deck's telling.",
                "cue": "Every rival fails on a job dimension, not on shake quality."
              }
            },
            {
              "id": "jtbd-q15",
              "type": "mc",
              "prompt": "'Start with the end in mind and work backwards' means, in the deck's customer centricity point:",
              "options": [
                "Write the launch press release last",
                "Name the experience the customer should have first, then select the technology and solution that produce it",
                "Copy the market leader's roadmap in reverse",
                "Set the ship date, then cut scope to fit it"
              ],
              "answer": 0,
              "principle": "work-backwards",
              "difficulty": 2,
              "feedback": {
                "step": "Identify what is fixed first: the customer's experience.",
                "why": "Working backwards starts from the desired customer experience (the PRD idea) and steps back to tech and build choices. Schedules and rival roadmaps are not the starting point.",
                "cue": "Experience first, technology second."
              }
            },
            {
              "id": "jtbd-q16",
              "type": "production",
              "prompt": "A customer tells you your product is better in every way and still renews the old one. Write a two sentence four-forces diagnosis and the next question you would ask.",
              "solution": "Model answer: Push and Pull are present, the product wins on merit, but Anxiety plus Habit are outweighing them, so no hire happens. The next question targets the blocking forces at the struggling moment: what specifically worries you about switching, and what would the old way have to cost you before you moved?",
              "principle": "four-forces",
              "difficulty": 3,
              "feedback": {
                "step": "Balance the inequality first, then aim the question at the winning side.",
                "why": "A better product losing is the signature of Anxiety and Habit winning. Asking about features adds Pull the customer already grants; asking about fear and comfort finds the actual block.",
                "cue": "Praise without switching always points at the right side of the inequality."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "class2",
      "title": "Class 2 (Thu Nov 5): Product Market Fit, Competitive Landscape and Differentiation",
      "topics": [
        {
          "id": "class2-pmf",
          "title": "Product Market Fit and Target Markets",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 2 deck, mapped to 2026 Class 2. The 2026 lecture and guest session are not held; treat the frameworks as prep, not as 2026 lecture content.",
          "pieces": [
            {
              "id": "pmf-definition",
              "name": "What product market fit is",
              "fn": "PMF means the market's needs are satisfied: users are delighted, acceptance and growth show it, differentiation is clear, and the business model is sustainable. A good product is not automatically a good business.",
              "predict": "A product has glowing reviews and flat revenue. In PMF terms, what is present and what is missing?"
            },
            {
              "id": "three-questions",
              "name": "The three PMF questions",
              "fn": "Do people want it? Would they pay for it? Could I build it? Fit needs all three; each 'no' kills the product a different way.",
              "predict": "A team proves people love a prototype and that it can be built, then discovers nobody will pay. Which question failed, and why do the two passes not rescue it?"
            },
            {
              "id": "target-market-quadrants",
              "name": "Problem size by frequency",
              "fn": "Target markets sort by problem size and frequency: big and frequent is best, small and rare is a trap, and small-frequent plus big-infrequent are both workable.",
              "predict": "A tool solves a tiny annoyance that hits every office worker daily. Trap or workable, and why?"
            },
            {
              "id": "viability",
              "name": "Product viability",
              "fn": "Viability asks whether you can build it at a cost you can recover and grow the market without growing cost at the same rate: margins, cloud and support costs included.",
              "predict": "Every new customer needs two hours of human support. Which viability question does that growth pattern fail?"
            }
          ],
          "lesson": [
            {
              "title": "What product market fit is",
              "body": "The 2025 deck's framing, carried into the 2026 Class 2 topic list: **a good product is not necessarily a good business** (the Des Traynor reading makes the same point). **Product market fit** is present when:\n\n- Market needs are **satisfied** and users show **delight**\n- **Acceptance and growth** are visible in behaviour, not just praise\n- **Differentiation** from alternatives is clear\n- The **business model is sustainable**\n\nMiss any leg and you have a product people admire that the business cannot live on, or a business that sells something nobody loves for long."
            },
            {
              "title": "The three PMF questions",
              "body": "The deck compresses fit into three questions:\n\n- **Do people want it?** (the JTBD question from Class 1: is there a real job?)\n- **Would they pay for it?** (wanting and paying are different verdicts)\n- **Could I build it?** (feasibility at a cost the model survives)\n\nEach failure mode is different: unwanted is a discovery failure, unpaid is a business failure, unbuildable is an execution failure. Naming which question failed tells you which fix to attempt, or whether to stop."
            },
            {
              "title": "Problem size by frequency",
              "body": "Target markets are chosen, and the deck sorts them on two axes: **how big the problem is** and **how often it hits**.\n\n| Problem | Frequency | Verdict |\n|---|---|---|\n| Big | Frequent | Best target |\n| Small | Frequent | Workable (habits, volume) |\n| Big | Infrequent | Workable (high willingness to pay per event) |\n| Small | Rare | The trap |\n\nThe trap quadrant feels safe because the problem is easy to solve, but nobody will pay much, or often, to solve it.",
              "workedExample": {
                "title": "Worked example: place the product",
                "body": "Product: an app that finds your parked car at the airport, used twice a year, saves ten annoying minutes.\n\nStep 1: size. Small problem: ten minutes of annoyance, no money or safety at stake.\nStep 2: frequency. Rare: twice a year.\nStep 3: verdict. Small and rare is the trap quadrant. The product can be excellent and still have no business in it, because willingness to pay is low and occasions are few."
              }
            },
            {
              "title": "Product viability",
              "body": "**Viability** is the business side of fit:\n\n- The **effort to build** it, honestly estimated\n- The **ability to recover cost**: will revenue cover what the product costs to make and run?\n- **Growing the market without growing cost** at the same rate: margins, cloud costs, and support costs decide whether growth helps or hurts\n\nA product that needs heavy human support per customer can grow itself into losses even with real demand. That is a viability failure, not a demand failure, and the fix is different."
            }
          ],
          "examples": [
            {
              "title": "Loved and broke",
              "scenario": "A photo app wins design awards and five star reviews. Three years in, revenue per user is near zero and server costs climb with every new user.",
              "answer": "Good product, no fit: delight and acceptance are present, but the sustainable business model leg is missing, and viability fails because cost grows with the market. This is the Traynor point: not all good products make good businesses.",
              "piece": "pmf-definition",
              "principle": "good-product-not-business"
            },
            {
              "title": "The rare annoyance",
              "scenario": "A founder pitches a premium subscription that reformats conference name badges perfectly. It is used once a year per customer and saves about four minutes.",
              "answer": "Small problem, rare frequency: the trap quadrant. Elegant solution, no market: willingness to pay is tiny and occasions are yearly, so neither price nor volume can carry a business.",
              "piece": "target-market-quadrants",
              "principle": "size-frequency-quadrants"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Which question failed?",
              "prompt": "A meal kit tests brilliantly: families love the food and the kitchen workflow works. At launch pricing, almost nobody subscribes; they say it costs more than the groceries it replaces. Which of the three PMF questions failed?",
              "solution": "'Would they pay for it?' Wanting is proven, building is proven; paying is not. The fix lives in price, portioning, or the target segment, not in more product polish.",
              "selfExplain": "Why does strong evidence on the other two questions not compensate?"
            },
            {
              "rung": "full",
              "title": "PMF verdict",
              "prompt": "Write a four line PMF verdict for this product, one line per test (want, pay, build, viability): a $9 per month app that reminds plant owners to water, with 40,000 happy free users, 300 paying, and near zero running costs.",
              "solution": "Model verdict: Want: weak to moderate: the job is real but small, and free tools and phone alarms do it. Pay: mostly no: 300 of 40,000 converting says the job is not worth $9 to most. Build: yes, trivially. Viability: fine on cost, irrelevant while paying demand is this thin. Conclusion: a feature or a free product, not a business; small and frequent problem, priced as if it were big."
            }
          ],
          "questions": [
            {
              "id": "pmf-q01",
              "type": "mc",
              "prompt": "Which set matches the deck's definition of product market fit?",
              "options": [
                "Needs satisfied and users delighted, acceptance and growth, clear differentiation, and a sustainable business model",
                "High downloads, press coverage, a waitlist",
                "A working prototype and a patent filing",
                "Any product whose users say they like it"
              ],
              "answer": 0,
              "principle": "pmf-definition",
              "difficulty": 1,
              "feedback": {
                "step": "Recall all four legs of the definition.",
                "why": "Fit is a bundle: satisfaction and delight, acceptance and growth, differentiation, and a sustainable model. Press and downloads can exist with none of them.",
                "cue": "If an option can be true while the business dies, it is not the definition."
              }
            },
            {
              "id": "pmf-q02",
              "type": "mc",
              "prompt": "Users praise a product in interviews and use the free tier heavily, but conversion to paid is near zero and the founders call it 'product market fit.' The error:",
              "options": [
                "None, praise plus usage is fit",
                "They tested 'do people want it' and skipped 'would they pay for it'; fit needs all three questions",
                "They should survey more users",
                "They need a referral programme first"
              ],
              "answer": 1,
              "principle": "three-questions",
              "difficulty": 2,
              "feedback": {
                "step": "Identify which of the three questions went untested.",
                "why": "Wanting is not paying. PMF asks want, pay, and build, and each no kills the product a different way.",
                "cue": "Free tier love is evidence about wanting only. Ask which question the evidence actually answers."
              }
            },
            {
              "id": "pmf-q03",
              "type": "mc",
              "prompt": "A tool fixes a small annoyance that occurs once a year. In the size by frequency sort, this target is:",
              "options": [
                "The best target",
                "Workable, because rare events pay premium prices",
                "The trap: small and rare",
                "Workable, because small problems are cheap to solve"
              ],
              "answer": 2,
              "principle": "size-frequency-quadrants",
              "difficulty": 1,
              "feedback": {
                "step": "Place the product on both axes before judging.",
                "why": "Small problem plus rare frequency is the trap: low willingness to pay and few occasions. Cheap to solve does not rescue it.",
                "cue": "Always call both coordinates out loud: size, then frequency. One coordinate alone misleads."
              }
            },
            {
              "id": "pmf-q04",
              "type": "mc",
              "prompt": "Which of these targets is workable despite a small problem size?",
              "options": [
                "A small problem in a shrinking market",
                "A small problem that hits a few people once",
                "A big problem nobody has yet",
                "A small problem that hits millions of people every day"
              ],
              "answer": 3,
              "principle": "size-frequency-quadrants",
              "difficulty": 2,
              "feedback": {
                "step": "Find the quadrant that frequency rescues.",
                "why": "Small and frequent is workable: daily habits and volume can carry a business. Small and rare cannot, and a big problem nobody has is not a market.",
                "cue": "Frequency is the axis that can rescue smallness."
              }
            },
            {
              "id": "pmf-q05",
              "type": "mc",
              "prompt": "A service grows fast, but every new customer adds two hours of support calls and a proportional cloud bill, so losses grow with revenue. This is primarily a failure of:",
              "options": [
                "Viability: the market grows and cost grows with it, so growth does not improve the model",
                "Differentiation",
                "The PMF definition itself",
                "Positioning"
              ],
              "answer": 0,
              "principle": "viability-margins",
              "difficulty": 2,
              "feedback": {
                "step": "Separate demand success from model success.",
                "why": "Viability asks whether cost can be recovered and whether the market can grow without cost growing at the same rate. Demand can be real while the model breaks.",
                "cue": "When growth makes the numbers worse, the failed test is viability, not demand."
              }
            },
            {
              "id": "pmf-q06",
              "type": "mc",
              "prompt": "The Traynor reading assigned for this class is titled 'Not All Good Products Make Good Businesses.' In deck terms, that claim is:",
              "options": [
                "A pricing complaint",
                "The core PMF warning: delight and quality do not imply a sustainable business model",
                "An argument against user research",
                "A claim about engineering quality"
              ],
              "answer": 1,
              "principle": "good-product-not-business",
              "difficulty": 1,
              "feedback": {
                "step": "Connect the reading to the framework it supports.",
                "why": "The lecture uses the reading to separate product quality from fit: a product can be good on every product measure and still lack the business legs of fit.",
                "cue": "The title itself states the gap: product on one side, business on the other."
              }
            },
            {
              "id": "pmf-q07",
              "type": "mc",
              "prompt": "A team can build a product and people say they want it, but the team's own research shows the target customers have no budget line it could ever come from. Which question should stop the project?",
              "options": [
                "Could I build it?",
                "Do people want it?",
                "Would they pay for it?",
                "None; proceed to launch"
              ],
              "answer": 2,
              "principle": "three-questions",
              "difficulty": 2,
              "feedback": {
                "step": "Match the evidence to the question it answers.",
                "why": "No budget line means the pay question fails as posed. Wanting and building passing does not rescue a failed pay test; the segment or the offer has to change.",
                "cue": "'No budget exists' is payment evidence, however enthusiastic the interviews sound."
              }
            },
            {
              "id": "pmf-q08",
              "type": "mc",
              "prompt": "A wedding planning platform is used once per customer, but customers happily pay $400 for it and refer friends for years. In the quadrant sort it is:",
              "options": [
                "The trap, because it is infrequent",
                "Small and frequent",
                "Not a market at all",
                "Workable: a big problem at an infrequent moment, with high willingness to pay per event"
              ],
              "answer": 3,
              "principle": "size-frequency-quadrants",
              "difficulty": 3,
              "feedback": {
                "step": "Call both axes: big problem, infrequent.",
                "why": "Big and infrequent is workable because each event carries high willingness to pay. Frequency is only fatal when the problem is also small.",
                "cue": "Do not read 'infrequent' as 'trap' until you have also called the problem size."
              }
            },
            {
              "id": "pmf-q09",
              "type": "production",
              "prompt": "A startup's app helps landlords screen tenants. Landlords say it saves them from one bad tenant a year, worth about $3,000, and 60 landlords prepay $199 a year. Using the three PMF questions and the quadrant sort, write a three to four sentence fit assessment.",
              "solution": "Model answer: Want: yes, the job is real and expensive when it goes wrong. Pay: yes, prepaid subscriptions at a price far below the $3,000 loss avoided. Build: a screening workflow is buildable, and nothing in the facts says otherwise, so provisionally yes. Quadrant: big problem, infrequent per landlord, the workable high willingness to pay quadrant. Verdict: early evidence of fit, with viability to confirm as support and compliance costs per landlord become clear.",
              "principle": "pmf-verdict",
              "difficulty": 3,
              "feedback": {
                "step": "Run all the tests, then give a verdict with its open risk.",
                "why": "A fit assessment names each question's evidence separately and states which leg is still unproven (here viability), instead of a single thumbs up from enthusiasm.",
                "cue": "Prepays are pay evidence; savings claims are want evidence. Keep the two in separate sentences."
              }
            },
            {
              "id": "pmf-q10",
              "type": "mc",
              "prompt": "Which evidence is acceptance and growth, rather than mere praise?",
              "options": [
                "Users returning weekly without being paid to, and inviting coworkers who also stay",
                "A five star review average",
                "A quote in a tech blog",
                "A high score in a concept survey"
              ],
              "answer": 0,
              "principle": "pmf-definition",
              "difficulty": 2,
              "feedback": {
                "step": "Distinguish behaviour from words.",
                "why": "Acceptance and growth in the deck's definition are behavioural: retention and organic spread. Reviews, quotes, and surveys are praise, which the PMF definition treats as insufficient.",
                "cue": "Ask: did they do something costly (time, reputation, invitations), or only say something nice?"
              }
            }
          ]
        },
        {
          "id": "class2-competitive",
          "title": "Competitive Analysis, Differentiation, and Prototyping Artefacts",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 2 deck, mapped to 2026 Class 2. The 2026 lecture is not held; treat the frameworks as prep, not as 2026 lecture content.",
          "pieces": [
            {
              "id": "competitive-analysis-5-steps",
              "name": "Competitive analysis in five steps",
              "fn": "Identify competitors, analyse their products and services, research their pricing, analyse strengths, weaknesses, and customer feedback, then evaluate their marketing.",
              "predict": "A team lists rivals and screenshots their homepages. Which of the five steps have they done, and which four are missing?"
            },
            {
              "id": "differentiation-levers",
              "name": "Differentiation levers",
              "fn": "Products differentiate on packaging, features, segmentation, customer service and CX, ease of use, time to value, and price.",
              "predict": "Two products have identical features. Name three levers besides features and price that could still separate them."
            },
            {
              "id": "branded-vs-commoditized",
              "name": "Branded and differentiated versus commoditized",
              "fn": "Branded, differentiated products can charge a premium. Commoditized products fall into price wars, because buyers see nothing to choose on except price.",
              "predict": "A category's ads all shout percentage discounts. What does that pattern suggest about differentiation in the category?"
            },
            {
              "id": "wireframe-vs-mockup",
              "name": "Wireframes versus mockups",
              "fn": "A wireframe is a low fidelity skeletal layout. A mockup is a high fidelity static visual of how the product will look. Different fidelity, different questions answered.",
              "predict": "A stakeholder asks 'will users understand this flow?' and is shown a polished mockup. What artefact should they have been shown, and why?"
            }
          ],
          "lesson": [
            {
              "title": "Competitive analysis in five steps",
              "body": "The deck's **competitive analysis** runs in five steps:\n\n1. **Identify competitors** (use the JTBD rule from Class 1: anything hirable for the same job counts)\n2. **Analyse their products and services**\n3. **Research their pricing**\n4. **Analyse strengths, weaknesses, and customer feedback**\n5. **Evaluate their marketing**\n\nStopping at step 1 or 2 is the common failure: a list of logos and screenshots is not an analysis. The pricing, feedback, and marketing steps are where the exploitable facts live."
            },
            {
              "title": "Differentiation levers",
              "body": "The deck's **differentiation levers**:\n\n- **Packaging**\n- **Features**\n- **Segmentation** (serving a group rivals serve generically)\n- **Customer service and CX**\n- **Ease of use**\n- **Time to value** (how fast the customer gets the payoff)\n- **Price**\n\nFeatures are one lever of seven, and the easiest for rivals to copy. Time to value and segmentation are slower to copy because they are built into how the product and company work."
            },
            {
              "title": "Branded and differentiated versus commoditized",
              "body": "The deck's payoff distinction:\n\n- **Branded and differentiated** products can charge a **premium**, because buyers can name a reason to choose them.\n- **Commoditized** products fall into **price wars**, because buyers see nothing to choose on except price.\n\nDifferentiation is therefore not decoration. It is the thing standing between the product and a price war, and it is one of the four legs of product market fit from the previous topic."
            },
            {
              "title": "Wireframes versus mockups",
              "body": "| Artefact | Fidelity | What it is | Question it answers |\n|---|---|---|---|\n| **Wireframe** | Low | A skeletal layout of screens and flow | Does the structure and flow make sense? |\n| **Mockup** | High | A static visual of the finished look | Does it look and feel right? |\n\nShowing a mockup when the open question is about flow wastes the polish and invites comments about colour instead of structure. Match the artefact's fidelity to the question being decided."
            }
          ],
          "matrix": {
            "title": "Wireframe vs Mockup",
            "columns": [
              "Wireframe",
              "Mockup"
            ],
            "rows": [
              "Fidelity",
              "What it shows",
              "Question it answers",
              "When to use it",
              "Classic trap"
            ]
          },
          "examples": [
            {
              "title": "The discount category",
              "scenario": "Every ad in a software category leads with a percentage discount, and buyers in interviews say 'they are all basically the same, so I take the cheapest.'",
              "answer": "A commoditized pattern: no differentiation buyers can name, so competition collapses to price wars. The escape is a lever buyers can feel: time to value, segmentation, or CX, not a deeper discount.",
              "piece": "branded-vs-commoditized",
              "principle": "commoditized-price-wars"
            },
            {
              "title": "Wrong artefact",
              "scenario": "A team is unsure whether new users will understand a five step setup flow. The designer presents a pixel perfect mockup, and the meeting spends 40 minutes on the gradient.",
              "answer": "Wrong fidelity for the question. Flow comprehension is a wireframe question: low fidelity keeps attention on structure and sequence. The mockup invited surface comments and protected the flow from scrutiny.",
              "piece": "wireframe-vs-mockup",
              "principle": "fidelity-matches-question"
            }
          ],
          "sorting": [
            {
              "statement": "Time from signup to first payoff cut from two days to ten minutes",
              "principle": "time-to-value",
              "cue": "The lever is how fast the customer gets the payoff."
            },
            {
              "statement": "A version built only for dental clinics, ignoring all other offices",
              "principle": "segmentation",
              "cue": "Serving one group specifically, rather than everyone generically, is the segmentation lever."
            },
            {
              "statement": "Support answers in five minutes, from a human, at midnight",
              "principle": "customer-service-cx",
              "cue": "The differentiator is the service experience around the product."
            },
            {
              "statement": "Same features as rivals, sold in a bundle with free onboarding",
              "principle": "packaging",
              "cue": "How the offer is packaged and bundled is its own lever."
            }
          ],
          "questions": [
            {
              "id": "comp-q01",
              "type": "mc",
              "prompt": "Which list is the deck's five step competitive analysis, in order?",
              "options": [
                "Survey users, build a prototype, set pricing, launch, advertise",
                "Identify competitors, analyse products and services, research pricing, analyse strengths, weaknesses, and customer feedback, evaluate marketing",
                "Identify competitors, copy their features, undercut pricing, hire their staff, rebrand",
                "Segment the market, write personas, draft user stories, estimate TAM, pitch investors"
              ],
              "answer": 1,
              "principle": "competitive-analysis-steps",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the five steps as a sequence.",
                "why": "The deck's order moves from who they are, to what they sell, to what they charge, to how customers judge them, to how they market. Each later step needs the earlier ones.",
                "cue": "Pricing is step 3, in the middle. If pricing comes first or last in an option, it is not the deck's sequence."
              }
            },
            {
              "id": "comp-q02",
              "type": "mc",
              "prompt": "A team identifies competitors and analyses their products, then writes its differentiation plan. What did they skip that the framework requires first?",
              "options": [
                "Nothing; two steps are enough",
                "A brand workshop",
                "Researching competitor pricing, analysing strengths, weaknesses, and customer feedback, and evaluating competitor marketing",
                "A patent search"
              ],
              "answer": 2,
              "principle": "competitive-analysis-steps",
              "difficulty": 2,
              "feedback": {
                "step": "Count the steps actually performed against five.",
                "why": "They stopped at step 2 of 5. Pricing, feedback, and marketing are where the exploitable facts live; a differentiation plan written without them is guesswork.",
                "cue": "A plan built on two fifths of the evidence should feel unfinished. Count the steps."
              }
            },
            {
              "id": "comp-q03",
              "type": "mc",
              "prompt": "Two rival apps have feature parity. Which of these is still a differentiation lever from the deck's list?",
              "options": [
                "Matching the rival's roadmap faster",
                "Copying the rival's pricing page",
                "A longer feature list next quarter",
                "Time to value: how fast the customer gets the payoff"
              ],
              "answer": 3,
              "principle": "differentiation-levers",
              "difficulty": 1,
              "feedback": {
                "step": "Reach for a lever other than features.",
                "why": "The levers are packaging, features, segmentation, customer service and CX, ease of use, time to value, and price. With features tied, time to value still separates the products.",
                "cue": "Feature parity is the setup. The answer is always another lever, never 'more features'."
              }
            },
            {
              "id": "comp-q04",
              "type": "mc",
              "prompt": "Buyers in a category say every option is basically the same, and the category leader wins by being cheapest. The deck's term and prediction:",
              "options": [
                "Commoditized; price wars follow, because buyers see nothing to choose on except price",
                "Branded and differentiated; premium pricing follows",
                "Product market fit; growth follows",
                "A segmentation success"
              ],
              "answer": 0,
              "principle": "commoditized-price-wars",
              "difficulty": 2,
              "feedback": {
                "step": "Classify the category before predicting its pricing.",
                "why": "When buyers cannot name a difference, the product is commoditized and competition collapses to price. Premium pricing requires a difference buyers can name.",
                "cue": "'All the same, so cheapest wins' is the commoditized signature, word for word."
              }
            },
            {
              "id": "comp-q05",
              "type": "mc",
              "prompt": "The open question in a review is whether users will understand the order of screens in a new checkout. The right artefact to bring is:",
              "options": [
                "A high fidelity mockup, so it looks real",
                "A wireframe: low fidelity and skeletal, matched to a structure and flow question",
                "A pricing table",
                "A press release"
              ],
              "answer": 1,
              "principle": "fidelity-matches-question",
              "difficulty": 1,
              "feedback": {
                "step": "Match fidelity to the question being decided.",
                "why": "Wireframes answer structure and flow questions. A mockup's polish pulls the meeting into colour and type comments while the flow goes unexamined.",
                "cue": "Flow question, low fidelity. Look question, high fidelity."
              }
            },
            {
              "id": "comp-q06",
              "type": "mc",
              "prompt": "A mockup is best described as:",
              "options": [
                "A low fidelity skeletal layout",
                "A clickable prototype with real data",
                "A high fidelity static visual of how the product will look",
                "A written specification of requirements"
              ],
              "answer": 2,
              "principle": "wireframe-vs-mockup",
              "difficulty": 1,
              "feedback": {
                "step": "State the definition exactly.",
                "why": "Mockup equals high fidelity, static, visual. Wireframe equals low fidelity, skeletal. A clickable prototype is a third thing and is not either definition.",
                "cue": "Static and high fidelity belong together; skeletal belongs with the wireframe."
              }
            },
            {
              "id": "comp-q07",
              "type": "mc",
              "prompt": "A startup serves only independent bookstores while its giant rival serves all retail. Which differentiation lever is this?",
              "options": [
                "Price",
                "Packaging",
                "Time to value",
                "Segmentation: serving a group the rival serves generically"
              ],
              "answer": 3,
              "principle": "differentiation-levers",
              "difficulty": 2,
              "feedback": {
                "step": "Name the lever from what changed.",
                "why": "Nothing about features or price changed; the startup narrowed who it serves and can serve them specifically. That is the segmentation lever.",
                "cue": "When the who changes and the what stays, the lever is segmentation."
              }
            },
            {
              "id": "comp-q08",
              "type": "mc",
              "prompt": "Why does the course treat differentiation as a business survival issue rather than a marketing nicety?",
              "options": [
                "Without a difference buyers can name, the product is commoditized and falls into price wars; differentiation is also a leg of product market fit",
                "It makes ads cheaper to produce",
                "It is required for the PRD",
                "Investors demand it in every pitch"
              ],
              "answer": 0,
              "principle": "commoditized-price-wars",
              "difficulty": 3,
              "feedback": {
                "step": "Connect differentiation to its two payoffs.",
                "why": "Differentiation is what lets a branded product charge a premium instead of fighting price wars, and the PMF definition lists clear differentiation as one of its four legs. It is structural, not cosmetic.",
                "cue": "Follow the money: premium versus price war is a P and L difference, not a branding preference."
              }
            },
            {
              "id": "comp-q09",
              "type": "production",
              "prompt": "A meal planning app and its two rivals have the same recipes, lists, and price. Write a three line differentiation plan using three different levers from the deck's list, and name each lever.",
              "solution": "Model answer: Segmentation: build only for households managing diabetes, a group rivals serve generically, with carb aware plans by default. Time to value: first week of meals planned in under five minutes from a photo of the fridge, versus a long preference quiz. Customer service and CX: a human dietitian chat included in the first month, where rivals offer a help centre. Each line uses a different lever (segmentation, time to value, CX), and none of them is 'more recipes', the copied feature.",
              "principle": "differentiation-levers",
              "difficulty": 3,
              "feedback": {
                "step": "The plan step: three levers, none of them features.",
                "why": "Feature parity is the premise, so the plan must move on levers rivals cannot copy by shipping: who is served, how fast value arrives, and the service around the product.",
                "cue": "If every line of your plan could be answered by a rival's next release, you stayed on the features lever."
              }
            }
          ]
        },
        {
          "id": "class2-prd",
          "title": "The PRD: Storybook and Compass",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 2 deck. Note the spine difference: in 2025 the PRD was the running assignment; the 2026 syllabus lists no PRD assignment (its spine is Critique, Metrics, two quizzes, Final). Treat this topic as framework literacy, not as a 2026 deliverable spec.",
          "pieces": [
            {
              "id": "prd-what-and-who",
              "name": "What a PRD is and who it serves",
              "fn": "A PRD (product requirements document) is the product's storybook and compass: it serves engineering, UX, and marketing and sales by fixing what is being built and why.",
              "predict": "An engineer, a designer, and a salesperson each ask a different question about a launch. What single document should answer all three, and what metaphor does the deck use for it?"
            },
            {
              "id": "prd-components",
              "name": "PRD components",
              "fn": "Business objectives and press release, market segment and personas, product description and user stories, functional requirements, technical specs and architecture, data and security, success metrics, analytics and reporting, wireframes and mocks, cost estimate and pricing, release plan and roadmap, support and maintenance, and the feedback loop.",
              "predict": "A PRD has beautiful wireframes and user stories but no success metrics and no release plan. Which component groups are missing, and what arguments will that cause later?"
            }
          ],
          "lesson": [
            {
              "title": "What a PRD is and who it serves",
              "body": "The deck defines the **PRD (product requirements document)** with two metaphors: it is the product's **storybook** (it tells what the product is and why it matters) and its **compass** (it keeps every team pointed the same way while building).\n\nIt serves at least three audiences at once: **engineering** (what to build), **UX** (what experience to design), and **marketing and sales** (what to promise and to whom). A document only one audience can use is not doing the PRD's job."
            },
            {
              "title": "PRD components",
              "body": "The deck's component list:\n\n- **Business objectives** and the launch **press release** written up front\n- **Market segment and personas**\n- **Product description and user stories**\n- **Functional requirements**\n- **Technical specs and architecture**\n- **Data and security**\n- **Success metrics**\n- **Analytics and reporting**\n- **Wireframes and mocks**\n- **Cost estimate and pricing**\n- **Release plan and roadmap**\n- **Support and maintenance**\n- **Feedback** mechanisms\n\nNote how much of the list is not features: objectives, metrics, pricing, and support are what turn a feature list into a product plan. The metrics component is the bridge to Class 3."
            }
          ],
          "examples": [
            {
              "title": "The feature list that called itself a PRD",
              "scenario": "A team circulates a document titled PRD. It contains 40 features with screenshots, and nothing else. Engineering asks what success looks like; sales asks what it costs and when it ships.",
              "answer": "It is a feature list, not a PRD. Missing: business objectives and press release, segment and personas, success metrics, analytics, cost estimate and pricing, release plan and roadmap, support. The two questions from engineering and sales are exactly the ones the missing components exist to answer.",
              "piece": "prd-components",
              "principle": "prd-components"
            }
          ],
          "questions": [
            {
              "id": "prd-q01",
              "type": "mc",
              "prompt": "The deck's two metaphors for a PRD are:",
              "options": [
                "A contract and a checklist",
                "A storybook and a compass",
                "A blueprint and a budget",
                "A diary and a map"
              ],
              "answer": 1,
              "principle": "prd-definition",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the metaphors exactly.",
                "why": "Storybook: it tells what the product is and why. Compass: it keeps every team pointed the same way. The pair captures both the narrative and the alignment job.",
                "cue": "One metaphor is about the story, the other about direction. Pick the pair with one of each."
              }
            },
            {
              "id": "prd-q02",
              "type": "mc",
              "prompt": "Which audiences does the deck say a PRD serves?",
              "options": [
                "Only engineering",
                "Investors and the press",
                "Engineering, UX, and marketing and sales",
                "The CEO and the board"
              ],
              "answer": 2,
              "principle": "prd-definition",
              "difficulty": 1,
              "feedback": {
                "step": "Name the three served audiences.",
                "why": "Engineering (what to build), UX (what experience), marketing and sales (what to promise, to whom). A PRD only engineers can use fails its alignment job.",
                "cue": "Build, design, sell: one audience per verb."
              }
            },
            {
              "id": "prd-q03",
              "type": "mc",
              "prompt": "Which of these belongs in the deck's PRD component list?",
              "options": [
                "The CEO's compensation plan",
                "Competitors' internal roadmaps",
                "The office seating chart",
                "Success metrics, and analytics and reporting"
              ],
              "answer": 3,
              "principle": "prd-components",
              "difficulty": 1,
              "feedback": {
                "step": "Check the item against the component list.",
                "why": "Success metrics and analytics/reporting are named components, alongside objectives, personas, requirements, specs, data and security, wireframes, cost and pricing, release plan, support, and feedback.",
                "cue": "If it is about the product's definition, measurement, or launch, it is plausibly a component. Internal company trivia is not."
              }
            },
            {
              "id": "prd-q04",
              "type": "mc",
              "prompt": "A PRD contains objectives, personas, user stories, requirements, and wireframes, but launch day arrives with no pricing decision and no support plan. Which listed components were missing?",
              "options": [
                "Cost estimate and pricing, and support and maintenance",
                "None; pricing and support come after launch",
                "The press release only",
                "Data and security only"
              ],
              "answer": 0,
              "principle": "prd-components",
              "difficulty": 2,
              "feedback": {
                "step": "Map the launch day surprises back to components.",
                "why": "Cost estimate and pricing, and support and maintenance, are PRD components in the deck's list. Leaving them out does not delete the decisions; it moves them to launch day.",
                "cue": "Every launch day surprise in a PRD question is a missing component wearing a disguise."
              }
            },
            {
              "id": "prd-q05",
              "type": "mc",
              "prompt": "Why does the deck's PRD start with business objectives and a press release rather than with features?",
              "options": [
                "Press releases are easy to write",
                "The storybook job: fixing what the product is and why it matters aligns every later section, including the feature list",
                "Legal requires it",
                "It impresses investors"
              ],
              "answer": 1,
              "principle": "prd-definition",
              "difficulty": 2,
              "feedback": {
                "step": "Explain the ordering by the PRD's purpose.",
                "why": "Objectives and the press release state the what and why in customer terms first, so requirements and specs are judged against them. Features first produces a list nobody can prioritise.",
                "cue": "Ask what the first section is for. Alignment artefacts always put the why before the what."
              }
            },
            {
              "id": "prd-q06",
              "type": "mc",
              "prompt": "True to the 2026 syllabus, the status of the PRD in this year's course is:",
              "options": [
                "The main assignment, built in parts all term",
                "Replaced by a coding project",
                "Not a listed 2026 assignment: the 2026 spine is Critique, Metrics and KPIs, two quizzes, and the Final Presentation; the PRD is 2025 framework prep",
                "Due the same day as Quiz #1"
              ],
              "answer": 2,
              "principle": "spine-2026-not-2025",
              "difficulty": 2,
              "feedback": {
                "step": "Apply the 2026 spine, not the 2025 one.",
                "why": "The revised 2026 syllabus grades a Critique, a Metrics exercise, two quizzes, participation, and a final presentation. The multi part PRD was the 2025 assignment spine. Conflating them is the exact error the course rules warn against.",
                "cue": "When a question mixes years, the revised 2026 syllabus wins. Check the deliverable list, not the deck's age."
              }
            },
            {
              "id": "prd-q07",
              "type": "production",
              "prompt": "A teammate's draft PRD for a campus parking app has: a press release, personas, user stories, and wireframes. List the deck's remaining component groups they still owe, in any order, and say in one line why the metrics group matters most before build starts.",
              "solution": "Model answer: Still owed: business objectives (the press release is present but objectives are their own component), functional requirements, technical specs and architecture, data and security, success metrics, analytics and reporting, cost estimate and pricing, release plan and roadmap, support and maintenance, and feedback mechanisms. Metrics matter most before build because they define what success means while changing the definition is still free; adding them after launch turns measurement into archaeology.",
              "principle": "prd-components",
              "difficulty": 3,
              "feedback": {
                "step": "The audit step: present versus owed, component by component.",
                "why": "A PRD review is a checklist audit against the component list, not an impression. The metrics argument (define success before building) is the bridge this course draws to the Class 3 metrics exercise.",
                "cue": "Grade a PRD the way the deck built it: name what is present, then walk the list for what is absent."
              }
            },
            {
              "id": "prd-q08",
              "type": "mc",
              "prompt": "An engineer asks: 'What exactly must the system do, and how will it be built?' A UX designer asks: 'What experience are we making?' A salesperson asks: 'What do I promise, and to whom?' The deck's answer to all three:",
              "options": [
                "Three separate documents, one per team",
                "The launch press release alone",
                "The roadmap alone",
                "The PRD: one document serving engineering, UX, and marketing and sales"
              ],
              "answer": 3,
              "principle": "prd-definition",
              "difficulty": 2,
              "feedback": {
                "step": "Match three questions to one artefact.",
                "why": "That triple audience is the deck's definition of the PRD's job: storybook and compass for the whole product team, not a spec thrown over one wall.",
                "cue": "Three audiences, one document. If an option fragments the document by audience, it breaks the compass metaphor."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "class3",
      "title": "Class 3 (Thu Nov 12): Data, Metrics and AI in Product Decision-Making",
      "topics": [
        {
          "id": "class3-value-proposition",
          "title": "Value Proposition and PR",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 3 deck, mapped to 2026 Class 3 and the value proposition work behind the Critique and Final. The 2026 lecture is not held.",
          "pieces": [
            {
              "id": "vp-north-star",
              "name": "Value proposition as north star",
              "fn": "The value proposition is the north star for messaging and positioning: the clear promise of what the customer gets, stated in the customer's language. Uber versus the taxi and the iPhone's 'magical' experience are the deck's examples.",
              "predict": "A team's homepage, sales deck, and app store page each promise a different main benefit. Which artefact has failed, and what should be fixed first?"
            },
            {
              "id": "vp-writing-steps",
              "name": "How to write one",
              "fn": "Understand your customers, analyse your competitors, know your product, use the target audience's language, be unique, and keep it simple.",
              "predict": "A draft value proposition is accurate, complete, and four sentences of internal jargon. Which writing steps did it break, and which two fixes matter most?"
            }
          ],
          "lesson": [
            {
              "title": "Value proposition as north star",
              "body": "The deck treats the **value proposition** as the **north star for messaging**: every artefact that talks about the product (homepage, sales deck, launch PR, app store page) should be saying the same promise.\n\nIts examples: **Uber versus the taxi** (the promise is not 'a car' but a ride without the hailing, waiting, and payment friction) and the **iPhone** launched on a 'magical' experience promise rather than a spec sheet. In both, the proposition names the customer's gain, not the company's features."
            },
            {
              "title": "How to write one",
              "body": "The deck's writing sequence:\n\n1. **Understand your customers** (their job, from Class 1)\n2. **Analyse your competitors** (Class 2's analysis feeds this)\n3. **Know your product**\n4. Use the **target audience's language**, not internal jargon\n5. **Be unique**: a proposition any rival could say word for word differentiates nothing\n6. **Keep it simple**\n\nThe sequence is a checklist for critique work: a weak proposition usually fails a nameable step, most often audience language or uniqueness."
            }
          ],
          "examples": [
            {
              "title": "Three pages, three promises",
              "scenario": "A startup's homepage promises 'save time', its sales deck promises 'cut costs', and its app store page promises 'delight your team'. Each is defensible. Customers are confused about what the product is mainly for.",
              "answer": "The value proposition has failed its north star job: one promise, everywhere. Fix the proposition first (one customer gain, in audience language), then rewrite the three artefacts from it, instead of polishing each page separately.",
              "piece": "vp-north-star",
              "principle": "vp-north-star"
            }
          ],
          "questions": [
            {
              "id": "vp-q01",
              "type": "mc",
              "prompt": "In the deck's framing, the value proposition's job is:",
              "options": [
                "The north star for messaging: one clear promise of what the customer gets, in the customer's language, that every artefact repeats",
                "A slogan written by marketing after launch",
                "A list of the product's top ten features",
                "The internal mission statement"
              ],
              "answer": 0,
              "principle": "vp-north-star",
              "difficulty": 1,
              "feedback": {
                "step": "State the artefact's job before judging any instance.",
                "why": "North star means alignment: homepage, sales deck, and launch story all say the same promise. A feature list or a slogan written afterward cannot align anything.",
                "cue": "If an option could be written without knowing the customer, it is not the value proposition."
              }
            },
            {
              "id": "vp-q02",
              "type": "mc",
              "prompt": "Which list is the deck's value proposition writing sequence?",
              "options": [
                "Brainstorm adjectives, test fonts, file the trademark",
                "Understand customers, analyse competitors, know your product, use the audience's language, be unique, keep it simple",
                "Write the press release, set the price, hire the sales team",
                "Copy the category leader and adjust the logo"
              ],
              "answer": 1,
              "principle": "vp-writing-steps",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the six steps in order.",
                "why": "The sequence runs from the customer inward to the words: customers, competitors, product, audience language, uniqueness, simplicity. Skipping to wording produces jargon or sameness.",
                "cue": "The first three steps are knowledge; the last three are wording. Options that start with wording are wrong."
              }
            },
            {
              "id": "vp-q03",
              "type": "mc",
              "prompt": "Draft proposition: 'Our synergistic platform leverages AI driven workflows to optimise cross functional throughput.' Against the deck's steps, the clearest failures are:",
              "options": [
                "It is too short",
                "It mentions AI",
                "Audience language and simplicity: it is internal jargon no customer would say, and it names no customer gain",
                "It lacks a logo"
              ],
              "answer": 2,
              "principle": "vp-writing-steps",
              "difficulty": 2,
              "feedback": {
                "step": "Grade the draft against nameable steps.",
                "why": "'Use the target audience's language' and 'keep it simple' are both broken, and underneath them the customer gain itself is missing. A value prop critique names the broken step, not a vibe.",
                "cue": "Read the draft aloud as the customer. If the customer would never say these words, the language step failed."
              }
            },
            {
              "id": "vp-q04",
              "type": "mc",
              "prompt": "A proposition reads: 'The project tool for teams that want to get projects done.' Every rival could print it unchanged. Which step failed?",
              "options": [
                "Understand your customers",
                "Analyse competitors",
                "Know your product",
                "Be unique"
              ],
              "answer": 3,
              "principle": "vp-writing-steps",
              "difficulty": 2,
              "feedback": {
                "step": "Find the step whose test the sentence fails.",
                "why": "The uniqueness test is literal: if a rival could say it word for word, it differentiates nothing. The sentence may be accurate and simple; it is still interchangeable.",
                "cue": "The swap test: paste a rival's name into the sentence. If nothing breaks, uniqueness failed."
              }
            },
            {
              "id": "vp-q05",
              "type": "mc",
              "prompt": "Why does the deck use Uber versus the taxi as a value proposition example?",
              "options": [
                "The promise was not 'a car' but the removal of the hailing, waiting, and payment friction: the customer's gain, not the company's asset",
                "Uber had lower prices at launch",
                "Taxis had no app",
                "Uber spent more on advertising"
              ],
              "answer": 0,
              "principle": "vp-north-star",
              "difficulty": 2,
              "feedback": {
                "step": "Say what the promise actually was.",
                "why": "The example teaches that a proposition names what the customer gets (a ride without the friction), not what the company owns (cars, an app). Feature and asset language misses the gain.",
                "cue": "Ask: could the old way's customer finish the sentence 'now I can finally...'? That completion is the proposition."
              }
            },
            {
              "id": "vp-q06",
              "type": "mc",
              "prompt": "A homepage promises speed, the sales deck promises compliance, and the launch PR promises creativity, for the same product. The first fix, per the north star idea:",
              "options": [
                "Rewrite each page to be punchier",
                "Settle the one value proposition, then rewrite all three artefacts from it",
                "Add a fourth page explaining all three",
                "Let each audience keep its own promise"
              ],
              "answer": 1,
              "principle": "vp-north-star",
              "difficulty": 2,
              "feedback": {
                "step": "Fix the source artefact before its copies.",
                "why": "Three promises means there is no proposition, only three drafts. Alignment work happens once, at the proposition, and the pages inherit it.",
                "cue": "When copies disagree, repair the original, not each copy."
              }
            },
            {
              "id": "vp-q07",
              "type": "production",
              "prompt": "Write a one sentence value proposition for a grocery app whose research shows: busy parents hire it to get the weekly shop done in 15 minutes from the sofa, rivals all promise 'fresh quality groceries', and parents call the Sunday supermarket run 'the weekly dread'. Use the audience's language and pass the uniqueness test.",
              "solution": "Model answer: 'The weekly shop, done from your sofa in 15 minutes, so Sunday is yours again.' It names the customer's gain (time and the lost Sunday back), uses the audience's own framing (the weekly shop, not 'omnichannel grocery fulfilment'), and no rival promising 'fresh quality' could say it unchanged, so it passes the swap test.",
              "principle": "vp-writing-steps",
              "difficulty": 3,
              "feedback": {
                "step": "The writing step: gain first, audience language, swap test.",
                "why": "A proposition is graded by the deck's steps: grounded in the customer's job, in their words, unique under the swap test, and simple. Feature or freshness claims fail at least two of those.",
                "cue": "Before submitting any proposition, run the swap test and the read aloud test. Both take ten seconds."
              }
            },
            {
              "id": "vp-q08",
              "type": "mc",
              "prompt": "Where does the value proposition sit in this course's flow of artefacts?",
              "options": [
                "It replaces the PRD",
                "It is written after the final presentation",
                "It draws on JTBD (Class 1) and competitive analysis (Class 2) and feeds messaging, the Critique, and the Final pitch",
                "It is a pricing document"
              ],
              "answer": 2,
              "principle": "vp-north-star",
              "difficulty": 3,
              "feedback": {
                "step": "Place the artefact in the course's chain.",
                "why": "The proposition is downstream of the customer's job and the competitive analysis, and upstream of everything that talks about the product. That is why the deck revisits it in the metrics lecture: it is the promise the metrics later judge.",
                "cue": "Artefacts that consume research and feed communication sit in the middle of the chain."
              }
            }
          ]
        },
        {
          "id": "class3-metrics",
          "title": "Success Metrics, KPIs, and OKRs",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 3 deck, mapped to 2026 Class 3 and the Success Metrics and KPIs Exercise (due Nov 15). Definitions follow the deck; the 2026 exercise brief itself is not held.",
          "pieces": [
            {
              "id": "business-vs-product-metrics",
              "name": "Business versus product success",
              "fn": "Success is measured on two levels: business metrics (revenue, growth of the company) and product metrics (whether users get value and keep using it). A product decision usually has to answer to both.",
              "predict": "Revenue rises for a quarter while weekly active users quietly fall. Which level is healthy, which is not, and why is the combination worrying?"
            },
            {
              "id": "okrs",
              "name": "Objectives and Key Results",
              "fn": "OKRs pair a qualitative Objective (where to go) with measurable Key Results (how you will know you got there). They are how the deck ties product work to company goals.",
              "predict": "A team writes 'Objective: improve onboarding. Key Result: work hard on onboarding.' What is broken in the Key Result?"
            },
            {
              "id": "saas-kpis",
              "name": "The SaaS KPI set",
              "fn": "Churn rate, MRR, revenue churn, ARR, CMRR, CAC, CLV/LTV, Lead Velocity Rate, and NPS: the deck's standard subscription business measures, each answering a different question.",
              "predict": "Two products both report 'churn is 5%'. One counts lost customers, the other lost revenue, and their big customers behave differently. Why might the two 5 percents mean opposite things?"
            },
            {
              "id": "vanity-vs-real",
              "name": "Vanity versus real metrics",
              "fn": "'Not everything that can be counted counts': a vanity metric goes up while telling you nothing about value or health; a real metric changes a decision. The 2026 syllabus names this contrast directly.",
              "predict": "Total registered accounts doubles after a free signup campaign while weekly usage is flat. Vanity or real, and what would you check next?"
            }
          ],
          "lesson": [
            {
              "title": "Business versus product success",
              "body": "The deck separates **measuring success** into two levels:\n\n| Level | Question | Typical measures |\n|---|---|---|\n| **Business** | Is the company winning? | Revenue, MRR, ARR, growth |\n| **Product** | Are users getting value and staying? | Usage, retention, satisfaction |\n\nA decision can win on one level and lose on the other: a dark pattern can lift business metrics while product metrics rot. The Metrics and KPIs Exercise in the 2026 spine is, at heart, choosing measures on both levels that cannot be gamed independently."
            },
            {
              "title": "Objectives and Key Results",
              "body": "**OKRs** are the deck's goal structure:\n\n- **Objective**: the qualitative direction, where to go.\n- **Key Results**: the measurable evidence that you got there.\n\nA Key Result that cannot be counted ('work hard', 'improve a lot') is not a Key Result. OKRs are also the alignment device: the PRD's success metrics component (Class 2) should be expressible as the Key Results of some Objective the company actually holds."
            },
            {
              "title": "The SaaS KPI set",
              "body": "The deck's standard subscription measures:\n\n- **Churn rate**: the share of customers lost in a period\n- **Revenue churn**: the share of revenue lost in a period (different from customer churn when customers pay different amounts)\n- **MRR / ARR**: monthly / annual recurring revenue\n- **CMRR**: committed MRR, including contracted future changes\n- **CAC**: customer acquisition cost, what it costs to win one customer\n- **CLV / LTV**: customer lifetime value, what one customer is worth over the relationship\n- **Lead Velocity Rate**: the growth rate of qualified leads, an early signal of future revenue\n- **NPS**: net promoter score, willingness to recommend\n\nEach answers a different question, which is why 'measure everything' is not a strategy: the exercise is picking the few that judge the decision at hand."
            },
            {
              "title": "Vanity versus real metrics",
              "body": "The deck quotes the warning: **'Not everything that can be counted counts.'**\n\nA **vanity metric** rises while telling you nothing about value or health (total accounts ever created, raw downloads). A **real metric** is tied to the job and the model: it moves when users get more value or the business gets healthier, and it can change a decision.\n\nThe test is behavioural: if this number doubled and nothing about users or revenue actually improved, it was vanity."
            }
          ],
          "matrix": {
            "title": "Business Metrics vs Product Metrics",
            "columns": [
              "Business metrics",
              "Product metrics"
            ],
            "rows": [
              "Question it answers",
              "Typical examples",
              "What gaming it looks like",
              "Classic trap"
            ]
          },
          "examples": [
            {
              "title": "The healthy quarter that was not",
              "scenario": "A subscription app reports revenue up 20% after a price rise. Weekly active users are down 12% and trial starts are down 30%, but nobody put those numbers in the board deck.",
              "answer": "Business level healthy this quarter, product level deteriorating: fewer users getting value now means less revenue later. Presenting only the business level hides the product signal that predicts the business level's future.",
              "piece": "business-vs-product-metrics",
              "principle": "two-level-success"
            },
            {
              "title": "A million downloads",
              "scenario": "A launch press release celebrates one million downloads. Day 30 retention is 2%.",
              "answer": "Downloads here are a vanity metric: countable, rising, and silent about value. The real metrics are retention and usage: 2% day 30 retention says the product is not being hired for a recurring job, whatever the download count says.",
              "piece": "vanity-vs-real",
              "principle": "vanity-vs-real"
            }
          ],
          "sorting": [
            {
              "statement": "Share of subscribing customers who cancel this month",
              "principle": "churn-rate",
              "cue": "Customers lost in a period is churn rate."
            },
            {
              "statement": "Share of monthly revenue lost when big accounts downgrade",
              "principle": "revenue-churn",
              "cue": "Revenue lost, not customers lost: revenue churn. The distinction matters when accounts pay different amounts."
            },
            {
              "statement": "What it costs in sales and marketing to win one new customer",
              "principle": "cac",
              "cue": "Cost per won customer is CAC."
            },
            {
              "statement": "Total profit expected from one customer across the whole relationship",
              "principle": "clv-ltv",
              "cue": "Lifetime value looks across the whole relationship, not one period."
            },
            {
              "statement": "Growth rate of qualified leads this month versus last",
              "principle": "lead-velocity-rate",
              "cue": "Lead Velocity Rate is a growth rate of leads, used as an early revenue signal."
            },
            {
              "statement": "How likely users say they are to recommend the product",
              "principle": "nps",
              "cue": "Willingness to recommend is NPS."
            }
          ],
          "methods": [
            {
              "id": "kpi-selection",
              "name": "KPI selection for a product decision",
              "trigger": "You must choose the few metrics that will judge a launch, feature, or pricing decision"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Fix the Key Result",
              "prompt": "'Objective: make onboarding feel effortless. Key Result: improve onboarding.' Rewrite the Key Result so it obeys the OKR definition.",
              "solution": "A Key Result must be measurable evidence: for example, 'raise the share of new users who complete setup within 10 minutes from 42% to 65%, and cut median setup time from 14 minutes to 8.' The direction stays in the Objective; the proof moves into the Key Result.",
              "selfExplain": "What makes 'improve onboarding' fail as a Key Result even though it sounds like one?"
            },
            {
              "rung": "full",
              "title": "Pick the judging set",
              "prompt": "A team launches a paid tier. Propose a judging set of four metrics: one business, one product, one acquisition economics, one guardrail against gaming. Name each and say in one line what it judges.",
              "solution": "Model answer: Business: MRR from the paid tier (is the company winning). Product: weekly active use among paid users (are they getting value, not just paying once). Acquisition economics: CAC against CLV (is each won customer worth more than they cost). Guardrail: churn rate of the paid tier at 90 days (catches a launch that sells hard and disappoints). The set spans both levels and includes a number that can embarrass the launch, which is what makes it a judging set rather than a celebration set."
            }
          ],
          "questions": [
            {
              "id": "met-q01",
              "type": "mc",
              "prompt": "A price rise lifts revenue 20% while weekly active users fall 12%. In the deck's two level framing:",
              "options": [
                "The product is succeeding, because revenue is the real metric",
                "The price rise should be reversed immediately, whatever the data",
                "Product metrics do not matter for subscription products",
                "Business metrics are healthy while product metrics deteriorate, a combination that usually predicts future business decline"
              ],
              "answer": 3,
              "principle": "two-level-success",
              "difficulty": 2,
              "feedback": {
                "step": "Score each level separately before judging.",
                "why": "Revenue is a business level win; falling active use is a product level loss. Product level health is the leading indicator of the business level, so the pair is a warning, not a victory.",
                "cue": "When the two levels disagree, report both. The disagreement itself is the finding."
              }
            },
            {
              "id": "met-q02",
              "type": "mc",
              "prompt": "Which of these is a valid Key Result under the OKR definition?",
              "options": [
                "Raise 90 day retention from 31% to 38%",
                "Work harder on activation",
                "Improve retention a lot this quarter",
                "Make users happier"
              ],
              "answer": 0,
              "principle": "okr-form",
              "difficulty": 1,
              "feedback": {
                "step": "Apply the measurability test.",
                "why": "A Key Result is measurable evidence that the Objective was reached: a metric, a from, and a to. The other options are directions or efforts, which belong in the Objective or nowhere.",
                "cue": "No number, no Key Result. Effort words like 'harder' are the giveaway."
              }
            },
            {
              "id": "met-q03",
              "type": "mc",
              "prompt": "A service loses 5% of its customers this month, but the ones who left were almost all on the cheapest plan, so revenue fell only 1%. The two numbers are:",
              "options": [
                "Both are churn rate",
                "Customer churn 5%, revenue churn 1%; the gap exists because customers pay different amounts",
                "Both are CMRR",
                "An error; they must be equal"
              ],
              "answer": 1,
              "principle": "churn-vs-revenue-churn",
              "difficulty": 2,
              "feedback": {
                "step": "Separate the unit being counted: customers versus revenue.",
                "why": "Churn rate counts customers lost; revenue churn counts revenue lost. When plans differ in price, the two diverge, and the divergence tells you who is leaving.",
                "cue": "Ask '5% of what?' before comparing any two churn numbers."
              }
            },
            {
              "id": "met-q04",
              "type": "mc",
              "prompt": "CAC is $120 and average CLV is $90. The correct reading:",
              "options": [
                "Healthy: acquisition is working",
                "Fine, as long as NPS is high",
                "Each new customer costs more to win than they are worth over the relationship; growth on these terms loses money",
                "A sign to raise advertising spend"
              ],
              "answer": 2,
              "principle": "cac-vs-clv",
              "difficulty": 2,
              "feedback": {
                "step": "Compare the two economics numbers directly.",
                "why": "CLV below CAC means the model pays $120 to earn $90. No volume fixes a negative unit equation; it only scales the loss.",
                "cue": "CAC and CLV only mean anything as a pair. Read them together or not at all."
              }
            },
            {
              "id": "met-q05",
              "type": "mc",
              "prompt": "Why does the deck include Lead Velocity Rate, a metric about leads, in a product metrics lecture?",
              "options": [
                "It is a vanity metric to avoid",
                "It measures the sales team's effort only",
                "It replaces churn",
                "It is an early signal: the growth rate of qualified leads predicts future revenue before revenue itself moves"
              ],
              "answer": 3,
              "principle": "lead-velocity-rate",
              "difficulty": 2,
              "feedback": {
                "step": "Identify the metric's time role: leading versus lagging.",
                "why": "Revenue reports the past. Lead velocity moves earlier, so it warns or reassures while there is still time to act. That leading quality is why it earns its place.",
                "cue": "Ask when the metric moves relative to the outcome you care about."
              }
            },
            {
              "id": "met-q06",
              "type": "mc",
              "prompt": "Total accounts ever created passes ten million and the team celebrates in the all hands. Usage per week has not moved in a year. The deck's warning that applies:",
              "options": [
                "'Not everything that can be counted counts': a rising total that never falls and tracks no behaviour is a vanity metric",
                "The metric is CMRR",
                "The team needs a bigger database",
                "Nothing is wrong; totals always matter"
              ],
              "answer": 0,
              "principle": "vanity-vs-real",
              "difficulty": 2,
              "feedback": {
                "step": "Run the vanity test: could it double while nothing improves?",
                "why": "Cumulative accounts can only rise and say nothing about current value or health. Flat weekly usage is the real signal, and it contradicts the celebration.",
                "cue": "A metric that cannot go down cannot tell you bad news. Distrust it."
              }
            },
            {
              "id": "met-q07",
              "type": "mc",
              "prompt": "CMRR differs from MRR in that CMRR:",
              "options": [
                "Counts only cash collected",
                "Is committed monthly recurring revenue: it includes contracted future changes, not just what billed this month",
                "Excludes all enterprise accounts",
                "Is measured annually"
              ],
              "answer": 1,
              "principle": "cmrr",
              "difficulty": 3,
              "feedback": {
                "step": "Recall the 'committed' in the name.",
                "why": "CMRR adjusts MRR for changes that are already contracted (signed upgrades, known churn), so it shows the revenue the business is committed to, slightly ahead of billing.",
                "cue": "Committed means the future is already signed. Look for the option about contracted changes."
              }
            },
            {
              "id": "met-q08",
              "type": "mc",
              "prompt": "A team must pick ONE headline metric for a new habit forming app. Which choice best fits the course's teaching?",
              "options": [
                "Total downloads",
                "Press mentions",
                "Share of new users still active weekly after eight weeks",
                "Features shipped per quarter"
              ],
              "answer": 2,
              "principle": "vanity-vs-real",
              "difficulty": 2,
              "feedback": {
                "step": "Choose the metric tied to the job recurring.",
                "why": "A habit product lives or dies on retained weekly use. Downloads are vanity, press is noise, and features shipped measures the team's output, not the customer's value.",
                "cue": "For a habit product, the headline metric must contain the word 'still' somewhere: still active, still subscribed."
              }
            },
            {
              "id": "met-q09",
              "type": "production",
              "prompt": "Write an OKR for a team whose product helps landlords screen tenants (Class 2's example): one Objective and two Key Results, one business level and one product level.",
              "solution": "Model answer: Objective: 'Be the screening tool landlords trust with every vacancy.' Key Result (product): raise the share of new landlords who complete a second screening within six months from 35% to 55%. Key Result (business): grow CMRR from $40k to $70k while keeping revenue churn under 2% a month. Each Key Result is countable, has a from and a to, and sits on a different level of success.",
              "principle": "okr-form",
              "difficulty": 3,
              "feedback": {
                "step": "The construction step: direction in the Objective, proof in the Key Results.",
                "why": "The Objective carries the qualitative ambition; the Key Results carry numbers with baselines and targets, one judging product value and one judging the business. Missing baselines are the most common defect.",
                "cue": "Grade an OKR by hunting for numbers. Two Key Results with no baseline are wishes, not results."
              }
            },
            {
              "id": "met-q10",
              "type": "mc",
              "prompt": "NPS is best used in this course's framing as:",
              "options": [
                "A revenue measure",
                "A pricing input",
                "A replacement for retention data",
                "A satisfaction signal: willingness to recommend, useful beside behavioural metrics, never instead of them"
              ],
              "answer": 3,
              "principle": "nps-role",
              "difficulty": 1,
              "feedback": {
                "step": "Place NPS in the set: signal, not verdict.",
                "why": "NPS captures stated willingness to recommend. Stated intent and behaviour diverge, so the course pairs it with usage and retention rather than letting it stand alone.",
                "cue": "Any option that lets a survey score replace behaviour data is the trap."
              }
            }
          ]
        },
        {
          "id": "class3-data-decisions",
          "title": "Data-Driven Decisions and Their Pitfalls",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 3 deck, mapped to 2026 Class 3 (Data, Metrics and AI in Product Decision-Making). The 2026 session's AI analytics content is not in the 2025 deck and is not held; this topic covers the deck's decision making material only.",
          "pieces": [
            {
              "id": "data-across-the-journey",
              "name": "Data at each stage of the journey",
              "fn": "Data needs change by stage: identify needs in ideation, prioritise features on usage metrics, track KPIs after launch; before launch, A/B test prototypes and analyse usage data to optimise the experience.",
              "predict": "A team demands post launch KPI dashboards for a product that has not been prototyped. What stage mismatch is that, and what data should they be gathering instead?"
            },
            {
              "id": "pitfalls",
              "name": "The three pitfalls",
              "fn": "Too much customer data without the job (JTBD) behind it; treating correlation as causation; and skipping the question 'best for whom?': business, customers, shareholders, or employees.",
              "predict": "A dashboard shows users who buy the premium add-on also use the app more, so the team proposes forcing the add-on on everyone. Which two pitfalls are in that plan?"
            },
            {
              "id": "lifecycle-and-dilemma",
              "name": "Lifecycle and the innovator's dilemma",
              "fn": "Products move through a lifecycle, and the deck pairs it with the Innovator's Dilemma challenge: the metrics and customers that serve the current stage can blind a company to the next one.",
              "predict": "A profitable product's best customers all reject a cheap, simpler version the team is testing. In dilemma terms, why is that rejection weak evidence against the new version?"
            }
          ],
          "lesson": [
            {
              "title": "Data at each stage of the journey",
              "body": "The deck's **data driven decision making** is stage specific:\n\n- **Ideation**: use data to identify needs, with the customer's job (Class 1) as the frame\n- **Prioritisation**: rank features on **usage metrics**, what people actually do\n- **Pre-launch**: **A/B test prototypes**, analyse usage data, optimise the customer experience\n- **Post-launch**: **track KPIs** (Class 3's previous topic) and keep deciding\n\nThe error pattern is stage confusion: post launch instruments pointed at a pre launch question, or interview impressions doing the job of usage data."
            },
            {
              "title": "The three pitfalls",
              "body": "The deck names three ways data work goes wrong:\n\n1. **Too much customer data without JTBD**: mountains of behaviour data, no job to interpret it against, so every pattern looks meaningful.\n2. **Correlation is not causation**: two numbers moving together is not a lever. Acting on it as if it were a cause spends the roadmap on coincidences.\n3. **'Best for whom?'**: a decision can be best for the **business, the customers, the shareholders, or the employees**, and those are different answers. Data does not settle whose interest governs; it only sharpens the trade.\n\nEach pitfall survives good tooling. They are thinking errors, not instrumentation errors."
            },
            {
              "title": "Lifecycle and the innovator's dilemma",
              "body": "The deck places metrics inside a **product lifecycle**: the measures that matter at introduction (is anyone hiring it?) differ from maturity (who is leaving and why?).\n\nIt pairs the lifecycle with the **Innovator's Dilemma** challenge (Christensen's book is a required text for the course): listening closely to your best current customers and your current metrics can be exactly what makes a company miss a simpler, cheaper entrant that those customers currently reject. The dilemma is a standing warning on Class 3's theme: data describes the present market better than the next one."
            }
          ],
          "examples": [
            {
              "title": "The add-on fallacy",
              "scenario": "Analytics show premium add-on buyers use the app three times more than non-buyers. The roadmap proposal: bundle the add-on for everyone at a higher base price, 'since the add-on clearly causes engagement.'",
              "answer": "Correlation read as causation (engaged users may buy add-ons because they are engaged), compounded by data without the job: nobody has established what job the add-on does. Forcing it on everyone tests nothing and taxes the unengaged majority for a pattern they never showed.",
              "piece": "pitfalls",
              "principle": "correlation-not-causation"
            },
            {
              "title": "Best for whom?",
              "scenario": "A change will raise revenue 8%, add two support tickets per user per month, and save the company a support hire. The data review presents it as simply 'better'.",
              "answer": "Better for the business and shareholders, worse for customers (more friction) and arguably for support staff quality of work. The pitfall is presenting a trade as a win: the deck's question 'best for whom?' has to be answered out loud before the data means anything.",
              "piece": "pitfalls",
              "principle": "best-for-whom"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Stage the data",
              "prompt": "A team has a clickable prototype and 12 target users booked next week. Their plan: 'collect NPS and build the KPI dashboard.' What should they actually be doing at this stage, per the deck?",
              "solution": "Pre-launch stage: A/B test the prototype variants with those users and analyse the usage data to optimise the experience. NPS on a prototype and a KPI dashboard for a product with no users are post launch instruments pointed at a pre launch question.",
              "selfExplain": "What makes the proposed plan feel data driven while being stage wrong?"
            },
            {
              "rung": "completion",
              "title": "Finish the critique",
              "prompt": "Complete this critique of a proposal in two lines: 'Users who watch the tutorial churn less, so we will autoplay the tutorial for every new user on first open.' Pitfall 1: ... Pitfall 2 (the unasked question): ...",
              "solution": "Pitfall 1: correlation as causation: tutorial watchers may churn less because motivated users both watch tutorials and stay. Pitfall 2: no job analysis (data without JTBD): nobody has shown what job the tutorial does in the first session, so autoplay may tax exactly the users it claims to help."
            }
          ],
          "questions": [
            {
              "id": "data-q01",
              "type": "mc",
              "prompt": "Per the deck, at the prioritisation stage the ranking of features should rest mainly on:",
              "options": [
                "Usage metrics: what people actually do",
                "Executive preference",
                "Competitor press releases",
                "Survey intentions"
              ],
              "answer": 0,
              "principle": "data-by-stage",
              "difficulty": 1,
              "feedback": {
                "step": "Match the stage to its data type.",
                "why": "Ideation uses data to identify needs; prioritisation ranks on usage metrics; pre-launch A/B tests prototypes; post-launch tracks KPIs. Each stage has its own instrument.",
                "cue": "Behaviour beats stated intention at the prioritisation stage. Surveys belong earlier and weaker."
              }
            },
            {
              "id": "data-q02",
              "type": "mc",
              "prompt": "Users who enable notifications retain at twice the rate of users who do not. The team concludes notifications cause retention and makes them mandatory. The deck's diagnosis:",
              "options": [
                "Sound causal inference",
                "Correlation treated as causation: already engaged users both enable notifications and stay; forcing them on the unengaged does not import the engagement",
                "A vanity metric problem",
                "A CMRR problem"
              ],
              "answer": 1,
              "principle": "correlation-not-causation",
              "difficulty": 2,
              "feedback": {
                "step": "Check whether the comparison groups were ever equivalent.",
                "why": "Self selected groups differ before the treatment. The correlation is real; the causal claim is unearned, and mandatory rollout spends on the unearned claim.",
                "cue": "Whenever users chose the 'treatment' themselves, read correlation first and causation never, until an experiment says otherwise."
              }
            },
            {
              "id": "data-q03",
              "type": "mc",
              "prompt": "A pricing change is projected to raise profit, lengthen customer wait times, and cut two support roles. The deck insists the review ask, before anything else:",
              "options": [
                "Is the sample size large enough?",
                "What is the NPS impact?",
                "'Best for whom?': business, customers, shareholders, and employees have different answers, and data alone does not choose among them",
                "Can this be A/B tested this week?"
              ],
              "answer": 2,
              "principle": "best-for-whom",
              "difficulty": 2,
              "feedback": {
                "step": "Name the pitfall that is about interests, not statistics.",
                "why": "The three pitfalls are data without the job, correlation as causation, and the unasked 'best for whom?'. A trade dressed as a pure win is the third.",
                "cue": "When every effect listed lands on a different group, the missing step is naming whose interest governs."
              }
            },
            {
              "id": "data-q04",
              "type": "mc",
              "prompt": "'We have 400 dashboards and still cannot decide what to build next.' In the deck's terms, the most likely missing piece is:",
              "options": [
                "More data sources",
                "Real time refreshing",
                "A larger data team",
                "The customer's job: data without JTBD gives patterns with nothing to interpret them against"
              ],
              "answer": 3,
              "principle": "data-without-jtbd",
              "difficulty": 2,
              "feedback": {
                "step": "Diagnose volume without a frame.",
                "why": "Pitfall one is too much customer data without the job behind it. Decisions come from interpreting behaviour against a job, not from adding a 401st dashboard.",
                "cue": "Indecision plus data abundance equals a missing frame, not a missing feed."
              }
            },
            {
              "id": "data-q05",
              "type": "mc",
              "prompt": "Before launch, the deck's prescribed data work is:",
              "options": [
                "A/B testing prototypes and analysing usage data to optimise the customer experience",
                "Tracking KPIs weekly",
                "Setting CMRR targets",
                "Publishing a metrics dashboard for investors"
              ],
              "answer": 0,
              "principle": "data-by-stage",
              "difficulty": 1,
              "feedback": {
                "step": "Place the activity in its stage.",
                "why": "KPIs judge a live product. Before launch there are no live users to track, so the instruments are prototype tests and usage analysis on the prototype.",
                "cue": "No users yet means prototype instruments. KPI language before launch is stage confusion."
              }
            },
            {
              "id": "data-q06",
              "type": "mc",
              "prompt": "A mature product's best customers unanimously reject a cheap simplified version in research. The Innovator's Dilemma warning in the deck says this rejection is:",
              "options": [
                "Decisive: kill the simple version",
                "Weak evidence: current best customers are the group most likely to reject the entrant that later displaces the product, because it does not serve their job yet",
                "A sign the research was biased",
                "Irrelevant to metrics work"
              ],
              "answer": 1,
              "principle": "innovators-dilemma",
              "difficulty": 3,
              "feedback": {
                "step": "Apply the dilemma's core move to the evidence.",
                "why": "The dilemma is that serving today's best customers and metrics can blind a company to tomorrow's market. Their rejection measures fit with their job, not the new segment's job.",
                "cue": "Ask whose job the research sampled. Unanimous rejection by the wrong segment is not a verdict."
              }
            },
            {
              "id": "data-q07",
              "type": "mc",
              "prompt": "Which pairing is correct in the deck's stage model?",
              "options": [
                "Ideation: track KPIs. Post-launch: identify needs.",
                "Prioritisation: A/B test pricing pages. Ideation: measure churn.",
                "Ideation: identify needs. Prioritisation: rank features on usage metrics. Post-launch: track KPIs.",
                "Post-launch: write the value proposition."
              ],
              "answer": 2,
              "principle": "data-by-stage",
              "difficulty": 2,
              "feedback": {
                "step": "Check each pair against the stage list.",
                "why": "The deck's order is needs in ideation, usage based prioritisation, prototype testing pre-launch, KPI tracking post-launch. The wrong options swap instruments across stages.",
                "cue": "Any option that puts KPI tracking before a product exists fails on its face."
              }
            },
            {
              "id": "data-q08",
              "type": "production",
              "prompt": "A dashboard shows: users who join a community group in week one buy 40% more over the year. Write a three sentence response that a strong PM would give before any roadmap change is approved.",
              "solution": "Model answer: This is a correlation, and the joining group self selected, so motivated users may both join groups and buy more; the number does not show the group causes buying. Before spending roadmap on it, name the job the group might be doing for a new user (belonging, answers, accountability), then run the smallest test that can separate cause from selection, such as offering the group to a random half of new users. Until that test reads out, the dashboard is a hypothesis, not a lever.",
              "principle": "correlation-not-causation",
              "difficulty": 3,
              "feedback": {
                "step": "The response step: name the confound, name the job, propose the test.",
                "why": "All three pitfalls are handled in order: correlation is not causation, data needs the job to mean anything, and the remedy is an experiment rather than a rollout.",
                "cue": "A strong data response ends with a test, not a decision. If yours ends with a decision, it skipped a pitfall."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "class4",
      "title": "Class 4 (Thu Nov 19): MVP, Launch and Go-to-Market Strategy",
      "topics": [
        {
          "id": "class4-mvp",
          "title": "MVP, Strategy versus Execution, and How Products Get Built",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 4 deck, mapped to 2026 Class 4. The 2026 assigned readings (Brikman's MVP article, Kahneman chapters) agree with the deck's agenda; the 2026 lecture itself is not held.",
          "pieces": [
            {
              "id": "mvp-definition",
              "name": "What an MVP is",
              "fn": "A minimum viable product carries the minimum features to satisfy early customers and validate the idea, and it must include design, usability, and customer experience, not just function.",
              "predict": "A team ships a bare checkout page with no design work and calls it an MVP. Which part of the definition did they cut, and what bad evidence will that produce?"
            },
            {
              "id": "mvp-as-process",
              "name": "MVP as a process, not a product",
              "fn": "The assigned Brikman line: a minimum viable product is not a product, it is a process. Test the market and course correct before Crossing the Chasm, with features phased in by priority.",
              "predict": "A founder says 'our MVP is version 1, shipping in nine months, with the full feature list.' Which words in that sentence break the process idea?"
            },
            {
              "id": "strategy-vs-execution",
              "name": "Strategy versus execution",
              "fn": "Strategy is JTBD, segmentation, competitive analysis, viable solutions, PRD and wireframes. Execution is building and launching the MVP, gathering feedback, iterating, completing the product, and marketing and sales.",
              "predict": "A team is deep in sprint work but cannot say which segment the product is for. Which side of the line is missing, and what artefact would have forced the answer?"
            },
            {
              "id": "waterfall-vs-agile",
              "name": "Waterfall versus Agile",
              "fn": "Waterfall is static and linear, suited to hardware. Agile is iterative, suited to software and SaaS: Scrum and sprints, fail fast, and test early and often on mocks and prototypes before coding.",
              "predict": "A SaaS team locks a 12 month spec and tests with users only at the end. Which process are they running, whatever they call it, and what risk does that create?"
            }
          ],
          "lesson": [
            {
              "title": "What an MVP is",
              "body": "The deck's **MVP (minimum viable product)**: the **minimum features to satisfy early customers and validate the idea**.\n\nTwo clauses do the work. **Minimum**: it exists to test, not to complete. **Viable**: it must include **design, usability, and customer experience**, not just function, because a test users cannot bear to use validates nothing except that unusable products fail. An ugly but usable MVP is a test; a broken one is noise."
            },
            {
              "title": "MVP as a process, not a product",
              "body": "The 2026 assigned reading (Brikman) states it in its title: **a minimum viable product is not a product, it is a process**.\n\nThe deck's version of the same idea: use the MVP to **test the market and course correct before Crossing the Chasm**, and phase features in by **prioritisation** rather than by completeness. The unit of progress is the corrected course, not the shipped artefact. A nine month 'MVP' with a full feature list is a product launch wearing the process's name."
            },
            {
              "title": "Strategy versus execution",
              "body": "The deck draws the line explicitly:\n\n| Side | Contents |\n|---|---|\n| **Strategy** | JTBD, segmentation, competitive analysis, viable solutions, PRD and wireframes |\n| **Execution** | Build and launch the MVP, feedback, iterate, complete the product, marketing and sales |\n\nThe line matters diagnostically: execution problems feel busy and urgent; strategy gaps feel like nothing is wrong until the launch answers a question nobody asked. Most course artefacts so far (JTBD, competitive analysis, PRD) sit on the strategy side, which is why this course front loads them."
            },
            {
              "title": "Waterfall versus Agile",
              "body": "| Process | Shape | Suits | Feedback |\n|---|---|---|---|\n| **Waterfall** | Static, linear: specify everything, then build it | Hardware, where change is expensive | Late, at the end |\n| **Agile** | Iterative: Scrum and sprints, fail fast | Software and SaaS, where change is cheap | Early and often, on mocks and prototypes before coding |\n\nThe deck's practice rule joins the two halves of this class: **test early and often on mocks and prototypes before coding**, the Class 2 fidelity lesson applied to process. Process choice follows the cost of change, not fashion."
            }
          ],
          "matrix": {
            "title": "Waterfall vs Agile",
            "columns": [
              "Waterfall",
              "Agile"
            ],
            "rows": [
              "Shape of the process",
              "Where it fits",
              "When feedback arrives",
              "Cost of a late change",
              "Classic trap"
            ]
          },
          "examples": [
            {
              "title": "The unusable MVP",
              "scenario": "A team validates a meal planning idea with a signup page so clunky that half the testers abandon it mid task. The founder concludes: 'No demand. Kill it.'",
              "answer": "The MVP cut the viability clause: design, usability, and CX are part of the definition because a test people cannot use measures the interface, not the idea. The kill decision rests on noise. Fix the usability to a bearable level and rerun before concluding anything about demand.",
              "piece": "mvp-definition",
              "principle": "mvp-viability-clause"
            },
            {
              "title": "Busy and lost",
              "scenario": "A team has run 30 sprints, ships weekly, and demos beautifully. Asked which customer segment the next quarter serves and what job it wins, the room goes quiet.",
              "answer": "Execution without strategy. The deck's split: sprints, launches, and iteration are execution; segmentation and JTBD are strategy, and no amount of execution speed substitutes for the unanswered strategy questions.",
              "piece": "strategy-vs-execution",
              "principle": "strategy-vs-execution"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Cut to the MVP",
              "prompt": "A proposed MVP for a tenant screening product includes: the screening form, automated checks, a landlord dashboard, tenant chat, rent collection, and a mobile app. Cut it to an MVP per the definition, and say what the kept set validates.",
              "solution": "Keep: the screening form and the automated checks, with a usable, designed experience, delivered as a simple web flow, plus a way to see the verdict. Cut or defer: chat, rent collection, native apps, and the full dashboard. The kept set validates the one idea that matters: landlords will hand over applicants and pay for a trustworthy verdict. Everything cut is a later phase, added by priority if the validation holds.",
              "selfExplain": "Why is deferring rent collection safe even though landlords asked for it?"
            },
            {
              "rung": "full",
              "title": "Name the missing side",
              "prompt": "A startup's board update lists: features shipped, sprint velocity, bugs closed, and a launch date. Write the two strategy questions you would ask before approving more execution spend, and the artefact each answer lives in.",
              "solution": "Model answer: One, which segment are we for, and what job do we win for them that rivals do not? (JTBD and segmentation; the answer lives in the PRD's segment and personas component.) Two, what does the competitive analysis say buyers can name as our difference? (Differentiation; it lives in the competitive analysis and the value proposition.) Until both are written down, more execution spend is motion on the execution side of the line with the strategy side blank."
            }
          ],
          "questions": [
            {
              "id": "mvp-q01",
              "type": "mc",
              "prompt": "The deck's definition of an MVP is:",
              "options": [
                "The cheapest version engineering can ship",
                "A landing page with a signup form",
                "Version 1 of the full product, with polish deferred",
                "The minimum features to satisfy early customers and validate the idea, including design, usability, and customer experience"
              ],
              "answer": 3,
              "principle": "mvp-definition",
              "difficulty": 1,
              "feedback": {
                "step": "Recall both clauses: minimum and viable.",
                "why": "Minimum serves the test; viable means design, usability, and CX are inside the definition, not extras. A landing page may be a test, but it is not the deck's MVP definition.",
                "cue": "If an option drops the experience clause, it dropped half the definition."
              }
            },
            {
              "id": "mvp-q02",
              "type": "mc",
              "prompt": "A team ships a functionally complete but nearly unusable MVP. Testers quit in frustration and the team reports 'the idea failed validation.' The error:",
              "options": [
                "The MVP violated its own definition: without usability and CX, the test measured the interface, so the idea was never actually validated or invalidated",
                "None; a failed test is a failed test",
                "The team should have run a bigger test group",
                "The idea needed more features"
              ],
              "answer": 0,
              "principle": "mvp-viability-clause",
              "difficulty": 2,
              "feedback": {
                "step": "Ask what the test was capable of measuring.",
                "why": "Validation requires a viable product. An unusable one produces evidence about usability only, and kill decisions made on it are decisions made on noise.",
                "cue": "When testers fail at the interface, the idea downstream of the interface was never reached."
              }
            },
            {
              "id": "mvp-q03",
              "type": "mc",
              "prompt": "'A minimum viable product is not a product, it is a process' (Brikman, assigned for this class) means:",
              "options": [
                "MVPs should never ship",
                "The MVP's value is the testing and course correction it drives before bigger commitments, not the artefact itself",
                "Process documentation matters more than customers",
                "Every product needs nine versions"
              ],
              "answer": 1,
              "principle": "mvp-as-process",
              "difficulty": 2,
              "feedback": {
                "step": "Interpret the slogan through the deck's use of it.",
                "why": "The deck pairs the line with testing the market and course correcting before Crossing the Chasm, features phased by priority. The artefact is disposable; the corrected course is the output.",
                "cue": "Ask what the MVP produces. If the answer is 'learning that changes the plan', you have the process reading."
              }
            },
            {
              "id": "mvp-q04",
              "type": "mc",
              "prompt": "Which item sits on the STRATEGY side of the deck's line?",
              "options": [
                "Building the MVP",
                "Gathering launch feedback",
                "Segmentation and competitive analysis",
                "Marketing and sales"
              ],
              "answer": 2,
              "principle": "strategy-vs-execution",
              "difficulty": 1,
              "feedback": {
                "step": "Sort by the deck's two lists.",
                "why": "Strategy: JTBD, segmentation, competitive analysis, viable solutions, PRD and wireframes. Execution: build and launch the MVP, feedback, iterate, complete the product, marketing and sales.",
                "cue": "Deciding what and for whom is strategy. Doing it is execution."
              }
            },
            {
              "id": "mvp-q05",
              "type": "mc",
              "prompt": "A hardware team specifies the entire device up front, builds it in one pass, and tests with users only when units exist. The deck's classification and verdict:",
              "options": [
                "Agile, and appropriate",
                "Neither; hardware has no process",
                "Waterfall, and always wrong",
                "Waterfall, and appropriate here: linear and static suits hardware, where late change is physically expensive"
              ],
              "answer": 3,
              "principle": "waterfall-fit",
              "difficulty": 2,
              "feedback": {
                "step": "Match the process to the cost of change.",
                "why": "Waterfall is the deck's fit for hardware precisely because iteration is expensive once things are physical. The same shape in SaaS would be a trap; context, not the label, decides.",
                "cue": "Ask what a change costs at the end. Expensive change justifies up front specification."
              }
            },
            {
              "id": "mvp-q06",
              "type": "mc",
              "prompt": "A SaaS team works in two week units it calls sprints, but the full year's features were locked by contract in January and user testing happens in December. In the deck's terms they are:",
              "options": [
                "Running waterfall with sprint labels: the spec is static and linear, and feedback arrives at the end",
                "Agile, because sprints",
                "Running neither process",
                "Running Scrum correctly"
              ],
              "answer": 0,
              "principle": "waterfall-fit",
              "difficulty": 3,
              "feedback": {
                "step": "Classify by shape and feedback timing, not by vocabulary.",
                "why": "Agile in the deck means iterative with early and often feedback, failing fast. A locked annual spec with year end testing has waterfall's shape whatever the meetings are called.",
                "cue": "Ignore the ceremony names. Ask: when does feedback arrive, and can the plan change when it does?"
              }
            },
            {
              "id": "mvp-q07",
              "type": "mc",
              "prompt": "The deck's rule for when to test is:",
              "options": [
                "After the full product is coded, to avoid biasing users",
                "Early and often, on mocks and prototypes, before coding",
                "Only at launch, when stakes are real",
                "Once per quarter, in a lab"
              ],
              "answer": 1,
              "principle": "test-early",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the practice rule.",
                "why": "Testing on mocks and prototypes before coding buys feedback while change is cheapest, which is the whole economic point of the agile side of the line.",
                "cue": "Cheap artefacts first is the Class 2 fidelity lesson in process form."
              }
            },
            {
              "id": "mvp-q08",
              "type": "mc",
              "prompt": "A founder presents the MVP plan: 14 features, nine months, full launch at the end, described as 'phased'. Against the deck, the deepest problem is:",
              "options": [
                "Fourteen is too many features to name",
                "Nine months is too long for any project",
                "There is no test and course correct loop before the big commitment: features are listed, but nothing validates the idea early or can change the plan",
                "The word phased is misused"
              ],
              "answer": 2,
              "principle": "mvp-as-process",
              "difficulty": 3,
              "feedback": {
                "step": "Judge the plan by the process test, not the feature count.",
                "why": "An MVP exists to validate the idea and course correct before Crossing the Chasm scale commitments. A long, complete, unchangeable plan has a product launch's shape whatever it calls its phases.",
                "cue": "Look for the moment new evidence can change the plan. If there is none, it is not an MVP process."
              }
            },
            {
              "id": "mvp-q09",
              "type": "production",
              "prompt": "Sort this work into the deck's two columns, strategy or execution, and add one line on the risk if the first column stays empty: user interviews about the job, a segmentation decision, three sprints of build work, a launch feedback survey, the PRD, a pricing experiment after launch.",
              "solution": "Model answer: Strategy: user interviews about the job, the segmentation decision, the PRD. Execution: the three sprints, the launch feedback survey, the post launch pricing experiment. Risk if strategy stays empty: the execution engine runs at full speed with no answer to who the product is for or what job it wins, and the launch faithfully answers a question nobody asked, the most expensive way to learn the strategy was missing.",
              "principle": "strategy-vs-execution",
              "difficulty": 2,
              "feedback": {
                "step": "The sorting step: decide versus do.",
                "why": "Interviews, segmentation, and the PRD decide what and for whom. Sprints, surveys, and experiments execute and learn within decisions already made. Both columns are needed; the deck's warning is about the order and the gap.",
                "cue": "If the activity could be done identically for any product, it is execution. If it commits this product to a who and a what, it is strategy."
              }
            },
            {
              "id": "mvp-q10",
              "type": "mc",
              "prompt": "Why does the deck place 'test the market and course correct' specifically BEFORE Crossing the Chasm in the MVP discussion?",
              "options": [
                "The chasm is a pricing event",
                "Regulation requires it",
                "Crossing the Chasm is a book about testing",
                "The MVP's corrections are cheap while the audience is early customers; the chasm is where the product must work for a mainstream market that will not tolerate a half tested idea"
              ],
              "answer": 3,
              "principle": "mvp-as-process",
              "difficulty": 3,
              "feedback": {
                "step": "Connect the MVP's timing to the chasm's audience change.",
                "why": "Early customers forgive and teach. The mainstream on the far side of the chasm buys a whole, proven product. Course correction has to happen while the forgiving audience is the one testing.",
                "cue": "Timing questions in this course are usually audience questions: who is testing this, and how much will they forgive?"
              }
            }
          ]
        },
        {
          "id": "class4-pricing-gtm",
          "title": "Pricing, Positioning, and Go-to-Market",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 4 deck, mapped to 2026 Class 4 (MVP, Launch and Go-to-Market). The 2026 lecture and its 90-day launch playbook exercise are not held; the exercise is not described here.",
          "pieces": [
            {
              "id": "pricing-inputs",
              "name": "What pricing must weigh",
              "fn": "Target market research, costs and resources (COGS), profitability and margins, whether the product is physical or digital, and perceived value.",
              "predict": "A team sets price by copying the category leader's price. Which of the five inputs did they use, and which four did they skip?"
            },
            {
              "id": "cost-vs-value-pricing",
              "name": "Cost-based versus value-based pricing",
              "fn": "Cost-based pricing builds up from what the product costs. Value-based pricing starts from what the outcome is worth to the customer, and fits luxury, customised, differentiated, and niche products.",
              "predict": "A niche tool saves each customer a measurable $50,000 a year and costs the maker almost nothing to run. Which pricing logic captures the opportunity, and which leaves it on the table?"
            },
            {
              "id": "sales-enablement-gtm",
              "name": "Sales enablement and GTM timing",
              "fn": "Go-to-market starts before launch: engage marketing and sales from the start of GTM planning, so the people who must sell the product shape the launch instead of receiving it.",
              "predict": "Sales first sees the product at the launch all hands and cannot answer basic buyer questions for a month. Which GTM rule was broken, and when should sales have entered?"
            }
          ],
          "lesson": [
            {
              "title": "What pricing must weigh",
              "body": "The deck's **pricing** inputs:\n\n- **Target market research**: who is buying, and what the job is worth to them\n- **Costs and resources (COGS)**: what each unit actually costs to make and serve\n- **Profitability and margins**: the gap that decides whether growth helps (Class 2's viability)\n- **Physical versus digital**: physical units carry per unit costs digital ones do not\n- **Perceived value**: what the customer believes the outcome is worth\n\nA price set from one input alone (usually a rival's price, which is not even on the list) inherits every other input's risks unseen."
            },
            {
              "title": "Cost-based versus value-based pricing",
              "body": "| Approach | Starts from | Fits |\n|---|---|---|\n| **Cost-based** | What the product costs to make and serve, plus a margin | Undifferentiated products where value is hard to prove |\n| **Value-based** | What the outcome is worth to the customer | Luxury, customised, differentiated, and niche products |\n\nThe deck's fit rule connects back to Class 2: **value based pricing needs differentiation to stand on**. A commoditized product cannot hold a value based price, because the customer's alternative is the same thing cheaper."
            },
            {
              "title": "Sales enablement and GTM timing",
              "body": "The deck's go-to-market rule is about timing: **engage marketing and sales from the start of GTM planning**.\n\nThe reasoning is practical. Sales knows the buyer's objections, the incumbent's contract terms, and the questions that kill deals, while there is still time to shape positioning and the launch. A launch handed to sales as a finished surprise wastes that knowledge and buys a month of fumbled buyer conversations. **Positioning** (what the product is, for whom, against what alternative) is the artefact those conversations produce, and it is the value proposition from Class 3 wearing its launch clothes."
            }
          ],
          "matrix": {
            "title": "Cost-Based vs Value-Based Pricing",
            "columns": [
              "Cost-based pricing",
              "Value-based pricing"
            ],
            "rows": [
              "Starts from",
              "What sets the ceiling",
              "Best fit",
              "What it ignores",
              "Classic trap"
            ]
          },
          "examples": [
            {
              "title": "The copied price",
              "scenario": "A startup prices its niche compliance tool at exactly the big platform's price, $49, although its tool saves each customer a measurable $40,000 a year in audit labour and the platform does not serve their niche at all.",
              "answer": "Value-based pricing was available and cost based copying ignored it: the product is niche and differentiated, the outcome is measurable, so the ceiling is the customer's $40,000, not the maker's costs or an unrelated platform's price. Most of the value was left on the table.",
              "piece": "cost-vs-value-pricing",
              "principle": "value-based-fit"
            },
            {
              "title": "The surprised sales team",
              "scenario": "Launch day. The sales team gets the deck, the price, and the positioning in the same meeting as the press release, and spends the next month losing deals to one objection nobody had briefed them on.",
              "answer": "The GTM timing rule was broken: marketing and sales should have been engaged from the start of GTM planning. The killing objection is exactly the knowledge sales could have contributed while positioning could still change.",
              "piece": "sales-enablement-gtm",
              "principle": "gtm-timing"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Choose the logic",
              "prompt": "A handmade, customised onboarding service for law firms: three clients a month, high labour cost, outcomes clients describe as 'worth ten times the fee'. Cost based or value based, and why?",
              "solution": "Value based. The deck's fit list is luxury, customised, differentiated, niche, and this is all four; the reference price in the customer's mind is the value of the outcome, not the maker's hours. Cost still matters as a floor (margins must clear), but it does not set the price.",
              "selfExplain": "What would have to change about this business for cost based pricing to become the right logic?"
            },
            {
              "rung": "full",
              "title": "Price the screening tool",
              "prompt": "For the tenant screening product (saves a landlord about $3,000 per avoided bad tenant; costs the maker little per check): name the pricing approach, the input that sets the ceiling, and one input that sets the floor.",
              "solution": "Model answer: Approach: value based, because the outcome is measurable in dollars and the product is differentiated for its niche. Ceiling: perceived value, anchored on the $3,000 loss avoided, so a price in the low hundreds reads as cheap insurance. Floor: costs and margins (COGS per check plus support), the viability input from Class 2; below it, growth loses money however good the value story is."
            }
          ],
          "questions": [
            {
              "id": "gtm-q01",
              "type": "mc",
              "prompt": "Which set is the deck's list of pricing inputs?",
              "options": [
                "Target market research, costs and resources (COGS), profitability and margins, physical versus digital, and perceived value",
                "Whatever rivals charge, plus 10%",
                "The CEO's revenue target and the sales quota",
                "Last year's price and inflation"
              ],
              "answer": 0,
              "principle": "pricing-inputs",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the five inputs as a set.",
                "why": "Pricing in the deck is a weighed decision across market, cost, margin, product type, and perceived value. A rival's price appears nowhere in the list.",
                "cue": "If an option is a single number copied from somewhere, it fails the weighing test."
              }
            },
            {
              "id": "gtm-q02",
              "type": "mc",
              "prompt": "Value-based pricing fits which products, per the deck?",
              "options": [
                "All products equally",
                "Luxury, customised, differentiated, and niche products",
                "Commoditized products in price wars",
                "Only physical products"
              ],
              "answer": 1,
              "principle": "value-based-fit",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the fit list.",
                "why": "Value based pricing needs a customer who can feel a difference worth paying for: luxury, customised, differentiated, niche. Commoditized products cannot hold it (Class 2).",
                "cue": "Value based pricing stands on differentiation. No difference, no value price."
              }
            },
            {
              "id": "gtm-q03",
              "type": "mc",
              "prompt": "A tool costs $2 per user to run and saves each customer a measured $10,000 a year. Priced at $8 'because our margin is 4x', the team's error is:",
              "options": [
                "The margin is too thin",
                "They should have priced at $2 exactly",
                "They priced from cost while a value based ceiling sat far above: the customer's $10,000 outcome, not the maker's $2, should anchor the price",
                "Digital products cannot be value priced"
              ],
              "answer": 2,
              "principle": "value-based-fit",
              "difficulty": 2,
              "feedback": {
                "step": "Identify which logic set the price and which should have.",
                "why": "Cost set the floor correctly and the price incorrectly. For a differentiated product with a measurable outcome, cost based pricing systematically leaves the value gap unclaimed.",
                "cue": "A huge gap between cost and customer outcome is the value based signal. A 4x markup on a tiny cost is still a tiny price."
              }
            },
            {
              "id": "gtm-q04",
              "type": "mc",
              "prompt": "Why does the deck insist perceived value is a pricing input, separate from costs?",
              "options": [
                "Customers enjoy guessing prices",
                "It replaces margin analysis",
                "It is a legal disclosure",
                "The customer's belief about the outcome's worth is what they actually pay against; two products with identical costs can carry very different prices because perceived value differs"
              ],
              "answer": 3,
              "principle": "pricing-inputs",
              "difficulty": 2,
              "feedback": {
                "step": "Say what the customer is comparing the price to.",
                "why": "Buyers weigh the price against what they believe they get. Costs decide whether the maker survives; perceived value decides whether the buyer pays. Both are inputs; neither substitutes for the other.",
                "cue": "Costs live in the maker's spreadsheet. Perceived value lives in the buyer's head. Pricing needs both addresses."
              }
            },
            {
              "id": "gtm-q05",
              "type": "mc",
              "prompt": "The deck's go-to-market timing rule is:",
              "options": [
                "Engage marketing and sales from the start of GTM planning",
                "Brief sales at the launch event",
                "Keep launch plans secret from sales to avoid leaks",
                "Let the product team write all sales material alone"
              ],
              "answer": 0,
              "principle": "gtm-timing",
              "difficulty": 1,
              "feedback": {
                "step": "Recall when sales enters the process.",
                "why": "From the start of planning, because sales holds the objection and incumbent knowledge that should shape positioning while it can still change. A launch day briefing buys a month of fumbled deals.",
                "cue": "Timing questions: 'from the start' beats 'at the event' whenever the latecomer holds knowledge the plan needs."
              }
            },
            {
              "id": "gtm-q06",
              "type": "mc",
              "prompt": "A physical product and a digital product both price at $30. Which pricing input behaves most differently between them, and why?",
              "options": [
                "Perceived value; physical buyers perceive more",
                "Costs and resources: the physical product pays COGS on every unit sold, so its margin shrinks per sale in a way the digital product's does not",
                "Target market research; digital has none",
                "None; the input list is identical in effect"
              ],
              "answer": 1,
              "principle": "pricing-inputs",
              "difficulty": 3,
              "feedback": {
                "step": "Find the input that scales with units.",
                "why": "Physical versus digital is its own listed input precisely because per unit COGS changes the margin structure of every sale. Perceived value and market research apply to both.",
                "cue": "Ask which number changes when the 10,000th unit sells. For physical, cost does; for digital, barely."
              }
            },
            {
              "id": "gtm-q07",
              "type": "mc",
              "prompt": "Positioning, in this class's chain of ideas, is closest to:",
              "options": [
                "The price list",
                "The sprint plan",
                "The value proposition expressed for launch: what the product is, for whom, and against what alternative",
                "The support policy"
              ],
              "answer": 2,
              "principle": "positioning-link",
              "difficulty": 2,
              "feedback": {
                "step": "Place positioning among the course's artefacts.",
                "why": "Positioning takes Class 3's value proposition and aims it at a launch audience against named alternatives. It is a communication artefact built from strategy, not an operations document.",
                "cue": "If it answers 'what is it, for whom, instead of what', it is positioning."
              }
            },
            {
              "id": "gtm-q08",
              "type": "production",
              "prompt": "A B2B tool's launch failed this way: buyers kept asking 'how is this different from the platform we already pay for?' and reps improvised a different answer every call. Write a three line diagnosis and fix, using this topic's ideas.",
              "solution": "Model answer: Diagnosis: positioning was never settled (no shared answer to 'instead of what'), and sales was engaged too late to surface the objection while positioning could still be shaped. Fix: engage sales at the start of GTM planning, harvest the incumbent objection explicitly, and build the positioning and the value proposition around the named difference (segmentation or time to value from Class 2), so every rep gives the same answer because it is the product's actual difference.",
              "principle": "gtm-timing",
              "difficulty": 3,
              "feedback": {
                "step": "The diagnosis step: one artefact missing, one timing rule broken.",
                "why": "Improvised answers are the symptom; the causes are an unsettled positioning and a sales team that met the product at launch. Both fixes are in the topic, and neither is 'train harder'.",
                "cue": "When every rep answers differently, the artefact is missing, not the effort."
              }
            },
            {
              "id": "gtm-q09",
              "type": "mc",
              "prompt": "Cost-based pricing's main blind spot, per this course's logic, is:",
              "options": [
                "It needs cost data",
                "It is illegal for digital products",
                "It always prices too high",
                "It never looks at the customer: it can price a breakthrough at a commodity price because the spreadsheet cannot see perceived value"
              ],
              "answer": 3,
              "principle": "value-based-fit",
              "difficulty": 2,
              "feedback": {
                "step": "Name what the method cannot see.",
                "why": "Cost based logic contains no customer. Where differentiation makes outcomes valuable, that blindness systematically underprices; where the product is commoditized, the same logic is at least honest about the floor.",
                "cue": "Every pricing method has a sense organ it lacks. Cost based lacks the customer's eyes."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "class5",
      "title": "Class 5 (Thu Dec 3): Product Evolution, Lifecycle and Final Presentations",
      "topics": [
        {
          "id": "class5-lifecycle-eol",
          "title": "Roadmaps, Kill versus Reboot, and Sunsetting",
          "provisional": "Framework prep from Prof. Kaul's prior-year (2025) Lecture 5 deck (the shortest deck, 13 pages, mostly course wrap), mapped to 2026 Class 5. The 2026 session adds responsible AI and portfolio case material that is instructor provided and not held; it is named in the lesson only as a syllabus topic, not summarised.",
          "pieces": [
            {
              "id": "roadmap-purposes",
              "name": "What a roadmap is for",
              "fn": "A product roadmap aligns stakeholders, prioritises, tracks progress, coordinates teams, builds consensus, and creates transparency. It is a communication and alignment artefact before it is a schedule.",
              "predict": "A roadmap exists as a Gantt chart in one PM's files and is never shown to anyone. Which of its six jobs is it doing, and which five is it failing?"
            },
            {
              "id": "kill-vs-reboot",
              "name": "Kill versus reboot",
              "fn": "Kill a product when it is no longer profitable, users are not using it, cost outweighs benefits, or compliance and privacy issues force it. First ask whether innovation, UX fixes, cost cuts, or a cheap fix can save it: that is the reboot test.",
              "predict": "Usage is flat and costs exceed revenue, but a two week UX fix addresses the top complaint in every support ticket. Kill or reboot test first, and what decides?"
            },
            {
              "id": "sunsetting",
              "name": "Sunsetting and end of life",
              "fn": "Weigh units and revenue, dev resources consumed, and support effort against the value of redeployed resources. Then build an end of life roadmap, communicate it to sales, marketing, and customers, and reallocate what is freed.",
              "predict": "A sunset is announced to customers by the shutdown email itself, and sales learns from a customer complaint. Which steps of the sunset sequence were skipped?"
            },
            {
              "id": "ethics-esg",
              "name": "Ethics, security, and responsible products",
              "fn": "The wrap deck and the 2026 syllabus both close on the same ground: ESG, security, ethical use of data, privacy, and building socially responsible products, alongside leading without authority.",
              "predict": "A product decision is profitable, legal in its market, and depends on data users do not know is collected. Which lens in this piece says 'still not settled', and why?"
            }
          ],
          "lesson": [
            {
              "title": "What a roadmap is for",
              "body": "The wrap deck defines the **product roadmap** by its jobs: **align stakeholders, prioritise, track progress, coordinate, build consensus, and create transparency**.\n\nFive of the six jobs are about people, which is why a roadmap nobody sees (the predict question's Gantt chart) is barely a roadmap. The roadmap is also where the post launch world lives in the deck's journey: MVP to MMP (minimum marketable product), marketing to Cross the Chasm, direct sales and channels, promotions and campaigns, incentive plans, and partnerships."
            },
            {
              "title": "Kill versus reboot",
              "body": "The deck's **kill** criteria:\n\n- The product is **no longer profitable**\n- **Users are not using it**\n- **Cost outweighs benefits**\n- **Compliance or privacy issues** force the question\n\nAnd its discipline: **before killing, ask whether it can be saved** by innovation, a UX fix, cost cuts, or a cheap fix. That is the **reboot test**. Killing without the test wastes salvageable products; rebooting without the criteria wastes the resources the sunset would free. The framework is the pair, not either half."
            },
            {
              "title": "Sunsetting and end of life",
              "body": "When the answer is kill, the deck's **sunset** sequence:\n\n- Weigh what the product holds: **units and revenue, dev resources consumed, support effort**\n- Weigh what killing frees: the **value of redeployed resources**\n- Build an **end of life roadmap** (dates, migrations, support wind down)\n- **Communicate** it to sales, marketing, and customers, in that order of dependency: internal teams before the customers they must answer\n- **Reallocate** the freed resources visibly, or the sunset saved nothing\n\nA shutdown email as the announcement fails the communication step for every audience at once."
            },
            {
              "title": "Ethics, security, and responsible products",
              "body": "Both the 2025 wrap deck and the 2026 Class 5 topic list close the course on the same ground: **ESG, security, ethical use of data, privacy, and building socially responsible products**, with the 2026 syllabus adding **responsible AI frameworks** (instructor provided material, not held, so it is named here and not summarised).\n\nThe deck's other closing themes are the PM's operating conditions from Class 1, now at career scale: **leading without authority**, managing up, down, and sideways, and staying agile in ambiguity. The course ends where it began: responsibility without authority, exercised on products that affect people who never chose them."
            }
          ],
          "examples": [
            {
              "title": "The zombie product",
              "scenario": "A legacy tool has 40 remaining customers, loses money monthly, and eats a full support rotation. Every quarter someone says 'but those 40 customers love it.' Nobody has priced what the support rotation could build instead.",
              "answer": "Kill criteria are met on profit and cost versus benefit, and the missing analysis is the sunset's second weighing: the value of redeployed resources. 'Some customers love it' answers a question the framework did not ask; the reboot test (a cheap fix that changes the economics) should still be run and recorded before the kill.",
              "piece": "sunsetting",
              "principle": "sunset-weighing"
            },
            {
              "title": "Saved by the cheap fix",
              "scenario": "A dashboard product is slated for shutdown: usage fell 60% in a year. A support review finds one broken onboarding step accounts for most abandonment, fixable in two weeks.",
              "answer": "Run the reboot test before the kill: the deck's discipline is to ask whether innovation, UX, cost cuts, or a cheap fix can save it. A two week fix for the dominant abandonment cause is the textbook cheap fix, so the kill decision waits for its result.",
              "piece": "kill-vs-reboot",
              "principle": "reboot-test-first"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Run the pair",
              "prompt": "A feature (not a product) costs $8,000 a month in maintenance, is used by 3% of customers, and one enterprise contract requires it until renewal in 14 months. Kill, reboot, or neither yet, and why?",
              "solution": "Neither yet, in a specific sense: the compliance like constraint (the contract) blocks an immediate kill regardless of the economics, so the sequence is: run the reboot test (can maintenance be cut, the feature stabilised cheaply?), record the kill criteria that are met (cost versus benefit, low use), and put the sunset on the end of life roadmap dated to the renewal, communicated to sales before the customer hears it. The framework's output is a dated, communicated decision, not a vibe.",
              "selfExplain": "Why does the contract change the decision's timing but not its direction?"
            },
            {
              "rung": "full",
              "title": "Write the sunset note",
              "prompt": "Write the four line internal sunset note for the zombie product in the Examples: decision, weighing, communication order, and reallocation.",
              "solution": "Model answer: Decision: sunset the legacy tool at the end of next quarter. Weighing: it loses money monthly on 40 customers and consumes a full support rotation whose redeployed value (the new onboarding build) exceeds the tool's remaining revenue. Communication: sales and marketing briefed this week with migration offers in hand, customers notified next week with a named contact, never by the shutdown itself. Reallocation: the freed rotation is assigned to the onboarding build the week the sunset completes, so the saving is visible."
            }
          ],
          "questions": [
            {
              "id": "eol-q01",
              "type": "mc",
              "prompt": "The deck defines a product roadmap primarily by:",
              "options": [
                "Its jobs: align stakeholders, prioritise, track progress, coordinate, build consensus, and create transparency",
                "Its dates and dependencies",
                "Its software tool",
                "Its level of detail"
              ],
              "answer": 0,
              "principle": "roadmap-purposes",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the definition by function.",
                "why": "Five of the six jobs are about people aligning, which is why an unseen roadmap fails most of its definition however accurate its dates are.",
                "cue": "If the definition could be satisfied by a file nobody opens, it is not the deck's definition."
              }
            },
            {
              "id": "eol-q02",
              "type": "mc",
              "prompt": "Which set matches the deck's kill criteria?",
              "options": [
                "Low press coverage and an ageing logo",
                "No longer profitable, users not using it, cost outweighs benefits, or compliance and privacy issues",
                "A new CEO and a rebrand",
                "Any product older than five years"
              ],
              "answer": 1,
              "principle": "kill-criteria",
              "difficulty": 1,
              "feedback": {
                "step": "Recall the four criteria as a set.",
                "why": "Profit, use, cost versus benefit, and compliance or privacy. Age and publicity are not criteria; a loved old product can pass every test and a new one can fail them all.",
                "cue": "Two criteria are money, one is use, one is obligation. Pick the option with that shape."
              }
            },
            {
              "id": "eol-q03",
              "type": "mc",
              "prompt": "A product meets two kill criteria, but a cheap UX fix targets the exact complaint driving abandonment. The deck's required next step:",
              "options": [
                "Kill it this week; criteria are criteria",
                "Raise the price",
                "Run the reboot test first: ask whether innovation, UX, cost cuts, or a cheap fix can save it, before the kill is final",
                "Survey the executives"
              ],
              "answer": 2,
              "principle": "reboot-test-first",
              "difficulty": 2,
              "feedback": {
                "step": "Apply the pair in the right order.",
                "why": "Kill versus reboot is one framework with two halves. The criteria nominate the product; the reboot test decides. Skipping the test wastes salvageable products.",
                "cue": "Criteria met means 'candidate', not 'closed'. The test comes between."
              }
            },
            {
              "id": "eol-q04",
              "type": "mc",
              "prompt": "In a sunset decision, the value of redeployed resources belongs in the analysis because:",
              "options": [
                "Finance requires the phrase",
                "It is a tax category",
                "It makes the announcement sound positive",
                "What the product's people and budget could build instead is a real cost of keeping it; a sunset that frees nothing and reallocates nothing saved nothing"
              ],
              "answer": 3,
              "principle": "sunset-weighing",
              "difficulty": 2,
              "feedback": {
                "step": "Weigh both sides of the sunset ledger.",
                "why": "The deck weighs units, revenue, dev resources, and support effort against what those resources would do freed. Keeping a product is a decision to not build the other thing.",
                "cue": "Every 'keep' is a silent 'do not build'. The sunset analysis says the quiet part out loud."
              }
            },
            {
              "id": "eol-q05",
              "type": "mc",
              "prompt": "The deck's communication order for a sunset is:",
              "options": [
                "Internal teams (sales, marketing) briefed and equipped, then customers, so the people customers call can answer",
                "Customers first, by shutdown email",
                "Press release, then everyone",
                "No communication; quiet shutdowns are kinder"
              ],
              "answer": 0,
              "principle": "sunset-communication",
              "difficulty": 1,
              "feedback": {
                "step": "Sequence the audiences by dependency.",
                "why": "Customers will call sales and support. Briefing internal teams first, with migrations ready, is what makes the customer communication honest instead of a surprise.",
                "cue": "Announce in the order people will be asked questions."
              }
            },
            {
              "id": "eol-q06",
              "type": "mc",
              "prompt": "A product is profitable and used, but a privacy review finds its data practices cannot be made compliant. In the framework:",
              "options": [
                "Profitability protects it",
                "Compliance and privacy issues are a standalone kill criterion: the kill question is forced regardless of the other three",
                "Only the legal team may notice",
                "Usage outweighs compliance"
              ],
              "answer": 1,
              "principle": "kill-criteria",
              "difficulty": 2,
              "feedback": {
                "step": "Read the criteria as independent triggers.",
                "why": "The four criteria are alternatives, not a majority vote. A compliance failure forces the kill or radical reboot question even when profit and use are healthy, which is also Class 5's ethics material arriving as a decision rule.",
                "cue": "Criteria joined by 'or' do not need each other's permission."
              }
            },
            {
              "id": "eol-q07",
              "type": "mc",
              "prompt": "Which roadmap failure is most consistent with the deck's definition?",
              "options": [
                "The roadmap uses quarters instead of exact dates",
                "The roadmap changed twice this year",
                "The roadmap is accurate and detailed, and lives in one person's files, unseen by stakeholders",
                "The roadmap fits on one page"
              ],
              "answer": 2,
              "principle": "roadmap-purposes",
              "difficulty": 2,
              "feedback": {
                "step": "Grade the roadmap against its jobs, not its precision.",
                "why": "Align, coordinate, consensus, and transparency all require an audience. An unseen roadmap performs one of six jobs (arguably tracking) and fails the definition while looking rigorous.",
                "cue": "A communication artefact with no audience is a diary."
              }
            },
            {
              "id": "eol-q08",
              "type": "mc",
              "prompt": "Post launch, the deck's journey places MVP as growing into:",
              "options": [
                "A price war",
                "A full rewrite",
                "Immediate sunsetting",
                "MMP, the minimum marketable product, alongside marketing to Cross the Chasm, channels, promotions, and partnerships"
              ],
              "answer": 3,
              "principle": "post-launch-journey",
              "difficulty": 3,
              "feedback": {
                "step": "Recall the post launch sequence from the wrap deck.",
                "why": "MVP to MMP is the deck's evolution step: the tested idea becomes the marketable product, with chasm crossing marketing, direct sales and channels, promotions, incentive plans, and partnerships around it.",
                "cue": "MVP validates; MMP sells. The journey question is which one comes after launch."
              }
            },
            {
              "id": "eol-q09",
              "type": "production",
              "prompt": "Write a kill versus reboot decision in four lines for this product: a reporting add-on, revenue $6,000 a month and falling, costs $11,000 a month in maintenance and support, 200 active customers, and a known $3,000 one time fix that removes the top support driver but does not change the revenue trend.",
              "solution": "Model answer: Criteria: cost outweighs benefits and revenue is falling, so the product is a kill candidate; usage (200 actives) is low but real. Reboot test: the cheap fix cuts support cost but leaves a $6,000 revenue line against still higher costs and a falling trend, so it delays rather than saves. Decision: kill, on an end of life roadmap: sales and marketing briefed first with a migration path to the built in reporting, customers notified with a full quarter's notice. Reallocation: the freed $11,000 a month of maintenance and support capacity moves to the core reporting roadmap, named in the same note.",
              "principle": "kill-vs-reboot-verdict",
              "difficulty": 3,
              "feedback": {
                "step": "The verdict step: criteria, test, decision, sequence.",
                "why": "A complete decision runs both halves of the framework and lands in the sunset sequence: communication order and reallocation included. The cheap fix is considered and answered, not ignored.",
                "cue": "A kill decision without a communication order and a reallocation is half a decision."
              }
            },
            {
              "id": "eol-q10",
              "type": "mc",
              "prompt": "The course closes on leading without authority, managing up, down, and sideways, and staying agile in ambiguity. The through line back to Class 1 is:",
              "options": [
                "The PM's founding condition from Horowitz, responsibility without authority, restated at career scale: the role never gains line authority, so influence is the permanent skill",
                "Coincidence; the topics are unrelated",
                "A hint about the final presentation's format",
                "A summary of the guest speakers"
              ],
              "answer": 0,
              "principle": "responsibility-without-authority",
              "difficulty": 3,
              "feedback": {
                "step": "Close the loop the course opened.",
                "why": "Class 1 defined the PM as owning outcomes without authority. The wrap deck's closing themes are that same condition described as a career: leading without authority is not a phase, it is the job.",
                "cue": "When a course ends on its first idea in larger clothes, the exam usually wants the connection named."
              }
            }
          ]
        }
      ]
    }
  ]
};
