package binarysearch

import "fmt"

func BinarySearch(arr []int, target int) (int, bool) {
	low := 0
	high := len(arr)

	for low < high {
		mid := (low + high) / 2
		fmt.Printf("low: %d, high: %d, mid: %d\n", low, high, mid)
		if arr[mid] == target {
			return mid, true
		} else if target > arr[mid] {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return 0, false
}
