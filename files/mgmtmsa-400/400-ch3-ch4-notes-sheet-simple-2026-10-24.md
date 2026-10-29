# MGMTMSA 400 Chapters 3 and 4 notes sheet, simple version
Built Sat Oct 24, 2026, from the held Module 3 and Module 4 handouts and overviews (Yuan).
Style matches Ben's Oct 24 request: short lines, plain words, one idea at a time, worked example first, formal term after the plain idea lands.
This is a draft to hand-copy onto the allowed notes page, not a finished page.
It continues the Chapter 2 notes sheet (400-ch2-notes-sheet-simple-2026-10-24.md), which ends by leaving space for these two chapters.
No em dashes.

## Chapter 3: Introduction to Regression

Module 3 key topics, in the overview's own words: Conditional Prediction, Linear Fitting and Prediction, Model Fit and Least Squares, Intuition behind Least Squares Solutions, A Goodness of Fit Measure: R squared.

### 1. Predict one thing from another

- Worked example first.
- 125 video cards. Each card has a performance score and a price.
- Question: a new card has performance 200. What price fits?
- Plain idea: use what we know (performance) to guess what we do not (price).
- Names: X is the thing we know. Y is the thing we guess.
- X is called the predictor. Y is called the response.
- The guess for Y is written Y-hat. There is no X-hat. X is given.

### 2. The line is the guessing rule

- The rule is a straight line: Y-hat = b0 + b1 times X.
- b0 is called the intercept. It is the guess when X is 0.
- b1 is called the slope. It is how much the guess moves when X goes up by 1.
- Worked example, the fitted video card line from class:
- log(price)-hat = 4.897 + 0.00753 times performance.
- At performance 200: 4.897 + 0.00753 times 200 = 6.403.
- That 6.403 is a log price. Change it back: exp(6.403) is about $604.
- Trap: the answer in dollars needs that change-back step. The line gives log price first.

### 3. The slope in log-Y means percent

- In that line, Y is log(price), not price.
- Slope 0.00753 means: performance up by 1, predicted log price up by 0.00753.
- In plain money words: about 0.75 percent higher price.
- It is NOT plus $0.00753. It is NOT plus $0.75.
- Rule: log-Y slope, read it as a percent. Multiply the slope by 100.

### 4. Fitted value and residual

- For a card already in the data, the line gives a fitted value. That is Y-hat for that card.
- The card also has a real Y.
- The gap is called the residual: e = Y minus Y-hat.
- Worked example from the handout: RTX 3090 residual = 7.63 minus 6.89 = plus 0.74.
- Plus residual: the point sits above the line. Something the line does not see pushed its price up.
- Minus residual: the point sits below the line.
- Every Y splits in two: Y = Y-hat + e. The explained part plus the unexplained part.

### 5. Least squares: how the line is picked

- Many lines could be drawn. One is picked.
- Plain rule: pick the line that makes the residuals small, squared.
- Name: least squares. It chooses b0 and b1 to make the sum of e squared as small as possible.
- Why squared: plus and minus gaps cannot cancel out, and big gaps count extra.
- Cost of that choice: one wild point can pull the line. That is why outliers matter here.
- The answers: b1 = sXY divided by sX squared. b0 = Y-bar minus b1 times X-bar.
- Two free facts that come with those answers:
- Fact 1: the line passes through (X-bar, Y-bar), the average X and the average Y.
- Fact 2: the residuals average to zero and have no leftover straight-line pattern with X.

### 6. Slope is not correlation

- Correlation, written r, is unit-free. It only says direction and strength of the straight-line link.
- Slope carries units: units of Y per unit of X.
- Bridge formula: b1 = r times (sY divided by sX).
- Worked check: r = 0.8, sY = 2, sX = 4. Then b1 = 0.8 times (2 divided by 4) = 0.4.
- So the slope is 0.4, not 0.8. The sY over sX part converts the units.

### 7. R squared: how much of the spread the line explains

- Total spread in Y has a name: SST.
- It splits in two: SST = SSR + SSE.
- SSR is the part the line explains. SSE is the part left in the residuals.
- R squared = SSR divided by SST. Same thing: 1 minus SSE divided by SST.
- Video cards: R squared = 0.664.
- Plain meaning: performance explains about 66.4 percent of the variation in log price.
- In simple regression only, R squared also equals r squared.
- Three things R squared does NOT say:
- It does NOT mean the model is right 66 percent of the time.
- A high R squared does NOT promise good predictions on new cards.
- R squared says nothing about causation. X explaining Y is not X causing Y.

### 8. Outlier, in this chapter's words

- An outlier is a Y that is unusual FOR ITS X, next to points with similar X.
- A point far out on X, with no neighbours, is not automatically an outlier.
- Rule from class: investigate first. Data error, or a different kind of product?
- Remove a point only with a reason. Never just because it is far away.

## Chapter 4: Estimation, Testing, and Prediction in SLR

Module 4 key topics, in the overview's own words: Prediction under the simple linear regression model, The error term and the conditional distribution of Y on X, Statistical inference on estimates, Construction of prediction intervals.

### 1. The true line and the error term

- Worked picture first.
- Behind the data there is a true line: Y = beta0 + beta1 times X + epsilon.
- beta0 and beta1 are the true numbers. We never see them.
- epsilon is called the error term. It is the part of Y the true line cannot explain.
- Our fitted b0 and b1 are guesses for beta0 and beta1, built from one sample.
- Error versus residual, keep them apart:
- Error: real Y minus the TRUE line. Cannot be computed, because the true line is unknown.
- Residual: real Y minus the FITTED line. Can be computed. That is the e from Chapter 3.

### 2. Y at one fixed X

- Fix X at one value, call it x.
- Then Y at that x is a bell curve: Y given X = x is N(beta0 + beta1 times x, sigma squared).
- Centre: on the true line. Spread: sigma, the SD of the error term.
- X itself does NOT need to be normal. Only the error term carries that assumption.
- Knowing X shrinks the spread. That leftover spread, sigma, is smaller than the spread of Y overall.

### 3. Sigma and its estimate, s

- Sigma is how far single Y values typically sit from the true line.
- We estimate it from the residuals. That estimate is called s.
- Formula: s squared = SSE divided by (N minus 2).
- Why minus 2: we spent 2 guesses, b0 and b1, to build the residuals. That costs 2 degrees of freedom.
- Dividing by N instead would make s too small on purpose, every time.
- Video cards: residual SE = 0.4855, N = 125. That 0.4855 is s for the log price line.

### 4. A prediction is wrong for exactly two reasons

- Reason 1: the new card has its own error term. Even a perfect line cannot remove it.
- Reason 2: our line is only a guess. b0 and b1 differ a bit from beta0 and beta1.
- Name for reason 2: sampling error.
- A bigger sample shrinks reason 2 only. Reason 1 never goes away.
- So predictions never become exact, no matter how much data we collect.

### 5. Inference on the slope estimate

- b1 wobbles from sample to sample, like a sample mean does.
- Its bell curve is centred on the true beta1. On average, b1 aims at the truth.
- Its spread has a name: SE(b1) = sigma divided by the square root of Sxx.
- Sxx is the total squared distance of the X values from X-bar.
- SE(b1) gets bigger when sigma is big (noisy Y).
- SE(b1) gets smaller when the X values are spread out, or N is bigger.
- Trap: a narrow range of X makes the slope guess shaky, even with clean data.
- Testing the slope then works like Chapter 2 testing: gap divided by SE, then a p-value, then the 0.05 cutoff.

### 6. Prediction interval in regression

- For one NEW Y at a chosen X, call it Xf, the interval is:
- Y-hat f, plus or minus, t star times s times the square root of (1 + 1 over N + (Xf minus X-bar) squared over Sxx).
- The three pieces inside the root, in plain words:
- The 1: the new value's own error. This is reason 1 above.
- The 1 over N: doubt about the height of the line.
- The last piece: doubt about the slope, stretched by how far Xf is from X-bar.
- So the interval gets WIDER as Xf moves away from the middle of the X values.
- Worked example from the handout line: at performance 200 the centre is about $604, and the 95 percent prediction interval runs roughly $230 to $1,587. Wide, because both reasons are large here.
- Prediction interval versus confidence interval, the Chapter 2 trap in new clothes:
- Confidence interval: a range for the MEAN Y at that X. Narrower. No own-error piece.
- Prediction interval: a range for ONE new Y at that X. Wider. It must include the own-error piece.
- First question on any such problem: one new value, or the mean? Pick the interval after answering that.

## Space left on purpose

- After the timed practice, swap in the exact traps from the miss log.
- The two quiz misses from Sat Oct 24 belong on the final page: the second slot in N( , ) is the variance, take the square root for SD; and the sampling distribution is centred on the population mean, not on the sample SD.
