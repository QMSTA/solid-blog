import {createResource, createSignal, For, Index, Suspense} from "solid-js";
import BlogSidebar from "~/components/sidebar/BlogSidebar.jsx";
import ArticleItemStyle2 from "~/components/article-item/article-item-style2.jsx";
import AsideRecommend from "~/components/aside-tools/recommend.jsx";
import AsideCategory from "~/components/aside-tools/category.jsx";
import AsideTags from "~/components/aside-tools/tags.jsx";
import AsideFooter from "~/components/aside-tools/footer.jsx";
import AuthorHeader from "~/components/header/AuthorHeader.jsx";
import ArticleItemPagination from "~/components/pagination/article-item-pagination.jsx";

const [page, setPage] = createSignal(1)

export default function Blog() {
    const [data, {mutate, refetch}] = createResource(
        page,
        async (key, {value, refetching}) => {
            console.log('refetching', refetching)
            console.log("key", key)
            const resp = await fetch(`http://127.0.0.1:8080/api/articles?n=1&p=${key}`)
            const data = await resp.json()
            return {
                items: data.data.items,
            }
        }
    )
    return <>
        <section class="mx-auto max-w-[1000px]">
            <AuthorHeader/>
            <button onClick={() => {
                setPage((i) => i + 1)
            }}>
                TEST
            </button>
            <div class="flex flex-row">
                <main class="font-lxgw flex-1 mr-8 pb-8">
                    <Suspense fallback={<div>加载中</div>}>
                        <For each={data()?.items}>
                            {(item) => <>
                                <ArticleItemStyle2 data={item}/>
                            </>}
                        </For>
                    </Suspense>
                    <ArticleItemPagination current={2} total={5}/>
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