import CanvasImg from "~/components/canvasImg.jsx";
import {Show} from "solid-js";

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