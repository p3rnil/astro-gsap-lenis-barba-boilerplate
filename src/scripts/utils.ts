export function delay(n: number = 2000): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

export function vwToPx(vw: number): number {
  return parseFloat(((vw / 100) * window.innerWidth).toFixed(3));
}

export function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}
