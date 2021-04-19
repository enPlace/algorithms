
arr1 = [3,2,1]
arr2 = [3,2,1,5,3,7,10,1,6]
arr3 = [1,2,5,4,3, 9, 7, 1, 4, 2, 6, 23, 45, 67, 12, 6, ]

function insertionSort(array){
	for(let i = 1; i< array.length; i++){ //starting at postion 1 in the loop
		let j = i
		while(array[j]<array[j-1]){
			let current = array[j]
			let prev = array[j-1]
			array[j] = prev
			array[j-1] = current
			j--

		}
	}return array
}


console.log(insertionSort(arr1))

console.log(insertionSort(arr2))

console.log(insertionSort(arr3))
