import {BookmarkIcon, CalendarIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";
import {A} from "solid-start";

export default function ArticleImgItem() {
    return (
        <>
            <article class="py-4 flex flex-row items-center border-b border-gray-300">
                <div class="h-[200px] w-[260px] overflow-hidden mr-5 rounded-[1rem]">
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
                        <div class="flex flex-row py-2 text-gray-400 overflow-hidden">
                            <div class="mt-0.5 inline-flex mx-1.5 flex-row items-center text-[12px]">
                                <CalendarIcon width={11} height={11}/>
                                <span class="mx-1">2023-02-05</span>
                            </div>
                            <div class="text-[14px]">
                                <For each={[1, 2, 3, 4]}>{() => (<>
                                    <A class="transition300 mx-1.5 hover:text-tdc hover:underline" href="/">#{"标签标签"}</A>
                                </>)}</For>
                            </div>
                        </div>
                        <div class="transition text-gray-500 h-full">
                            <A class="p-1 hover:underline" href="/">阅读更多</A>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}