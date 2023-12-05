import {For, onCleanup, onMount} from "solid-js";
import {A} from "solid-start";

export default function BackendHeader() {
    let ScrollElement;
    onMount(() => {
        if (scroll) {
            const onScroll = () => {
                if (window.scrollY > 240) {
                    ScrollElement.classList.add("scrolled")
                } else {
                    ScrollElement.classList.remove("scrolled")
                }
            }
            window.addEventListener("scroll", onScroll)
            onCleanup(() => window.removeEventListener("scroll", onScroll))
        }
    })
    return (<>
        <nav ref={ScrollElement}
             class="transition300 fixed w-full py-2 px-4 flex border-b-transparent bg-transparent select-none z-[1000]"
             classList={{'scrolled': !scroll}}>
            <div class="max-w-7xl w-full mx-auto px-[15px] flex flex-row items-center">
                <div class="text-[1.4rem]/[3rem]">
                    <a class="transition300 bg-transparent text-white tracking-widest mr-6 py-2 logo" href="/">探索日志</a>
                </div>
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