import {For, Show} from "solid-js";
import {A} from "solid-start";

export default function AsideCategory({data}) {
    return (
        <><Show when={data}>
            <div class="mb-8">
                <h3 class="select-none text-[20px] mb-4 text-gray-600">类别</h3>
                <ul class="font-lxgw ml-8 text-tdc2">
                    <For each={data}>{(item) => <>
                        <li class="my-1 relative before:content-['-'] before:absolute before:text-gray-600 before:-left-[18px]">
                            <A class="hover:underline" href="/">{item}</A>
                        </li>
                    </>}
                    </For>
                </ul>
            </div>
        </Show>
        </>
    )
}