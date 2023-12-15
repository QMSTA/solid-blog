import {A} from "solid-start";

export default function AuthorHeader() {
    return (
        <>
            <header class="flex flex-row items-center py-8">
                <div class="font-lxgw flex-1">
                    <div class="mb-4 text-gray-600">
                        <h1 class="text-[30px]">
                            <A href="/">
                                <span>于野的探索日志</span>
                            </A>
                        </h1>
                    </div>
                    <div class="text-[14px] text-gray-400 px-0.5">
                        <span>云雾散开之时，晨曦与繁星都将映入眼中</span>
                    </div>
                </div>
            </header>
        </>
    )
}