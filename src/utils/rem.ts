// src/utils/rem.ts

// 基准字体大小
const baseSize = 16;

// 设置 rem 函数
export function setRem() {
    const scale = document.documentElement.clientWidth / 375;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

// 转换 px 到 rem
export function px2rem(px: number): string {
    return `${px / baseSize}rem`;
}