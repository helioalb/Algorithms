package datastructures;

import org.junit.Test;

import static org.junit.Assert.*;

public class FixedCapacityStackOfStringsTest {
    @Test
    public void isEmpty() throws Exception {
        Stack stack = new FixedCapacityStackOfStrings(5);

        assertTrue(stack.isEmpty());

        stack.push("Data Structure");

        assertFalse(stack.isEmpty());
    }

    @Test
    public void pushAndPop() throws Exception {
        Stack stack = new FixedCapacityStackOfStrings(5);
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

