import {A} from "solid-start";
import {CalendarIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";

export default function Article() {
    return (
        <>
            <article>
                <header class="mb-4">
                    <h1 class="transition w-full text-[30px] mb-4 text-gray-700">
                        这是一段测试标题这是一段测试标题
                    </h1>
                    <div class="flex flex-row items-center my-2 text-gray-400">
                        <div class="flex flex-row items-center text-[12px]">
                            <CalendarIcon width={11} height={11}/>
                            <span class="mx-1">2023-02-05</span>
                        </div>
                        <span class="mx-2">|</span>
                        <div class="text-[14px]">
                            <For each={[1, 2, 3, 4]}>{() => (<>
                                <A class="transition300 mx-1.5 hover:text-tdc hover:underline" href="/">#{"标签"}</A>
                            </>)}</For>
                        </div>
                    </div>
                </header>
                <div class="my-4">

                </div>
            </article>
        </>
    )
}