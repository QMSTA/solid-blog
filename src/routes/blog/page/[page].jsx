import {createResource, For, Suspense} from "solid-js";
import BlogSidebar from "~/components/sidebar/BlogSidebar.jsx";
import ArticleItemStyle2 from "~/components/article-item/article-item-style2.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";
import AuthorHeader from "~/components/header/AuthorHeader.jsx";
import ArticleItemPagination from "~/components/pagination/article-item-pagination.jsx";
import {createServerData$} from "solid-start/server";
import {useRouteData} from "@solidjs/router";
import {createRouteData} from "solid-start";


export function routeData({params}) {
    const data = createRouteData(
        async (key) => {
            const resp = await fetch(`http://127.0.0.1:8080/api/articles?p=${key}`)
            const data = await resp.json()
            return data.data
        },
        {key: () => params.page}
    )
    return {data}
}

export default function BlogPage() {
    const data = useRouteData()['data'];
    const paginate = data()?.['paginate']
    return <>
        <section class="mx-auto max-w-[1000px]">
            <AuthorHeader/>
            <div class="flex flex-row">
                <main class="font-lxgw flex-1 mr-8 pb-8">
                    <Suspense fallback={<div>加载中</div>}>
                        <For each={data()?.items}>
                            {(item) => <>
                                <ArticleItemStyle2 data={item}/>
                            </>}
                        </For>
                    </Suspense>
                    <ArticleItemPagination
                        current={paginate.current}
                        total={paginate.total}
                        last={paginate.last}
                        next={paginate.next}
                    />
                </main>
                <BlogSidebar>
                    <AsideRecommend data={['test']}/>
                    <AsideCategory data={['test']}/>
                    <AsideTags data={['3D', 'text', 'game', '测试']}/>
                    <AsideFooter/>
                </BlogSidebar>
            </div>
        </section>
    </>;
}