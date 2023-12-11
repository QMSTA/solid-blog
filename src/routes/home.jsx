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
import Sidebar from "~/components/sidebar.jsx";
import ArticleItemStyle2 from "~/components/article/article-item-style2.jsx";
import ArticleImgItemStyle2 from "~/components/article/article-img-item-style2.jsx";


export default function Home() {
    return (<>
        <section class="flex flex-row mx-auto pt-12 max-w-5xl">
            <main class="font-lxgw flex-1 mr-8 pb-8">
                <For each={[1]}>{(item) => (<>
                    <ArticleItem/>
                    <ArticleItemStyle2 data={['']}/>
                </>)}</For>
            </main>
            <Sidebar/>
        </section>
    </>);
}

