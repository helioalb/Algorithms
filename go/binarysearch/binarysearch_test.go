package binarysearch_test

import (
	"algorithms/go/binarysearch"
	"testing"
)

func TestBinarySearch(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 7
	want := 6

	got, ok := binarysearch.BinarySearch(arr, target)

	if !ok {
		t.Fatalf("Expected to be found")
	}

	if got != want {
		t.Fatalf("got %d != want %d", got, want)
	}
}
