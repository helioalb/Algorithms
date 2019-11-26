package datastructures.stack;

public class LinkedStackOfStrings implements Stack {
    private class Node {
        String item;
        Node next;
    }

    private Node head = null;

    public boolean isEmpty() {
        return head == null;
    }

    public void push(String item) {
        Node node = new Node();
        node.item = item;
        node.next = head;
        head = node;
    }

    public String pop() {
        String item = head.item;
        head = head.next;

        return item;
    }
}
