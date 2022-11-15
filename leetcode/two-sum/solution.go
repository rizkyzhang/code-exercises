package main

import "fmt"

func getFirstNumIndex(nums []int, num int) int {
	for i := 0; i <= len(nums)-1; i++ {
		if num == nums[i] {
			return i
		}
	}

	return -1
}

func getLastNumIndex(nums []int, num int) int {
	for i := len(nums) - 1; i > 0; i-- {
		if num == nums[i] {
			return i
		}
	}

	return -1
}

func twoSum(nums []int, target int) []int {
	operandPairsMap := map[int]int{}
	var firstOperandIndex int
	var secondOperandIndex int

	for _, num := range nums {
		if firstOperand, ok := operandPairsMap[target-num]; ok {
			secondOperand := target - num
			firstOperandIndex = getFirstNumIndex(nums, firstOperand)

			if firstOperand == secondOperand {
				secondOperandIndex = getLastNumIndex(nums, secondOperand)
			} else {
				secondOperandIndex = getFirstNumIndex(nums, secondOperand)
			}

			return []int{firstOperandIndex, secondOperandIndex}
		} else {
			operandPairsMap[num] = target - num
		}
	}

	return []int{firstOperandIndex, secondOperandIndex}
}

func main() {
	// nums := []int{7, 1, 3, 3, 2, 0, 5}
	nums := []int{3, 1, 2, 3}
	result := twoSum(nums, 6)

	fmt.Println(result)
}
