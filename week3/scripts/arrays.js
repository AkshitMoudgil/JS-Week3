
		var output = document.querySelector('body p:nth-of-type(2)');
		/* STEP 1: Creating an array
		When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
		var newArray = [1, 2, 3, "four", "five", true, false, [6, 5, 7, ["happy", "birthday"]]];
		/* STEP 2: Reading and changing array elements
		You can refer to a particular element in an array with it's index number */
		output.textContent = newArray[4];
		// You can also change a particular element
		newArray[1] = "one";
        output.textContent = newArray;
		// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
		output.textContent = newArray[7][3];
		/* STEP 3: Determining array length
		Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
		
		// In particular, looping through arrays
		for(let i=0; i<newArray.length; i++){
            console.log(newArray[i]);
        }
		/* STEP 4: Convert a string to an array
		If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
        var string2 = "cat, dog, elephant, bird"
        var arrayFromString = string2.split(",");
		// Output one of the array items
		output.textContent = arrayFromString[2];
		// Output the last element of the array
		output.textContent = arrayFromString[arrayFromString.length-1];
		/* STEP 5: Convert an array back to a string
		Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */		
        var stringFromArray = arrayFromString.toString();
        //console.log(stringFromArray)
        var stringFromArray2 = arrayFromString.join("---")
        console.log(stringFromArray2);
		/* STEP 6: Adding and removing items from an array
		Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

		// Adding one or more items to an array with push()
        var pushArray = newArray.push("newValue");
        output.textContent = pushArray;
		// Removing an item from an array with pop()
		var popArray = newArray.pop();
        output.textContent = popArray;
		// pop() returns the item that was removed, rather than the length of the updated array

		// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
		var shiftArray = newArray.shift("newAddedValue");
        output.textContent = shiftArray;
		/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */
