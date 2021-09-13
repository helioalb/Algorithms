#include <stdio.h>

int main() {

  int t, c, w, k;

  scanf("%d", &t);

  while(t--) {
    scanf("%d %d %d", &c, &k, &w);

    if (c * w <= k)
      printf("yes\n");
    else
      printf("no\n");
  }

  return 0;
}
