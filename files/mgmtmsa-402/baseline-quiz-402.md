# MGMTMSA 402 Baseline Quiz: Weeks 1 and 2
Prof. Rosario, PostgreSQL. Ungraded diagnostic.

## Purpose
On Oct 22, 2026 you reported that you are likely only through the first 2 weeks of content in 402. This quiz verifies that claim, chapter by chapter, so the study plan can start from your real baseline instead of an assumed one.

- Week 1: Lecture 1 (Mon Sep 28, intro and diagnostic) and Discussion 1 (Wed Sep 30, relational model intro, schema reading, keys)
- Week 2: Lecture 2 (Mon Oct 5, relational model, schemas and keys, DDL and data types)

Nothing from Lecture 3 or later (no aggregations, no joins) appears anywhere in this quiz.

## How to take it
- Closed book, closed notes. Put the slides, decks, and packs away.
- Everything handwritten on paper, the same way 402 quizzes and the final work. Production from memory, not recognition.
- Answer in order. Do not skip back and change an answer after seeing a later question.
- When you are done, check yourself against the separate key file (baseline-quiz-402-key.md), score each chapter, and log every miss.
- Report back per chapter, for example: "402 Ch 1: 22/25, Ch 2: 38/50", plus the question numbers you missed.

## Source note
A Lecture 1 deck is not held. Chapter 1 is grounded in the Discussion 1 slides and practice set and the Oct 4 content inventory. Chapter 2 is grounded in the Lecture 2 deck (70 slides) and the Discussion 1 materials. Table specs and instances below are reproduced from those held sources.

---

# Chapter 1 Quiz: Databases, CRUD, and Reading a Schema
8 questions, 25 points total.

Use this table spec for Questions 3 to 6. It is the Orders table spec from Discussion 1, reproduced exactly as printed there.

| Column Name | Data Type | Nullable? | Key / Constraint | Description |
|---|---|---|---|---|
| order_id | INT | No | Primary Key | Unique numeric identifier for internal database tracking |
| order_number | VARCHAR(20) | No | Unique | Human-readable order reference code (e.g., ORD-2026-9481) |
| customer_id | VARCHAR(10) | No | Foreign Key | References customers.customer_id |
| order_date | DATETIME | No | Default: NOW() | Timestamp when the order was placed |
| total_amount | DECIMAL(10, 2) | No | Check (>= 0) | Total monetary value of the purchase |
| payment_method | VARCHAR(30) | Yes | (none) | Method used (e.g., Credit Card, PayPal, NULL if uncompleted) |
| order_status | VARCHAR(20) | No | Default: 'Pending' | Current status (e.g., Pending, Shipped, Delivered, Refunded) |
| shipping_country | VARCHAR(50) | No | (none) | Destination country for order delivery |

**Question 1 (4 points, 1 per term)**
Define each term in one line, in your own words:
- (a) database
- (b) table (relation)
- (c) row (tuple)
- (d) column (attribute)

**Question 2 (4 points)**
Databases provide four basic operations, summarized by the acronym CRUD.
- Name all four operations.
- Next to each one, write the SQL verb that performs it.

**Question 3 (4 points)**
Read the Orders spec above and answer:
- (a) (1 pt) Which column is the primary key?
- (b) (1 pt) Which column may be left NULL on insert, and which part of the spec tells you that?
- (c) (1 pt) An insert leaves out order_status entirely. What value ends up stored in that column, and why?
- (d) (1 pt) An insert supplies total_amount = -12.50. Is it accepted or rejected, and which part of the spec decides that?

**Question 4 (3 points)**
Still using the Orders spec:
- (a) (1 pt) What does each row of this table represent? Answer the way the course teaches you to find a key: start from what one row is.
- (b) (2 pts) order_id and order_number are both unique and both never NULL. Which one is the natural key and which one is the surrogate key? Give the reason for each.

**Question 5 (3 points)**
The spec marks customer_id as a Foreign Key referencing customers.customer_id.
- (a) (2 pts) State, in one or two sentences, what must be true of any value stored in orders.customer_id. Cover both parts: what it must match, and whether it may be NULL in this table.
- (b) (1 pt) True or false, with a one-line reason: a foreign key merges the orders table and the customers table into a single table.

**Question 6 (2 points)**
Here are three rows actually stored in the orders table right now:

| order_id | order_number | customer_id | total_amount |
|---|---|---|---|
| 1003 | ORD-2026-9481 | CUS-802 | 210.00 |
| 1004 | ORD-2026-3105 | CUS-109 | 18.25 |
| 1005 | ORD-2026-7240 | CUS-633 | 520.00 |

- (a) (1 pt) Which of the two things on this page is the schema, and which is the instance? Name each.
- (b) (1 pt) A fourth order is inserted tonight. Did the schema change, the instance change, or both?

**Question 7 (3 points)**
A data model does three jobs: it defines data, it encodes relationships among data, and it imposes constraints on data. Match each design decision below to the one job it is an example of (1 point each):
- (i) Deciding the table is called orders and has columns order_id, customer_id, total_amount, and the rest.
- (ii) Declaring customer_id in orders as a reference to customers.customer_id.
- (iii) Declaring total_amount as DECIMAL(10, 2) with a Check that it is >= 0, so text and negative totals cannot be stored.

**Question 8 (2 points)**
The spec lets payment_method be NULL when a payment has not been completed.
- (a) (1 pt) What does NULL mean here? Say what it means and one thing it does not mean.
- (b) (1 pt) total_amount is marked Nullable = No, but payment_method is Nullable = Yes. What real-world fact about orders does each of those two choices capture?

---

# Chapter 2 Quiz: Relational Model, Keys, and CREATE TABLE
10 questions, 50 points total.

**Question 1 (4 points)**
Primary key rules, from the Lecture 2 deck:
- (a) (1 pt) How many primary keys can one table have?
- (b) (3 pts) A set of columns can serve as a primary key only if it meets three requirements. List all three.

**Question 2 (7 points)**
An auto insurance provider serves all 50 states. Each state keeps its own rules for driver's license numbers and license plates. Here is the customer table as it stands:

| dl_number | license_plate | state | name | make | model |
|---|---|---|---|---|---|
| B9614355 | I♡UCLA | CA | Joe Bruin | Ford | F-150 |
| N19154 | GENEBLOCK | CA | Gene Block | Tesla | X |
| 8675309 | JENNY | CA | Jennifer Lopez | BMW | 750i |
| B9614355 | I♡UCLA | WA | Joe Bruin | Ford | F-150 |
| 8675309 | JENNY | NY | Jennifer Lopez | Tesla | X |
| B9914561 | GO RAMS | CA | Sean McVay | BMW | 750i |
| 1212121 | JENNYFROMBLOCK | CA | Jennifer Lopez | AMC | Pacer |

Judge each set using only the data in this instance. For each one, say superkey or not a superkey, and point to the rows that decide it:
- (a) (1 pt) {dl_number}
- (b) (1 pt) {dl_number, license_plate}
- (c) (2 pts) {dl_number, state}. If it is a superkey, also say whether it is a candidate key, and what makes it minimal.
- (d) (1 pt) {license_plate, state}. Superkey? Candidate key?
- (e) (1 pt) {dl_number, license_plate, state}. Superkey? Candidate key? Say why in one line.
- (f) (1 pt) In context: the same driver's license number, and the same plate, can legitimately appear in two different states. What does that force into any key you choose for this table, and which candidate would you pick as the primary key?

**Question 3 (4 points)**
Discussion 1 used this Employees table:

| Employee_ID | Social_Security_Number | Email | Full_Name | Department | Office_Building | Desk_Number |
|---|---|---|---|---|---|---|
| 101 | 987-65-4321 | alex@company.com | Alex Morgan | Engineering | Building A | 12 |
| 102 | 876-54-3210 | taylor@company.com | Taylor Swift | Marketing | Building A | 15 |
| 103 | 765-43-2109 | alex.m@company.com | Alex Morgan | HR | Building B | 12 |

- (a) (2 pts) From this list, name every candidate key: Employee_ID, Social_Security_Number, Email, Full_Name, Department.
- (b) (1 pt) {Office_Building, Desk_Number} is unique in this instance. Under what real-world condition is it a candidate key in context, and what could break it in a larger instance?
- (c) (1 pt) In 402 you judge keys in context unless told otherwise. If a set of columns happens to be unique in a small instance, does that alone make it a candidate key? Answer yes or no, with one sentence of reasoning that uses this table.

**Question 4 (6 points, 1 per scenario)**
Two tables from Lecture 2. The comment table's video_id is a foreign key referencing the video table's video_id. No ON UPDATE or ON DELETE action has been specified anywhere.

Video:

| video_id | title | channel | views |
|---|---|---|---|
| XpVt6Z1Gjjo | 1 YEAR OF VLOGGING | Logan Paul Vlogs | 4394029 |
| cLdxuaxaQwc | My Response | Pewter | 5845909 |

Comment:

| video_id | comment_id | comment | likes | replies |
|---|---|---|---|---|
| cLdxuaxaQwc | xl418Pq1 | Love you Pooter, do not apologize, you are fine | 0 | 0 |

For each operation, say allowed or rejected, and give the rule that decides it:
- (a) INSERT a comment with video_id = 'ZZZZZZZZZZZ' and a fresh comment_id.
- (b) DELETE the video with video_id = 'cLdxuaxaQwc'.
- (c) DELETE the comment with comment_id = 'xl418Pq1'.
- (d) UPDATE the video table, changing video_id 'cLdxuaxaQwc' to 'foo'.
- (e) UPDATE the comment, changing its video_id to 'XpVt6Z1Gjjo'.
- (f) INSERT a comment with video_id = NULL and a fresh comment_id.

**Question 5 (4 points)**
A child table references a parent table, and the child table's foreign key column allows NULLs. A row of the parent is deleted, and child rows still reference it. Describe exactly what happens under each behavior:
- (a) (1 pt) The default, when no action was specified.
- (b) (1 pt) ON DELETE CASCADE.
- (c) (1 pt) ON DELETE SET NULL.
- (d) (1 pt) A foreign key column is declared NOT NULL, the way channel is NOT NULL in the Lecture 2 youtube_video table. Which of the three behaviors above can no longer work, and why?

**Question 6 (3 points)**
Three tables: youtube_channel; youtube_video, whose channel column is a foreign key referencing youtube_channel; and a comments table whose video_id is a foreign key referencing youtube_video.
- (a) (1 pt) Write the order in which the three tables must be created.
- (b) (1 pt) Why does that order matter? What goes wrong if you create a referring (child) table first?
- (c) (1 pt) In a schema diagram for these tables, how is a key shown, and which way does a foreign key arrow point?

**Question 7 (4 points)**
Primary key vs unique key:
- (a) (3 pts) State the difference between a primary key and a unique key on each of these three points: how many a table may have; whether NULL values are allowed; what each one is for.
- (b) (1 pt) Can a foreign key reference a unique key instead of the parent table's primary key? Yes or no, in one line.

**Question 8 (6 points, 1 per item)**
Choose the best PostgreSQL type for each piece of data, the way Lecture 2 teaches the choice. Write the type, and where two types are close, be ready to defend the pick:
- (a) A view count that can grow past 2.1 billion.
- (b) A price that must come out exact to the cent.
- (c) A US state code that is always exactly 2 characters.
- (d) A product description of unpredictable length that you do not want to cap.
- (e) The moment an event happened, recorded and compared across time zones.
- (f) The raw bytes of an uploaded PDF file.

**Question 9 (2 points)**
Lecture 2 builds a type for a column that may only hold values from a small fixed list, for example privacy with values 'public', 'private', 'unlisted'.
- (a) (1 pt) Write the CREATE TYPE statement that defines this type, and the column declaration that uses it in a table.
- (b) (1 pt) When is this type a poor choice for a column, and what do you use instead?

**Question 10 (10 points)**
A campus store database already has a table category(category_id, name), and category_id is its primary key. Write the complete CREATE TABLE statement for a new table product with all of the following:
- product_id: a surrogate primary key whose values PostgreSQL generates automatically (the auto-generated, no-business-meaning key from Discussion 1; declare it with the standard PostgreSQL type for that job).
- sku: a code of at most 20 characters, required, and unique across the table. It is the human-facing natural key.
- title: text of at most 200 characters, required.
- price: money, exact to two decimal places, required.
- stock: a whole number that defaults to 0 when an insert leaves it out.
- added_at: the date and time the row was added, with time zone, defaulting to the current time.
- category_id: a foreign key referencing category(category_id).

Write it in PostgreSQL syntax, keywords in uppercase and names in snake_case, the style Lecture 2 teaches.

---

End of quiz. Chapter 1: 25 points. Chapter 2: 50 points. Total: 75 points.
Score each chapter separately against the key file; the two chapters have separate verdicts.
