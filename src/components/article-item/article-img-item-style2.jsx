import {A} from "solid-start";
import {CalendarIcon} from "~/components/icon/svg.jsx";
import {For, Show} from "solid-js";

export default function ArticleImgItemStyle2({data}) {
    return (
        <>
            <article class="mb-8">
                <header>
                    <h2 class="transition w-full text-[1.5rem] mb-2 text-gray-600 border-b border-gray-300">
                        <A class="hover:underline w-fit block" href="/">
                            这是一段测试标题这是一段测试标题2
                        </A>
                    </h2>
                    <div class="flex flex-row my-2 text-gray-400">
                        <div class="flex mt-0.5 flex-row items-center text-[12px]">
                            <CalendarIcon width={11} height={11}/>
                            <span class="mx-1">2023-02-05</span>
                        </div>
                        <span class="mx-2">|</span>
                        <div class="text-[14px] mt-0.5">
                            <A href="/"><span>分类</span></A>
                        </div>
                        <span class="mx-2">|</span>
                        <div class="text-[14px] mt-0.5">
                            <For each={[1, 2, 3, 4]}>{() => (<>
                                <A class="transition300 mx-1.5 hover:text-tdc hover:underline" href="/">#{"标签"}</A>
                            </>)}</For>
                        </div>
                    </div>
                </header>
                <div class="h-[200px] py-2 flex flex-row">
                    <div class="h-full w-[260px] overflow-hidden mr-5 rounded-[1rem]">
                        <A href="/">
                            <img class="transition300 w-full h-full object-cover hover:opacity-95" src="/public/image/wallhaven-yx21zx.jpg" alt=""/>
                        </A>
                    </div>
                    <div class="flex-1 h-full py-1 flex flex-col">
                        <div class=" flex-1 py-2 text-gray-500 ">
                            <p class="h-full w-full text-ellipsis overflow-hidden">
                                #这是一段测试文本这是一段测试文本这是一段测试文本这是一
                                #这是一段测试文本这是一段测试文本这是一段测试文本这是一
                            </p>
                        </div>
                        <div class="transition flex flex-row justify-end text-gray-600">
                            <A class="py-2 hover:underline" href="/">阅读更多</A>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}