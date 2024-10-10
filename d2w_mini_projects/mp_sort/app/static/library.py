from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
	random.seed(seed)
	array = list(range(number))
	random.shuffle(array)
	return array
	

def generate():
	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the variable array
	array = gen_random_int(number, seed)
	
	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	array_str = "" #generates an empty string
	for i in range(len(array)-1):         #this interates through the array up to the last one
		array_str += str(array[i]) + ',' #this adds the string one by one with a comma except the last one
	array_str += str(array[9]) + '.' 
	#this adds the last integer as a string with the fullstop (cannot anyhow use the -1 maybe cuz it did not generate the last number, i suspect it is because js dont do such things)
	

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	array = document.getElementById("generate").innerHTML
	numberarray = array[:-1].split(',') #learnt a new way to split and remove the commas as well, this removes all the commas
	
	
	numberarray = [int(num) for num in numberarray]
	

	swapped = True
	n = len(numberarray)
	while swapped:
		new_n = 0
		swapped = False
		for i in range(n-1):
			if numberarray[i] > numberarray[i+1]:
				swapped = True
				numberarray[i], numberarray[i+1] = numberarray[i+1], numberarray[i]
				new_n = i+1

		n = new_n
	array_str = "" #generates an empty string
	for i in range(len(numberarray)-1):         #this interates through the array up to the last one
		array_str += str(numberarray[i]) + ',' #this adds the string one by one with a comma except the last one
	array_str += str(numberarray[9]) + '.' 
	
	document.getElementById("sorted").innerHTML = array_str



def sortnumber2():
    '''	
    This function is used in Exercise 2.
    The function is called when the sort button is clicked.

    You need to do the following:
    - Get the numbers from a string variable "value".
    - Split the string using comma as the separator and convert them to 
        a list of numbers
    - call your sort function, either bubble sort or insertion sort
    - create a string of the sorted numbers and store it in array_str
    '''
    
    # The following line gets the value of the text input called "numbers"
    value = document.getElementById("numbers").value
    
    # Throw alert and stop if nothing in the text input
    if value == "":
        window.alert("Your textbox is empty")
        return 

    # Split and convert to integer list
    array_str = [int(num.strip()) for num in value.split(',')]

    # Bubble sort implementation
    n = len(array_str)
    swapped = True
    while swapped:
        swapped = False
        for idx in range(1, n):
            if array_str[idx - 1] > array_str[idx]:
                array_str[idx - 1], array_str[idx] = array_str[idx], array_str[idx - 1]
                swapped = True

    # Convert back to a string with commas
    array_str = ','.join(map(str, array_str))

    # Store the final string to the variable or display it
    document.getElementById("sorted").innerHTML = array_str

