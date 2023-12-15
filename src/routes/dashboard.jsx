import {Outlet} from "solid-start";
import {MenuItem, MenuGroup, MenuSubItem} from "~/components/menu/DashboardMenu.jsx";
import {ChartIcon, ListIcon, SlidersIcon, UsersIcon, WritingIcon} from "~/components/icon/svg.jsx";
import {For} from "solid-js";
import {Toaster} from "solid-toast";
import TransitionBox from "~/components/transition.jsx";

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
export default function Dashboard() {
    const menuTree = [
        {
            label: '统计',
            path: '/dashboard',
            icon: <ChartIcon width={14} height={14}/>
        }, {
            label: '创作',
            icon: <WritingIcon width={14} height={14}/>,
            children: [
                {label: '新的文章', path: '/dashboard/new/article'},
            ]
        }, {
            label: '管理',
            icon: <ListIcon width={14} height={14}/>,
            children: [
                {label: '文章管理', path: '/dashboard/manage/article'},
                {label: '分类管理', path: '/dashboard/manage/category'},
                {label: '标签管理', path: '/dashboard/manage/tags'},
            ]
        }, {
            label: '用户',
            icon: <UsersIcon width={14} height={14}/>,
            children: [
                {label: '用户列表', path: '/dashboard/users/list'}
            ]
        }, {
            label: '系统',
            icon: <SlidersIcon width={14} height={14}/>,
            children: [
                {label: '配置', path: '/dashboard/system/config'}
            ]
        }
    ]
    return (<>
        <section class="bg-[#f5f5f5] h-[100vh]">
            <div class="h-full w-full flex flex-row">
                <aside class="w-[200px] min-w-[200px] max-w-[200px] h-full bg-[#001529] flex flex-col justify-center">
                    <div class="group flex-1 pt-2 overflow-x-hidden overflow-y-auto">
                        <Menu menu={menuTree}/>
                    </div>
                    <div class="h-16 w-full bg-[#002140]">
                    </div>
                </aside>
                <div class="w-full overflow-auto">

                    <main class="w-full p-4 pt-16 mt-4 overflow-auto flex">
                        <TransitionBox>
                            <Outlet/>
                        </TransitionBox>
                    </main>
                </div>
            </div>
        </section>
        <Toaster/>
    </>)
}

