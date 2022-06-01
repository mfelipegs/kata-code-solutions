def count_positives_sum_negatives(arr):
    count_of_positives = len([x for x in arr if x > 0])
    sum_of_negatives = sum(y for y in arr if y < 0)
    return [count_of_positives] + [sum_of_negatives] if arr else []
