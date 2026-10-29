# =============================================================================
# MSBA 400 - Chapter 4 Code Snippets
# =============================================================================

# Run this script from the Chapter 4 folder.
# Required packages: pandas, numpy, matplotlib, scipy, and statsmodels.

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
import statsmodels.formula.api as smf


# =============================================================================
# Return to the video card data: scatter plot and fitted line
# =============================================================================

vc = pd.read_csv("../../Data/videocards.csv")
vc["performance"] = vc["g3d_mark"] / 100
vc["log_price"] = np.log(vc["price_usd"])
out_vc = smf.ols("log_price ~ performance", data=vc).fit()
print(out_vc.summary())

plt.scatter(vc["performance"], vc["log_price"], color="#0072B2", s=18)
vc_sorted = vc.sort_values("performance")
plt.plot(vc_sorted["performance"], out_vc.predict(vc_sorted),
         color="#D62728", linewidth=2)
plt.xlabel("Performance score")
plt.ylabel("Log listed price")
plt.show()


# =============================================================================
# Estimate the error standard deviation, sigma
# =============================================================================

N = int(out_vc.nobs)
SSE = np.sum(out_vc.resid**2)
s = np.sqrt(SSE / (N - 2))
print(f"Residual standard error: {s:.4f} log-price units")


# =============================================================================
# Simulate the sampling distribution of b_1
# Hold the 125 observed performance scores fixed and generate new log prices.
# =============================================================================

np.random.seed(1234)
x = vc["performance"].to_numpy()
beta0 = 6
beta1 = 0.01
sigma = 0.25
nsample = 10000
bsim = np.empty(nsample)

for i in range(nsample):
    y = beta0 + beta1 * x + np.random.normal(0, sigma, size=len(x))
    simulated_data = pd.DataFrame({"x": x, "y": y})
    bsim[i] = smf.ols("y ~ x", data=simulated_data).fit().params["x"]

plt.hist(bsim, bins=40, color="#0072B2", edgecolor="white")
plt.axvline(beta1, color="#D62728", linewidth=2, linestyle="--",
            label="True slope = 0.01")
plt.xlabel("Estimated slope")
plt.ylabel("Number of repetitions")
plt.legend(frameon=False)
plt.show()

print(f"Mean simulated slope: {bsim.mean():.8f}")
print(f"SD of simulated slopes: {bsim.std(ddof=1):.8f}")
print("True standard error of the slope:",
      sigma / np.sqrt(np.sum((x - x.mean())**2)))
# R and Python use different random-number generators, so their simulated
# slopes need not be identical even when both use seed 1234.


# =============================================================================
# Return to the observed video card data: coefficient SEs and confidence intervals
# =============================================================================

coefficient_table = pd.DataFrame({
    "Estimate": out_vc.params,
    "Std. Error": out_vc.bse,
    "t value": out_vc.tvalues,
    "Two-tailed p-value": out_vc.pvalues,
})
print(coefficient_table)
print(out_vc.conf_int(alpha=0.05))

# The estimated SE replaces the unknown error SD, sigma, with s.
se_b1 = out_vc.bse["performance"]
print("Estimated standard error of the slope:", se_b1)
print("Same SE from the formula:", s / (np.sqrt(N - 1) * x.std(ddof=1)))


# =============================================================================
# Test the video card pricing target
# A 1-point higher performance score is associated with approximately
# 100 * beta_1 percent higher typical listed price.
# H0: beta_1 <= 0.01; HA: beta_1 > 0.01. Use the upper tail.
# =============================================================================

target = 0.01
b1 = out_vc.params["performance"]
t_stat = (b1 - target) / se_b1
df = int(out_vc.df_resid)
p_value = stats.t.sf(t_stat, df=df)
print(pd.Series({"slope": b1, "SE": se_b1,
                 "t": t_stat, "df": df}).round(6))
print(f"One-tailed p-value: {p_value:.7f}")
# The p-value exceeds 0.05, so we fail to reject H0.


# =============================================================================
# Predict the listed price of a video card with performance score 200
# =============================================================================

new_card = pd.DataFrame({"performance": [200]})
prediction = out_vc.get_prediction(new_card).summary_frame(alpha=0.05)
log_interval = prediction[["mean", "obs_ci_lower", "obs_ci_upper"]].copy()
log_interval.columns = ["fit", "lwr", "upr"]
print(log_interval)
print(np.exp(log_interval).round(2))
# Use obs_ci_lower and obs_ci_upper for an individual card's prediction interval.
# np.exp() converts the point prediction and endpoints to dollars.
# The transformed point prediction is the fitted conditional median price,
# not the conditional mean price in dollars.


# =============================================================================
# Additional lecture example: R-squared and prediction accuracy
# =============================================================================

# The same 15 observations as housepr in the DataAnalytics R package.
housepr = pd.DataFrame({
    "Size": [0.8000000119, 0.8999999762, 1, 2, 1.5,
             1.100000024, 3.200000048, 2.700000048, 1.399999976,
             1.799999952, 3.5, 1.600000024, 1.399999976, 2.5,
             2.400000095],
    "Price": [70, 83, 74, 100, 85, 93, 161, 124, 89, 95,
              172, 114, 58, 111, 138],
})
out_house = smf.ols("Price ~ Size", data=housepr).fit()
print(out_house.summary())

plt.scatter(housepr["Size"], housepr["Price"], color="#0072B2", s=18)
house_sorted = housepr.sort_values("Size")
plt.plot(house_sorted["Size"], out_house.predict(house_sorted),
         color="#D62728", linewidth=2)
plt.xlabel("Size (1,000 sq. ft.)")
plt.ylabel("Price (thousands of dollars)")
plt.show()

average_house = pd.DataFrame({"Size": [housepr["Size"].mean()]})
house_prediction = out_house.get_prediction(average_house).summary_frame(alpha=0.05)
house_pi = house_prediction[["mean", "obs_ci_lower", "obs_ci_upper"]].copy() * 1000
house_pi.columns = ["fit", "lwr", "upr"]
print(f"R-squared: {out_house.rsquared:.2f}")
print(f"Residual standard error (dollars): {np.sqrt(out_house.mse_resid) * 1000:.0f}")
print(f"Average price (dollars): {housepr['Price'].mean() * 1000:.0f}")
print(house_pi.round(2))
