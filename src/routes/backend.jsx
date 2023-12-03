import Header from "~/components/Header.jsx";
import {Outlet} from "solid-start";
import {MenuItem, MenuGroup, MenuSubItem} from "~/components/menu.jsx";
import {HomeIcon, ListIcon, SlidersIcon, UsersIcon, WritingIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";
import {Toaster} from "solid-toast";

const Menu = ({menu}) => {
    return (<>
        <ul>
            <For each={menu}>{(item) => (<>
                {item.children
                    ? <MenuGroup label={item.label} icon={item.icon}>
                        <For each={item.children}>{(sub) => (<MenuSubItem label={sub.label} path={sub.path}/>)}</For>
                    </MenuGroup>
                    : <MenuItem label={item.label} icon={item.icon} path={item.path}/>}
            </>)}</For>
        </ul>
    </>)
}
export default function Backend() {
    const menuTree = [
        {
            label: '统计',
            path: '/backend',
            icon: <HomeIcon width={14} height={14}/>
        }, {
            label: '创作',
            icon: <WritingIcon width={14} height={14}/>,
            children: [
                {label: '新的文章', path: '/backend/new/article'},
            ]
        }, {
            label: '管理',
            icon: <ListIcon width={14} height={14}/>,
            children: [
                {label: '文章管理', path: '/backend/manage/article'},
                {label: '分类管理', path: '/backend/manage/article'},
                {label: '标签管理', path: '/backend/manage/article'},
            ]
        }, {
            label: '用户',
            icon: <UsersIcon width={14} height={14}/>,
            children: [
                {label: '用户列表', path: '/backend/users/list'}
            ]
        }, {
            label: '系统',
            icon: <SlidersIcon width={14} height={14}/>,
            children: [
                {label: '配置', path: '/backend/system/config'}
            ]
        }
    ]
    return (<>
        <Header scroll={false}/>
        <section class="pt-16 bg-[#f5f5f5] h-[100vh]">
            <div class="h-full w-full flex flex-row">
                <aside class="w-[200px] min-w-[200px] max-w-[200px] h-full bg-[#001529] flex flex-col justify-center">
                    <div class="group flex-1 pt-2 overflow-x-hidden overflow-y-auto">
                        <Menu menu={menuTree}/>
                    </div>
                    <div class="h-16 w-full bg-[#002140]">
                    </div>
                </aside>
                <main class="w-full p-4 overflow-auto flex">
                    <Outlet/>
                </main>
            </div>
        </section>
        <Toaster/>
    </>)
}

