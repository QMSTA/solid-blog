import {onMount, Show} from "solid-js";


function CanvasImg(props) {
    let canvas;
    const height = props.height,
        width = props.width;
    onMount(() => {
        const ctx = canvas.getContext("2d");
        const img = new Image();
        ctx.imageSmoothingEnabled = !1
        img.src = props.src;

        const gradient = ctx.createLinearGradient(0, height * 0.75, 0, height); // 创建一个线性渐变对象
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)")
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.7)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.85)")
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 1)")

        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height, width / 4, height / 4, width / 2, height / 2)
            ctx.save(); // 保存当前状态
            ctx.scale(1, -1); // 垂直翻转
            ctx.drawImage(img, 0, 0, img.width, img.height, width / 4, -(height * 1.25), width / 2, height / 2)
            ctx.restore(); // 恢复之前的状态
            ctx.globalCompositeOperation = "destination-out"; // 设置合成模式为 destination-out
            ctx.fillStyle = gradient; // 设置填充样式为渐变对象
            ctx.fillRect(0, height * 0.75, canvas.width, height * 0.75); // 绘制一个填充的矩形
        }
    })
    return (<>
        <canvas {...props} ref={canvas}/>
    </>)
}

export default function Profile({text}) {
    return (
        <>
            <div class="py-4">
                <div class="border-b relative z-10 -mt-8" classList={{'mb-8': !text}}>
                    <div class="w-fit mx-auto -mb-[50px]">
                        <CanvasImg class="w-[200px] h-[200px]" src={"public/image/we81p6-1000x1000.svg"}
                                   width={500} height={500}/>
                    </div>
                </div>
                <Show when={text}>
                    <div class="px-1 py-4 my-4 font-lxgw text-gray-400 text-center text-[14px]">
                        <span>{text}</span>
                    </div>
                </Show>
            </div>
        </>
    )
}