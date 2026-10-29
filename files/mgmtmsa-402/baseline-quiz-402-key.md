# MGMTMSA 402 Baseline Quiz: Answer Key and Scoring Guide
Key for baseline-quiz-402.md. Do not open this file until both chapters are fully written out on paper.

Scoring: award the points marked per part. Where a part asks for a judgment plus the deciding rows or the deciding rule, the point requires both the judgment and the evidence. A correct guess with no evidence earns half the part, rounded as you see fit, but log it as a miss for study purposes either way.

---

# Chapter 1 Key: Databases, CRUD, and Reading a Schema (25 points)

**Question 1 (4 points, 1 per term)**
- (a) Database: one organized collection of related data, kept in a single logical location, managed so you can create, read, update, and delete data without worrying about files or breaking data integrity. Award the point for "organized collection of data, managed in one place" in any wording.
- (b) Table (relation): a set of rows about one kind of thing. Every row has the same columns, in the same order.
- (c) Row (tuple): one record, one transaction, or one data point. A single order, a single video, a single student.
- (d) Column (attribute): a named, typed field that every row has. Each column has a domain, the set of legal values it may hold.

**Question 2 (4 points)**
- Create: INSERT
- Read: SELECT
- Update: UPDATE
- Delete: DELETE
1 point per operation with its correct verb. Naming the operation with the wrong verb earns nothing for that line, because the mapping is the skill.

**Question 3 (4 points)**
- (a) order_id. It is the column marked Primary Key.
- (b) payment_method. The Nullable? column says Yes for it and No for everything else. Nullable is where the spec answers this, not the Description.
- (c) 'Pending'. The spec gives order_status a Default of 'Pending', and a column left out of an insert takes its default value.
- (d) Rejected. The Check (>= 0) constraint on total_amount refuses negative totals. The data type DECIMAL(10, 2) alone would happily store -12.50; the CHECK is what decides it.

**Question 4 (3 points)**
- (a) One row is one order: a single purchase transaction placed by one customer. This is the course's key-finding move: ask what each row represents first, and the key questions get much easier.
- (b) order_number is the natural key: it has real-world business meaning and is the human-readable reference a customer or support agent would quote (ORD-2026-9481). order_id is the surrogate key: the spec itself says it exists "for internal database tracking," the database's own identifier with no business meaning. 1 point each, and the reason is part of each point.

**Question 5 (3 points)**
- (a) (2 pts) Every value stored in orders.customer_id must match a customer_id that already exists in the customers table. That is referential integrity: FK values must exist in the parent. And because this spec marks customer_id Nullable = No, it may not be NULL in this table either; an order here must name a real customer.
- (b) (1 pt) False. A foreign key imposes referential integrity constraints, nothing more. It does not merge tables. Lecture 2 puts it bluntly ("Foreign keys are used to impose referential integrity constraints. Period."), and Discussion 1 lists "to merge one table into another" as the incorrect purpose. Producing combined data in one view is a separate concept.

**Question 6 (2 points)**
- (a) The spec (column names, data types, keys, constraints) is the schema: the design. The three stored rows are the instance: the table's state at one moment in time.
- (b) The instance only. Inserting a row changes the state. The schema changes only when the design changes (a column added, a type changed, a constraint altered).

**Question 7 (3 points)**
- (i) Define data.
- (ii) Encode relationships among data.
- (iii) Impose constraints on data.
These are the three jobs Lecture 2 assigns to a data model, in the deck's own words.

**Question 8 (2 points)**
- (a) NULL means the value is unknown or missing; there is no value there. It does not mean zero, it does not mean an empty string, and there is no payment method literally called NULL. Here it records that payment has not happened yet.
- (b) total_amount Nullable = No captures that a placed order always has a total; the amount exists the moment the order does, so requiring it loses nothing. payment_method Nullable = Yes captures that payment can legitimately not have happened yet when the order row is created. Nullable is a design statement about the real world, not a formatting choice. Related trap from the Oct 4 inventory: NOT NULL means "value required on insert." It says nothing about uniqueness.

## Chapter 1 scoring bands (out of 25)
- **Solid, 21 to 25:** The week 1 claim is verified for foundations. You can read a spec cold, say what a row is, and keep schema and instance separate. Move on; keep one spaced retrieval of anything you missed.
- **Shaky, 15 to 20:** The claim mostly holds but the edges are soft, usually spec reading (Defaults, Checks, Nullable) or the FK purpose. Do not re-teach the chapter. Put each missed item on spaced retrieval at +1 day and again at +3 to 4 days, handwritten, and re-check.
- **Gap, 0 to 14:** The claim does not hold for this chapter. Re-teach from the Discussion 1 slides and practice set before building anything on top of it, because every later key and integrity question starts from "what does each row represent" and spec reading.

## Chapter 1: which question feeds which later skill
- Q1: the vocabulary every quiz and final question is written in.
- Q2: CRUD to SQL verbs is the entry to Lecture 3 querying (SELECT) and the later DML material.
- Q3: reading a table spec cold is a Discussion and homework skill; specs arrive before you write any DDL.
- Q4: "what does each row represent" is the first move of every key question Rosario asks.
- Q5: the FK purpose distinction (integrity, not merging) is a tested misconception in this course.
- Q6: schema vs instance is what makes in-instance vs in-context key judgments (Chapter 2, Q2 and Q3) possible.
- Q7: the three data model jobs frame the schema design questions later in the course.
- Q8: NULL as unknown, not zero, returns in aggregations, in WHERE logic, and in NOT NULL choices inside CREATE TABLE.

---

# Chapter 2 Key: Relational Model, Keys, and CREATE TABLE (50 points)

**Question 1 (4 points)**
- (a) Exactly one primary key per table.
- (b) The three requirements, in the deck's terms:
  1. It uniquely identifies each row.
  2. No part of it can contain NULL values (a primary key is NOT NULL by definition).
  3. It is minimal, the simplest set that works: a single column if one suffices, otherwise the simplest set of columns. Drop any column from the set and it must stop uniquely identifying rows.
A primary key that meets all three is the one candidate key you chose; see Q3 for candidate keys.

**Question 2 (7 points)**
The instance to reason from: dl_number B9614355 appears in rows 1 and 4; 8675309 in rows 3 and 5. license_plate I♡UCLA appears in rows 1 and 4; JENNY in rows 3 and 5. state CA appears 5 times.
- (a) (1 pt) Not a superkey. B9614355 repeats (rows 1 and 4), and 8675309 repeats too (rows 3 and 5). A single repeat is enough to kill a key.
- (b) (1 pt) Not a superkey. This is the trap of the set: the pair (B9614355, I♡UCLA) appears in both row 1 and row 4. Two columns do not make a key if the combination still repeats. Keys are judged on the combination's values, not on the column count.
- (c) (2 pts) Superkey, yes: all seven (dl_number, state) pairs are distinct, because every repeat of a dl_number happens in a different state (CA vs WA, CA vs NY). Candidate key, yes: it is minimal, because dl_number alone fails (part a) and state alone plainly fails (CA repeats five times), so removing either column destroys uniqueness.
- (d) (1 pt) Superkey, yes, and candidate key, yes. All seven (license_plate, state) pairs are distinct, since plate repeats also fall in different states, and neither plate alone nor state alone is unique, so the pair is minimal.
- (e) (1 pt) Superkey, yes: any superset of a superkey is still a superkey, and the pairs in (c) already separate all rows. Candidate key, no: it is not minimal, because it strictly contains the candidate keys from (c) and (d). Drop a column and you still have a key.
- (f) (1 pt) State is forced into the key. Each state runs its own numbering for licenses and plates, so the same number and the same plate can legitimately belong to different people in different states; uniqueness only exists inside one state. Either {dl_number, state} or {license_plate, state} earns the pick; the deck's tiebreakers are "the simplest, or the one maintained by the institution." Both composites are contextually sound, and neither single column can ever be the key for a national table.

**Question 3 (4 points)**
- (a) (2 pts) Employee_ID, Social_Security_Number, and Email. Each is unique in the instance and identifies a row by itself in context: an institution-issued ID, a government ID, and an email the organization treats as one per person. Full_Name is not a candidate key: Alex Morgan appears twice (rows 101 and 103). Department is not: it repeats and identifies nothing.
- (b) (1 pt) {Office_Building, Desk_Number} is a candidate key in context only under the condition Discussion 1 itself attaches to it: no two employees can share the exact same desk in the same building. In the instance the three pairs (Building A, 12), (Building A, 15), (Building B, 12) are distinct, note that desk 12 appears in two different buildings, which is why the pair works and neither column alone does. It breaks the moment desk sharing or hot-desking is allowed, or two people are assigned the same desk: the same pair would appear twice and stop identifying a row.
- (c) (1 pt) No. A small instance can disprove a key (one repeat kills it, as Full_Name shows here), but it cannot prove one. A candidate key must uniquely identify rows by the rules of the context, not by accident of a 3-row sample. That is why the deck says you work in context unless told otherwise: (b) above looks fine on this instance and fails in context the day desk sharing starts.

**Question 4 (6 points, 1 per scenario)**
Rule for all six: a foreign key value in the child must exist as a key value in the parent. That is referential integrity, and with no ON UPDATE or ON DELETE action declared, the database's answer to a violation is an error.
- (a) Rejected. 'ZZZZZZZZZZZ' matches no video_id in Video. This is the insert anomaly referential integrity exists to prevent: a comment on a video that does not exist.
- (b) Rejected. The video cLdxuaxaQwc still has a comment pointing at it. Deleting it would orphan that comment, so with no action specified the database blocks the delete with an error.
- (c) Allowed. Deleting a child row breaks nothing: no table references comments, so no reference can dangle. Deletes are dangerous in the parent direction, harmless in the child direction.
- (d) Rejected, by default. Changing the parent's video_id to 'foo' orphans the comment that pointed at the old value; its video_id would match no video. The update only goes through if an action like ON UPDATE CASCADE was declared to carry the change into the child.
- (e) Allowed. After the change, the comment's video_id is 'XpVt6Z1Gjjo', which exists in Video. A child FK may be changed freely as long as the new value exists in the parent; the break happens only when the new value matches nothing.
- (f) Allowed, in PostgreSQL. A NULL foreign key means "no relationship," and the existence check applies only to non-NULL values, so the comment is stored with no parent video. Lecture 2's fine print is the source: how NULL in foreign keys is handled varies by system, and PostgreSQL treats it as no relationship. Separate trap: if the column were also declared NOT NULL, the insert would be rejected for that reason instead.

**Question 5 (4 points)**
- (a) Default (no action specified): the delete is blocked. The database raises an error and nothing is deleted or changed. Safety by refusal.
- (b) ON DELETE CASCADE: the child rows that reference the deleted parent are deleted along with it. The matching rows in the referring table go away too. (For an update of the parent's key, CASCADE carries the new value into the child rows instead.)
- (c) ON DELETE SET NULL: the child rows survive, their foreign key values are replaced with NULL, and the relationship ends. The children become unattached rather than deleted.
- (d) SET NULL is the behavior that can no longer work. You cannot set a value to NULL in a column declared NOT NULL; the action would itself violate the constraint. In the deck's youtube_video, channel is CHAR(24) NOT NULL, so an ON DELETE SET NULL on the channel foreign key would fail; CASCADE or the default block are the workable options there.

**Question 6 (3 points)**
- (a) youtube_channel first, then youtube_video, then the comments table. Parents before children, all the way down the chain.
- (b) A foreign key references a unique key in a table that must already exist. Discussion 1 states it directly: the referred table must exist before the referring table. Create youtube_video first and its FOREIGN KEY clause points at youtube_channel, which does not exist yet, so the CREATE TABLE fails.
- (c) In the diagram, each table is a box with its name at the top and its attributes listed beneath, with primary key attributes underlined. The arrow is drawn from the foreign key in the referring (child) table to the unique key it references in the referred (parent) table: child points at parent.

**Question 7 (4 points)**
- (a) (3 pts, 1 per contrast, from the deck's own comparison table)
  - How many: exactly one primary key per table; a table can have many unique keys.
  - NULLs: a primary key can never contain NULLs. A unique key can contain NULLs, and NULLs are treated as all different from one another, so several NULLs do not collide.
  - Purpose: the primary key identifies each row of the table. A unique key only enforces that its values are unique; it is how you enforce a candidate key you did not choose as the primary key, without making it the row identifier.
- (b) (1 pt) Yes. Foreign keys refer to unique keys in the parent table, not necessarily to its primary key (Lecture 2, foreign key fine print).

**Question 8 (6 points, 1 per item)**
- (a) BIGINT. INT stops at 2,147,483,647, about 2.1 billion, and the deck makes exactly this choice for views in youtube_video, with the note that popular videos exceed it.
- (b) NUMERIC(10, 2). DECIMAL(10, 2) is the same type under its SQL standard name and earns the point. This is the exact fixed-point type: precision 10 digits total, scale 2 after the decimal point. REAL, DOUBLE PRECISION, and FLOAT are approximate; the deck warns they are dangerous to compare, and money must be exact.
- (c) CHAR(2). CHAR always stores exactly n characters, padding with spaces, which costs nothing when the length truly never varies. VARCHAR(2) would store the same two characters, but CHAR is the taught pick for fixed-length codes.
- (d) TEXT. PostgreSQL TEXT stores strings with no length limit. VARCHAR(n) would impose a cap the data does not have, and CHAR would pad.
- (e) TIMESTAMPTZ, that is, TIMESTAMP WITH TIME ZONE. It is stored in UTC and displayed in the session time zone. The deck's standing rule: always use time zones, TIMESTAMPTZ and not plain TIMESTAMP, in your schemas.
- (f) BYTEA. PostgreSQL's binary type, used in place of the standard BINARY and VARBINARY, which PostgreSQL does not use.

**Question 9 (2 points)**
- (a) (1 pt)
```sql
CREATE TYPE privacy_level AS ENUM ('public', 'private', 'unlisted');

-- and inside the CREATE TABLE:
privacy privacy_level NOT NULL DEFAULT 'public'
```
The type is created first, then used as the column's type, exactly the deck's pattern (its example builds tshirt_size, and youtube_video uses privacy_level). The order of values in the type definition also defines their ordering. NOT NULL and DEFAULT match the deck's youtube_video column; the point is for the CREATE TYPE plus a column declared with that type.
- (b) (1 pt) An ENUM is a poor choice when the set of values is large or changes over time, because adding a value means altering the type definition. The alternative is a separate lookup table holding the allowed values, with this column as a foreign key referencing it, so new values are inserted as rows instead of schema changes. The deck's rule: ENUMs are best for small, fixed sets of choices, like sizes or categories.

**Question 10 (10 points)**
Model answer:
```sql
CREATE TABLE product (
  product_id  SERIAL PRIMARY KEY,
  sku         VARCHAR(20) NOT NULL UNIQUE,
  title       VARCHAR(200) NOT NULL,
  price       NUMERIC(10, 2) NOT NULL,
  stock       INT NOT NULL DEFAULT 0,
  added_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);
```
Point allocation:
- product_id line, 2 points: 1 for SERIAL (the auto-generating surrogate type), 1 for PRIMARY KEY.
- sku line, 2 points: 1 for VARCHAR(20), 1 for having both NOT NULL and UNIQUE.
- title line, 1 point: VARCHAR(200) NOT NULL.
- price line, 1 point: NUMERIC(10, 2) (DECIMAL(10, 2) accepted) with NOT NULL. FLOAT or DOUBLE PRECISION here earns 0; exactness is the point of the item.
- stock line, 1 point: INT with DEFAULT 0. NOT NULL is good practice and matches the model, but the point is the type plus the default.
- added_at line, 1 point: TIMESTAMPTZ with DEFAULT CURRENT_TIMESTAMP. Plain TIMESTAMP loses the point; the time zone is the lesson.
- category_id and its foreign key, 2 points: 1 for the INT column (its type must match the referenced key's type), 1 for the REFERENCES to category(category_id), whether written as a table-level FOREIGN KEY clause as above or inline as `category_id INT NOT NULL REFERENCES category(category_id)`.
Notes on judgment calls:
- SERIAL is the standard PostgreSQL type for the job the question describes: it builds an integer column fed by a sequence, which is exactly Discussion 1's surrogate key, "automatically created by the database" with no business meaning. The Lecture 2 deck does not print the word SERIAL; its customer table writes the same idea as `customer_id INTEGER PRIMARY KEY`. If you wrote INTEGER PRIMARY KEY and stated that PostgreSQL generates the values, award 1 of the 2 product_id points and count the item as a known gap, not a miss of understanding.
- sku as the natural key enforced with UNIQUE, while product_id carries the PRIMARY KEY, is the deck's customer pattern (customer_id as PK, email and ccnum as UNIQUE) applied to a new table. That separation is part of what this question tests.

## Chapter 2 scoring bands (out of 50)
- **Solid, 42 to 50:** The week 2 claim is verified. You can judge keys in instance and in context, predict what referential integrity allows, and write DDL with the right types. Move on; spaced retrieval only for individual misses.
- **Shaky, 30 to 41:** The skeleton is there but a family is weak, most often one of: minimality (Q2e, Q3), integrity predictions (Q4, Q5), or type choices (Q8). Do not re-teach the chapter. Re-run the missed family handwritten at +1 day and +3 to 4 days, and log which family it was.
- **Gap, 0 to 29:** The claim does not hold for this chapter. Re-teach from the Lecture 2 deck in its own order (keys, then integrity, then types, then CREATE TABLE) before anything later is layered on, because Lecture 3 onward assumes all of it: every query question presumes you can read the schema, and every later DDL or design question presumes Q10.

## Chapter 2: which question feeds which later skill
- Q1: the primary key rules are the entry condition for every key, integrity, and DDL question after this.
- Q2: judging keys on a given instance, composite cases included, is Rosario's signature question type on quizzes and the final; this instance is his own deck example.
- Q3: candidate key sets with a context condition attached are the Discussion format, and they return in that format.
- Q4: predicting whether an insert, update, or delete is allowed is a standing quiz and final item type, and the same judgment you need when loading data in homework.
- Q5: CASCADE, SET NULL, and the default block are how ON DELETE and ON UPDATE behavior gets tested, and what you must choose when you write DDL with foreign keys.
- Q6: parents before children is a build-order fact you need the first time you create a multi-table schema in homework; the diagram conventions are how schemas are shown to you on assessments.
- Q7: primary key vs unique key is the deck's own comparison table, and it decides how unchosen candidate keys get enforced in CREATE TABLE.
- Q8: type choice traps are recurring: INT overflow (views), approximate types for money, TIMESTAMP without a time zone. Each item here is one of those traps in isolation.
- Q9: ENUM is how the deck's own youtube_video handles privacy; fixed value lists recur in homework schemas.
- Q10: the integrative skill. One statement that combines a surrogate key, a natural key under UNIQUE, exact money, defaults, a time zone aware timestamp, and a foreign key is the shape of the DDL work the rest of the course builds on.

---

# Reading the two chapters together
- **Both chapters solid:** the first-two-weeks claim is verified. The baseline really is Lecture 3, and the plan can proceed on that footing.
- **One chapter solid, one shaky:** the baseline holds with a named weak family. Fix the family with spaced retrieval; do not restart the chapter.
- **Any chapter in the gap band:** that chapter, not Lecture 3, is the real starting point, whatever the other chapter scored. Re-teach it first; the chapters are ordered, and Chapter 2 assumes Chapter 1, and everything after assumes both.

Report format: "402 Ch 1: __/25, Ch 2: __/50", plus the question numbers missed in each chapter.
