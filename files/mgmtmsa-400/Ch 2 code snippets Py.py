# =============================================================================
# MSBA 400
# Ch 2. code snippets
# =============================================================================
# we first need to install rpy2 library to be able to load R packages
# for Anaconda:
# conda install -c r rpy2

import pandas as pd
import rpy2.robjects as robjects
from rpy2.robjects.packages import importr
import numpy as np

import matplotlib.pyplot as plt
from scipy import stats


#import utils from R to install packages
utils = importr('utils')

# select a mirror for R packages
utils.chooseCRANmirror(ind=1) # select the first mirror in the list

#install devtools
utils.install_packages('devtools')

#install DataAnalytics R package using devtools
devtools = importr('devtools')
devtools.install_bitbucket("perossichi/DataAnalytics")

#import DataAnalytics R package in python and import datasets
DataAnalytics = importr('DataAnalytics', data = True)


# ---------------------------
# Streaming Example
# ---------------------------
streaming_beta = pd.read_csv("../../Data/streaming_beta.csv")

# Compute change in Netflix hours
hours_change = streaming_beta["netflix_hours_post"] - streaming_beta["netflix_hours_pre"]

# Histogram
plt.figure(figsize=(6,4))
counts, bins, patches = plt.hist(
    hours_change, bins=30, color="skyblue", edgecolor="white"
)

mean_change = np.mean(hours_change)

# Add dashed red vertical line at the mean
plt.axvline(mean_change, color="red", linestyle="--", linewidth=2)

# Add annotation
plt.text(
    mean_change,
    max(counts) * 0.7,
    f"Mean = {mean_change:.2f} hrs",
    color="red",
    ha="left",
    va="center"
)

plt.xlabel("Change in Hours")
plt.ylabel("Number of Households")
plt.title("")
plt.show()

# T-Tests
# Standard error
se = np.std(hours_change, ddof=1) / np.sqrt(len(hours_change))

# Manual test for H0: mu = 0.5
t_stat = (mean_change - 0.5) / se
p_value_manual = 2 * (1 - stats.norm.cdf(abs(t_stat)))
print(f"The p-value (manual) is: {p_value_manual:.3f}")

# Two-tailed t-test: H0: mu = 0.5
t_stat, p_val = stats.ttest_1samp(hours_change, popmean=0.5)
print(f"Two-tailed test: t={t_stat:.3f}, p-value={p_val:.3f}")

# One-tailed t-test: H0: mu <= 0.25 vs H1: mu > 0.25
t_stat, p_val_two_sided = stats.ttest_1samp(hours_change, popmean=0.25)
# halve the two-tailed p-value for one-tailed
p_val_one_sided = p_val_two_sided / 2 if t_stat > 0 else 1 - p_val_two_sided/2
print(f"One-tailed test (greater): t={t_stat:.3f}, p-value={p_val_one_sided:.3f}")

# =============================================================================
# load Vanguard dataset in DataAnalytics package
# =============================================================================
vanguard = DataAnalytics.__rdata__.fetch('Vanguard')['Vanguard']

#create as character function to convert date class to string
#since rpy2 date conversion does not work that well
char = robjects.r('as.character') 

#convert first column to string
vanguard[0] = char(vanguard[0])

#see results
print(vanguard.head())

#convert to pandas dataframe from robjects
vanguard = pd.DataFrame.from_dict({ key : list(vanguard.rx2(key)) for key in vanguard.names })

#convert back the string to date
vanguard['date']= pd.to_datetime(vanguard['date']) 

#check data types
vanguard.dtypes

# grab relevant cols
vanguard = vanguard.iloc[:,[0,1,4]] #date ticker mret
# vanguard = vanguard.loc[:,["date", "ticker", "mret"]] #also will work

#
# reshape
#
vanguard = vanguard.pivot(index = "date", columns = 'ticker', values = 'mret') #long to wide

# data description
desc = vanguard.describe()
print(desc)
print(vanguard.info()) #check null counts and dtypes

#
# let's plot the mean and std. deviation
#
import matplotlib.pyplot as plt
sd = desc.iloc[2,]
mean = desc.iloc[1,]
funds = np.array(desc.columns)

#plot
plt.scatter(sd, mean, c = mean)
plt.xlabel('SD')
plt.ylabel('Mean')
for i, label in enumerate(funds):
    plt.annotate(label,
                 (sd[i],mean[i]),
                 textcoords="offset points", # how to position the text
                 xytext=(0,7.5), # distance from text to points (x,y)
                 ha='center') 
plt.show()

