import {CalendarIcon} from "~/components/icon/svg.jsx";
import {A} from "solid-start";
import {For} from "solid-js";

export default function ArticleItem() {
    return (
        <>
            <div class="">
                <div class="my-4 text-[1.5rem]">
                    <h2>这是一段测试标题</h2>
                </div>
                <div class="my-4">
                    <p>这是一段测试文本</p>
                </div>
                <div class="pb-2 border-b border-gray-300">
                    <div class="flex flex-row p-3 text-gray-500">

                        <div class="inline-flex flex-row items-center text-[12px]">
                            <CalendarIcon width={11} height={11}/>
                            <span class="mx-1">2023-02-05</span>
                        </div>
                        <div class="px-4 text-[14px]">
                            <For each={[1, 2]}>{() => (<>
                                <A class="transition300 mx-1.5 hover:text-tdc" href="/">#{"标签"}</A>
                            </>)}</For>
                        </div>
                        <div><span></span></div>

                    </div>
                </div>
            </div>
        </>
    )
}