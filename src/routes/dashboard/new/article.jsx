import {AddIcon, BookmarkIcon, CheckIcon, ListIcon} from "~/components/icon/svg.jsx";
import Editer from "~/components/editer.jsx";
import {successNotify} from "~/utils/notify.js";
import {For, Show} from "solid-js";
import {Dnd, DragBox, DropBox} from "~/components/dnd/dnd.jsx";

export default function () {
    return (<div class="flex w-full">
        <div class="flex-1 h-fit text-gray-500 select-none">
            <EditTitle/>
            <EditContent/>
            <EditSummary/>
        </div>
        <div class="w-[200px] ml-4 h-fit flex flex-col select-none">
            <EditDo/>
            <SelectCategory/>
            <SelectTags/>
        </div>
    </div>)
}

const EditTitle = () => (<>
    {/*编辑文章标题*/}
    <div id="title" class="flex flex-col boxcard">
        <div class="flex flex-row items-center h-16">
            <span class="ml-4">文章标题:</span>
            <input class="inputbox text-[18px]/[2rem] px-3 py-1 flex-1 mx-2" type="text"/>
        </div>
        <div class="flex flex-row items-center h-8 mb-4">
            <span class="ml-4">https://explame.com/article/</span>
            <input class="inputline text-[1rem]/[1rem] py-1 flex-1 mr-2" type="text"/>
        </div>
    </div>
</>)

const EditContent = () => (<>
    {/*编辑正文内容*/}
    <div id="editer" class="h-[520px] overflow-auto boxcard">
        <Editer/>
    </div>
</>)

const EditSummary = () => (<>
    {/*编辑summary*/}
    <div class="boxcard">
        <textarea id="summary" placeholder="请输入文章摘要" class="inputbox resize-y w-full h-24 px-3 py-2"></textarea>
    </div>
</>)

const EditDo = () => (<>
    {/*编辑操作*/}
    <div class="boxcard flex flex-col text-[14px]/[14px] rounded-md">
        <button class="editer-action bg-orange-300 text-white hover:opacity-80"
                onClick={() => successNotify("发布成功")}>
            <CheckIcon width={14} height={14}/>
            <span class="ml-2 mx-4">发布</span>
        </button>
        <button class="editer-action border border-dashed border-gray-500 text-gray-500 hover:opacity-80"
                onClick={() => successNotify("保存成功")}>
            <BookmarkIcon width={14} height={14}/>
            <span class="ml-2 mx-4">保存</span>
        </button>
    </div>
</>)


const SelectCategory = () => {
    const data = [{
        id: 1, name: "test2", displayName: "测试2", sub: [{id: 2, name: "test222", displayName: "测试22"}, {
            id: 3, name: "test22", displayName: "测试22", sub: [{
                id: 10, name: "test10", displayName: "测试10",
            }]
        },]
    }, {
        id: 0, name: "test", displayName: "测试",
    },]
    const CategoryItem = ({tree, level}) => {
        return (<>
            <For each={tree}>
                {(item) => <div class="peer-[.unexpand]:h-0 h-auto overflow-hidden" style={{"padding-left": `${(level - 1) * 10}px`}}>
                    <div class="peer relative">
                        <input class="peer hidden" type="radio" name="category" value={item.name} id={`cate-${item.id}`}/>
                        <label class="checklabel before:transition300 cursor-pointer mr-4
                                          peer-checked:before:bg-bdc peer-checked:before:ring-2 peer-checked:before:ring-bdcs"
                               for={`cate-${item.id}`}>
                            <span>{item.displayName}</span>
                        </label>
                        <Show when={item.sub}>
                            <button type="button" class="absolute inset-y-0 my-auto z-10"
                                    onClick={(e) => {
                                        e.target.parentNode.classList.toggle('unexpand')
                                    }}><ListIcon width={14} height={14}/></button>
                        </Show>
                    </div>
                    <Show when={item.sub}><CategoryItem tree={item.sub} level={level + 1}/></Show>
                </div>}
            </For>
        </>)
    }

    return (<>
        {/*选择分类*/}
        <div class="boxcard pt-[60px] relative rounded-md text-gray-500">
            <div class="absolute flex flex-row items-center w-full h-12 top-0 left-0 border-b">
                <h3 class="flex-1 ml-4">选择分类</h3>
                <button class="h-full w-12 inline-flex items-center justify-center border-l border-dashed">
                    <AddIcon width={16} height={16}/>
                </button>
            </div>
            <div class="px-4 py-2 overflow-x-auto h-fit w-full">
                <CategoryItem tree={data} level={1}/>
            </div>
        </div>
    </>)
}

const SelectTags = () => {
    const tags = [{
        id: 0, name: "test", displayName: "测试",
    }, {
        id: 1, name: "test1", displayName: "测试1",
    }, {
        id: 2, name: "test2", displayName: "测试2",
    }, {
        id: 3, name: "test3", displayName: "测试3",
    }, {
        id: 4, name: "test4", displayName: "测试4",
    }, {
        id: 5, name: "test5", displayName: "测试5",
    }, {
        id: 6, name: "test6", displayName: "测试6",
    },]
    return (<>
        {/*选择标签*/}
        <div class="boxcard pt-[60px] relative rounded-md text-gray-500">
            <div class="absolute flex flex-row items-center w-full h-12 top-0 left-0 border-b">
                <h3 class="flex-1 ml-4">选择标签</h3>
                <button class="h-full w-12 inline-flex items-center justify-center border-l border-dashed">
                    <AddIcon width={16} height={16}/>
                </button>
            </div>
            <Dnd class="text-[14px]">
                <DropBox id="unselected-tags" class="flex flex-row h-fit min-h-[2.5rem] flex-wrap justify-evenly">
                    <DropBox id="selected-tags"
                             class="min-h-[32px] border border-dashed border-gray-700 rounded-md
                                    w-full flex flex-row flex-wrap px-2 items-center justify-around"></DropBox>
                    <For each={tags}>{(item) => (<>
                        <DragBox id={`tag-${item.id}`}
                                 class="my-1 px-2"
                                 value={item.name}>
                            <span>{item.displayName}</span>
                        </DragBox>
                    </>)}</For>
                </DropBox>
            </Dnd>
        </div>
    </>)
}