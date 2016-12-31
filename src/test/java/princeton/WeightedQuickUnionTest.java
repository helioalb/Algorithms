package princeton;

import org.junit.Test;

import static org.junit.Assert.*;

public class WeightedQuickUnionTest {
    @Test
    public void union() throws Exception {
        UF uf = new WeightedQuickUnion(3);
        uf.union(0, 2);

        assertTrue(uf.connected(0, 2));
    }

    @Test
    public void connected() throws Exception {
        UF uf = new WeightedQuickUnion(3);

        assertFalse(uf.connected(0, 1));
    }

    @Test
    public void buildConnections() {
        UF uf = new WeightedQuickUnion(10);
        assertEquals("0 1 2 3 4 5 6 7 8 9", uf.toString());
        uf.union(4, 3);
        uf.union(3, 8);
        uf.union(6, 5);
        uf.union(9, 4);
        uf.union(5, 0);
        uf.union(7, 2);
        uf.union(6, 1);
        uf.union(6, 7);

        assertTrue(uf.connected(0, 7));
        assertFalse(uf.connected(2, 3));
    }

}