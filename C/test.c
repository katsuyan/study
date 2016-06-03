#include <stdio.h>
#include <math.h>

typedef struct point3D {
  double x;
  double y;
  double z;
} point3D;

double distance3D(point3D p1, point3D p2) {
  double ret = sqrt( (p2.x - p1.x) * (p2.x - p1.x) +
                     (p2.y - p1.y) * (p2.y - p1.y) +
                     (p2.z - p1.z) * (p2.z - p1.z) );
  return ret;
}

void translate3D(point3D *p, double dx, double dy, double dz) {
  p->x += dx;
  p->y += dy;
  p->z += dz;
}

int main(void) {
  point3D p1 = { 1.0, -2.0, 3.0 };
  point3D p2 = { -3.0, 1.0, 2.0 };
  double dx = 1, dy = 2, dz = 3;
  double dis;

  dis = distance3D(p1, p2);
  printf("p1とp2の距離は%.2lf\n", dis);

  translate3D(&p1, dx, dy, dz);
  printf("p1の異動先は(%.1lf, %.1lf, %.1lf)\n", p1.x, p1.y, p1.z);

  return 0;
}
