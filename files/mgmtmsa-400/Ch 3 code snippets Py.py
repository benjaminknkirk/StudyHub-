# =============================================================================
# MSBA 400 Ch 3 code snippets
# =============================================================================

from pathlib import Path

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import statsmodels.formula.api as smf
import statsmodels.api as sm

# Load the local CSV. In a notebook, start in this chapter's directory or
# the course repository root; in a script, use this file's location.
code_dir = Path(__file__).resolve().parent if "__file__" in globals() else Path.cwd()
data_file = code_dir / "../../Data/videocards.csv"
if not data_file.exists():
    data_file = Path.cwd() / "Data/videocards.csv"

vc = pd.read_csv(data_file)
vc["performance"] = vc["g3d_mark"] / 100
print(vc["category_as_reported"].unique())  # explore the reported categories
print(len(vc))                             # all 125 video cards are used

plt.scatter(vc["performance"], vc["price_usd"], s=5, color="blue")
plt.xlabel("Performance score")
plt.ylabel("Price (USD)")
plt.show()

# Inspect the L4 without removing it or any other observation.
print(vc.loc[vc["gpu_id"] == 4922])

plt.scatter(vc["performance"], np.log(vc["price_usd"]), s=5, color="blue")
plt.xlabel("Performance score")
plt.ylabel("log(Price in USD)")
plt.show()
#
# Fit a line to the data and add it to a plot.
#
outlm = smf.ols("np.log(price_usd) ~ performance", data=vc).fit()
print(outlm.summary())

fig, ax = plt.subplots()
ax.scatter(vc["performance"], np.log(vc["price_usd"]), s=5, color="blue")
x_line = np.array(ax.get_xlim())
ax.plot(x_line, outlm.params["Intercept"] + outlm.params["performance"] * x_line,
        color="red", lw=2)
ax.set(xlabel="Performance score", ylabel="log(Price in USD)")
plt.show()
#
# Predict at performance = 200.
# The fitted response is log(price); exponentiating gives a price point
# prediction, not in general the conditional mean price in USD.
#
log_prediction = outlm.predict(pd.DataFrame({"performance": [200]}))
print("Predicted log(price):", log_prediction.iloc[0])
price_prediction = np.exp(log_prediction)
print("Price point prediction (USD):", price_prediction.iloc[0])
#
# Residuals are uncorrelated with X for OLS with an intercept.
#
print(np.mean(outlm.resid))
print(np.corrcoef(outlm.resid, vc["performance"]))

plt.scatter(vc["performance"], outlm.resid, s=5, color="blue")
plt.xlabel("Performance score")
plt.ylabel("Residuals")
plt.title("Residuals vs. Performance")
plt.show()
#
# Illustration of a stochastic search for the best linear model.
#
np.random.seed(400)
nguess = 10000
b1Guess = np.random.uniform(low=0, high=0.015, size=nguess)


def modelScore(b1Guess, x, y):
    b0 = np.mean(y) - b1Guess * np.mean(x)
    e = y - b0 - b1Guess * x
    return np.sum(e**2)


SSE = np.apply_along_axis(modelScore, 1, b1Guess.reshape(-1, 1),
                          x=vc["performance"], y=np.log(vc["price_usd"]))

plt.scatter(b1Guess, SSE, s=5, color="blue")
plt.xlabel("Slope guess")
plt.ylabel("Sum of squared residuals")
plt.show()
#
# Show a poor-fitting line that goes through the point of means.
#
b1bad = -0.004
b0bad = np.mean(np.log(vc["price_usd"])) - b1bad * np.mean(vc["performance"])

fig, ax = plt.subplots()
ax.scatter(vc["performance"], np.log(vc["price_usd"]), s=5, color="blue")
x_line = np.array(ax.get_xlim())
ax.plot(x_line, outlm.params["Intercept"] + outlm.params["performance"] * x_line,
        color="red", lw=2)
ax.plot(x_line, b0bad + b1bad * x_line, color="green", lw=2, ls="--")
ax.scatter(np.mean(vc["performance"]), np.mean(np.log(vc["price_usd"])),
           s=50, color="green")
ax.set(xlabel="Performance score", ylabel="log(Price in USD)")
plt.show()
#
# Show ANOVA.
#
print(sm.stats.anova_lm(outlm))
