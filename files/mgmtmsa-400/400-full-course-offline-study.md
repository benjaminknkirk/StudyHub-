# MGMTMSA 400: Full Course Study Pack (offline version)

Midterm: Tuesday Oct 27, 2026, 1:00 to 2:30 PM PT, Crown Auditorium (G313). Closed book, multiple choice, scientific calculator plus ONE double-sided page of notes allowed.

How to use this pack: read one piece, cover the answer, say the check answer out loud, then look. Every check has its answer directly under it. Short lines, plain words first, formal name after, same as our chats.

## The whole skeleton (19 topics)

Chapter 1: Introduction
- Topic 1: Supervised vs unsupervised learning
- Topic 2: Causal effect vs correlation and counterfactuals
- Topic 3: R basics

Chapter 2: Review of statistics
- Topic 1: The Normal mean problem
- Topic 2: Estimation from a sample
- Topic 3: Standard error and the Law of Large Numbers
- Topic 4: Confidence intervals
- Topic 5: The Central Limit Theorem
- Topic 6: Hypothesis testing
- Topic 7: The applications (Netflix paired test, Vanguard SD vs SE)

Chapter 3: Introduction to predictive models
- Topic 1: The simple linear regression model and correlation
- Topic 2: Least squares, the fitted line
- Topic 3: Residuals and outliers
- Topic 4: R squared and scoring model fit
- Topic 5: The log(price) model

Chapter 4: Estimation, testing, and prediction
- Topic 1: Prediction under SLR and the conditional distribution of Y given X
- Topic 2: The error term and estimating sigma
- Topic 3: Inference on the estimates (the sampling distribution of b1)
- Topic 4: Prediction intervals

---

# Chapter 1: Introduction

## Topic 1 out of 3: Supervised vs unsupervised learning

Pieces: 1) Is there a named outcome? 2) Amount or bucket? 3) No outcome means grouping.

**Piece 1 of 3: Is there a named outcome?**
Supervised learning means the training data has a named outcome we want to predict, like price or spam/not spam. The model learns by copying known answers.
Check: A bank has past loans labeled "paid back" or "defaulted" and wants to predict new loans. Supervised or unsupervised?
Answer: Supervised. The outcome (defaulted or not) is named in the training data.

**Piece 2 of 3: Amount or bucket?**
If the outcome is an amount, like 42.7 dollars, it is called regression. If the outcome is a bucket, like spam or not spam, it is called classification. A cutoff can turn amounts into buckets.
Check: Predicting whether a tumor is malignant or benign, from labeled scans.
Answer: Classification, and supervised. The answer is a bucket, not an amount.

**Piece 3 of 3: No outcome means grouping.**
Unsupervised learning has no named outcome. The job is to group, segment, cluster, or discover patterns.
Check: A store groups shoppers into types using only purchase history, no labels given.
Answer: Unsupervised. There is no outcome to predict.

## Topic 2 out of 3: Causal effect vs correlation and counterfactuals

Pieces: 1) Correlation is moving together 2) The causal effect is a comparison of two worlds 3) Confounders and random assignment.

**Piece 1 of 3: Correlation is moving together.**
Two variables are correlated if they tend to move together in the data we saw. That alone never proves one causes the other.
Check: Ice cream sales and drownings rise together every summer. Does that prove ice cream causes drowning?
Answer: No. Heat drives both. That third variable is a confounder.

**Piece 2 of 3: The causal effect is a comparison of two worlds.**
The causal effect compares the same unit in two worlds: with the treatment, and without it. The second world is the counterfactual, the "what would have happened" world we cannot see.
Check: A student takes a prep course and scores 700. To know the course's effect, what else do we wish we could see?
Answer: The same student's score in the world where they did not take the course. The effect is 700 minus that counterfactual score.

**Piece 3 of 3: Confounders and random assignment.**
A confounder is a third variable that pushes both the treatment and the outcome, faking a link. Random assignment breaks the link between the confounder and the treatment, because who gets treated is decided by chance.
Check: People who choose a hard diet book program lose more weight. Why is self-selection a problem?
Answer: People who choose the program differ from those who do not (motivation, starting health). Those differences, not the book, may explain the weight loss. Random assignment would remove that gap.

## Topic 3 out of 3: R basics

Pieces: 1) A data frame is a table 2) Pulling a column with $ 3) Subsetting with a condition.

**Piece 1 of 3: A data frame is a table.**
In R, a data frame is a table. Rows are observations (one card, one household). Columns are variables (price, performance). You load a CSV with read.csv, like: cards <- read.csv("videocards.csv").
Check: In the cards data frame, is one row a variable or an observation?
Answer: An observation. One row is one card.

**Piece 2 of 3: Pulling a column with $.**
The $ takes one column out of the table as a list of numbers, called a vector. mean(cards$price) gives the average of the price column.
Check: Write the code for the average of the score column in a data frame called students.
Answer: mean(students$score)

**Piece 3 of 3: Subsetting with a condition.**
Putting a true/false test inside the row slot keeps only rows where the test is true. Example: cards[cards$performance > 100, ] keeps cards with performance above 100.
Check: What rows does students[students$score > 80, ] keep?
Answer: Only students whose score is above 80.

---

# Chapter 2: Review of statistics

## Topic 1 out of 7: The Normal mean problem

Pieces: 1) Notation and point prediction 2) Prediction interval for one value 3) Z-scores 4) Percentiles.

**Piece 1 of 4: Notation and point prediction.**
Writing Y ~ N(60, 3^2) means: values of Y follow a bell shape with mean 60 and standard deviation 3. Careful trap: the second slot holds the variance, 3^2 = 9, so the SD is the square root, 3. The best single guess for one value, the point prediction, is the mean.
Check: W ~ N(500, 16). What is the SD, and what is the point prediction?
Answer: SD = square root of 16 = 4. Point prediction = 500.

**Piece 2 of 4: Prediction interval for one value.**
A 95% prediction interval for ONE new value is: mean plus or minus 1.96 times the SD. It traps the middle 95% of individual values. Multipliers: 1.64 for 90%, 1.96 for 95%, 2.576 for 99%.
Check: Y ~ N(80, 4^2). Give the 95% prediction interval.
Answer: 80 plus or minus 1.96 x 4 = 80 plus or minus 7.84, so about (72.2, 87.8). Trap: the width is 2 x 7.84 = 15.68, not 7.84.

**Piece 3 of 4: Z-scores.**
A z-score is just distance measured in SDs: z = (value minus mean) / SD. A z of 1.5 means the value sits 1.5 SDs above the mean. Note: 1.96 is not part of z. 1.96 is a cutoff we choose when we build a 95% interval.
Check: In Y ~ N(80, 4^2), what is the z-score of 86?
Answer: (86 - 80) / 4 = 1.5.

**Piece 4 of 4: Percentiles.**
Anchor points on the bell: z = 0 is the 50th percentile. z = +1 is the 84th (16% of values above). z = +2 is about the 97.5th (2.5% above). z = -1 is the 16th. z = -2 is the 2.5th.
Check: In Y ~ N(80, 4^2), about what percent of values are above 84?
Answer: 84 is z = +1, so about 16% of values are above it.

## Topic 2 out of 7: Estimation from a sample

Pieces: 1) Population, sample, sample mean 2) Sample standard deviation 3) The sampling distribution.

**Piece 1 of 3: Population, sample, sample mean.**
The population is everyone we care about. A sample is the few we actually measure. The sample mean (x-bar) is our estimate of the population mean (mu). Yuan's chips example: 93, 95, 100, 105, 117.
Check: What is the sample mean of the five chips?
Answer: (93 + 95 + 100 + 105 + 117) / 5 = 510 / 5 = 102.

**Piece 2 of 3: Sample standard deviation.**
The sample SD (s) measures how spread out the sample values themselves are. For the five chips, s = 9.59. It describes the values, not the estimate.
Check: Does s = 9.59 describe the spread of the chips, or the precision of the sample mean?
Answer: The spread of the chips themselves.

**Piece 3 of 3: The sampling distribution.**
Take many samples of the same size, compute each sample's mean, and plot those means. That plot is the sampling distribution of the mean. It centers on the true population mean, and it is narrower than the plot of individual values, because highs and lows cancel inside each average.
Check: Individual incomes are spread from 0 to 300K. The sampling distribution of the mean of 50 incomes is wider or narrower than that?
Answer: Narrower. Averaging 50 incomes cancels extremes.

## Topic 3 out of 7: Standard error and the Law of Large Numbers

Pieces: 1) The standard error formula 2) SD vs SE 3) The Law of Large Numbers.

**Piece 1 of 3: The standard error formula.**
The standard error is the typical distance between a sample mean and the true mean: SE = SD / sqrt(n). For the chips: 9.59 / sqrt(5) = 4.29.
Check: SD = 20, n = 100. What is the SE?
Answer: 20 / 10 = 2.

**Piece 2 of 3: SD vs SE.**
SD describes the people (or values). SE describes your guess (the mean). The SD does not shrink as n grows. The SE shrinks like 1 / sqrt(n): to cut the SE in half, you need 4 times the sample.
Check: n goes from 25 to 100 (4 times bigger). SE was 8. New SE?
Answer: 4. sqrt(n) doubled, so the SE halved.

**Piece 3 of 3: The Law of Large Numbers.**
As n grows, the sample mean settles toward the population mean. That is the Law of Large Numbers (LLN). But size never fixes bias: a huge biased sample still misses the population mean.
Check: A store surveys a million of its happiest customers about satisfaction. Does the huge n guarantee a mean close to all customers' mean?
Answer: No. The sample is not random. Bias does not wash out with size.

## Topic 4 out of 7: Confidence intervals

Pieces: 1) Build a CI for a mean 2) The t multiplier for small samples 3) CI vs prediction interval 4) Sample size for a target margin.

**Piece 1 of 4: Build a CI for a mean.**
A confidence interval for the true mean is: sample mean plus or minus multiplier times SE. The part after the plus or minus is the margin of error. Width = 2 x margin of error.
Check: Sample mean 80, SE 5. Build the 95% CI using 1.96.
Answer: Margin = 1.96 x 5 = 9.8. CI = (70.2, 89.8).

**Piece 2 of 4: The t multiplier for small samples.**
With a small sample we do not trust the SD estimate, so we use a bigger multiplier from the t table instead of 1.96. Degrees of freedom: df = n - 1 for one mean. Chips: n = 5, df = 4, 95% t multiplier = 2.776, giving CI (90.09, 113.91). You do not memorize 2.776; the exam gives t values. You do memorize z: 1.64, 1.96, 2.576.
Check: A sample of 21 people, one mean. What is df?
Answer: 20. df = n - 1.

**Piece 3 of 4: CI vs prediction interval.**
Same center, different job. A CI is a range for the true MEAN, built with the SE, so it is narrow. A prediction interval is a range for ONE NEW VALUE, built with the full SD, so it is much wider. Chips 95% PI: (72.83, 131.17), much wider than the CI (90.09, 113.91).
Check: "Where will the next single chip's value land?" CI or PI?
Answer: PI. One new single value means prediction interval.

**Piece 4 of 4: Sample size for a target margin.**
Run the margin recipe backwards: n must be at least (z x SD / target margin)^2. Always round UP, because rounding down leaves the margin slightly too big.
Check: The formula gives n = 96.04. What sample size do you take?
Answer: 97. Always round up.

## Topic 5 out of 7: The Central Limit Theorem

Pieces: 1) The shape claim 2) Center and spread, and z for a sample mean 3) When it kicks in.

**Piece 1 of 3: The shape claim.**
The Central Limit Theorem (CLT) says: the sampling distribution of the mean is approximately Normal for large n, no matter how the raw data is shaped. Lopsided incomes still give bell-shaped averages.
Check: Incomes are heavily lopsided. What shape do averages of 200 incomes follow?
Answer: Approximately a bell (Normal) shape. That is the CLT.

**Piece 2 of 3: Center and spread, and z for a sample mean.**
The bell of sample means centers on the population mean (mu), and its spread is the SE = SD / sqrt(n). Key fact: the standard deviation of the sample mean IS the standard error. A z for a sample mean: z = (x-bar minus mu) / SE.
Check: Population mean 100, SD 18, n = 36. A sample mean of 106 is how many SEs above 100, and roughly what percent of sample means sit higher?
Answer: SE = 18 / 6 = 3. z = (106 - 100) / 3 = 2. About 2.5% of sample means sit higher.

**Piece 3 of 3: When it kicks in.**
Rule of thumb: n of about 30 or more handles even lopsided data. If the raw data is already Normal, sample means are Normal at ANY n, even tiny n.
Check: Raw data is exactly Normal, n = 4. Are the sample means Normal?
Answer: Yes. Normal raw data gives Normal means at any sample size.
Also keep the pair straight: LLN says WHERE the mean settles (the value, mu). CLT says the SHAPE of the wobble (a bell). If a choice says "the sample mean equals the population mean" as the CLT, it is wrong; that is LLN flavor.

## Topic 6 out of 7: Hypothesis testing

Pieces: 1) H0 and H1 2) The test statistic 3) The p-value 4) The decision 5) One-sided vs two-sided.

**Piece 1 of 5: H0 and H1.**
H0 is the claim we start by pretending is true. It gets the benefit of the doubt, like innocent until proven guilty. H1 is the other story we suspect. mu always means the TRUE population mean; x-bar is the sample average we computed.
Check: A company claims mean delivery time is 30 minutes. You suspect slower. State H0 and H1.
Answer: H0: mu = 30. H1: mu > 30.

**Piece 2 of 5: The test statistic.**
The t statistic measures how far the SAMPLE mean is from the HYPOTHESIZED mean, in SEs: t = (x-bar minus claimed mu) / SE. Big |t| means the sample is many wobbles away from the claim.
Check: x-bar = 34, claim 30, SE = 2. What is t?
Answer: (34 - 30) / 2 = 2.

**Piece 3 of 5: The p-value.**
The p-value is: IF H0 were true, the probability of a sample at least as far from the claim as the one we got. Small p = the data would be rare if the claim were true = strong evidence against H0. Big p = the data is ordinary under H0. The p-value is NOT the probability that H0 is true.
Check: p = 0.60. In plain words?
Answer: If the claim were true, luck alone would produce a sample this far off about 60 times in 100. Nothing suspicious. Weak evidence against H0.

**Piece 4 of 5: The decision.**
At the 5% level: p below 0.05, reject H0 (call it statistically significant). p above 0.05, fail to reject H0. Fail to reject does NOT prove H0. It means the evidence was not strong enough. Watch the near miss: p = 0.04 is below 0.05, so reject.
Check: p = 0.20 at the 5% level. Decision?
Answer: Fail to reject H0.

**Piece 5 of 5: One-sided vs two-sided.**
Two-sided H1 (mu not equal to claim): extremes on BOTH sides count. One-sided H1 (mu greater than, or mu less than, the claim): only one side counts. Netflix example: mean change 0.607 hours, SE 0.174. Two-sided test against 0.5: t = 0.617, p = 0.537, fail to reject, 95% CI (0.266, 0.948). One-sided test against the 0.25 hurdle (H1: change greater than 0.25): t = 2.055, p = 0.020, reject.
Check: H1 says "the mean changed, in either direction." One-sided or two-sided?
Answer: Two-sided.

## Topic 7 out of 7: The applications (Netflix paired test, Vanguard SD vs SE)

Pieces: 1) Paired data: each unit is its own control 2) SD vs SE in a real report.

**Piece 1 of 2: Paired data: each unit is its own control.**
Comparing the same unit before and after (or with and without) kills the "different kinds of people" confounder. Make ONE number per unit: its difference. Then run a plain one-sample test on the differences. df = number of pairs minus 1. Your HW1: switcher households, mean difference -1.757 hours, SE 0.310, t = -5.67, so reject "no change": having Netflix goes with watching LESS of the rival services.
Check: Mean difference -2.0, SE 0.5. What is t, and the 5% decision on "no change"?
Answer: t = -4.0. That is 4 SEs from 0, so reject the no-change claim.

**Piece 2 of 2: SD vs SE in a real report.**
In the Vanguard funds output: the SD (about 0.04 to 0.07) is the variability of individual monthly returns. The SE Mean (about 0.002 to 0.005) is the precision of the estimated mean return. SD describes the values; SE describes the estimate. The two-fund comparison (VEIPX vs VFIAX) gave t = 1.13, p = 0.13: cannot reject equal performance.
Check: A report shows SD = 0.06 and SE Mean = 0.004. Which one tells how wild single months are?
Answer: The SD, 0.06. Single months are values, and SD describes values.

---

# Chapter 3: Introduction to predictive models

## Topic 1 out of 5: The simple linear regression model and correlation

Pieces: 1) The scatterplot 2) Reading a correlation 3) Correlation traps.

**Piece 1 of 3: The scatterplot.**
Plot one dot per observation: x across, y up. The video cards: x = performance, y = price, 125 dots. A cloud drifting up to the right means the variables rise together.
Check: The cloud drifts down to the right. What is the sign of the correlation?
Answer: Negative. The variables move in opposite directions.

**Piece 2 of 3: Reading a correlation.**
Correlation r lives between -1 and +1. The SIGN gives direction: plus means together, minus means opposite. The SIZE gives strength: near plus or minus 1 is strong, near 0 is weak.
Check: Read r = -0.2 in plain words.
Answer: As one variable goes up, the other tends to go down, but weakly. And strength ignores sign: r = -0.85 is STRONGER than r = +0.60.

**Piece 3 of 3: Correlation traps.**
Trap 1: r only measures STRAIGHT-LINE patterns. A perfect U shape gives r near 0 even though the pattern is perfect. Trap 2: correlation never proves causation, not even r = 1.0. Causation is about changing x and watching y, the counterfactual question.
Check: A perfect U shape, every point exactly on the curve. r is near 0, +1, or -1?
Answer: Near 0. No straight line fits a U.

## Topic 2 out of 5: Least squares, the fitted line

Pieces: 1) The fitted line is a prediction rule 2) Slope and intercept in plain words 3) Least squares means smallest total miss 4) Two anchor facts about the line.

**Piece 1 of 4: The fitted line is a prediction rule.**
Plug in x, get the predicted y, written y-hat. Yuan's video cards line: predicted log(price) = 4.897 + 0.00753 x performance.
Check: Performance = 100. Predicted log(price)?
Answer: 4.897 + 0.00753 x 100 = 4.897 + 0.753 = 5.650.

**Piece 2 of 4: Slope and intercept in plain words.**
The slope (b1) is the predicted change in y when x goes up by 1. The intercept (b0) is the predicted y when x = 0. It is often just an anchor for the line, not a real case. Video cards slope 0.00753: each extra performance point predicts log(price) higher by 0.00753.
Check: A line has slope -2. x rises by 1. What happens to the prediction?
Answer: It falls by 2.

**Piece 3 of 4: Least squares means smallest total miss.**
Many lines could go through a cloud. Least squares picks the line that makes the total of the SQUARED misses smallest. Squaring does two jobs: positive and negative misses cannot cancel, and big misses get punished much harder than small ones.
Check: Two lines have total squared misses 50 and 80. Which one does least squares pick?
Answer: The one with 50. Least squares minimizes the sum of squared residuals.

**Piece 4 of 4: Two anchor facts about the line.**
Fact 1: the fitted line always passes through the point of averages, (x-bar, y-bar). Fact 2: the slope can be built from correlation: b1 = r x (sY / sX). Also b0 = y-bar minus b1 x-bar, so the line is fully set once you have the two means, the two SDs, and r.
Check: r = 0.5, sY = 10, sX = 4. What is b1?
Answer: b1 = 0.5 x (10 / 4) = 1.25.

## Topic 3 out of 5: Residuals and outliers

Pieces: 1) A residual is the miss 2) Reading a residual plot 3) Outliers, leverage, and influence.

**Piece 1 of 3: A residual is the miss.**
For each point: residual = actual y minus predicted y (e = y - y-hat). Positive residual: the point sits ABOVE the line, the line under-predicted. Negative: below the line. Least squares guarantees: residuals average to 0, and residuals have zero correlation with x.
Check: Actual price value (in log terms) 7.0, predicted 6.4. Residual, and is the point above or below the line?
Answer: e = 7.0 - 6.4 = +0.6. Above the line. The line predicted too low.

**Piece 2 of 3: Reading a residual plot.**
Plot residuals against x. Good model: a shapeless splatter around 0. Bad sign: a pattern, like a curve, in the residuals. A curve in the residuals means the straight line is missing a bend in the data. Fan shapes (spread growing with x) are also a warning.
Check: Residuals form a clear smile shape. What is wrong?
Answer: The true pattern bends. A straight line is the wrong shape for this data.

**Piece 3 of 3: Outliers, leverage, and influence.**
An outlier has a very large residual: it sits far from the line vertically. Leverage is about x: a point with an unusual x value sits far out where the line has little company, so it can pull the line like a lever. A point with big residual AND high leverage is influential: deleting it moves the line a lot. Yuan's NVIDIA example: one workstation card priced far above the line was a legitimate card from a different population, with a huge positive residual (about +2.1 in log terms). Lesson: investigate outliers; do not delete them just for being inconvenient.
Check: A point sits at a normal x but far above the line. Big residual, high leverage, both, or neither?
Answer: Big residual only. Leverage is about an unusual x position.

## Topic 4 out of 5: R squared and scoring model fit

Pieces: 1) The three sums of squares 2) What R squared is 3) Reading and traps.

**Piece 1 of 3: The three sums of squares.**
Total wiggle in y: SST (variation of y around its mean). Wiggle the line explains: SSR. Wiggle left over as residuals: SSE. They always split exactly: SST = SSR + SSE.
Check: SST = 200, SSE = 70. What is SSR?
Answer: 130. SST minus SSE.

**Piece 2 of 3: What R squared is.**
R squared is the share of y's wiggle the line explains: R^2 = SSR / SST, also = 1 - SSE / SST. In simple linear regression, R^2 is also r squared, so R^2 = 0.664 for the video cards means r is about 0.81 in size, with the sign taken from the slope (positive here).
Check: SST = 200, SSE = 70. R^2?
Answer: 1 - 70 / 200 = 0.65. The line explains 65% of the variation in y.

**Piece 3 of 3: Reading and traps.**
Say it as a percent: "The line explains about 66% of the variation in log(price)." Trap 1: high R^2 does not prove causation. Trap 2: R^2 compares against just guessing the mean; a model can have a decent R^2 and still make big dollar errors, because R^2 is a share, not a typical miss size. The typical miss size is the residual standard error (next chapter's s).
Check: A model has R^2 = 0.95. Does that prove x causes y?
Answer: No. Fit is not causation, at any R^2.

## Topic 5 out of 5: The log(price) model

Pieces: 1) Why log the y 2) The slope reads as a percent 3) Predicting back to dollars.

**Piece 1 of 3: Why log the y.**
Prices are lopsided: many cheap cards, a few very expensive ones. Taking log(price) squeezes the long tail and makes the cloud behave more like a straight line with even spread. Yuan models log(price), not price.
Check: Prices range from 20 dollars to 20,000 dollars, with most under 200. Why log?
Answer: The raw prices are heavily right-skewed. Logging compresses the huge values so a line fits better.

**Piece 2 of 3: The slope reads as a percent.**
Slope 0.00753 on log(price) means: one more performance point predicts log(price) up by 0.00753, which is about a 0.75% higher price. Rule: in a log(y) model, slope x 100 is the approximate percent change in y per unit of x.
Check: Slope is 0.02 in a log(price) model. Plain reading?
Answer: Each extra unit of x predicts about a 2% higher price.

**Piece 3 of 3: Predicting back to dollars.**
Predict on the log scale first, then undo the log with exp. Video cards at performance 200: predicted log(price) = 4.897 + 0.00753 x 200 = 6.403. exp(6.403) is about 604 dollars.
Check: Predicted log(price) = 5.650 (performance 100). Rough predicted price: exp(5.65) is about what?
Answer: About 284 dollars (exp(5.65) = 284.4).

---

# Chapter 4: Estimation, testing, and prediction

## Topic 1 out of 4: Prediction under SLR and the conditional distribution of Y given X

Pieces: 1) At a fixed x, y is a distribution, not a number 2) Two sources of prediction error.

**Piece 1 of 2: At a fixed x, y is a distribution, not a number.**
Fix x (say performance = 200). The cards at that x do not all cost the same. Their prices form a distribution, called the conditional distribution of Y given X: roughly Normal, centered on the line's value at that x, with spread sigma. The line gives the CENTER of that distribution, the conditional mean. The model in symbols: Y = beta0 + beta1 x + error, where the error has mean 0 and SD sigma.
Check: At performance 200, the line says log(price) 6.403. Does every 200-performance card cost exactly exp(6.403)?
Answer: No. 6.403 is the center of the distribution of log prices at that x. Individual cards scatter around it with spread sigma.

**Piece 2 of 2: Two sources of prediction error.**
When you predict a new y, two things can be off. One: our line is estimated from a sample, so the line itself wobbles around the true line (estimation error). Two: even with the perfect line, the individual point scatters around it (individual noise, size sigma). Prediction for one new point must cover BOTH. Prediction for the mean response only needs the first.
Check: Which prediction is more uncertain: the mean price of all cards at performance 200, or one specific new card at performance 200?
Answer: The one specific card. It carries both the line's wobble and its own scatter.

## Topic 2 out of 4: The error term and estimating sigma

Pieces: 1) The error term 2) Estimating sigma with s 3) Degrees of freedom n - 2.

**Piece 1 of 3: The error term.**
The error term (epsilon) is the vertical gap between a point and the TRUE line. We never see the true line, so we estimate errors with residuals, the gaps from our FITTED line. Sigma (the SD of the errors) measures the typical size of those gaps: how noisy y is around the line.
Check: Sigma is small. What does the scatterplot look like?
Answer: Points hug the line tightly. Sigma is the typical distance from points to the line.

**Piece 2 of 3: Estimating sigma with s.**
We estimate sigma using the residuals: s^2 = SSE / (n - 2), and s is the square root. s is called the residual standard error. Video cards: s = 0.4855 in log(price) units, meaning predictions of log(price) are typically off by about 0.49.
Check: SSE = 96, n = 50. What is s^2, and roughly s?
Answer: s^2 = 96 / 48 = 2. s is about 1.41.

**Piece 3 of 3: Degrees of freedom n - 2.**
We divide by n - 2, not n, because the fitted line used the data to estimate TWO things: the intercept and the slope. Two pieces of information are spent, so df = n - 2 for anything about a fitted line: s, tests on the slope, and intervals from the line. Compare Chapter 2: one mean spent one estimate, df = n - 1.
Check: A regression uses n = 125 cards. df for the slope test?
Answer: 123. n - 2.

## Topic 3 out of 4: Inference on the estimates (the sampling distribution of b1)

Pieces: 1) b1 wobbles from sample to sample 2) The standard error of b1 3) Testing and intervals for the slope.

**Piece 1 of 3: b1 wobbles from sample to sample.**
Our slope b1 is computed from one sample. A different sample of cards would give a slightly different slope. Those slopes follow a sampling distribution: approximately Normal, centered on the TRUE slope beta1, with a spread given by SE(b1). Same story as the sample mean in Chapter 2, now for a slope.
Check: If we refit the line on a fresh sample of 125 cards, do we expect exactly b1 = 0.00753 again?
Answer: No. Close, but not exact. b1 has its own sampling wobble, measured by SE(b1).

**Piece 2 of 3: The standard error of b1.**
SE(b1) = s / sqrt(Sxx), where Sxx is the total squared spread of the x values around x-bar. Read it plainly: SE(b1) gets SMALLER when (a) residuals are small (small s), (b) n is bigger, and (c) the x values are more spread out. Spread-out x gives the line more leverage to pin the slope down, like holding a ruler at both far ends.
Check: Two datasets, same n and s. One has x values bunched together, the other spread far apart. Which gives the more precise slope?
Answer: The spread-out x. Bigger Sxx means smaller SE(b1).

**Piece 3 of 3: Testing and intervals for the slope.**
Test a claim about the true slope: t = (b1 - claimed beta1) / SE(b1), with df = n - 2. The most common claim is beta1 = 0, which says x tells us nothing about y (a flat true line). A 95% CI for the slope: b1 plus or minus t multiplier (df = n - 2) times SE(b1). If that CI excludes 0, the slope is significant at 5%, same as rejecting beta1 = 0.
Check: b1 = 0.00753, SE(b1) = 0.0006. Test beta1 = 0. What is t, roughly, and the conclusion?
Answer: t = 0.00753 / 0.0006 = about 12.6. Way beyond 2 SEs, so reject beta1 = 0. Performance really does predict log(price).

## Topic 4 out of 4: Prediction intervals

Pieces: 1) Two different interval jobs 2) Why the PI is wider 3) Intervals widen away from x-bar.

**Piece 1 of 3: Two different interval jobs.**
From a fitted line at some x0, there are two questions. Question A: where is the MEAN of y at x0? That takes a confidence interval, covering only the line's estimation wobble. Question B: where will ONE NEW observation at x0 land? That takes a prediction interval, covering estimation wobble PLUS the individual's own scatter (sigma). Chapter 2's CI vs PI, now on a line.
Check: "Give a range for the price of the next card sold with performance 200." CI or PI?
Answer: PI. One new single card.

**Piece 2 of 3: Why the PI is wider.**
The PI adds the individual noise term. In size: the mean response SE uses s times sqrt(1/n + (x0 - x-bar)^2 / Sxx). The prediction SE uses s times sqrt(1 + 1/n + (x0 - x-bar)^2 / Sxx). The extra "1 +" inside is the individual's scatter, and it is usually the biggest part. So a PI is always wider than the CI at the same x0. The video cards numbers will use s = 0.4855: even a perfect line cannot shrink the PI below roughly plus or minus 2s.
Check: At the same x0, can a PI ever be narrower than the CI for the mean?
Answer: No. The PI contains everything the CI covers, plus individual scatter on top.

**Piece 3 of 3: Intervals widen away from x-bar.**
Both intervals are narrowest at x0 = x-bar and fan out as x0 moves away. Plain reason: the line is pinned best near the center of the data, like a seesaw fixed in the middle. Far from x-bar, a small slope wobble swings the line a lot. Warning that pairs with this: predicting far outside the data's x range is extrapolation, and the line may not hold there at all.
Check: Predictions at performance 180 (inside the data, near the middle) vs performance 900 (far outside the data). Which interval is wider, and what is the extra danger at 900?
Answer: The 900 interval is much wider, and it is extrapolation: the straight line pattern may simply not continue out there.

---

# Exam traps: the short list

1. N(mean, variance): the second slot is variance. SD is its square root.
2. SD describes the values. SE describes the estimate. SE = SD / sqrt(n). SE shrinks with n; SD does not.
3. CI is for a mean (uses SE, narrow). PI is for one new value (uses full spread, wide).
4. Sample size for a target margin: solve, then round UP.
5. The standard deviation of a sample mean IS the standard error. LLN = where the mean settles. CLT = the bell shape of the wobble.
6. p-value = probability of data at least this extreme IF H0 is true. It is never the probability H0 is true. Small p: reject. p just under 0.05 still rejects.
7. Fail to reject is not proof. We never "accept" or "prove" H0.
8. Paired data: one difference per unit, then a one-sample test on the differences, df = pairs - 1.
9. Correlation: sign is direction, size is strength. r = 0 can hide a perfect curve. No r value, even 1.0, proves causation.
10. Regression line: passes through (x-bar, y-bar). b1 = r x (sY / sX). Residual = actual minus predicted.
11. R^2 = share of y variation explained = 1 - SSE / SST. High R^2 is not causation and not a dollar-sized miss; s is the typical miss size.
12. Log(y) slope: slope x 100 = approximate percent change in y per unit of x. Predict in logs, then exp back to dollars.
13. Regression df is n - 2 (intercept and slope both estimated). One-mean df is n - 1.
14. A PI is always wider than the CI for the mean at the same x. Both widen as x0 moves away from x-bar. Extrapolation is dangerous.

# Final skeleton, say it from memory

Chapter 1: supervised vs unsupervised; causal effect vs correlation and counterfactuals; R basics.
Chapter 2: the Normal mean problem; estimation from a sample; standard error and the Law of Large Numbers; confidence intervals; the Central Limit Theorem; hypothesis testing; the applications.
Chapter 3: the SLR model and correlation; least squares, the fitted line; residuals and outliers; R squared and scoring model fit; the log(price) model.
Chapter 4: prediction under SLR and the conditional distribution of Y given X; the error term and estimating sigma; inference on the estimates; prediction intervals.
