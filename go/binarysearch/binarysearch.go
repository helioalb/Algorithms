package binarysearch

func BinarySearch(arr []int, target int) int, bool {
	low := 0
	high := len(arr)

	for low < high {
		mid := (low + high) / 2

		current := arr[mid]

		if (current == target) {
			return mid, true
		} else if (target < mid) {
			high = mid - 1
		} else {
			low := mid + 1
		}
	}

	return 0, false
}
