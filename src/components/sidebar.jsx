import Profile from "~/components/profile.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";
import {onCleanup, onMount} from "solid-js";

export default function Sidebar() {
    let aside;
    onMount(() => {
        const setAside = () => {
            const top = window.innerHeight - aside.clientHeight
            aside.style.top = top >= 64 ? `64px` : `${top}px`
        }
        setAside()
        window.addEventListener("resize", setAside)
        onCleanup(() => {
            window.removeEventListener("resize", setAside)
        })
    })
    return (
        <>
            <aside ref={aside} class="w-[280px] h-fit px-4 sticky">
                <Profile/>
                <AsideRecommend data={['test']}/>
                <AsideCategory data={['test']}/>
                <AsideTags data={['3D', 'text', 'game', '测试']}/>
                <AsideFooter/>
            </aside>
        </>
    )
}