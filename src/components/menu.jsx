import {A} from "solid-start";
import {createEffect, createSignal, For, Index, onMount} from "solid-js";

export const MenuSubItem = ({label, path}) => {
    return (<li class="transition300">
        <A noScroll={true} activeClass="selected" end={true} class="menusubitem" href={path}>
            {<span class="text-[14px]/[14px] ml-3 flex-1 inline-block">{label}</span>}
        </A>
    </li>)
}
export const MenuItem = ({label, path, icon}) => {
    return (<li class="transition300">
        <A noScroll={true} activeClass="selected" end={true} class="menuitem" href={path}>
            {icon}
            {<span class="text-[14px]/[14px] ml-3 flex-1 inline-block">{label}</span>}
        </A>
    </li>)
}
export const MenuGroup = ({label, icon, children}) => {
    let ulElement;
    const [expand, setExpand] = createSignal(false);
    onMount(() => {
        const ulTotalHeight = (ulElement.children.length * 44) + 4
        createEffect((e) => {
            if (!expand()) {
                e.style.height = '0px'
                setTimeout(() => {
                    e.style.display = 'none'
                }, 300)
            } else {
                e.style.display = 'block'
                setTimeout(() => {
                    e.style.height = `${ulTotalHeight}px`
                }, 10)

            }
            return e
        }, ulElement)
    })
    return (<li class="transition300">
        <div class="menuitem"
             onClick={() => {
                 setExpand((b) => !b)
             }}>
            {icon}
            {<span class="text-[14px]/[14px] ml-3 flex-1 inline-block">{label}</span>}
        </div>
        <ul ref={ulElement} class="submenu" classList={{'expand': expand()}}>{children}</ul>
        <i class="after:translate-x-[2.5px] rotate-[-45deg]"></i>
    </li>)
}