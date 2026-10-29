#sample python session 1

#creating lists
a = [1, 2, 3]
type(a)

#list can contain different data types
a = ["a", 1, 2, 3] #e.g. string and int

#list can contain lists
a = [[1, 2] , [3, 4]]

#creating list
a = list(range(10)) 
print(a) #python is 0-indexed, range will return 0 to 9 instead of 1 to 10

#accessing list elements using indexes
a[0] #first element
a[0:5] #first 5 elements

a[10] #will return an error since python is 0-indexed


#python lists are not vectorized by default:
a + 10 #will return an error, since it does not "understand" how to add 10 to a list

#for loops
for i in range(10):
    print(i) #python uses "indents"/tabs/4spaces to define a code block
    '''
    anything indented here will belong to the for loop
    '''
#outside here will not belong to the for loop

for i in range(5, 10): #starting from 5 to 9 (remember 0-indexed!)
    print(i)
    
for i in range(10, 0, -1): #starting from 10 to 1, decreasing by -1
    print(i)

#can use loops to access elements directly
for val in a:
    print(val)

#instead of using indexes
#len(a) gives the length of the iterable/list
for i in range(len(a)): #range(len(a)) is common, if you want to loop through the length of the list
    print(a[i])

#could also use enumerate to return index, val
for index, val in enumerate(a):
    print("index:" + str(index)) #str() converts int to string so we can concatenate the string together
    print("value:" + str(val))


#appending elements to list
a = [] #empty list
a.append(1)
a.append("a")
print(a)


#using loops to append elements
a = [] #initialize empty list
for i in range(10):
    a.append(i)
print(a)
    
#list comprehension, a simple way to write loops and save it into a list
b = [val + 100 for val in a] #much shorter than

#equivalent as list comprehension above
b = []
for val in a:
    b.append(val + 100)


#since lists are not vectorized, it's hard to do math computations directly
#we can use the library numpy instead to make it easier
#numpy have "array" data types, instead of list data types which allows vectorization/broadcasting
import numpy as np

arr = np.array([1, 2, 3])
arr = arr + 10 #works now! don't need to use loops anymore
type(arr) #numpy array instead of a list

for val in arr: #can still loop through the elements directly
    print(val)

for i in range(len(arr)): #or use indexes
    print(arr[i])

#numpy provides many vectorized math calculations
np.sum(arr)
np.min(arr)
np.max(arr)
np.std(arr) #standard deviation
np.var(arr) #variance
np.prod(arr) #product
np.cumsum(arr) #cumulative sum

#is also provided as "methods"
#to access method use class.method()
#the class here is the numpy array
arr.sum()
arr.max()
arr.min()
arr.var() #etc...


arr = np.arange(1, 11) #python "range" equivalent, but returns an array

#indexing array is the same as list
arr[0]
arr[0:5]

#there is no append function in array
# arr.append(1) #error

#instead use np.append/np.insert
np.append(arr, 11) #is not "in-place" does not change the actual arr variable
arr = np.append(arr, 11) #to assign it to new variable
print(arr)
np.insert(arr, 0, -1) #if you want to insert at whichever index (not in-place)
arr = np.insert(arr, 0, -1)


#matrices
#can use np array as matrices
arr = np.arange(1, 11) #reinitialize
arr.shape #right now it is a 1-d array
arr = arr.reshape(5, 2) #5x2 matrix

#indexing is similar [row index, col index]
arr[0, 1] #first row, second columns


#dataframe
#pandas provide dataframe functionality as in R's dataframe
#to load it call the following import
#seaborn is a plotting library, we are calling it here just to get an example dataset
import pandas as pd
import seaborn as sns

df = sns.load_dataset('iris') #load an example dataset
type(df) #pandas dataframe


df.head() #get first 5 observations
df.tail() #get last 5 observations

df["species"] #get columns
df.iloc[:, 4] #using index instead of name
df.iloc[:, [2,3, 4]]
df.iloc[:10, 4] #first 10 rows, 5th column

#subsetting observations
df["species"] == "setosa" #will return all rows, which has species == setosa
#remember the double equal signs! "==" for test of equality

#filter, only grab "setosa" species in iris dataframe
#since df["species"] == "setosa" returns the rows that we should return
#by subsetting it, we will return the whole dataframe where the condition is true
df[df["species"] == "setosa"]

#multiple filter conditions, use & sign and dont forget to use () for each condition
df[(df["species"] == "setosa") & (df["sepal_length"] < 5)]

#renaming columns
print(df.columns)
df.columns = ["a", "b", "c", "d", "e"]



