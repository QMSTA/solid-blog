import {For, onCleanup, onMount} from "solid-js";
import {A} from "solid-start";

export default function BackendHeader() {
    return (<>
        <nav class="transition300 fixed w-full py-2 px-4 flex border-b-transparent bg-transparent select-none z-[1000] scrolled">
            <div class="max-w-7xl w-full   px-[15px] flex flex-row items-center">
                <div class="text-[1.25rem]/[3rem] flex flex-1 font-light">
                    <ul class="flex ml-auto">
                        <For each={["ITEM", "ITEM", "ITEM", "ITEM", "ITEM", "ITEMITEMITEM"]}>
                            {(item) => <li>
                                <A class="transition300 bg-transparent text-white hover:bg-tdc hover:text-white py-2 px-7 item" href="/">{item}</A>
                            </li>}
                        </For>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}