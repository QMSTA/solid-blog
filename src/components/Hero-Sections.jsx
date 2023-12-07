import {createMemo, createSignal, onCleanup, onMount} from "solid-js";

export default function HeroSections() {
    const multiplier = 0.7
    const [backgroundPositionY, setBackgroundPositionY] = createSignal(0)
    onMount(() => {
        const [winH, setWinH] = createSignal(window.innerHeight)
        const getOffSet = createMemo(() => {
            let _offset = 200;
            let windowHeight = winH();
            if (windowHeight > 500) {
                _offset = 150;
            }
            if (windowHeight > 680) {
                _offset = 100
            }
            if (windowHeight > 830) {
                _offset = 50;
            }
            return _offset;
        })
        const onScroll = () => {
            const scrollTop = window.screenY || document.documentElement.scrollTop
            setBackgroundPositionY(scrollTop * multiplier - getOffSet())
        }
        const onResize = () => {
            setWinH(window.innerHeight)
            onScroll()
        }
        onScroll()
        window.addEventListener("scroll", onScroll)
        window.addEventListener("resize", onResize)
        onCleanup(() => {
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onResize)
        })
    })
    return (
        <>
            <section id="home"
                     class="h-[100vh]
                     bg-[url('/public/image/clouds-2329680.jpg')] bg-cover"
                     style={{'background-position-y': backgroundPositionY() + 'px'}}>
            </section>
        </>
    )
}