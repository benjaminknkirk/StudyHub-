# 400 Template Cards

Sources: Ch 2 notes sheet, Ch 3 and 4 notes sheet (both Oct 24), miss log.
Format per card: Name / Trigger pattern / Slots / Canonical example / Near miss where it does NOT apply.
Ch 4 scope: slides 1 to 34 only, per miss log (Oct 27).
Review rule: cover the Slots and reconstruct them. That is the practice, not rereading the card.

## Card 1: Normal mean problem
- Name: Normal mean problem (one population, bell curve).
- Trigger pattern: One group described as a bell, a mean and an SD given, question about a single value, a range for values, or how far a value sits from the middle.
- Slots: Notation Y ~ N(mean, SD^2), second slot is variance, SD is its square root. One SD each way holds about 68 percent, two SDs about 95 percent. Point prediction for one new value = mean. Percentile from z: 0 gives 50th, +1 gives 84th, +2 gives about 97.5th, minus 1 gives 16th, minus 2 gives about 2.5th.
- Canonical example: N(100, 10^2). Middle 100, spread 10. One spread each way: 90 to 110, about 68 percent. Two spreads: 80 to 120, about 95 percent.
- Near miss where it does NOT apply: The question is about a sample MEAN, not a single value. Then the spread is SE, not SD (Card 2). Miss log trap inside this card: N(4, 9) has SD 3, not 9.

## Card 2: Estimation and standard error
- Name: Estimation from a sample (parameter, statistic, SE).
- Trigger pattern: A sample is measured and the question asks how steady the estimate is, or how far sample means typically sit from the true mean.
- Slots: Parameter = true number for the whole group, usually unknown. Statistic = number worked out from the sample. Sample mean: add all values, divide by N. Sample SD: divide by N minus 1. SE = s / sqrt(N). Bigger N, smaller SE. Sampling distribution centre = population mean, its spread = SE.
- Canonical example: From the miss log retest, SD 28, N 49. SE = 28 / 7 = 4. The sample mean typically sits about 4 from the centre, not 28.
- Near miss where it does NOT apply: A question about one individual value. That uses SD, not SE. Miss log trap: picking 28 as the typical distance of a sample mean.

## Card 3: Confidence intervals
- Name: Confidence interval for the true mean.
- Trigger pattern: "Give a range for the true mean" or "the claim sits inside or outside the interval".
- Slots: Build: sample mean plus or minus multiplier x SE. Multiplier 1.96 at 95 percent, 2.58 at 99 percent. Small sample, N of 30 or less: use a t number, df = N minus 1. Meaning: 95 percent of intervals built this way catch the true mean.
- Canonical example: N = 5, df = 4, t number 2.776, so the CI gets wider. Second worked check from class: Netflix CI 0.266 to 0.948, claim 0.5 sits inside it, matching do not reject.
- Near miss where it does NOT apply: The question asks for a range for ONE NEW VALUE. That is a prediction interval, built with SD in Ch 2 form, and it is wider because it must cover one value's own spread too.

## Card 4: Central Limit Theorem
- Name: Central Limit Theorem (CLT).
- Trigger pattern: "What does the distribution of sample means look like?" or a CI for a mean built from a big sample of non-normal raw data.
- Slots: Take many samples, work out each sample mean. Those means pile up in a bell shape. Centre: the true mean. Spread: SE. Raw data do not need to be normal for the means to act normal.
- Canonical example: The notes' use case: CLT is why CIs for means can be built with big samples even when raw data are not bell shaped. Worked numbers: not in held notes, verify if a numeric CLT example is needed.
- Near miss where it does NOT apply: Two places. Small samples from very non-normal data: be careful, per notes. And the Law of Large Numbers question: LLN says one growing sample's mean gets close to the true mean. That is closing in, not a bell shape. Miss log: this pair was missed Oct 25, clean retest pass Oct 26.

## Card 5: Hypothesis testing
- Name: Hypothesis testing (checking a claim about a mean).
- Trigger pattern: A claim about a mean is stated and the question asks whether the sample proves it wrong, or gives a p-value and asks for the decision.
- Slots: Step 1: H0 is the claim, H1 is the other side. Two-tailed: not equal, either side counts. One-tailed: above or below only. Step 2: gap in SE units, t = (sample mean minus claimed mean) / SE. Step 3: p = how often a gap this big or bigger would appear by chance IF the claim were true. Step 4: p below 0.05 reject, p at or above 0.05 do not reject. Not rejecting does not prove the claim. p is not the chance the claim is true.
- Canonical example: Netflix two-tailed, claim 0.5 hours. Sample mean 0.607, SE 0.174, N 4000, t = 0.617, p = 0.537. Do not reject. One-tailed version, above 0.25: t = 2.055, p = 0.020, reject.
- Near miss where it does NOT apply: The question asks for a range, not a decision. That is Card 3. Miss log trap inside this card, REPEAT miss: p = 0.04 and p = 0.012 both answered fail to reject. Small p means reject, no matter how the option words it.

## Card 6: Least squares
- Name: Least squares line (fitting Y from X).
- Trigger pattern: Paired X and Y data, question asks to predict Y for a given X, or how the line was chosen, or to interpret b0 or b1.
- Slots: Line: Y-hat = b0 + b1 x X. b0 is the guess when X is 0. b1 is how much the guess moves when X goes up by 1. Choice rule: b0 and b1 make the sum of e squared as small as possible. Answers: b1 = sXY / sX squared, b0 = Y-bar minus b1 x X-bar. Free facts: the line passes through (X-bar, Y-bar), and residuals average to zero with no leftover straight-line pattern with X.
- Canonical example: Video cards fitted line, log(price)-hat = 4.897 + 0.00753 x performance. At performance 200: 6.403 in log price, change back, exp(6.403) is about $604.
- Near miss where it does NOT apply: The residual plot bends (U shape). Miss log: a U-shaped residual plot means the relationship bends, so a straight line is the wrong shape for that data, however small the squared gaps are.

## Card 7: R squared
- Name: R squared (goodness of fit).
- Trigger pattern: "How much of the variation in Y does the model explain?" or comparing two models on the same data by fit.
- Slots: Split: SST = SSR + SSE. R squared = SSR / SST, same as 1 minus SSE / SST. In simple regression only, R squared also equals r squared. Meaning sentence: X explains about (R squared x 100) percent of the variation in Y.
- Canonical example: Video cards, R squared = 0.664. Performance explains about 66.4 percent of the variation in log price. Miss log worked check: SSR 350, SST 500, R squared = 0.70.
- Near miss where it does NOT apply: Any "does X cause Y" or "will it predict new cases well" question. R squared says nothing about causation, does not mean the model is right that percent of the time, and a high R squared does not promise good predictions on new data. Miss log traps: r is not R squared (r = sqrt(R squared) with the slope's sign), and the model with the larger SSE has the lower R squared when SST is the same.

## Card 8: Residuals and outliers
- Name: Residuals, outliers, influence.
- Trigger pattern: A fitted line exists and the question asks about a specific point: its gap, its sign wording, whether it is an outlier, or whether it would move the line.
- Slots: Residual e = Y minus Y-hat. Plus: point above the line, line under-predicted. Minus: point below the line, line over-predicted. Residuals average to zero. Outlier: a Y unusual FOR ITS X, next to points with similar X. Influence: far x (leverage) AND a big residual, both together. Outlier rule: investigate first (data error, or a different kind of product?), remove only with a reason.
- Canonical example: RTX 3090 residual: 7.63 minus 6.89 = plus 0.74. Point above the line, something the line does not see pushed its price up.
- Near miss where it does NOT apply: A point far out on X with no neighbours and a Y in line with the pattern. Not automatically an outlier, and with no big residual it is not influence either. Miss log traps: plus residual matched to "below the line" wording (anchor: actual on top gives plus), and a normal-x huge residual picked as influence over a far-x huge residual.

## Card 9: Prediction and prediction intervals in SLR (Ch 4, slides 1 to 34 only)
- Name: Prediction under SLR, error term, prediction interval.
- Trigger pattern: A regression line is given and the question asks for one NEW Y at a chosen X, how wrong a prediction can be, or the difference between the true line and the fitted line.
- Slots: True line: Y = beta0 + beta1 x X + epsilon. beta values are true and never seen, b values are sample guesses for them. Error = real Y minus TRUE line, cannot be computed. Residual = real Y minus FITTED line, can be computed. At a fixed x, Y is N(beta0 + beta1 x x, sigma squared), and X itself does not need to be normal. Sigma estimate: s squared = SSE / (N minus 2), minus 2 because b0 and b1 cost 2 degrees of freedom. SE(b1) = sigma / sqrt(Sxx), bigger when sigma is big, smaller when X values spread out or N grows. Testing the slope: gap divided by SE, p-value, 0.05 cutoff, same as Card 5.
- Canonical example: Prediction interval formula from the notes: Y-hat f plus or minus t star x s x sqrt(1 + 1/N + (Xf minus X-bar) squared / Sxx). The 1 is the new value's own error, 1/N is doubt about the line's height, the last piece is doubt about the slope, stretched as Xf moves away from X-bar, so the interval widens away from the middle. Handout line at performance 200: centre about $604, 95 percent prediction interval roughly $230 to $1,587.
- Near miss where it does NOT apply: The question asks for the MEAN Y at that X. That is a confidence interval for the mean response: narrower, no own-error piece (no 1 inside the root). First question on any such problem, from the notes: one new value, or the mean? Also fixed in this card: a prediction is wrong for exactly two reasons, the new point's own error term (never goes away) and sampling error in b0 and b1 (shrinks with a bigger sample). Predictions never become exact.
