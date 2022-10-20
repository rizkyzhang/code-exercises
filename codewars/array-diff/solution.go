package main

import "fmt"

func includes(array []any, value any) bool {
	for _, elem := range array {
		if elem == value {
			return true
		}
	}

	return false
}

func arrayDiff(arrayA []any, arrayB []any) []any {
	var result []any

	for _, elem := range arrayA {
		if !includes(arrayB, elem) {
			result = append(result, elem)
		}
	}

	return result
}

func main() {
	result := arrayDiff([]any{1, 2, 2, 3, 2}, []any{2})

	fmt.Println(result)
}
