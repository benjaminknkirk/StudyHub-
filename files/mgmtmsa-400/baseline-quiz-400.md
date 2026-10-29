# MGMTMSA 400 Baseline Quizzes: Weeks 1 and 2
Prof. Yuan, Statistical Foundations for Analytics

## What this is

You said on Oct 22 that you are likely only through the first 2 weeks of content. These two short quizzes test exactly that claim, chapter by chapter, before the Oct 27 midterm. They cover only:

- Chapter 1: Course Overview and Intro to R (Lecture 1, Sep 22)
- Chapter 2: Review of Statistics (Lecture 2, Sep 29)

Nothing from Chapters 3 or 4 is on here. Every question asks you to produce something from memory or compute something, not to recognize an answer from a list.

## How to take it

1. Closed book. No handouts, no notes page, no phone, no R, except where a question asks you to write R code on paper.
2. Write your answers on paper or in a blank document. Show your work on computed problems: a bare number earns nothing, because the midterm grades the setup.
3. Note your start and finish time for each chapter and report it honestly with your score. Speed matters less than accuracy here, but a baseline that took three hours with the handout open is not a baseline.
4. Do not open the key file (baseline-quiz-400-key.md) until both chapters are finished.
5. Score each chapter separately against the key, then report per chapter: score out of the chapter total, your time, and the question numbers you missed.

## Scoring summary

- Chapter 1 Quiz: 6 questions, 20 points
- Chapter 2 Quiz: 12 questions, 60 points
- Total: 80 points

---

## Chapter 1 Quiz: Course Overview and Intro to R

Chapter total: 20 points.

### Question 1. Vectors, matrices, and indexing (4 points)

The following code is run in R:

```r
x1 = 3; x2 = 4
y1 = c(x1, x2); y2 = c(x2, x1)
z = cbind(y1, y2)
rnums = c(5, 8, 2, 9, 4)
```

Without running anything, write down:

a) The values of y1 and y2. (1 point)
b) What z is: its dimensions and every entry, laid out as a table. (1 point)
c) The results of rnums[2], rnums[3:5], and rnums[c(TRUE, FALSE, FALSE, FALSE, TRUE)]. (1 point)
d) The result of sort(rnums). (1 point)

### Question 2. Loading data and inspecting a data frame (4 points)

a) Write the R code to load the mvehicles dataset from the course package DataAnalytics into the workspace, assuming the package is already installed and loaded. (1 point)
b) Write the R code to load a CSV file named scores.csv into an object called scores. (1 point)
c) The Ch 1 handout says these are two different loading situations. In one sentence, why does (a) not use the same command as (b)? (1 point)
d) For each of head(scores), str(scores), and names(scores): state in a few words what it tells you. (1 point)

### Question 3. Columns, the $ operator, and subsetting rows (3 points)

A data frame called data holds the streaming data from HW1, with columns including has_netflix_pre, has_netflix_post, netflix_hours_pre, and netflix_hours_post (each has_ column is 1 or 0).

a) Write the R code that creates an object subs containing only the households that had Netflix both before and after the beta launch. (1 point)
b) A classmate runs hist(netflix_hours_post) and gets an error, but hist(data$netflix_hours_post) works. Explain in one or two sentences why. (1 point)
c) What does data[1, ] return, and what does data[ , 1] return? (1 point)

### Question 4. Random numbers and reproducibility (3 points)

a) HW1 opens with the instruction to run set.seed(123) once at the beginning, before generating any random numbers. State what set.seed() does and why the assignment requires it. (2 points)
b) You run rnums = rnorm(5) twice in a row without setting a seed. Do you get the same five numbers both times? Why or why not, in one sentence. (1 point)

### Question 5. Supervised learning and causal vs correlational effects (3 points)

a) In supervised learning, what are y and the X variables, and what is the goal, stated in one sentence? (1 point)
b) We observe loan applicants' characteristics and whether each loan defaulted. Is predicting default a classification or a regression problem, and what makes it that type? (1 point)
c) A MacBook has both a higher price and higher sales than a Dell Inspiron, so someone claims higher prices cause higher demand. Using the handout's terms, state what kind of effect this comparison actually shows and why it is not the other kind. (1 point)

### Question 6. Course scope and exam format (3 points)

a) The handout splits Big Data into two types, "Too Large" and "Too Complicated." Which type does this course focus on, and which type of learning (supervised or unsupervised) is the course built around? (1 point)
b) From the syllabus as presented in the Ch 1 handout: state the exam format (open or closed book, question type) and the two aids that are permitted. (1 point)
c) State the assignment rules from the same slide: group or individual submissions, where they are submitted, and the late work policy. (1 point)

---

## Chapter 2 Quiz: Review of Statistics

Chapter total: 60 points.

Unless a question says otherwise, show your setup (the z-score, the formula, or the test statistic) before the final number. The handout uses these multipliers: 1.96 for 95% and 2.58 for 99%.

### Question 1. The Normal mean problem: z-scores, probabilities, percentiles (5 points)

Chip performance scores follow Y ~ N(100, 10^2), the handout's chip example, with mu and sigma known.

a) Compute the z-score of a chip that scores 120. (1 point)
b) What proportion of chips score above 120? (1 point)
c) What proportion of chips score below 80? Explain in one line why your answer matches or differs from (b). (1 point)
d) Scores of at least 110 qualify for a premium product. About what proportion of chips qualify, and 110 is approximately which percentile of this distribution? (1 point)
e) Give the 97.5th percentile of Y, and state what it means in one sentence. (1 point)

### Question 2. Point prediction and prediction interval, parameters known (5 points)

NEW NUMBERS. A bakery's daily cost per customer follows a Normal distribution with known mean mu = $20 and known standard deviation sigma = $4.

a) What is the best point prediction of the cost of the next customer, and why is that the best prediction? (1 point)
b) Construct a 95% prediction interval for the next customer's cost. Show the setup. (2 points)
c) Using the multiplier 1.645 for 90%, what is the WIDTH (upper bound minus lower bound) of a 90% prediction interval? (1 point)
d) This prediction interval depends on sigma but on no sample size. In one or two sentences, why not? (1 point)

### Question 3. Estimating mu and sigma from a sample (5 points)

From the handout's chip production example: a random sample of five chips has scores 93, 95, 100, 105, 117. Compute each of the following, showing the formula and the arithmetic.

a) The sample mean Y-bar, our estimate of mu. (1 point)
b) The sample standard deviation s_Y. Your answer must make clear why the denominator is what it is. (2 points)
c) The estimated standard error of Y-bar. (2 points)

### Question 4. Confidence intervals for a mean, large sample (6 points)

NEW NUMBERS. A sample of N = 100 observations has sample mean Y-bar = 50 and sample standard deviation s_Y = 20.

a) Compute the estimated standard error of Y-bar. (1 point)
b) Construct the 95% confidence interval for mu. Show the setup. (2 points)
c) Construct the 99% confidence interval for mu. (1 point)
d) Suppose instead N = 400 with the same Y-bar and s_Y. Compute the new standard error, and state what happens to the width of the 95% interval and why, in one sentence. (1 point)
e) In R, which function returns the multiplier 1.96 used in (b), and what does that function return when its argument is 0.025? (1 point)

### Question 5. The sampling distribution of the sample mean (4 points)

Answer from memory; no numbers are given on purpose.

a) If Y_1, ..., Y_N are i.i.d. N(mu, sigma^2), write down the distribution of Y-bar, giving its mean and its variance. (2 points)
b) Define "standard error" in words, as the handout defines it. (1 point)
c) State what s_Y describes and what s_Y-bar describes, and the one-line difference between them. (1 point)

### Question 6. The Law of Large Numbers (4 points)

a) State the Law of Large Numbers in your own words, precisely enough that it could not be confused with the Central Limit Theorem. (2 points)
b) In HW1 you drew samples from U[-5, 5], whose population mean mu is 0, at sizes N = 10, 100, 1000, 10000. As N grew, what generally happened to |Y-bar minus mu|, and which result from this chapter explains it? (1 point)
c) A classmate says: "By the Law of Large Numbers, a sample of N = 10 will have Y-bar exactly equal to mu." True or false, and why, in one or two sentences. (1 point)

### Question 7. The Central Limit Theorem (5 points)

a) State the Central Limit Theorem. The handout's informal version is acceptable if you also give the precise version: what becomes approximately Normal, centered where, and as what grows. (2 points)
b) In the Netflix example, the histogram of household usage changes is not Normal, yet the handout still builds a confidence interval and a t-test for the mean change with N = 4000. Explain why that is legitimate. (1 point)
c) A colleague insists that before running a one-sample t-test on a mean, the individual observations themselves must be Normally distributed. Is that necessary here? Answer and justify in one or two sentences. (1 point)
d) State the handout's caveat: for what kind of sample can even a t-interval still be unreliable? (1 point)

### Question 8. Interpreting a confidence interval: spot the error (5 points)

For the Netflix data, the 95% confidence interval for the population mean change in weekly Netflix usage is (0.266, 0.948) hours. Three students interpret it:

- Student A: "There is a 95% probability that the true mean change mu lies between 0.266 and 0.948 hours."
- Student B: "95% of households had usage changes between 0.266 and 0.948 hours."
- Student C: "If we repeated this sampling and interval construction many times, about 95% of the resulting intervals would cover the true mu."

a) Which student's statement matches the handout's interpretation of a confidence interval? (1 point)
b) Explain the error in each of the other two statements, one or two sentences each. Your explanation of Student B's error must use the handout's distinction between a confidence interval and a prediction interval. (4 points)

### Question 9. Confidence interval vs prediction interval (4 points)

Continue the five-chip example from Question 3, where Y-bar = 102, s_Y = 9.59, and the estimated standard error is 4.29. With df = 4 the t multiplier is 2.776, and the resulting intervals are: 95% confidence interval for mu, (90.09, 113.91); 95% prediction interval for the next chip, (72.83, 131.17).

a) Which interval answers the question "where will the next chip's score fall?" and which answers "where does the population mean score lie?" (1 point)
b) The prediction interval is much wider. State the two sources of uncertainty it must account for, and which of the two the confidence interval does not include. (2 points)
c) What is the point prediction for the next chip's score? (1 point)

### Question 10. Two-tailed hypothesis test, full production (7 points)

Netflix pilot data: N = 4000 households, sample mean change in weekly Netflix usage = 0.607 hours, estimated standard error = 0.174 hours. A manager claims the population mean increase is 0.5 hour per week. Test the claim at the 5% significance level.

a) State H_0 and H_1, and state in one sentence what mu represents here. (1 point)
b) Is this a one-tailed or two-tailed test, and why? (1 point)
c) Compute the test statistic t, showing the formula with the numbers in it. (2 points)
d) Define the p-value in words, for this two-tailed test. (1 point)
e) The p-value is about 0.54. State the decision at alpha = 0.05 and the conclusion in context, in the handout's style. (1 point)
f) Does this result prove the population mean increase is exactly 0.5 hour? Answer and justify in one sentence. (1 point)

### Question 11. One-tailed hypothesis test: the hurdle question (6 points)

Same Netflix data as Question 10 (sample mean 0.607, standard error 0.174, N = 4000). Netflix will only invest if the population mean increase exceeds 0.25 hour per household per week. Test at the 5% significance level whether the increase exceeds 0.25.

a) State H_0 and H_1. (1 point)
b) Compute the test statistic, evaluated at the boundary of the null. (2 points)
c) For this test, which tail or tails of the distribution count toward the p-value, and why? (1 point)
d) The p-value is about 0.020. State the decision and the conclusion in context. (1 point)
e) According to the handout, when must the direction of a one-tailed test be chosen, and based on what? (1 point)

### Question 12. Significance, p-values, and causation (4 points)

a) In HW1, the test on Netflix subscribers asked whether the mean increase exceeded 60 minutes per week. Suppose that test came out statistically significant. Does that show the gaming features caused the increase? Answer and explain in two sentences, using the handout's causal vs correlational distinction. (2 points)
b) True or false, with a one-sentence justification: "The p-value is the probability that H_0 is true." (1 point)
c) State what a 5% significance level means in terms of repeated samples when H_0 is true. (1 point)

---

End of quizzes. Score each chapter against baseline-quiz-400-key.md and report per chapter: score, time taken, and missed question numbers.
