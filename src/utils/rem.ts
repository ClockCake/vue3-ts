// src/utils/rem.ts

const designWidth = 375; // iPhone 设计稿宽度
const designHeight = 812; // iPhone 设计稿高度

// pt 到 px 的转换比例 (1pt = 1.33333px)
const ptToPxRatio = 4 / 3;

export function setRem() {
  const scale = Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight);
  
  // 设置根元素字体大小, 这里我们用 100 作为基准
  document.documentElement.style.fontSize = scale * 100 + 'px';
}



// 将 pt 转换为 rem
export function ptToRem(pt: number): string {
  const px = pt * ptToPxRatio;
  return (px / 100).toFixed(4) + 'rem';
}