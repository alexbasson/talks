export const enterFullscreen = (elem: HTMLElement): Promise<void> => {
  return elem.requestFullscreen({navigationUI: 'hide'})
}

export const exitFullscreen = (): Promise<void> => {
  return document.exitFullscreen();
}
