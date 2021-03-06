package datastructures.stack;

public class FixedCapacityStackOfStrings implements Stack {
    private int N = 0;
    private String[] s;

    public FixedCapacityStackOfStrings(int capacity) {
        s = new String[capacity];
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public void push(String item) {
        s[++N] = item;
    }

    public String pop() {
        return s[N--];
    }
}
