package datastructures;

import org.junit.Test;

import static org.junit.Assert.*;

public class StackTest {
    @Test
    public void isEmpty() throws Exception {
        Stack stack = new Stack();

        assertTrue(stack.isEmpty());

        stack.push("Data Structure");

        assertFalse(stack.isEmpty());
    }

    @Test
    public void pushAndPop() throws Exception {
        Stack stack = new Stack();
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