## Question 3(b): Competition with Disney+ and Hulu

For this part we use all 4,000 households in `streaming_beta.csv`. Each household contributes two observations, one before the beta launch and one after it, and each observation is classified as a Netflix subscriber or non-subscriber using its subscription status in that period.

### (b-1)

We calculate combined weekly Hulu and Disney+ usage for each observation and average it separately for Netflix subscribers and non-subscribers.

```{r}
data <- read.csv("streaming_beta.csv")

data$combined_pre  <- data$disney_hours_pre  + data$hulu_hours_pre
data$combined_post <- data$disney_hours_post + data$hulu_hours_post

combined_all <- c(data$combined_pre, data$combined_post)
is_sub       <- c(data$has_netflix_pre, data$has_netflix_post)

mean(combined_all[is_sub == 1])
mean(combined_all[is_sub == 0])
```

| Group | Observations | Mean combined Hulu + Disney+ usage (hours per week) |
|---|---|---|
| Netflix subscribers | 4,698 | 4.016 |
| Netflix non-subscribers | 3,302 | 3.781 |

Netflix subscribers have the higher average combined Hulu and Disney+ usage, 4.016 hours per week compared with 3.781 hours per week for non-subscribers, a difference of about 0.23 hours per week.

### (b-2)

No, we cannot conclude from (b-1) that Netflix does not compete with Hulu and Disney+. The comparison in (b-1) is across different households, so it combines the effect of having Netflix with the type of household that chooses to subscribe to Netflix. Households that subscribe to Netflix may be heavier streamers in general, for example because of stronger tastes for streaming, larger household size, or higher income, and those households would watch more Hulu and Disney+ as well. A higher average among subscribers therefore does not show whether having Netflix changes a household's own Hulu and Disney+ usage, which is the comparison that speaks to competition.

### (b-3)

We now focus on switchers, the households that joined or canceled Netflix between the two periods. For each switcher, we calculate combined Hulu and Disney+ usage with Netflix minus usage without Netflix. For households that joined Netflix, this is post-period usage minus pre-period usage. For households that canceled Netflix, this is pre-period usage minus post-period usage.

```{r}
joined   <- data[data$has_netflix_pre == 0 & data$has_netflix_post == 1, ]
canceled <- data[data$has_netflix_pre == 1 & data$has_netflix_post == 0, ]

diff_switch <- c(joined$combined_post - joined$combined_pre,
                 canceled$combined_pre - canceled$combined_post)

length(diff_switch)
mean(diff_switch)
t.test(diff_switch, mu = 0, alternative = "two.sided", conf.level = 0.95)
```

Let μ be the population mean of these differences for switcher households. We test:

**H0: μ = 0 vs. H1: μ ≠ 0**

There are 674 switchers, 319 that joined Netflix and 355 that canceled. The mean difference is -1.757 hours per week. The one-sample t-test gives t = -5.67 with 673 degrees of freedom and a p-value of 2.16 × 10⁻⁸. The 95% confidence interval for the mean difference is (-2.366, -1.148).

At the 5% significance level, we reject H0. There is strong evidence that the population mean difference is not zero: switcher households watch about 1.76 fewer combined Hulu and Disney+ hours per week in the period when they have Netflix than in the period when they do not have Netflix.

### (b-4)

The comparison in (b-1) and the comparison in (b-3) can give different results because they compare different things. Part (b-1) compares different households with each other, so differences between subscriber and non-subscriber households, such as taste for streaming, confound the comparison. Part (b-3) compares each switcher household with itself across the two periods, so fixed household characteristics are held constant and the difference is much closer to the effect of having Netflix itself.

Taken together, the results suggest that Netflix does compete with Hulu and Disney+ for viewing time. Although Netflix subscribers watch more Hulu and Disney+ on average in (b-1), the same households reduce their combined Hulu and Disney+ usage by about 1.76 hours per week when they have Netflix in (b-3), which is the substitution pattern we would expect if the services compete for a household's viewing time. Because the switcher comparison is still observational, and a general change over time between the two periods could also contribute to it, this is evidence of competition rather than proof of a causal effect.
