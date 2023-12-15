import {onCleanup, onMount} from "solid-js";

export default function BlogSidebar(props) {
    let aside;
    onMount(() => {
        const setAside = () => {
            const top = window.innerHeight - aside.clientHeight
            aside.style.top = top >= 0 ? `0px` : `${top}px`
        }
        setAside()
        window.addEventListener("resize", setAside)
        onCleanup(() => {
            window.removeEventListener("resize", setAside)
        })
    })
    return (
        <>
            <aside ref={aside} class="w-[280px] h-fit px-4 py-8 sticky">
                {props.children}
            </aside>
        </>
    )
}