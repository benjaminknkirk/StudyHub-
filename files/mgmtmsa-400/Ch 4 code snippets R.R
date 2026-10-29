#################################
# Chapter 4 Code Snippets
#################################

# Run this script from the Chapter 4 folder.
# The main example uses base R; the final house-price example uses DataAnalytics.


# Return to the video card data: scatter plot and fitted line

vc <- read.csv("../../Data/videocards.csv")
vc$performance <- vc$g3d_mark / 100
out_vc <- lm(log(price_usd) ~ performance, data = vc)
print(summary(out_vc))

plot(vc$performance, log(vc$price_usd), pch = 19, col = "#0072B2", xlab = "Performance score", ylab = "Log listed price")
abline(out_vc, col = "#D62728", lwd = 2)


# Estimate the error standard deviation, sigma

N <- nobs(out_vc)
SSE <- sum(residuals(out_vc)^2)
s <- sqrt(SSE / (N - 2))
cat("Residual standard error:", round(s, 4), "log-price units\n")


# Simulate the sampling distribution of b_1
# Hold the 125 observed performance scores fixed and generate new log prices.

set.seed(1234)
x <- vc$performance
beta0 <- 6
beta1 <- 0.01
sigma <- 0.25
nsample <- 10000
bsim <- double(nsample)

for (i in seq_len(nsample)) {
  y <- beta0 + beta1 * x + rnorm(length(x), sd = sigma)
  bsim[i] <- coef(lm(y ~ x))[2]
}

hist(bsim, breaks = 40, col = "#0072B2", border = "white", main = "",
     xlab = expression("Estimated slope " * b[1]),
     ylab = "Number of repetitions")
abline(v = beta1, col = "#D62728", lwd = 2, lty = 2)
legend("topright", legend = expression("True slope " * beta[1] == 0.01),
       col = "#D62728", lwd = 2, lty = 2, bty = "n")

cat("Mean simulated slope:", mean(bsim), "\n")
cat("SD of simulated slopes:", sd(bsim), "\n")
cat("True standard error of the slope:",
    sigma / sqrt(sum((x - mean(x))^2)), "\n")


# Return to the observed video card data: coefficient SEs and confidence intervals

print(coef(summary(out_vc)))
print(confint(out_vc, level = 0.95))

# The estimated SE replaces the unknown error SD, sigma, with s.
se_b1 <- coef(summary(out_vc))["performance", "Std. Error"]
cat("Estimated standard error of the slope:", se_b1, "\n")
cat("Same SE from the formula:", s / (sqrt(N - 1) * sd(x)), "\n")


# Test the video card pricing target
# A 1-point higher performance score is associated with approximately
# 100 * beta_1 percent higher typical listed price.
# H0: beta_1 <= 0.01; HA: beta_1 > 0.01. Use the upper tail.

target <- 0.01
b1 <- coef(out_vc)[["performance"]]
t_stat <- (b1 - target) / se_b1
df <- df.residual(out_vc)
p_value <- pt(t_stat, df = df, lower.tail = FALSE)
print(round(c(slope = b1, SE = se_b1, t = t_stat, df = df), 6))
cat(sprintf("One-tailed p-value: %.7f\n", p_value))
# The p-value exceeds 0.05, so we fail to reject H0.


# Predict the listed price of a video card with performance score 200

log_interval <- predict(out_vc, newdata = data.frame(performance = 200), interval = "prediction", level = 0.95)
print(log_interval)
print(round(exp(log_interval), 2))
# exp() converts the point prediction and interval endpoints to dollars.
# The transformed point prediction is the fitted conditional median price,
# not the conditional mean price in dollars.


# Additional lecture example: R-squared and prediction accuracy
# Run this section if the DataAnalytics package is installed.
library("DataAnalytics")
data("housepr", package = "DataAnalytics")
out_house <- lm(Price ~ Size, data = housepr)
print(summary(out_house))

plot(housepr$Size, housepr$Price, pch = 19, col = "#0072B2", xlab = "Size (1,000 sq. ft.)", ylab = "Price (thousands of dollars)")
abline(out_house, col = "#D62728", lwd = 2)

house_pi <- predict(out_house, newdata = data.frame(Size = mean(housepr$Size)), interval = "prediction", level = 0.95) * 1000
cat("R-squared:", round(summary(out_house)$r.squared, 2), "\n")
cat("Residual standard error (dollars):", round(summary(out_house)$sigma * 1000), "\n")
cat("Average price (dollars):", round(mean(housepr$Price) * 1000), "\n")
print(round(house_pi, 2))
