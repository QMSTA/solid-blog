import {onMount} from "solid-js";

export default function CanvasImg({src}) {
    let canvas;
    const w = 400, h = 400;
    onMount(() => {
        const ctx = canvas.getContext("2d");
        const img = new Image();
        ctx.imageSmoothingEnabled = !1
        img.src = src;

        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height, w / 4, h / 4, w / 2, h / 2)
            ctx.save(); // 保存当前状态
            ctx.scale(1, -1); // 垂直翻转
            ctx.drawImage(img, 0, 0, img.width, img.height, w / 4, -(h * 1.25), w / 2, h / 2)
            ctx.restore(); // 恢复之前的状态
            ctx.globalCompositeOperation = "destination-out"; // 设置合成模式为 destination-out
            const gradient = ctx.createLinearGradient(0, h * 0.75, 0, h); // 创建一个线性渐变对象
            gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)")
            gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.7)")
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.85)")
            gradient.addColorStop(0.7, "rgba(255, 255, 255, 1)")
            ctx.fillStyle = gradient; // 设置填充样式为渐变对象
            ctx.fillRect(0, h * 0.75, canvas.width, h * 0.75); // 绘制一个填充的矩形
        }
    })
    return (<>
        <canvas class="w-[240px] h-[240px]" width={w} height={h} ref={canvas}/>
    </>)
}