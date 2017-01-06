package datastructures;

public class Stack {
    private class Node {
        String item;
        Node next;
    }

    private Node head;

    public Stack() {
        head = null;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public void push(String item) {
        Node node = new Node();
        node.item = item;

        if (head !=  null) {
            node.next = head;
        }

        head = node;
    }

    public String pop() {
        String item = head.item;

        if (head.next == null) {
            head = null;
        } else {
            head = head.next;
        }

        return item;
    }
}
