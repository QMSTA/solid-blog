import {CheckIcon, WritingIcon} from "~/components/icon/svg.jsx";
import Editer from "~/components/editer.jsx";

export default function () {
    return (
        <>
            <div class="bg-white flex-1 h-fit">
                <header class="border-b p-4 text-[1rem]/[2.5rem] flex items-center text-gray-600">
                    <WritingIcon width={14} height={14}/>
                    <h2 class="ml-2">新的文章</h2>
                </header>
                <div class="p-4">
                    <div class="flex flex-row h-16 mb-4">
                        <span></span>
                        <button class=""></button>
                        <button class="inline-flex items-center">
                            <CheckIcon width={16} height={16}/>
                            <span class="ml-2">发布</span>
                        </button>
                    </div>
                    <div id="editer" class="h-[520px] border overflow-auto">
                        <Editer/>
                    </div>
                </div>
            </div>
            <div class="w-[200px] ml-4">

            </div>
        </>
    )
}