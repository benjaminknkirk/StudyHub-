############################################
# MSBA 400
# Chapter 2 code snippets  
############################################


library(ggplot2)
library(DataAnalytics)

#
# illustrate sampling distribution of sample average
#
#
# let's first try a small sample size
#       with a N(0,1) population
#
par(mfrow=c(1,2))
N=10
Nsamples=100000
sims = matrix(rnorm(N*Nsamples),ncol=Nsamples)
means=apply(sims,MARGIN=2,mean)
hist(means,breaks=50,col="magenta",main="N=10",xlim=c(-1.5,1.5))
sd(means)

#
# now try a large sample size
#
N=100
Nsamples=100000
sims = matrix(rnorm(N*Nsamples),ncol=Nsamples)
means=apply(sims,MARGIN=2,mean)
hist(means,breaks=50,col="magenta",xlim=c(-1.5,1.5),main="N=100")
sd(means)

#
# now try a larger sigma (more variable population)
#         Normal(0,2**2=4)
#
N=10
Nsamples=100000
sims = matrix(rnorm(N*Nsamples,sd=2),ncol=Nsamples)
means=apply(sims,MARGIN=2,mean)
hist(means,breaks=50,col="magenta")
sd(means)

#
# convert to a function that can take any distribution!
#
sampling_dist = function(Nsamples,N,rdraw,...){
  sims= matrix(rdraw(Nsamples*N,...),ncol=Nsamples)
  means = apply(sims,MARGIN=2,mean)
  sds = apply(sims,MARGIN=2,sd)
}
hist(sampling_dist(Nsamples,N,rnorm,mean=3,sd=5))

#Streaming example
streaming_beta = read.csv("../../Data/streaming_beta.csv")      # load data appropriately; using your own path
# Compute change in Netflix hours
hours_change <- streaming_beta$netflix_hours_post - streaming_beta$netflix_hours_pre

# Plot histogram
hist(hours_change, breaks = 30, col = "skyblue",border = "white", main = "", xlab = "Change in Hours", ylab = "Number of Households")
mean_change  <- mean(hours_change, na.rm = TRUE)

# Add dashed red vertical line at the mean
abline(v = mean_change, col = "red", lwd = 2, lty = 2)

# Add annotation
text(
  x = mean_change, 
  y = max(hist(hours_change, plot = FALSE)$counts) * 0.7, 
  labels = paste0("Mean = ", round(mean_change, 2), " hrs"),
  pos = 4, col = "red", cex = 0.9
)

# T-test
## Two-tailed test
## We can hand-code the p-value
t <- (mean_change - 0.5)/se
## pnorm(z) gives the probability that a random draw from the standard normal distribution 
## N(0,1) is less than or equal to z
pvalue <- 2*(1 - pnorm(t))
cat("The p-value is:", round(pvalue, 3), "\n")

## We can also use t.test command
t.test(hours_change, alternative = "two.sided", mu = 0.5, conf.level = 0.95)

## One-tailed test
t.test(hours_change, alternative = "greater", mu = 0.25, conf.level = 0.95)

#
#load Vanguard datashape
#
data(Vanguard)
head(Vanguard)
summary(Vanguard)

# reshape Vanguard data using reshape2
# or use the reshape package
library(reshape2)
Van=Vanguard[,c(1,2,5)]   # grab relevant cols
V_reshaped=dcast(Van,date~ticker,value.var="mret")

head(V_reshaped)

#
# now let's plot mean std deviation.
mat=descStat(V_reshaped)
#
SD=mat[,3]
MEAN=mat[,1]
funds=rownames(mat)
plot(SD,MEAN,pch=20,col=rainbow(length(funds)),cex=2)
text(SD,MEAN,funds,col=rainbow(length(funds)),pos=1)

#
# do it in ggplot2
#
qplot(SD,MEAN,geom=c("point","text"),label=funds,vjust=-1,xlab="StdDev",ylab="Mean")

#
# or color
#
qplot(SD,MEAN,xlab="StdDev",ylab="Mean") +
  geom_point(col=rainbow(length(funds)),size=4) +
  geom_text(label=funds,col=rainbow(length(funds)),vjust=-1)

# Two-Sample One-Tailed t-Test
t.test(V_reshaped$VEIPX, V_reshaped$VFIAX, alternative = "greater", conf.level = 0.95)