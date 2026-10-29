# 400 Course Skeleton: Principles Tree (Ch 1 to 4, Ch 4 to slide 34 only)

Sources: course topics, Ch 2 notes sheet, Ch 3 and 4 notes sheet, miss log.
Top levels are principles, not week or chapter labels. Chapter tags are kept only as small locators.
Test rule from the organizing update: walk the tree closed book. Name each top principle, then expand its branches. A branch that yields nothing is the restudy target.
Per branch: Principle / Conditions / Procedure / Failure modes. Failure modes are listed only where a source supports them.

## Principle 1: One group can be described by a centre, a spread, and a shape (Ch 1 to 2)
- Principle: A population of values is summed up by its mean (centre), its SD (spread of single values), and, when it is bell shaped, the Normal model. Ch 1 also splits problems by task type in the refresher work: supervised (labeled, for example labeled emails) vs unsupervised (unlabeled clusters), per miss log.
- Conditions: Normal readings (68 and 95 percent rules, percentiles from z) rest on the bell shape in the notes. X itself needing to be normal is NOT a general condition in this course, see Principle 5.
- Procedure: Write Y ~ N(mean, SD^2), take the square root of the second slot for SD. Point prediction for one new value = mean. Distance of a value: z = (value minus mean) / SD, then read the percentile from z.
- Failure modes: Reading the second slot of N( , ) as the SD itself (miss log: N(4, 9) read as SD 9, correct SD 3). Leaning to an all-unsupervised answer on mixed task-type items (miss log: retest passed with labeled emails = supervised, unlabeled clusters = unsupervised).

## Principle 2: A sample estimates a population, and the estimate has its own spread (Ch 2)
- Principle: Parameters belong to the whole group and are usually unknown. Statistics come from the sample and guess them. The sampling distribution of the mean is centred on the population mean, and its spread is SE, not SD.
- Conditions: SE shrinks as N grows. Noisy data (big SD) makes the sample mean less precise, per notes.
- Procedure: Sample mean: add values, divide by N. Sample SD: divide by N minus 1. SE = s / sqrt(N). Law of Large Numbers: as N grows, the sample mean gets close to the true mean. CLT: sample means pile up bell shaped around the true mean even when raw data are not normal.
- Failure modes: Using SD where SE belongs (miss log: chose 28 as the typical distance of a sample mean, correct 28 / 7 = 4). Naming the sample SD as the centre of the sampling distribution (miss log: correct centre is the population mean). Swapping CLT and LLN (miss log: missed, then retest passed).

## Principle 3: Bracket the truth, or test a claim, with the same gap-over-SE machine (Ch 2)
- Principle: A confidence interval brackets the true mean, sample mean plus or minus multiplier x SE. A hypothesis test measures the gap between the sample mean and the claimed mean in SE units, reads p, and decides at 0.05.
- Conditions: Small sample (N of 30 or less) in a CI: use a t number with df = N minus 1 instead of 1.96. One-tailed vs two-tailed is set by the question's wording before any computing.
- Procedure: CI: pick multiplier (1.96 at 95 percent, 2.58 at 99 percent, t for small N). Test: write H0 (the claim) and H1, compute t = (sample mean minus claimed mean) / SE, read p (how often a gap this big appears by chance if the claim were true), reject if p is below 0.05.
- Failure modes: Building a CI for one new value, or a prediction interval for the mean (the two intervals answer different questions, and the prediction interval is wider). Reading p as the chance the claim is true, or fail to reject as proof the claim is true (notes say both are wrong). Repeat miss in the log: small p (0.04, 0.012) answered fail to reject. Rule: small p means reject.

## Principle 4: A line predicts Y from X, and its quality is judged by what is left over (Ch 3)
- Principle: Y-hat = b0 + b1 x X is a guessing rule. Least squares picks the line that makes the sum of squared residuals smallest. Every Y splits as Y = Y-hat + e: explained part plus unexplained part. SST = SSR + SSE splits the spread the same way, and R squared is the explained share.
- Conditions: The line is a straight-line model. Slope and correlation are linked by b1 = r x (sY / sX): r is unit-free, b1 carries units. When Y is a log, the slope reads as a percent and predictions must be changed back with exp().
- Procedure: Fit: b1 = sXY / sX squared, b0 = Y-bar minus b1 x X-bar. Check: the line passes through (X-bar, Y-bar), residuals average to zero and show no leftover straight-line pattern with X. Score: R squared = SSR / SST = 1 minus SSE / SST. Inspect: residual sign (plus is above the line), residual plot shape, outliers and influence.
- Failure modes: One wild point can pull the line (notes). Reading R squared as causation, as percent of correct predictions, or as a promise for new data (notes, all three wrong). Setting r equal to R squared (miss log). Picking the larger SSE model as the better fit (miss log: smaller SSE, same SST, means higher R squared). Matching a computed residual to the wrong above/below wording (miss log: anchor is actual on top gives plus). Calling a far-x point an outlier or influential on distance alone: an outlier is a Y unusual for its X, and influence needs far x AND a big residual (notes and miss log).

## Principle 5: Under SLR, separate the true line from the fitted line before inferring or predicting (Ch 4, slides 1 to 34 only)
- Scope note: miss log, Oct 27. For the Oct 27 midterm, Ch 4 is tested only up to slide 34 of the handout (of 47). Everything in this branch stays inside that scope.
- Principle: Behind the data sits a true line, Y = beta0 + beta1 x X + epsilon. The fitted b0 and b1 are one sample's guesses. Errors come from the true line and cannot be computed. Residuals come from the fitted line and can. A prediction is wrong for exactly two reasons: the new point's own error term, and sampling error in b0 and b1.
- Conditions: At a fixed x, Y is N(beta0 + beta1 x x, sigma squared). Only the error term carries the Normal assumption: X itself does not need to be normal, per notes. Sigma is estimated by s, with s squared = SSE / (N minus 2), the minus 2 paying for the two guesses b0 and b1.
- Procedure: Inference on the slope: SE(b1) = sigma / sqrt(Sxx), then gap divided by SE, p-value, 0.05 cutoff, as in Principle 3. Prediction at Xf: Y-hat f plus or minus t star x s x sqrt(1 + 1/N + (Xf minus X-bar) squared / Sxx) for one new Y. Drop the own-error piece (the 1) for the mean response, which is the narrower confidence interval.
- Failure modes: Mixing up error and residual (notes keep them apart on purpose). Dividing SSE by N for s squared, which makes s too small every time (notes). Expecting a bigger sample to make predictions exact: it shrinks only the sampling error reason, the own-error reason never goes away (notes). Trusting a slope from a narrow range of X: small Sxx makes SE(b1) big and the slope guess shaky even with clean data (notes). Asking the interval question wrong: one new value or the mean must be answered first, because the prediction interval widens as Xf moves away from X-bar (notes).
