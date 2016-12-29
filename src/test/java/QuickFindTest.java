import org.junit.Test;
import princeton.QuickFind;
import princeton.UF;

import static org.junit.Assert.*;

public class QuickFindTest {
    @Test
    public void union() throws Exception {
        UF uf = new QuickFind(3);
        uf.union(0, 2);

        assertTrue(uf.connected(0, 2));
    }

    @Test
    public void connected() throws Exception {
        UF uf = new QuickFind(3);

        assertFalse(uf.connected(0, 1));
    }

    @Test
    public void buildConnections() {
        UF uf = new QuickFind(10);
        assertEquals("0 1 2 3 4 5 6 7 8 9", uf.toString());

        uf.union(4, 3);
        assertEquals("0 1 2 3 3 5 6 7 8 9", uf.toString());

        uf.union(3, 8);
        assertEquals("0 1 2 8 8 5 6 7 8 9", uf.toString());

        uf.union(6, 5);
        assertEquals("0 1 2 8 8 5 5 7 8 9", uf.toString());

        uf.union(9, 4);
        assertEquals("0 1 2 8 8 5 5 7 8 8", uf.toString());

        uf.union(5, 0);
        assertEquals("0 1 2 8 8 0 0 7 8 8", uf.toString());

        uf.union(7, 2);
        assertEquals("0 1 2 8 8 0 0 2 8 8", uf.toString());

        uf.union(6, 1);
        assertEquals("1 1 2 8 8 1 1 2 8 8", uf.toString());

        uf.union(6, 1);
        assertEquals("1 1 2 8 8 1 1 2 8 8", uf.toString());

        uf.union(6, 7);
        assertEquals("2 2 2 8 8 2 2 2 8 8", uf.toString());

        assertTrue(uf.connected(0, 7));
        assertFalse(uf.connected(2, 3));
    }

}