## Question 3(b)

Using the total trip fare computed in part (a), total fare = 2.30 + (base fare − 2.30) × multiplier, I estimated a simple linear regression of the logged total trip fare on the estimated pickup time (eta, in minutes, not transformed), using all 650,233 sessions:

log(total fare) predicted = 2.1836 + 0.0469 × eta

From the regression output, the estimates and their standard errors are:

- Intercept: 2.1836, standard error 0.0016
- Slope on eta: 0.0469, standard error 0.00035

The estimated slope is positive: sessions where riders were shown a longer estimated pickup time tend to have higher total trip fares. With this very large sample the slope is estimated extremely precisely (t = 132.77), so the standard errors are tiny. The regression output is below.

```
Call:
lm(formula = log(total_fare) ~ eta, data = dest)

Coefficients:
              Estimate Std. Error t value Pr(>|t|)
(Intercept)   2.183569   0.001621  1346.6   < 2e-16
eta           0.046909   0.000353   132.8   < 2e-16

Residual standard error: 0.5829 on 650231 degrees of freedom
Multiple R-squared: 0.02639
```
