# 402 Template Cards (Lectures 1 to 4)

Sources are the Lecture 1 to 4 decks (read in full Oct 26, 2026) plus the Lecture 3 replacement pack.

Format per card: Name / Trigger pattern / Slots / Canonical example / Near miss where it does NOT apply.
Fixed rules on every card (Rosario): never SELECT *, always explicit JOIN ... ON, never NATURAL JOIN, never USING, never the comma join, qualify column names that are shared by both tables, full column names in GROUP BY, no aliases in HAVING, every SELECT column aggregated or in GROUP BY with no exceptions taught in the decks, ORDER BY by column names not numbers.

## Card 1: Single-table SELECT with WHERE
- Name: Querying a single table (Lecture 3, fetching from a single table).
- Trigger pattern: The prompt asks for columns from one table, possibly filtered to rows matching a condition on their own values, possibly sorted or limited. No second table and no per group summary is involved.
- Slots: The deck's basic template, with optional parts marked by the deck as optional (WHERE and ORDER BY):
  SELECT col1, col2 AS new_col2, f(col3) AS new_col3, ... FROM tablename WHERE <predicate> ORDER BY column_or_set_of_columns;
  Execution order to plan by: FROM chooses the table, WHERE filters rows before SELECT, SELECT extracts columns and creates aliases, DISTINCT removes duplicates across all selected columns, ORDER BY sorts (aliases allowed here, default ascending), LIMIT cuts the finished result. WHERE uses =, >, <, >=, <=, != (or <>), AND, OR, IN, NOT IN, IS NULL, IS NOT NULL. Functions and arithmetic apply to each row independently.
- Canonical example (Lecture 3 deck, youtube_video): a row level function, an alias, and NULLIF guarding a division:

```sql
SELECT video_id, title,
       (views / 1000000.0) AS millions_views,
       CAST(likes * 100.0 / NULLIF(likes + dislikes, 0) AS DECIMAL(5,2)) AS pct_liked
FROM youtube_video;
```

  Second canonical example (Lecture 3 deck, tinybase): sorting with ties and a limit.
  SELECT lastname AS family_name, firstname AS given_name, gpa AS grade_point_average FROM tinybase WHERE gpa IS NOT NULL ORDER BY gpa DESC, lastname, firstname LIMIT 3;
  Deck note inside this example: PostgreSQL sorts NULL above every value, so without the WHERE the NULL gpa row would top a DESC list. NULLS LAST is the fix when the filter is not wanted.
- Near miss where it does NOT apply: The filter is on an aggregate or a group, for example majors whose average GPA is below 3.5. That is Card 2: WHERE cannot see aggregates because none exist when WHERE runs. Also a near miss on shape: the prompt needs columns from two tables, which is Card 4, not this card.

## Card 2: Aggregations with GROUP BY and HAVING
- Name: Aggregations (Lecture 3, grouping rows and filtering on aggregates).
- Trigger pattern: The prompt asks for a summary per group (per channel, per major, per category), or one global summary of a whole table. Aggregate functions in the decks: COUNT(*), COUNT(column), COUNT(DISTINCT column), SUM, AVG, MAX, MIN, plus standard deviation, variance, covariance, and STRING_AGG forms named in the deck's function table.
- Slots: Writing order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. In SELECT, grouping columns first, then aggregated columns. Rules inside the slots: WHERE filters rows before grouping, HAVING filters groups after grouping and repeats the full aggregate (no alias), GROUP BY takes full column names, every SELECT column is aggregated or in GROUP BY. NULL slots: COUNT(*) counts all rows, COUNT(column) counts non-NULL values, COUNT(DISTINCT column) counts distinct non-NULL values, SUM and AVG, MIN and MAX ignore NULLs, and AVG divides by COUNT(column), never COUNT(*).
- Canonical example (Lecture 3 deck, bruinbase): average GPA by major, then the full exercise version with every clause:

```sql
SELECT major, AVG(gpa) AS average
FROM bruinbase
GROUP BY major;

SELECT major, AVG(gpa) AS average
FROM bruinbase
WHERE career = 'UG'
GROUP BY major
HAVING AVG(gpa) < 3.5
ORDER BY average DESC
LIMIT 2;
```

  Canonical example on youtube_video (replacement pack): channels whose average views exceed 70000. NullNotes fails because AVG skips its NULL views row, giving 60000 / 1 = 60000.
  SELECT channel, AVG(views) AS avg_views FROM youtube_video GROUP BY channel HAVING AVG(views) > 70000;
- Near miss where it does NOT apply: A plain row by row fetch with no grouping asked for is Card 1, adding GROUP BY would collapse rows the prompt wants kept separate. The deck's own error case is the sharpest near miss: SELECT id, major, AVG(gpa) FROM bruinbase GROUP BY major fails, because id is neither grouped nor aggregated and the database will not guess which id to show.

## Card 3: CASE and NULLIF
- Name: Control flow (Lecture 3). CASE changes an output value based on conditions, like a switch or an if, else if, else chain. NULLIF returns NULL on invalid data, based on an equality. PostgreSQL has no IF() function in queries, CASE is the standard tool.
- Trigger pattern: CASE when the prompt asks to relabel, bucket, or categorize values in the output, for example turning a level code into a class standing, or several codes into Undergraduate vs Graduate. NULLIF when a computation can hit a bad input value, above all division by a value that could be 0.
- Slots:
  Simple CASE (one column, exact value matches): CASE column WHEN value1 THEN result1 WHEN value2 THEN result2 ... ELSE fallback END AS alias. The END AS alias matters: without it PostgreSQL names the output column "case", and two CASE columns collide with the same useless name.
  Searched CASE (arbitrary conditions on one or more columns): CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ... ELSE fallback END AS alias. Conditions are tested in order, first true condition wins.
  NULLIF(expr1, expr2): returns NULL if the two expressions are equal, otherwise returns expr1. Placed inside the expression it protects, most often as a divisor.
- Canonical example, simple CASE (Lecture 3 deck, bruinbase):

```sql
CASE level
  WHEN 'UFR' THEN 'Freshman'
  WHEN 'USO' THEN 'Sophomore'
  WHEN 'UJR' THEN 'Junior'
  WHEN 'USR' THEN 'Senior'
  WHEN 'GMT' THEN 'Masters Student'
  WHEN 'GD1' THEN 'Doctoral Student'
  WHEN 'GD2' THEN 'Doctoral Candidate'
  WHEN 'CHN' THEN 'Chancellor Bossman'
  ELSE 'Unclassified'
END AS new_level
```

- Canonical example, searched CASE (Lecture 3 deck, bruinbase):

```sql
CASE
  WHEN level IN ('UFR', 'USO', 'UJR', 'USR') THEN 'Undergraduate'
  WHEN level IN ('GMT', 'GD1', 'GD2') THEN 'Graduate'
  WHEN level = 'CHN' THEN 'Chancellor'
  ELSE 'Unknown'
END AS new_career
```

- Canonical example, NULLIF (Lecture 3 deck, youtube_video, the pct_liked column): NULLIF(likes + dislikes, 0) returns NULL when likes + dislikes equals 0, so the division yields NULL instead of an error.
  CAST(likes * 100.0 / NULLIF(likes + dislikes, 0) AS DECIMAL(5,2)) AS pct_liked
- Near miss where it does NOT apply: Simple CASE cannot express ranges or conditions on several columns, that needs searched CASE. NULLIF is not a general conditional: it tests one equality only, so a rule like "if views exceed 100000 label it viral, otherwise normal" is a CASE, not a NULLIF. And neither construct filters rows: output shaping belongs in SELECT, row filtering belongs in WHERE.

## Card 4: Inner joins
- Name: Inner joins (Lecture 4). A join combines rows from two tables into one result based on common attributes, called the join key. Think of it as: form all pairs, then keep the pairs that satisfy the ON condition. Two forms are taught: equi join (ON uses = and only =) and non-equi join (ON contains a comparator that is not =).
- Trigger pattern: The prompt needs columns from two tables side by side on the same output row, matched on a shared attribute. Equi join when matching is exact equality on the key. Non-equi join when matching is a range or inequality, for example placing each score percentage into a grade band.
- Slots: Writing order with joins: SELECT, FROM, JOIN, ON, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT. Execution order: FROM, JOIN and ON, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT. Row behavior slots: no match, no row, from either table. Duplicate keys multiply: every row pairs with every matching row, the database does not stop at the first match, so predict the count from cardinality (1:1, 1:M, M:M). Naming slots: a column present in both tables must be qualified (R.A, S.A); a column present in only one table needs no qualification. Table aliases are defined in FROM and JOIN and can be used anywhere after. Columns used in ON, WHERE, or GROUP BY do not have to appear in SELECT.
- Canonical example, equi join (Lecture 4 deck, tables R and S):

```sql
SELECT R.A, B, C, D
FROM R
INNER JOIN S
ON R.A = S.A;
```

  Deck result note for this shape: when A = alpha appears once in R and twice in S, the result holds two rows for alpha, one per match.
  Introductory deck example, same shape in words: student and score tables, both keyed by id, join to show each student's info and midterm score together in one row.
- Canonical example, non-equi join (Lecture 4 deck tables: score with pct, grade with min_pct, max_pct, grade). The deck poses this as a demo, computing each student's letter grade; written in the deck's JOIN ... ON form it is:
  SELECT score.id, score.name, score.pct, grade.grade FROM score JOIN grade ON score.pct >= grade.min_pct AND score.pct <= grade.max_pct;
  A percentage that falls in no band produces no row, because this is an inner join.
- Near miss where it does NOT apply: The prompt needs rows with no match kept in the output. That is an outer join, which is Lecture 5 material and not yet covered, so a Lecture 4 answer cannot use it yet. Second near miss: the prompt wants two result sets stacked into one taller list, which is Card 5, not a join (a join makes output wider, UNION makes it taller). Supported traps regardless of prompt: comma join, NATURAL JOIN, or USING in place of JOIN ... ON loses the point under the join rules.

## Card 5: UNION and UNION ALL
- Name: UNION vs UNION ALL (Lecture 4, from columns to rows).
- Trigger pattern: The prompt asks for one combined list of rows produced by two queries, for example the same columns drawn from two sources, in a single output. Choose UNION when each distinct row should appear once, UNION ALL when every occurrence must be kept.
- Slots: UNION combines rows from two tables or result sets and removes duplicates. UNION ALL does the same stacking but does not remove duplicates. Duplicates are possible in either output even when an input has a primary key, because the output is a result set, not a table. One slot the decks do not fill: the stacking requirements for the two result sets (how many columns, and of what types) are not stated in the decks: not in held decks, verify.
- Canonical example: Not in held decks, verify. Lecture 4 defines both operations and states the duplicate behavior, but works no UNION query on any table, so there is no deck canonical example to copy. Do not treat any invented UNION query as course material until this is checked against a later source.
- Near miss where it does NOT apply: A prompt that needs columns from two tables side by side on the same row is a join (Card 4), not a stack. Swapping UNION and UNION ALL for each other is the other near miss: UNION silently drops duplicate rows, UNION ALL keeps rows the prompt wanted deduplicated.
