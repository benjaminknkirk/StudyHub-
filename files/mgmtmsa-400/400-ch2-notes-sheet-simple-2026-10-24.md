# MGMTMSA 400 Chapter 2 notes sheet, simple version
Built Sat Oct 24, 2026, from the Chapter 2 handout (Review of Statistics, Yuan).
Style matches Ben's Oct 24 request: short lines, plain words, one idea at a time.
This is a draft to hand-copy onto the allowed notes page, not a finished page.
Chapter 2 only. Chapters 3 and 4 still need their own sections after teaching.
No em dashes.

## 1. The bell curve

- Some scores form a bell shape.
- Most land near the middle.
- Few land far away.
- We write the bell like this: Y ~ N(mean, SD^2)
- First number: the middle. That is the mean.
- Second number, before the square: the spread. That is the SD.
- Example: N(100, 10^2). Middle is 100. Spread is 10.
- One spread each way: 90 to 110. About 68% land there.
- Two spreads each way: 80 to 120. About 95% land there.

## 2. One best guess

- Question: guess the next single value. One guess only.
- Best guess: the middle. The mean.
- Name for this: point prediction.
- Point prediction = mean. Always.

## 3. A range for one new value

- One guess is risky. So we give a range.
- Name: prediction interval. It is for ONE new value.
- 95% range: mean - 1.96 x SD, to mean + 1.96 x SD.
- 99% range: use 2.58 instead of 1.96.
- Example: mean 100, SD 10. 95% range is 80.4 to 119.6.
- Plain meaning: the next value lands in this range about 95% of the time.

## 4. Z-score: how far from the middle

- A z-score is just a distance.
- It counts spreads, not points.
- Steps: value - mean, then divide by SD.
- Example: mean 80, SD 4, value 86. (86 - 80) / 4 = 1.5.
- So 86 is 1.5 spreads above the middle.
- Plus means above. Minus means below.
- A z-score does NOT come from the 95% rule.
- The 95% rule is the other move: we pick 1.96 spreads to catch 95%.

## 5. Percentile: how many are below

- Percentile asks: what share of values sit below this one?
- z = 0: 50th percentile. Half below.
- z = +1: 84th percentile. 84% below, 16% above.
- z = +2: about 97.5th percentile. Only about 2.5% above.
- z = -1: 16th percentile.
- z = -2: about 2.5th percentile.

## 6. Population and sample

- Population: the whole group we care about.
- Sample: the small part we actually measure.
- Parameter: the true number for the whole group. Usually unknown.
- Statistic: the number we work out from the sample.
- We use the sample number to guess the true number.
- Sample mean is written Y-bar. Sample SD is written s.

## 7. Sample mean and sample SD

- Sample mean: add all values, divide by N. N is how many we measured.
- Sample SD: typical distance of the values from the sample mean.
- For the sample SD formula, divide by N - 1, not N.
- Big sample: the sample mean gets close to the true mean.
- Name: Law of Large Numbers.
- Noisy data (big SD): the sample mean is less precise.

## 8. SD versus SE: the trap

- SD: how spread out single values are.
- SE: how spread out sample means are, if we took many samples.
- SE = SD / square root of N.
- Use the sample SD in that formula: SE = s / sqrt(N).
- Bigger N means smaller SE. The guess gets steadier.
- Exam trap: a question about one value uses SD.
- A question about the mean uses SE.

## 9. Confidence interval: a range for the true mean

- Name short form: CI.
- It is a range for the true mean. Not for one new value.
- Build it: sample mean - multiplier x SE, to sample mean + multiplier x SE.
- 95% CI: multiplier is 1.96.
- 99% CI: multiplier is 2.58.
- Plain meaning: 95% of intervals built this way catch the true mean.
- Small sample (N of 30 or less): use a t number, not 1.96.
- Degrees of freedom: df = N - 1.
- Example from class: N = 5, df = 4, t number is 2.776. The CI gets wider.
- CI versus prediction interval: CI is about the mean. Prediction interval is about one new value.
- The prediction interval is wider. It has to cover one value's own spread too.

## 10. Central Limit Theorem: CLT

- Plain idea: averages act normal, even when the raw data do not.
- Take many samples. Work out each sample mean.
- Those means pile up in a bell shape, centered on the true mean.
- This is why we can build CIs for means with big samples.
- Small samples from very non-normal data: be careful.

## 11. Hypothesis testing: checking a claim

- Step 1: write the claim as the null. Name: H0.
- Write the other side as the alternative. Name: H1.
- Two-tailed: the true mean is not equal to the claim. Either side counts.
- One-tailed: the true mean is above the claim, or below it. One side only.
- Step 2: measure the gap. t = (sample mean - claimed mean) / SE.
- The t number says: how many SEs away from the claim is our sample mean?
- Step 3: the p-value.
- Plain meaning of p: IF the claim were true, how often would we see a gap this big, or bigger, just by chance?
- Small p: this would be rare if the claim were true.
- Step 4: decide. Cutoff is usually 0.05.
- p below 0.05: reject the claim.
- p at or above 0.05: not enough proof. Do not reject.
- Not rejecting does NOT prove the claim is true.
- p is NOT the chance the claim is true.

## 12. The two class examples

- Netflix, two-tailed: claim is a mean gain of 0.5 hours.
- Sample mean gain: 0.607. SE: 0.174. N: 4000.
- t = 0.617. p = 0.537. That is above 0.05.
- Result: do not reject. Not enough proof the gain differs from 0.5.
- The 95% CI was 0.266 to 0.948. The claim 0.5 sits inside it. Same story.
- Netflix, one-tailed: is the gain above 0.25?
- t = 2.055. p = 0.020. That is below 0.05.
- Result: reject. There is proof the gain is above 0.25.
- Vanguard funds: SD describes one month's returns moving around.
- SE describes the mean return estimate moving around.
- Two funds can have different sample means and still not be proven different, if their CIs overlap a lot.

## Space left on purpose

- Add Chapter 3 here after teaching: least squares line, R squared.
- Add Chapter 4 here after teaching: prediction in regression, CI versus prediction interval there.
- After Sunday's simulation, swap in the exact traps from the miss log.
