import Header from "~/components//header/Header";
import {Outlet, Title} from "solid-start";
import {Toaster} from "solid-toast";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For, onMount} from "solid-js";
import ArticleItem from "~/components/article/article-item.jsx";
import ArticleImgItem from "~/components/article/article-img-item.jsx";
import CanvasImg from "~/components/canvasImg.jsx";
import ElementImg from "~/components/elementImg.jsx";
import Profile from "~/components/profile.jsx";


export default function Index() {

    return (<>
        <Header/>
        <HeroSections/>
        <section class="flex flex-row mx-auto py-12 max-w-6xl">
            <main class="font-lxgw flex-1 mr-4 pb-8">
                <For each={[1, 2]}>{(item) => (<>
                    <ArticleItem/>
                    <ArticleImgItem/>
                </>)}</For>
            </main>
            <aside class="w-[280px] h-fit">
                <Profile text={""}/>
            </aside>
        </section>
    </>);
}

