def two_sum(numbers: list, target: int) -> list:
    for i in range(len(numbers) - 1):
        if numbers[i] + numbers[i + 1] == target:
            return [numbers[i], numbers[i + 1]]    
    return []
