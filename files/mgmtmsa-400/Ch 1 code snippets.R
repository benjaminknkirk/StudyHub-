#############################################
# code snippets for Chapter 1
# Last Check: 09/20/2025
#############################################

# ----- install course package -------------------------------------------------------------------
install.packages("remotes")                             # install remotes package
library("remotes")                                      # "load" package
install_bitbucket("perossichi/DataAnalytics")           # install the course package
                                                        # note: this will take a few seconds to a minute
                                                        # depending on internet connection speed
library("DataAnalytics")
#
# check to see that the mvehicles dataset is there
#
?mvehicles
data(mvehicles)                 # make dataset accessible
#
# try some functions other than data()
#
head(mvehicles)
out=head(mvehicles)
rnums=rnorm(1000)
#
# composition of functions
#
rnums=rnorm(1000)
sd(rnums)
sd(rnorm(1000))                # the fast way
#
# let's look at a vector
#
rnums=rnorm(5)
rnums
rnums[1]
rnums[length(rnums)]
rnums[c(2,1,4)]
rnums[3:5]
rnums[c(TRUE,FALSE,FALSE,FALSE,TRUE)]
sort(rnums)
# 
# scalar, vector, and matrix
x1 = 2; x2 = 4                  # scalars
y1 = c(x1,x2); y2 = c(x2,x1)    # vectors
z = cbind(y1,y2)                # matrix
#
# let's learn about a data frame
#
head(mvehicles,n=3)             # display the first few observations
str(mvehicles)                  # "structure" command which tells you about the object
names(mvehicles)                # names of variables in mvehicles
#
# let's subset observations and variables
#
mvehicles[1,]                   # first row of mvehicles (first obs) note the ","
head(mvehicles$mpg)             # show the first 6 elements of the mpg variable
head(mvehicles[mvehicles$make=="Lexus",])  # show only those observations for Lexus
#
# let's plot the histogram of emv
#
hist(emv)                       # won't work -- R doesn't know where emv is to be found!
hist(mvehicles$emv)             # will work
hist(mvehicles$emv,breaks=20,col="magenta",xlab="",ylab="",
     main="Histogram of Market Value")
hist(log(mvehicles$emv),breaks=20,col="magenta",xlab="",ylab="",
     main="Histogram of log Market Value")

#
# a simple example of a function
#
predLine=function(x,a,b) {a+b*x}

predLine(x=.22,a=1,b=-1)
predLine(x=c(1:10),a=1,b=-1)
plot(c(1:10),predLine(x=c(1:10),a=1,b=1))
