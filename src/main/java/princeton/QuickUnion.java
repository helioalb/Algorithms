package princeton;

public class QuickUnion extends UF {

    public QuickUnion(int N) {
        id = new int[N];

        for (int i  = 0; i < N; i++) {
            id[i] = i;
        }
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }

    public void union(int p, int q) {
        int rootOfP = root(p);
        id[rootOfP] = root(q);
    }

    private int root(int i) {
        while (i != id[i]) {
            i = id[i];
        }

        return i;
    }
}
