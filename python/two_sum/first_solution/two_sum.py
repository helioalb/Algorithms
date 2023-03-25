def two_sum(numbers: list, target: int) -> list:
    numbers_size = len(numbers)

    for i in range(numbers_size - 1):
        for j in range(i + 1, numbers_size):
            if numbers[i] + numbers[j] == target:
                return [numbers[i], numbers[j]]
    return []

# This algorithm is O(n**2)
