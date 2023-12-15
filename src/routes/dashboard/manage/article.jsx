import {DeleteIcon, EditIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";
import {A} from "solid-start";

export default function ArticleManage() {
    const data = [
        {
            id: 1,
            title: "tests",
            summary: "",
            status: "",
            category: "",
            tags: ["tag1", 'tag2'],
            img: 'http://exmplate.com',
            views: 0,
            createAt: 0,
            updateAt: 0,
            publishAt: 0,
        }, {
            id: 1,
            title: "tests",
            summary: "",
            status: "",
            category: "",
            tags: ["tag1", 'tag2'],
            img: 'http://exmplate.com',
            views: 0,
            createAt: 0,
            updateAt: 0,
            publishAt: 0,
        }, {
            id: 1,
            title: "tests",
            summary: "",
            status: "",
            category: "",
            tags: ["tag1", 'tag2'],
            img: 'http://exmplate.com',
            views: 0,
            createAt: 0,
            updateAt: 0,
            publishAt: 0,
        }, {
            id: 1,
            title: "tests",
            summary: "",
            status: "",
            category: "",
            tags: ["tag1", 'tag2'],
            img: 'http://exmplate.com',
            views: 0,
            createAt: 0,
            updateAt: 0,
            publishAt: 0,
        },
    ]
    return (<>
        <div class="w-full select-none">
            <QueryBox/>
            <DataTable data={data}/>
        </div>
    </>)
}

const QueryBox = () => {
    return (<div class="bg-white flex mb-4">
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
    </div>)
}

const DataTable = ({data}) => {
    return (
        <div class="bg-white text-[14px]">
            <div class="px-5 py-4 flex flex-row leading-8">
                <h3 class="flex-1 text-[16px]">文章列表</h3>
                <div class="flex-1 flex justify-end">
                    <A href="/"
                       class="h-full w-16 rounded-md bg-bdc ring-2 ring-bdcs
                              hover:opacity-80 text-white flex items-center justify-center">新建
                    </A>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                    <tr class="border-b">
                        <th class="w-[5%]">ID</th>
                        <th class="w-[15%]">标题</th>
                        <th class="w-[15%]">摘要</th>
                        <th class="w-[5%]">状态</th>
                        <th class="w-[5%]">分类</th>
                        <th class="w-[15%]">标签</th>
                        <th class="w-[10%]">封面</th>
                        <th class="w-[5%]">浏览</th>
                        <th class="w-[5%]">发布于</th>
                        <th class="w-[5%]">更新于</th>
                        <th class="w-[5%]">删除于</th>
                        <th class="sticky right-0 w-[10%]">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <For each={data}>{(item) => <tr class="border-b transition">
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.summary}</td>
                        <td>{item.status}</td>
                        <td>{item.category}</td>
                        <td>
                            <div class="h-full flex flex-row flex-wrap">{
                                item.tags.map((i) => <span class="px-2 mx-2 border border-dashed border-gray-400 rounded-md">{i}</span>)
                            }</div>
                        </td>
                        <td>{item.img}</td>
                        <td class="sticky right-0">{item.views}</td>
                        <td class="sticky right-0">{item.createAt}</td>
                        <td class="sticky right-0">{item.updateAt}</td>
                        <td class="sticky right-0">{item.publishAt}</td>
                        <td class="flex flex-row justify-evenly items-center sticky right-0">
                            <button class="flex justify-center items-center h-8 w-8 rounded-md border
                                   border-blue-300 border-dashed text-blue-300">
                                <EditIcon height={16} width={16}/>
                            </button>
                            <button class="flex justify-center items-center h-8 w-8 rounded-md border
                                   border-red-300 border-dashed text-red-300">
                                <DeleteIcon height={16} width={16}/>
                            </button>
                        </td>
                    </tr>}</For>
                    </tbody>
                </table>
            </div>
            <footer>

            </footer>
        </div>
    )
}