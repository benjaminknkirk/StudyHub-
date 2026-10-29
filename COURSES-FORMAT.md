# Course Data Format

How a course is described to the Integrated Learning Plan site. One file per course,
in `courses/`, named `courses/<course-id>.js`. The engine (`index.html`) never changes
when a course is added. To add a course:

1. Write `courses/<course-id>.js` following this format.
2. Add `"<course-id>"` as one line in the array in `courses/registry.js`.
3. Reload the site. Done.

A course file is a single JavaScript statement assigning the course object:

```js
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA["<course-id>"] = { ...course object... };
```

It must parse as plain JavaScript (check with `node --check courses/<course-id>.js`).
No imports, no build step. Text fields support a small markdown subset rendered by the
engine: paragraphs, `- ` bullet lines, `**bold**`, `` `inline code` ``, fenced code
blocks (triple backticks, used for SQL), and pipe tables (`| a | b |` lines with a
`|---|---|` separator row).

This format implements Section 12 of `~/workspace/school/learning-plan-site-spec.md`.

---

## Course object (top level)

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Must equal the file/registry id, e.g. `"mgmtmsa-402"`. |
| `name` | string | yes | Display name, e.g. `"MGMTMSA 402: SQL and Databases"`. |
| `professor` | string | yes | Instructor name as it should appear on the rules card. |
| `term` | string | no | e.g. `"Fall 2026"`. |
| `termDates` | object | no | `{ start, end }`, both `YYYY-MM-DD`. `start` is the first class. `end` is the final date, or the last day of the term when the course has no final. The time-to-final pill uses this. Only dates already established for the course; never invent one to fill the field. |
| `finals` | array | no | Dated exams, `{ id, date, label }`. Omit when the course has no final. The engine schedules retrieval gaps from the first final's date, parks a review about 3 days before it, and exports the exam plus prep windows (about 21, 10, 5, and 3 days before). |
| `deadlines` | array | no | One-off due dates, `{ id, date, label }`. `id` is stable within the course (`"hw1"`). The Home strip and notifications use these. Marking one done is stored in the student's state, not here. |
| `weekly` | array | no | Repeating deadlines, `{ id, label, weekday, until }`. `weekday` is JavaScript's `getDay()` (0 Sunday through 6 Saturday). Occurrences run from `termDates.start` through `until`. Use only for a cadence the syllabus states. |
| `inStudyQueue` | boolean | no | Default true. Set false when the course is on the site for deadline visibility and should not be offered as a Today study task. |
| `examInfo` | string | yes | Exam dates and format in one line, e.g. `"Final: Mon Dec 7, 2026. Closed book, handwritten on paper, no notes or computer."` Exam durations are facts and may be named. |
| `aiPolicy` | string | yes | The course's own AI rule, shown on practice and quiz start screens, e.g. `"AI for study and ungraded work only. All quizzes and the final are closed book and handwritten."` |
| `productionMode` | `"handwritten"` or `"typed"` | yes | `handwritten`: production questions and practice are presented as "write on paper, then self-mark against the revealed solution" and typed answers are never accepted. `typed`: production questions get a text box the student checks against the solution. |
| `gradeWeights` | array of `{label, weight}` | no | e.g. `[{label:"Quizzes", weight:"..."}]`. Only include weights a held syllabus actually states; omit the field rather than inventing numbers. |
| `rules` | array of strings | yes | The course's non-negotiable working rules, shown on the course rules card and echoed in feedback (e.g. Rosario's join and grouping rules). |
| `chapters` | array | yes | See below. Order is teaching order. |

## Chapter object

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Unique within the course, e.g. `"lec3"`. |
| `title` | string | yes | e.g. `"Lecture 3: Querying One Table"`. |
| `topics` | array | yes | See below. |

## Topic object

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Unique within the course, e.g. `"lec3-fetching"`. Used in saved state; never rename after publish. |
| `title` | string | yes | The topic's actual course name. |
| `provisional` | string | no | If present, the topic is labelled PROVISIONAL everywhere, and the string says why / what source is missing, e.g. `"UNION stacking requirements are not stated in the held decks."` Omit for fully source-backed topics. Never invent content to avoid this flag. |
| `pieces` | array | yes | The topic skeleton (below). At least 1. |
| `lesson` | array | yes | Paginated lesson parts (below). One part per piece is the norm. |
| `examples` | array | no | Scenario cards (below). |
| `matrix` | object | no | Present iff the topic contains a confusable set. Its presence makes the comparison matrix a required Organize deliverable. Shape: `{ title, columns: ["WHERE","HAVING"], rows: ["What it filters", "When it runs", ...] }`. The student fills every cell in their own words; the engine never prefills cells. The canonical comparison belongs in the lesson text, not here. |
| `methods` | array | no | Quantitative methods in this topic, for the Encode template-card builder: `{ id, name, trigger }`. Card fields are fixed by the engine (givens, find, formula or rule, steps, failure modes, one canonical example) and are filled by the student. |
| `sorting` | array | no | Encode sorting drill items: `{ statement, principle, cue }`. The engine shows statements, the student picks the principle from the topic's principle list; the cue is shown as feedback. Principles are collected from the items plus the topic's question principles. |
| `practice` | array | no | Practice rungs (below). |
| `questions` | array | yes | The question pool (below). Working minimum: 9 questions, a 6-question quiz plus at least 3 further questions so a retest can stay on a fresh item. A topic below that must be `provisional` and say so. |

## Piece object (the skeleton)

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Unique within the topic. |
| `name` | string | yes | The piece's name, e.g. `"Execution order"`. |
| `fn` | string | yes | One line function in plain words: what this piece does. Never a bare name alone. |
| `predict` | string | yes | One Predict (Stage 0) question drawn from the piece's core, attempted cold before any content is shown. |

## Lesson part object

| Field | Type | Required | Meaning |
|---|---|---|---|
| `title` | string | yes | Part heading, normally the piece name. |
| `body` | string | yes | The lesson text in the markdown subset. Bold the key terms. Comparison tables go here (pipe tables). |
| `workedExample` | object | no | `{ title, body }`: a fully worked example shown inside this part. The engine appends a mandatory self-explain prompt after it ("Why does this step follow?") which the student answers in their own words or explicitly skips (the skip is logged). |

## Example object

`{ title, scenario, answer, piece, principle }` — `scenario` is shown on the card;
`answer` stays hidden behind Show/Hide; `piece` is the piece id it belongs to;
`principle` is the principle tag. After revealing, the student rates whether they
could have produced it cold; a "No" files the principle into the retrieval pool.

## Practice item object

`{ rung, title, prompt, solution, selfExplain? }`

- `rung`: `"worked"` (solution shown with a self-explain prompt), `"completion"`
  (steps partly removed; student produces, then self-marks), or `"full"` (unaided).
- `prompt` and `solution` use the markdown subset (SQL in fenced blocks).
- Every practice item offers "file to error log" when the student marks it missed.

## Question object (the pool)

| Field | Type | Required | Meaning |
|---|---|---|---|
| `id` | string | yes | Unique within the course, e.g. `"agg-q07"`. Used to guarantee retests never repeat a served question. Never reuse an id for different content. |
| `type` | `"mc"` or `"production"` | yes | `mc`: multiple choice. `production`: the student produces the answer (a query, a value, a fix) in the course's test format. |
| `prompt` | string | yes | The question, in the course's test format, with all data it needs inside it (dataset rows, schema facts). Markdown subset; SQL in fenced blocks. |
| `options` | array of strings | mc only | The answer options. |
| `answer` | integer | mc only | Index into `options` of the correct answer. Vary which letter is correct across the pool. |
| `solution` | string | production only | The model answer revealed for self-marking after the attempt and confidence rating. |
| `principle` | string | yes | Principle tag, e.g. `"avg-null-divisor"`. Error entries and repeat-pattern detection group by this tag. Keep tags short, stable, and shared across questions testing the same principle. |
| `difficulty` | 1, 2, or 3 | yes | 1 recall, 2 standard application, 3 trap/transfer. Retests match difficulty. |
| `feedback` | object | yes | `{ step, why, cue }`, all three required: `step` = which step of the work failed (or the confirming step when correct), `why` = why that step is right/wrong, `cue` = what cue in the question should have triggered the right move. A question without all three must not be published. |
| `generated` | boolean | no | `true` when the question was drafted from the topic's existing lesson so the pool could reach the minimum, and a person still needs to review it. Omit on questions written and checked as part of the original source pass. |

## Authoring rules (from the spec, binding on generated files)

- Content must trace to held sources (decks, handouts, packs). What the sources do not
  support is omitted or the topic is `provisional` with the gap named.
- Course rules stated by the professor (in `rules`) are absolute in lessons, practice,
  solutions, and feedback. If a common shortcut contradicts a course rule (e.g.
  a database exception the professor does not teach), the course rule wins and the
  shortcut is never presented as available.
- Every production solution must itself obey the course rules (explicit forms,
  full names where required, no banned constructs).
- Student-facing fields (matrix cells, template cards, organizing fields) are never
  prefilled by the course file; the file only defines their labels and structure.
