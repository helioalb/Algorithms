#include <stdio.h>
#include <stdlib.h>

#define vertex int

struct graph {
  int V;
  int A;
  int **adj;
};

typedef struct graph *Graph;

static int **MATRIX (int r, int c, int val) {
  int **m = malloc ( r * sizeof (int*));

  for (int i = 0; i < r; ++i) {
    m[i] = malloc (c * sizeof (int));
  }

  for (int i = 0; i < r; ++i) {
    for (int j = 0; j < c; ++j) {
      m[i][j] = val;
    }
  }

  return m;
}

Graph GRAPHInit (int V) {
  Graph G = malloc (sizeof (*G));
  G->V = V;
  G->A = 0;
  G->adj = MATRIX (V, V, 0);

  return G;
}

void GRAPHInsertArc (Graph G, vertex v, vertex w) {
  if (G->adj[v][w] == 0) {
    G->adj[v][w] = 1;
    G->A++;
  }
}

void GRAPHShow (Graph G) {
  for (vertex v = 0; v < G->V; ++v) {
    printf ("%2d:", v);

    for (vertex w = 0; w < G->V; ++w) {
      if (G->adj[v][w] == 1) {
        printf (" %2d", w);
      }
    }

    printf ("\n");
  }
}

int main(int argc, char const *argv[]) {
  Graph G = GRAPHInit (4);

  GRAPHInsertArc (G, 0, 1);
  GRAPHInsertArc (G, 0, 2);
  GRAPHInsertArc (G, 0, 3);
  GRAPHInsertArc (G, 1, 0);
  GRAPHInsertArc (G, 1, 2);
  GRAPHInsertArc (G, 1, 3);
  GRAPHInsertArc (G, 2, 1);
  GRAPHInsertArc (G, 3, 1);

  GRAPHShow (G);

  return 0;
}
