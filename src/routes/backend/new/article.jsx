import {BookmarkIcon, CheckIcon, WritingIcon} from "~/components/icon/svg.jsx";
import Editer from "~/components/editer.jsx";
import {successNotify, normalNotify} from "~/utils/notify.js";
import Overlays from "~/components/overlays.jsx";

export default function () {
    return (<>
        <div class="flex-1 h-fit text-gray-500 select-none">
            <header class="border-b p-3 text-[1rem]/[2.5rem] flex items-center bg-white mb-4">
                <WritingIcon width={14} height={14}/>
                <h2 class="ml-2">新的文章</h2>
            </header>

            <div id="title" class="flex flex-col p-3 mb-4 bg-white">
                <div class="flex flex-row items-center h-16">
                    <span class="ml-4">文章标题:</span>
                    <input class="inputbox text-[18px]/[2rem] px-3 py-1 flex-1 mx-2" type="text"/>
                </div>
                <div class="flex flex-row items-center h-8 mb-4">
                    <span class="ml-4">https://explame.com/article/</span>
                    <input class="inputline text-[1rem]/[1rem] py-1 flex-1 mr-2" type="text"/>
                </div>
            </div>
            <div id="editer" class="h-[520px] overflow-auto bg-white p-4 mb-4">
                <Editer/>
            </div>
            <div class="p-4 bg-white">
                <textarea id="summary" placeholder="请输入文章摘要" class="inputbox resize-y w-full h-24 px-3 py-2"></textarea>
            </div>
        </div>
        <div class="w-[200px] ml-4 bg-white h-fit flex flex-col">
            <div class="p-4 flex flex-col">
                <button class="editer-action bg-orange-300 text-white hover:opacity-80"
                        onClick={() => successNotify("发布成功")}>
                    <CheckIcon width={16} height={16}/>
                    <span class="ml-2 mx-4">发布</span>
                </button>
                <button class="editer-action border border-dashed border-gray-500 text-gray-500 hover:opacity-80"
                        onClick={() => successNotify("保存成功")}>
                    <BookmarkIcon width={16} height={16}/>
                    <span class="ml-2 mx-4">保存</span>
                </button>
            </div>
        </div>
        <Overlays/>
    </>)
}