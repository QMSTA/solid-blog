import MapHeader from "~/components/header/MapHeader.jsx";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For, onCleanup, onMount} from "solid-js";
import ArticleItemStyle1 from "~/components/article-item/article-item-style1.jsx";
import ArticleImgItemStyle1 from "~/components/article-item/article-img-item-style1.jsx";
import Profile from "~/components/profile.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";
import BlogSidebar from "~/components/sidebar/BlogSidebar.jsx";
import ArticleItemStyle2 from "~/components/article-item/article-item-style2.jsx";


export default function Index() {
    return (<>
        <MapHeader scroll={true}/>
        <HeroSections/>
        <section class="flex flex-row mx-auto pt-12 max-w-5xl">
            <main class="font-lxgw flex-1 mr-8 py-8">
                <For each={[1, 2]}>{(item) => (<>
                    <ArticleItemStyle2 data={[""]}/>
                </>)}</For>
            </main>
            <BlogSidebar/>
        </section>
    </>);
}