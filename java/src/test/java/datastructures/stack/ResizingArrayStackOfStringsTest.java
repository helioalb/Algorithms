package datastructures.stack;

import datastructures.stack.ResizingArrayStackOfStrings;
import datastructures.stack.Stack;
import org.junit.Test;

import static org.junit.Assert.*;

public class ResizingArrayStackOfStringsTest {
    @Test
    public void isEmpty() throws Exception {
        Stack stack = new ResizingArrayStackOfStrings();

        assertTrue(stack.isEmpty());

        stack.push("Data Structure");

        assertFalse(stack.isEmpty());
    }

    @Test
    public void pushAndPop() throws Exception {
        Stack stack = new ResizingArrayStackOfStrings();
        stack.push("A");

        assertEquals("A", stack.pop());

        stack.push("A");
        stack.push("B");
        stack.push("C");
        stack.push("D");
        stack.push("E");
        stack.push("F");
        stack.push("G");

        assertEquals("G", stack.pop());
        assertEquals("F", stack.pop());
        assertEquals("E", stack.pop());
        assertEquals("D", stack.pop());
        assertEquals("C", stack.pop());
        assertEquals("B", stack.pop());
        assertEquals("A", stack.pop());
    }
}