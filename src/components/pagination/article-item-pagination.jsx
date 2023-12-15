import {For, Show} from "solid-js";
import {A} from "solid-start";
import {genPageURL} from "~/utils/genUrl.js";


function generatePaginationModel(currentPage, totalPages) {
    const result = [];
    const maxVisiblePages = 1; // 定义每边最多显示的页码数量
    const edgePages = 2; // 定义最左边和最右边保留的页码数量
    for (let i = 1; i <= totalPages; i++) {
        const isNearCurrent = Math.abs(currentPage - i) <= maxVisiblePages; // 是否在当前页的附近
        const isNearEdge = i <= edgePages || i > totalPages - edgePages; // 是否在最左边或最右边

        if (isNearCurrent || isNearEdge) {
            result.push(i);
        } else if (result[result.length - 1] !== 0) {
            result.push(0);
        }
    }

    return result;
}

export default function ArticleItemPagination({current, total, next, last}) {
    const items = generatePaginationModel(current, total)
    return (
        <>
            <div class="mx-auto w-fit py-8">
                <ul class="flex flex-row items-center text-gray-500 select-none">
                    <li class="mx-2 text-[14px]">
                        <Show when={last > 1} fallback={
                            <span class="text-gray-400">««</span>
                        }>
                            <A class="hover:underline transition300 hover:text-tdc" href={genPageURL(last)}><span>««</span></A>
                        </Show>
                    </li>
                    <For each={items}>
                        {(item) => <li class="mx-2">
                            <Show when={item !== 0} fallback={
                                <span>{"..."}</span>
                            }>
                                <A class="hover:underline transition300 hover:text-tdc"
                                   classList={{'pointer-events-none text-gray-800': current === item}}
                                   href={genPageURL(item)}>
                                    <span>{item}</span>
                                </A>
                            </Show>
                        </li>}
                    </For>
                    <li class="mx-2 text-[14px]">
                        <Show when={next !== 0} fallback={
                            <span class="text-gray-400">»»</span>
                        }>
                            <A class="hover:underline transition300 hover:text-tdc" href={genPageURL(next)}><span>»»</span></A>
                        </Show>
                    </li>
                </ul>
            </div>
        </>
    )
}