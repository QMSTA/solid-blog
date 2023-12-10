import {CalendarIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";
import {A} from "solid-start";

export default function ArticleImgItem() {
    return (
        <>
            <div class="py-4 flex flex-row items-center border-b border-gray-300">
                <div class="h-[240px] w-[280px] overflow-hidden mr-10 rounded-[1rem]">
                    <A href="/">
                        <img class="transition300 w-full h-full object-cover hover:opacity-95" src="/public/image/wallhaven-yx21zx.jpg" alt=""/>
                    </A>
                </div>
                <div class="flex-1">
                    <div class="my-4 text-[1.5rem] text-gray-600">
                        <A class="hover:underline w-fit block" href="/">
                            <h2 class="w-fit">这是一段测试标题这是一段测试标题这是一段测试标题</h2>
                        </A>
                    </div>
                    <div class="my-4 text-gray-600">
                        <p>这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是一段测试文本这是</p>
                    </div>
                    <div class="pb-2 flex flex-row items-center justify-between">
                        <div class="flex flex-row p-3 text-gray-400">
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
                        <div class="transition text-gray-500 h-full">
                            <A class="h-full p-4 hover:underline" href="/">阅读更多</A>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}