package main

import "fmt"

func removeDuplicates(nums []int) int {
	numsOccurrenceMap := map[int]bool{}
	indexToInsertUniqueNum := 0

	for _, num := range nums {
		if !numsOccurrenceMap[num] {
			nums[indexToInsertUniqueNum] = num
			numsOccurrenceMap[num] = true
			indexToInsertUniqueNum++
		}
	}

	return indexToInsertUniqueNum
}

func main() {
	nums := []int{1, 1, 1, 2, 2, 3, 4, 5, 5, 5}
	k := removeDuplicates(nums)

	fmt.Println(k)
	fmt.Println(nums)
}
