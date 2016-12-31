package princeton;

public class WeightedQuickUnion extends UF {
    private int[] size;
    public WeightedQuickUnion(int N) {
        super(N);

        size = new int[N];

        for (int i = 0; i < N; i++) {
            size[i] = 1;
        }
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }

    private int root(int i) {
        while (i != id[i]) {
            i = id[i];
        }
        return i;
    }

    public void union(int p, int q) {
        int i = root(p);
        int j = root(q);

        if (size[i] < size[j]) {
            id[i] = j;
            size[j] += size[i];
        } else {
            id[j] = i;
            size[i] += size[j];
        }
    }
}
