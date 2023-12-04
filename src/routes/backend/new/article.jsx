import {BookmarkIcon, CheckIcon, WritingIcon} from "~/components/icon/svg.jsx";
import Editer from "~/components/editer.jsx";
import {successNotify, normalNotify} from "~/utils/notify.js";

export default function () {
    return (<>

        <div class="bg-white flex-1 h-fit text-gray-500">
            <header class="border-b p-4 text-[1rem]/[2.5rem] flex items-center">
                <WritingIcon width={14} height={14}/>
                <h2 class="ml-2">新的文章</h2>
            </header>
            <div class="p-4 select-none">
                <div class="flex flex-col">
                    <div class="flex flex-row items-center h-16">
                        <span class="ml-4">文章标题:</span>
                        <input class="outline-none transition border hover:border-bdc focus:border-bdc text-[18px]/[2rem]
                                  focus:ring-2 focus:ring-bdcs rounded-md px-3 py-1 flex-1 mx-2" type="text"/>
                    </div>
                    <div class="flex flex-row items-center h-8 mb-4">
                        <span class="ml-4">https://explame.com/article/</span>
                        <input class="outline-none transition border hover:border-bdc focus:border-bdc text-[12px]/[1rem]
                                  focus:ring-2 focus:ring-bdcs rounded-md px-3 py-1 flex-1 mr-2" type="text"/>
                    </div>
                </div>
                <div id="editer" class="h-[520px] border overflow-auto">
                    <Editer/>
                </div>
            </div>
        </div>
        <div class="w-[200px] ml-4 bg-white h-fit flex flex-col">
            <div class="p-4">
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
    </>)
}