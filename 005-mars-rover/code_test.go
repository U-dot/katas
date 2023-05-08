package main

import (
	"github.com/ddsgok/bdd"
	"testing"
)

func Test_Dummy(t *testing.T) {
	given := bdd.Sentences().Given()

	given(t, "a state", func(when bdd.When) {
		when(`something happens`, func(it bdd.It) {
			it("should do this", func(assert bdd.Assert) {
				result := add("")
				assert.Equal(0, result)
			})
		})
	})
}
