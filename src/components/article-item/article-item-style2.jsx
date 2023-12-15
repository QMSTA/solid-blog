import {A} from "solid-start";
import {CalendarIcon} from "~/components/icon/svg.jsx";
import {For, Show} from "solid-js";
import {genArticleURL, genCateURL, genTagURL} from "~/utils/genUrl.js";
import {timestampToTimeString} from "~/utils/time.js";

export default function ArticleItemStyle2({data}) {
    const article = data.article
    const articleURL = genArticleURL(article.titleSlug)

    return (
        <>
            <article class="mb-8">
                <header>
                    <h2 class="transition w-full text-[1.5rem] mb-2 text-gray-700 border-b">
                        <A class="hover:underline w-fit block" href={articleURL}>
                            {article.title}
                        </A>
                    </h2>
                    <div class="flex flex-row my-2 text-gray-400">
                        <div class="flex mt-0.5 flex-row items-center text-[12px]">
                            <CalendarIcon width={11} height={11}/>
                            <span class="mx-1">{timestampToTimeString(article.publishAt)}</span>
                        </div>
                        <span class="mx-2">|</span>
                        <div class="text-[14px] mt-0.5">
                            <A class="transition300 mx-1.5 hover:text-tdc hover:underline" href={genCateURL(data.category.name)}>
                                <span>{data.category.displayName}</span>
                            </A>
                        </div>
                        <span class="mx-2">|</span>
                        <div class="text-[14px] mt-0.5">
                            <For each={data.tags}>{(tag) => (<>
                                <A class="transition300 mx-1.5 hover:text-tdc hover:underline" href={genTagURL(tag.name)}>
                                    <span>#{tag.displayName}</span>
                                </A>
                            </>)}</For>
                        </div>
                    </div>
                </header>
                <Show when={article.img}>
                    <div>
                        <A href={articleURL}>
                            <img class="transition300 w-full h-full object-cover hover:opacity-95" src="/public/image/wallhaven-yx21zx.jpg" alt=""/>
                        </A>
                    </div>
                </Show>
                <div>
                    <div class="py-2 text-gray-500">
                        {article.summary}
                    </div>
                    <div class="transition text-gray-600 mt-4">
                        <A class="h-full py-2 hover:underline" href={articleURL}>阅读更多</A>
                    </div>
                </div>
            </article>
        </>
    )
}