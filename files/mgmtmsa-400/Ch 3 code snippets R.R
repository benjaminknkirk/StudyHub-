#####################################
# code snippets for Chapter 3
#####################################

vc <- read.csv("Data/videocards.csv")
vc$performance <- vc$g3d_mark / 100
unique(vc$category_as_reported)       # explore the reported categories
nrow(vc)                            # all 125 video cards are used

plot(vc$performance, vc$price_usd, pch = 20, col = "#0072B2",
     xlab = "Performance score", ylab = "Price (USD)")
#
# OR: use "with" to evaluate the plot expression in the scope of vc
#
with(vc, plot(performance, price_usd, pch = 20, col = "#0072B2",
              xlab = "Performance score", ylab = "Price (USD)"))
#
# Inspect individual observations; keep all observations in the analysis.
# Click points and finish with the plotting device's stop control.
#
if (interactive()) {
  print(vc[identify(vc$performance, vc$price_usd, labels = vc$model), ])
}
vc[vc$gpu_id == 4922, ]             # the L4 is included

plot(vc$performance, log(vc$price_usd),
     xlab = "Performance score", ylab = "log(Price in USD)",
     pch = 20, col = "#0072B2")
#
# Fit a line to the data and add it to the plot.
#
outlm <- lm(log(price_usd) ~ performance, data = vc)
summary(outlm)
abline(outlm$coef, lwd = 2, col = "indianred")
#
# Predict at performance = 200.
# The fitted response is log(price); exponentiating gives a price point
# prediction, not in general the conditional mean price in USD.
#
log_prediction <- predict(outlm, newdata = data.frame(performance = 200))
log_prediction
price_prediction <- exp(log_prediction)
price_prediction
#
# Residuals are uncorrelated with X for OLS with an intercept.
#
mean(outlm$res)
cor(outlm$res, vc$performance)
plot(vc$performance, outlm$res,
     xlab = "Performance score", ylab = "Residuals",
     pch = 20, col = "#0072B2", main = "Residuals vs. Performance")
#
# Illustration of a stochastic search for the best linear model.
#
set.seed(400)
nguess <- 10000
b1Guess <- runif(nguess, min = 0, max = 0.015)

modelScore <- function(b1Guess, x, y) {
  b0 <- mean(y) - b1Guess * mean(x)
  e <- y - b0 - b1Guess * x
  sum(e**2)
}

SSE <- apply(matrix(b1Guess, ncol = 1), 1, modelScore, x = vc$performance, y = log(vc$price_usd))
# Note: do not use X as an argument since "apply" has an X argument!
plot(b1Guess, SSE, pch = 20, col = "#0072B2",
     xlab = "Slope guess", ylab = "Sum of squared residuals")
#
# Show a poor-fitting line that goes through the point of means.
#
b1bad <- -0.004
b0bad <- mean(log(vc$price_usd)) - b1bad * mean(vc$performance)
with(vc, plot(performance, log(price_usd), xlab = "Performance score",
              ylab = "log(Price in USD)", pch = 20, col = "#0072B2"))
abline(outlm$coef, lwd = 2, col = "indianred")
abline(c(b0bad, b1bad), lwd = 2, col = "green", lty = 2)
points(mean(vc$performance), mean(log(vc$price_usd)),
       pch = 20, col = "green", cex = 2)
#
# Show ANOVA.
#
anova(outlm)
