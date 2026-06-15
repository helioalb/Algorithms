package model

import "testing"

func TestModel(t *testing.T) {
	got := model()
	want := "model"

	if got != want {
		t.Fatalf("model() = %q; want %q", got, want)
	}
}
