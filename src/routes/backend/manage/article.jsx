import Dropdowns from "~/components/Dropdowns.jsx";
import {successNotify} from "~/utils/notify.js";
import {BookmarkIcon, CheckIcon} from "~/components/icon/svg.jsx";

export default function ArticleManage() {
    return (<>
        <div class="w-full select-none">
            <QueryBox/>
        </div>
    </>)
}

const QueryBox = () => {
    return (<>
        <div class="bg-white flex">
            <form autocomplete="off" class="w-full p-6 text-[14px]"
                  onSubmit={(e) => e.preventDefault()}>
                <div class="flex flex-row h-fit">
                    <div class="px-4 flex-1 flex flex-row items-center">
                        <span>标题：</span>
                        <input type="text"
                               class="inputbox px-3 py-1 flex-1 mx-2"
                               placeholder="请输入"/>
                    </div>
                    <div class="px-4 flex-1 flex flex-row justify-end items-center">
                        <button class="h-full w-16 rounded-md bg-bdc ring-2 ring-bdcs hover:opacity-80 text-white"
                                type="submit">查询
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>)
}

const DataTable = () => {
    return (
        <></>
    )
}