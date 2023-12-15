import {For, Suspense} from "solid-js";
import ArticleItemStyle2 from "~/components/article-item/article-item-style2.jsx";

export default function ArticleItemGroup({data}) {
    return (
        <>
            <Suspense fallback={<div>加载中</div>}>
                <For each={data}>{(item) => <>
                    <ArticleItemStyle2 data={item}/>
                </>}</For>
            </Suspense>
        </>
    )
}