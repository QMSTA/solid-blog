import Header from "~/components//header/Header";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For, onCleanup, onMount} from "solid-js";
import ArticleItem from "~/components/article/article-item.jsx";
import ArticleImgItem from "~/components/article/article-img-item.jsx";
import Profile from "~/components/profile.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";


export default function Index() {
    let aside;
    onMount(() => {
        const setAside = () => {
            const top = window.innerHeight - aside.clientHeight
            aside.style.top = `${top}px`
        }
        setAside()
        window.addEventListener("resize", setAside)
        onCleanup(() => {
            window.removeEventListener("resize", setAside)
        })
    })
    return (<>
        <Header/>
        <HeroSections/>
        <section class="flex flex-row mx-auto pt-12 max-w-5xl">
            <main class="font-lxgw flex-1 mr-8 pb-8">
                <For each={[1, 2]}>{(item) => (<>
                    <ArticleItem/>
                    <ArticleImgItem/>
                </>)}</For>
            </main>
            <aside ref={aside} class="w-[280px] h-fit px-4 sticky">
                <Profile/>
                <AsideRecommend data={['test']}/>
                <AsideCategory data={['test']}/>
                <AsideTags data={['3D', 'text', 'game', '测试']}/>
                <AsideFooter/>
            </aside>
        </section>
    </>);
}

