# =============================================================================
# code snippets for Chapter 1
# Last Check: 09/20/2025
# =============================================================================

#load libraries
import rpy2.robjects as robjects #to run R commands
from rpy2.robjects.packages import importr #to import R libraries and datasets
import numpy as np #for arrays/vectors
import pandas as pd #for dataframes


# ----- install course package -----------------------------------------------
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

# ----------------------------------------------------------------------------

#
# load mvehicles dataset in DataAnalytics R package 
#
mvehicles = DataAnalytics.__rdata__.fetch('mvehicles')['mvehicles']


#convert to pandas dataframe from robjects
mvehicles = pd.DataFrame.from_dict({ key : list(mvehicles.rx2(key)) for key in mvehicles.names })


#
# try some functions other than data()
#
mvehicles.head()
out=mvehicles.head()
rnums=np.random.normal(size = (1000))
#
# composition of functions
#
rnums=np.random.normal(size = (1000))
np.std(rnums)
np.std(np.random.normal(size = (1000)))                # the fast way

#
# let's look at a vector using numpy (np)
#
rnums = np.array([1,2,3,4,5]) #array
rnums=np.random.normal(size = (5))
rnums
rnums[0]
rnums[-1] # choose end of vector element
rnums[[1,0,3]]
rnums[2:5]
rnums[[True,False,False,False,True]]
rnums.sort() #sort in place

#
# let's learn about pandas data frame
#
mvehicles.head(3)             # display the first few observations
mvehicles.dtypes                  # dtypes command which tells you more about the data types inside the data frame
mvehicles.columns                # column names of variables in mvehicles

#
# let's subset observations and variables
#
mvehicles.iloc[0,:]                   # first row of mvehicles (first obs)  note the "," ; Python indexing starts from 0!
mvehicles['mpg'].head()             # show the first 5 elements of the mpg variable
mvehicles[mvehicles['make']=="Lexus"].head()  # show only those observations for Lexus

#
# let's plot the histogram of emv with Matplotlib
#
import matplotlib.pyplot as plt
#plt.hist(emv)                       # won't work -- Python doesn't know where emv is to be found!

plt.hist(mvehicles['emv'])             # will work, need to tell the column
plt.show() #force graphical plotter to show

plt.hist(mvehicles['emv'], bins=20, color="magenta")
plt.show()

plt.hist(mvehicles['emv'], bins=20, color="magenta", ec = 'black')
plt.title('Histogram of Market Value')
plt.show()

plt.hist(np.log(mvehicles['emv']), bins=20, color="magenta", ec = 'black')
plt.title('Histogram of Log Market Value')
plt.show()
#
#
# a simple example of a function
#
def predLine(x,a,b):
    return(a + b * x)

predLine(x=.22,a=1,b=-1)
#using numpy arrays
predLine(x= np.arange(1,11),a=1,b=-1)

plt.plot(np.arange(1,11), predLine(x= np.arange(1,11),a=1,b=-1))
plt.show()
