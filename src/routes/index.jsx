import Header from "~/components//header/Header";
import {Outlet} from "solid-start";
import {Toaster} from "solid-toast";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For, onMount} from "solid-js";
import ArticleItem from "~/components/article/article-item.jsx";
import ArticleImgItem from "~/components/article/article-img-item.jsx";
import CanvasImg from "~/components/canvasImg.jsx";


export default function Index() {

    return (
        <>
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
                    <div class="w-[240px] mx-auto">
                        <CanvasImg src={"public/image/we81p6-1000x1000.svg"}/>
                    </div>
                </aside>
            </section>
        </>
    );
}

