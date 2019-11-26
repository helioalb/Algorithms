package princeton;

public abstract class UF {
    protected int[] id;
    public abstract boolean connected(int p, int q);
    public abstract void union(int p, int q);

    public UF(int N) {
        id = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
        }
    }
    public String toString() {
        String str = "";
        int last = this.id.length - 1;

        for (int i = 0; i < last; i++) {
            str += String.valueOf(this.id[i]) + " ";
        }

        str += String.valueOf(this.id[last]);

        return str;
    }
}
