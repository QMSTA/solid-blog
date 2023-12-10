export const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 361); // 随机选择一个色相
    const saturation = Math.floor(Math.random() * 51); // 随机选择一个饱和度，不超过50%
    const lightness = Math.floor(Math.random() * 16) + 15; // 随机选择一个亮度，不低于75%
    return `hsl(${hue},${saturation}%,${lightness}%)`
}
