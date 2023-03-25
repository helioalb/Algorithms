import unittest

from two_sum import two_sum

class TestTwoSum(unittest.TestCase):
    def test_when_exist(self):
        numbers = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4]
        target = 9
        result = two_sum(numbers, target)
        self.assertListEqual([-2, 11], result)

    def test_when_does_not_exist(self):
        numbers = [1, 2]
        target = 5
        result = two_sum(numbers, target)
        self.assertListEqual([], result)


if __name__ == '__main__':
    unittest.main()
