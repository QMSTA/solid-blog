import Header from "~/components//header/Header";
import HeroSections from "~/components/Hero-Sections.jsx";
import {For} from "solid-js";
import ArticleItem from "~/components/article/article-item.jsx";
import ArticleImgItem from "~/components/article/article-img-item.jsx";
import Profile from "~/components/profile.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";


export default function Index() {

    return (<>
        <Header/>
        <HeroSections/>
        <section class="flex flex-row mx-auto py-12 max-w-5xl">
            <main class="font-lxgw flex-1 mr-8 pb-8">
                <For each={[1, 2]}>{(item) => (<>
                    <ArticleItem/>
                    <ArticleImgItem/>
                </>)}</For>
            </main>
            <aside class="w-[280px] h-fit">
                <Profile/>
                <AsideRecommend data={['test']}/>
                <AsideCategory data={['test']}/>
                <AsideTags data={['3D', 'text', 'game', '测试']}/>
                <AsideFooter/>
            </aside>
        </section>
    </>);
}

