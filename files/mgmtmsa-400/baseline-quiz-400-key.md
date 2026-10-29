# MGMTMSA 400 Baseline Quizzes: Answer Key
Chapters 1 and 2, weeks 1 and 2 only

Do not open this file until both quizzes are finished and timed. Grade strictly: a correct final number with no setup shown earns half credit at most, because the Oct 27 midterm grades the setup, not just the answer. All arithmetic below was re-verified after writing.

---

## Chapter 1 Key: Course Overview and Intro to R (20 points)

### Question 1. Vectors, matrices, and indexing (4 points)

a) y1 = c(3, 4), that is (3, 4). y2 = c(4, 3), that is (4, 3). (1 point)

b) z = cbind(y1, y2) binds y1 and y2 as columns, giving a 2 by 2 matrix:

| 3 | 4 |
| 4 | 3 |

First column is y1 = (3, 4), second column is y2 = (4, 3). So row 1 is (3, 4) and row 2 is (4, 3). (1 point)

c) rnums = (5, 8, 2, 9, 4).
- rnums[2] = 8 (single index picks the second element).
- rnums[3:5] = (2, 9, 4) (elements 3, 4, 5).
- rnums[c(TRUE, FALSE, FALSE, FALSE, TRUE)] = (5, 4) (logical indexing keeps only the elements in positions marked TRUE, positions 1 and 5). (1 point for all three)

d) sort(rnums) = (2, 4, 5, 8, 9). (1 point)

### Question 2. Loading data and inspecting a data frame (4 points)

a) `data(mvehicles)` (1 point)

b) `scores = read.csv("scores.csv")` (accept `<-` in place of `=`). (1 point)

c) mvehicles already lives inside an R package's data library, so data() just makes it accessible in the workspace; a CSV file sits outside R, so read.csv() must read the file in and build the data frame. (1 point)

d) head(scores): shows the first rows (by default the first 6) of the data frame. str(scores): shows the structure of the object, its variables and their types. names(scores): gives the variable (column) names. (1 point for all three)

### Question 3. Columns, the $ operator, and subsetting rows (3 points)

a) `subs = data[data$has_netflix_pre == 1 & data$has_netflix_post == 1, ]` (1 point.) This is the exact pattern from HW1. Full credit requires the logical condition with & inside the row position and the trailing comma. Dropping the comma is the most common error.

b) R looks for objects in the workspace, and netflix_hours_post is not a standalone object; it is a column inside the data frame data. The $ operator tells R which data frame to find the variable in. Bare hist(emv) fails in the Ch 1 snippets for exactly this reason. (1 point)

c) data[1, ] returns the first row (the first observation, all variables). data[ , 1] returns the first column (the first variable, all observations). (1 point)

### Question 4. Random numbers and reproducibility (3 points)

a) set.seed() fixes the starting point of R's pseudo random number generator. With the seed set, the sequence of "random" draws is the same every time the code is run, so simulation results are reproducible: anyone re-running the document gets identical numbers. (2 points: 1 for what it does, 1 for reproducibility as the reason.)

b) Different numbers. Without a seed, the generator continues from wherever it currently is in its sequence, so each run produces a different draw. (1 point)

### Question 5. Supervised learning and causal vs correlational effects (3 points)

a) y is the target or output variable and the X variables are the inputs. Goal: given a set of X values, produce the best predicted value of y. (1 point)

b) Classification. The output y is a category (default or no default), not a continuous quantity; regression is the supervised type where y is a quantity such as sales. (1 point)

c) It shows a correlational effect: it captures an association between price and sales across two different products. A causal effect measures the effect of changing one variable while holding all else constant, and nothing here holds the product, brand, and features constant, so the comparison cannot show that raising price causes higher demand. (1 point)

### Question 6. Course scope and exam format (3 points)

a) The course focuses on "Too Complicated" data (high dimensional data needing structure and model building, not the computer science problem of sheer size), and it is built around supervised learning. (1 point)

b) Closed book, multiple choice only. Permitted aids: a scientific calculator and one double-sided page of notes. (1 point)

c) Group submissions, submitted via Gradescope. No late work accepted. (1 point)

### Chapter 1 scoring bands (out of 20)

- 17 to 20, SOLID: your R mechanics and course framing are at the level the first two weeks demand. Move on; no dedicated Ch 1 retrieval needed beyond what the Ch 2 work already touches.
- 12 to 16, SHAKY: the concepts are there but the production is unreliable, usually the subsetting pattern in Q3 or the indexing in Q1. Schedule spaced retrieval: re-run the Ch 1 code snippets from memory twice before Oct 27, and re-test the missed items in 2 days.
- 0 to 11, GAP: re-teach before the midterm. Work through the Ch 1 handout and type out every line of the Ch 1 code snippets yourself, then retake this quiz closed book. R code is free points on the midterm only if it is automatic.

### Chapter 1: which questions map to which midterm skill

- Q1: reading and predicting R code output, vector and matrix indexing (midterm code-reading items).
- Q2 and Q3: the data handling spine of every later chapter: loading data, $ access, logical row subsetting (used in HW1 and assumed in all regression chapters).
- Q4: simulation setup and reproducibility (HW1 Q1 style items, and the logic behind the sampling simulations in Ch 2 and Ch 4).
- Q5: supervised learning framing and the causal vs correlational warning that returns in regression interpretation questions.
- Q6: exam logistics and the course arc (inference, then regression, then logistic regression).

---

## Chapter 2 Key: Review of Statistics (60 points)

### Question 1. The Normal mean problem (5 points)

a) z = (120 minus 100) / 10 = 20 / 10 = 2. A score of 120 is 2 standard deviations above the mean. (1 point)

b) P(Y > 120) = P(Z > 2) = 1 minus 0.9772 = 0.0228, about 2.28% of chips. (1 point)

c) P(Y < 80): z = (80 minus 100) / 10 = minus 2, so P(Y < 80) = P(Z < minus 2) = 0.0228, the same as (b). The normal distribution is symmetric about mu, so equal distances below and above the mean have equal tail probabilities. (1 point)

d) z = (110 minus 100) / 10 = 1. P(Y > 110) = P(Z > 1) = 1 minus 0.8413 = 0.1587, about 16% qualify (the handout's figure of roughly 1600 of 10,000 chips). 110 is approximately the 84th percentile. (1 point)

e) 97.5th percentile = mu + 1.96 sigma = 100 + 1.96(10) = 119.6. Meaning: 97.5% of chips score at or below 119.6 points (equivalently, it is the upper endpoint of the central 95% range). (1 point)

### Question 2. Point prediction and prediction interval (5 points)

a) $20, the population mean mu. In the Normal model the best predictor of a new observation Y_f is mu itself. (1 point)

b) 95% prediction interval = mu plus or minus 1.96 sigma = 20 plus or minus 1.96(4) = 20 plus or minus 7.84 = (12.16, 27.84). (2 points: 1 for the setup mu plus or minus 1.96 sigma, 1 for the arithmetic.)

c) Width = 2 times 1.645 times sigma = 2(1.645)(4) = 13.16 dollars. (1 point)

d) The interval describes the spread of one new individual observation around mu. With mu and sigma known there is no estimation uncertainty and no sample involved; the only variability is the individual's own deviation from mu, which sigma measures. Sample size would enter only if mu had to be estimated from data. (1 point)

### Question 3. Estimating mu and sigma from a sample (5 points)

Sample: 93, 95, 100, 105, 117. N = 5.

a) Y-bar = (93 + 95 + 100 + 105 + 117) / 5 = 510 / 5 = 102. (1 point)

b) Deviations from 102: minus 9, minus 7, minus 2, 3, 15. Squared: 81, 49, 4, 9, 225. Sum = 368.
s_Y = sqrt( 368 / (5 minus 1) ) = sqrt(368 / 4) = sqrt(92) = 9.59.
The denominator is N minus 1 = 4, as in the handout's definition of the sample standard deviation. (2 points: 1 for the squared-deviation sum of 368, 1 for dividing by N minus 1 and the square root.)

c) Estimated standard error s_Y-bar = s_Y / sqrt(N) = 9.59 / sqrt(5) = 9.59 / 2.236 = 4.29. (2 points)

These are the handout's own numbers: 102, 9.59, 4.29. If yours differ, your arithmetic, not the method, is the first suspect.

### Question 4. Confidence intervals for a mean, large sample (6 points)

NEW NUMBERS item. Y-bar = 50, s_Y = 20, N = 100.

a) Estimated standard error = s_Y / sqrt(N) = 20 / sqrt(100) = 20 / 10 = 2. (1 point)

b) 95% CI = Y-bar plus or minus 1.96 times SE = 50 plus or minus 1.96(2) = 50 plus or minus 3.92 = (46.08, 53.92). (2 points)

c) 99% CI = 50 plus or minus 2.58(2) = 50 plus or minus 5.16 = (44.84, 55.16). The 99% interval is wider: more confidence costs width. (1 point)

d) New SE = 20 / sqrt(400) = 20 / 20 = 1. The 95% interval's half width falls from 3.92 to 1.96, so the interval is half as wide. Reason: the standard error shrinks like 1 / sqrt(N), so quadrupling N halves it. (1 point)

e) qnorm(). qnorm(p) returns the 100p-th percentile of the standard Normal N(0, 1); qnorm(0.975) = 1.96 and qnorm(0.025) = minus 1.96. (1 point)

### Question 5. The sampling distribution of the sample mean (4 points)

a) Y-bar ~ N(mu, sigma^2 / N). Its mean is mu and its variance is sigma^2 / N, so its standard deviation is sigma / sqrt(N). (2 points: 1 for the Normal family with mean mu, 1 for the variance sigma^2 / N.)

b) The standard error of Y-bar is its standard deviation across repeated samples of the same size: different samples of the same size give different estimates, and the standard error describes how much those estimates vary. (1 point)

c) s_Y describes variation among individual observations. s_Y-bar estimates variation in sample means across repeated samples. One line: s_Y is about the data, s_Y-bar is about the estimator. (1 point)

### Question 6. The Law of Large Numbers (4 points)

a) LLN: as the sample size N increases, the sample mean Y-bar converges to (gets arbitrarily close to, with higher and higher probability) the true mean mu of the underlying distribution. It is a statement about the value of Y-bar settling on mu, not about the shape of any distribution; the shape statement is the CLT, which is the confusion to avoid. (2 points)

b) |Y-bar minus mu| generally became smaller as N grew. This is the Law of Large Numbers: larger samples give more reliable estimates because independent deviations cancel. (1 point)

c) False. LLN is a limit statement about convergence as N grows; at any fixed small N, Y-bar is still a random draw centered at mu with spread sigma / sqrt(N), so it will typically miss mu, just by less than it would at even smaller N on average. (1 point)

### Question 7. The Central Limit Theorem (5 points)

a) CLT: even if the underlying data are not Normal, the sample mean Y-bar is approximately Normally distributed for sufficiently large N, centered at the population mean mu with standard deviation sigma / sqrt(N). The handout's version: "Even if you're not normal, your sample average is (approaches) normal." (2 points: 1 for approximate Normality of the mean, 1 for "as N grows" and the centering.)

b) The CLT applies to the sampling distribution of the mean, not to the individual changes. With N = 4000 the sampling distribution of the mean change is approximately Normal even though the household changes themselves are skewed, so the usual CI and t procedures for a mean are valid. This is exactly HW1 Q3a-3. (1 point)

c) No, it is not necessary. Inference about a mean needs the sampling distribution of Y-bar to be approximately Normal, which the CLT supplies at large N; the individual observations do not need to be Normal. (Requiring Normal individual data would only matter at small N.) (1 point)

d) Small samples drawn from a strongly nonNormal population: the handout warns that with small N the mean's distribution may deviate substantially from Normal and a t-interval may still be unreliable. (1 point)

### Question 8. Interpreting a confidence interval: spot the error (5 points)

a) Student C is correct. The handout's interpretation is about the procedure: a 95% confidence level means that 95% of the time, intervals built this way cover the true value of the unknown parameter mu. (1 point)

b) Student A's error: mu is a fixed (unknown) number, not a random variable, so it makes no sense to assign it a 95% probability of lying in this one realized interval. This interval either covers mu or it does not; the 95% describes how often the procedure succeeds across repeated samples, not a probability about this interval. (2 points)

Student B's error: the interval is about the parameter mu, the population mean change, not about individual households. A range that captures individual households' changes is a prediction interval, which is far wider because individuals vary much more than a mean of 4000 of them does. The handout states this distinction directly: a confidence interval is about a parameter that governs the population, a prediction interval is about a feature of one or a few unobserved objects. (2 points)

### Question 9. Confidence interval vs prediction interval (4 points)

a) The prediction interval (72.83, 131.17) answers where the next chip's score will fall. The confidence interval (90.09, 113.91) answers where the population mean mu lies. (1 point)

b) The prediction interval must account for (1) uncertainty about the population mean (we only estimated mu by Y-bar = 102) and (2) variation among individual chips around that mean (measured by s_Y = 9.59). The confidence interval includes only source (1); it does not include individual variation. That extra source is why the prediction interval is wider. (2 points)

c) The point prediction is Y-bar = 102. (1 point)

### Question 10. Two-tailed hypothesis test, full production (7 points)

Given: N = 4000, Y-bar = 0.607 hours, estimated SE = 0.174 hours, claimed mu_0 = 0.5.

a) H_0: mu = 0.5. H_1: mu is not equal to 0.5. Here mu is the population mean change in weekly Netflix usage (after minus before) across all U.S. households. (1 point)

b) Two-tailed. The business question asks whether the mean differs from 0.5 in either direction; an increase below 0.5 or above 0.5 would both contradict the manager's claim. (1 point)

c) t = (Y-bar minus mu_0) / SE = (0.607 minus 0.5) / 0.174 = 0.107 / 0.174 = 0.61. (Running t.test() on the raw data gives t = 0.617; the small difference is rounding in the summary numbers. Either is full credit.) The sample mean sits only about 0.6 standard errors above the null value. (2 points: 1 for the formula, 1 for the value.)

d) The p-value is the probability, assuming H_0 is true, of a test statistic at least as extreme as the one observed. For a two-tailed test, "at least as extreme" counts outcomes at least as far from zero in either direction. (1 point)

e) p = 0.54 is greater than alpha = 0.05, so we do not reject H_0. Conclusion in context: there is not enough evidence that the population mean increase differs from 0.5 hour per household per week. (Consistent check: the 95% CI (0.266, 0.948) contains 0.5.) (1 point)

f) No. Failing to reject H_0 only means we do not have enough evidence against it; a hypothesis test cannot prove H_0 is true. (1 point)

### Question 11. One-tailed hypothesis test: the hurdle question (6 points)

Same summaries: Y-bar = 0.607, SE = 0.174, boundary mu_0 = 0.25.

a) H_0: mu is less than or equal to 0.25. H_1: mu > 0.25. (1 point)

b) t = (0.607 minus 0.25) / 0.174 = 0.357 / 0.174 = 2.05. (t.test() on the raw data: 2.055.) (2 points)

c) Only the upper tail counts. The alternative is directional (mu > 0.25), so only test statistics at least as large as the observed one, in the positive direction, are evidence for H_1; a very negative t would support H_0, not H_1. (1 point)

d) p = 0.020 is below alpha = 0.05, so we reject H_0: mu is at most 0.25. Conclusion in context: there is evidence that the population mean increase exceeds 0.25 hour per household per week, so the hurdle for investing is met on this evidence. (1 point)

e) The direction must be chosen before examining the data, based on the business question (here, the investment hurdle). Choosing the tail after seeing which way the sample mean fell would rig the test. (1 point)

### Question 12. Significance, p-values, and causation (4 points)

a) No. The test establishes that the mean increase in this observed group is larger than sampling noise alone would explain; it says nothing about what caused it. These households were not randomly assigned to get or not get the gaming features, so the increase could reflect other differences or changes over the same period. That is a correlational finding, and significance does not convert association into a causal effect. (2 points)

b) False. The p-value is computed assuming H_0 is true and gives the probability of data at least this extreme under that assumption; it is not the probability that H_0 is true. The handout states this directly. (1 point)

c) A 5% significance level means that when H_0 is true and the test's assumptions hold, the procedure rejects H_0 about 5% of the time across repeated samples. It is the procedure's long run false rejection rate. (1 point)

### Chapter 2 scoring bands (out of 60)

- 51 to 60, SOLID: weeks 1 and 2 are genuinely yours, including the interpretation traps. Move on to Ch 3 and Ch 4 at full speed. Keep one mixed Ch 2 retrieval set in the rotation (the system already has it on the Wed and Thu plans) and spend no more baseline time here.
- 36 to 50, SHAKY: the machinery is partly there but something specific leaks, most often CI interpretation (Q8), the CI vs PI distinction (Q9), or one vs two tailed setup (Q10, Q11). Schedule spaced retrieval on the missed question types only: re-test the missed items in 1 day and again in 3 days, closed book, and log the scores in the miss log. Do not re-study the whole chapter.
- 0 to 35, GAP: re-teach before the midterm, this week. Ch 2 is the foundation the Ch 4 inference topics stand on, so a gap here doubles the cost of Friday's Ch 4 day. Re-work the Ch 2 handout sections in this order: Normal mean problem, estimation and standard error, confidence intervals, hypothesis testing, then retake this quiz closed book and only move on at 45 or above.

### Chapter 2: which questions map to which midterm skill

- Q1 and Q2: the Normal mean problem: z-scores, tail probabilities, percentiles, point prediction, and prediction intervals for a single new observation (also HW1 Q2, Jane's restaurant, in the same form).
- Q3: computing Y-bar, s_Y with the N minus 1 denominator, and the standard error from raw data, the computation every later interval and test reuses.
- Q4: confidence interval construction at 95% and 99%, how N drives width through the standard error, and qnorm() for multipliers.
- Q5: the sampling distribution of Y-bar stated cold: N(mu, sigma^2 / N), and the s_Y vs s_Y-bar distinction the handout tests repeatedly (including in the Vanguard example).
- Q6: LLN as a production answer, the theorem behind HW1 Q1 and behind "larger N, tighter sampling distribution."
- Q7: CLT stated and applied, including the HW1 Q3a-3 point that individual data need not be Normal for mean inference at large N.
- Q8 and Q9: interpretation, the highest value items here. Correct CI interpretation, the procedure view, and CI vs PI are exactly the traps the midterm and HW1 both set.
- Q10 and Q11: the full hypothesis testing production line: hypotheses in context, tail choice from the business question, t statistic, p-value meaning, decision at alpha = 0.05, conclusion in context (Netflix example, HW1 Q3 form).
- Q12: significance is not causation, and the two p-value misconceptions (probability H_0 is true; proof by failing to reject) that interpretation questions are built on.

---

## Combined read

- 68 to 80 total: the "first 2 weeks" claim checks out. The reset plan stands as built: Ch 3 today, Ch 4 Friday, simulation Saturday.
- 48 to 67 total: the base is real but leaky in the specific places the key names. Follow the SHAKY rows for whichever chapter leaked; do not add a general Ch 2 day, add targeted retrieval only.
- Below 48 total: the first 2 weeks are not yet a foundation. Tell Ghost the per chapter scores the same day; the reset plan has to be rebuilt with a Ch 2 repair block before Ch 4, because Ch 4 inference is Ch 2 machinery with new labels.
