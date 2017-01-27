package datastructures.stack;

import datastructures.stack.LinkedStackOfStrings;
import datastructures.stack.Stack;
import org.junit.Test;

import static org.junit.Assert.*;

public class LinkedStackOfStringsTest {
    @Test
    public void isEmpty() throws Exception {
        Stack stack = new LinkedStackOfStrings();

        assertTrue(stack.isEmpty());

        stack.push("Data Structure");

        assertFalse(stack.isEmpty());
    }

    @Test
    public void pushAndPop() throws Exception {
        Stack stack = new LinkedStackOfStrings();
        stack.push("first");

        assertEquals("first", stack.pop());

        stack.push("first");
        stack.push("second");
        stack.push("third");

        assertEquals("third", stack.pop());
        assertEquals("second", stack.pop());
        assertEquals("first", stack.pop());
    }
}
