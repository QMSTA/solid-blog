import {onMount} from "solid-js";

export default function ElementImg(props) {
    let cloud;
    // onMount(() => {
    //     cloud.style.perspective = '1000px'
    //     const rain = () => {
    //         const left = Math.floor(Math.random() * 140)
    //         const z = (Math.random() - 0.5) * 100
    //         const w = Math.random() * 2
    //         const h = Math.random() * 20
    //         const e = document.createElement("div");
    //         e.classList.add("absolute", "w-[2px]", "h-[10px]", "top-0", "bg-[#05a2eb]", "animate-rain")
    //         e.style.left = `${50 + left}px`
    //         e.style.zIndex = `${z}`
    //         e.style.width = `${w + 0.5}px`
    //         e.style.height = `${h + 0.5}px`
    //         cloud.appendChild(e)
    //         setTimeout(() => {
    //             cloud.removeChild(e)
    //         }, 2000)
    //     }
    //
    //     setInterval(() => {
    //         rain()
    //     }, 20)
    // })
    return (
        <>
            <div class="h-[240px] w-[240px] relative">
                <img class="m-auto inset-0 h-[100px] w-[100px] absolute"
                     src={"/public/image/we81p6-1000x1000.svg"}
                     style={{"-webkit-box-reflect": "below 0px -webkit-linear-gradient(transparent,transparent, rgba(255, 255, 255, 0.5))"}}
                     alt=""/>
                <div class="relative w-full h-full z-0" ref={cloud}></div>
            </div>
        </>
    )
}