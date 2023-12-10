import {A} from "solid-start";
import {For, Show} from "solid-js";
import {getRandomColor} from "~/utils/randomColor.js";

export default function AsideTags({data}) {

    const generateRandomNumber = () => (Math.random() * 15) + 10


    return (<>
        <div class="mb-8">
            <h3 class="select-none text-[20px] mb-4 text-gray-600">标签</h3>
            <div class="font-lxgw text-tdc2 px-2">
                <For each={data}>{(item, index) => <>
                    <Show when={index() !== 0}>{"、"}</Show>
                    <A class="inline-block hover:underline"
                       style={{
                           "font-size": `${generateRandomNumber()}px`,
                           "color": `${getRandomColor()}`
                       }}
                       href="/">#{item}</A>
                </>}</For>
            </div>
        </div>
    </>)
}