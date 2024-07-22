// src/utils/rem.ts

const designWidth = 375; // iPhone 设计稿宽度
const designHeight = 812; // iPhone 设计稿高度
const baseFontSize = 100; // 基准字体大小
const minFontSize = 60; // 最小字体大小
const maxFontSize = 120; // 最大字体大小

// pt 到 px 的转换比例 (1pt = 1.33333px)
const ptToPxRatio = 4 / 3;

export function setRem() {
  const scale = Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight);
  let fontSize = scale * baseFontSize;
  
  // 限制最大最小字体大小
  fontSize = Math.min(Math.max(fontSize, minFontSize), maxFontSize);
  
  // 设置根元素字体大小
  document.documentElement.style.fontSize = fontSize + 'px';
}

// 将 pt 转换为 rem
export function ptToRem(pt: number): string {
  const px = pt * ptToPxRatio;
  return (px / baseFontSize).toFixed(4) + 'rem';
}

// 初始化和监听 resize 事件
export function initRem() {
  setRem();
  window.addEventListener('resize', setRem);
}