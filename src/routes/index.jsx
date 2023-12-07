import Header from "~/components//header/Header";
import {Outlet} from "solid-start";
import {Toaster} from "solid-toast";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For} from "solid-js";
import ArticleItem from "~/components/article/article-item.jsx";


export default function Index() {
    return (
        <>
            <Header/>
            <HeroSections/>
            <section>
                <main class="font-lxgw mx-auto py-12 max-w-4xl">
                    <For each={[1]}>{(item) => (<>
                        <ArticleItem/>
                    </>)}</For>
                </main>
            </section>
        </>
    );
}

