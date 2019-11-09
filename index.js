function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let count = 0;
  while (height <= desiredHeight) {
    height += upSpeed;
    count++;
    if (height >= desiredHeight) return count;
    height -= downSpeed;
  }
  return count;
}
