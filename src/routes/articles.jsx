import {Outlet} from "solid-start";
import Header from "~/components/header/Header.jsx";

export default function Articles() {
    return (<>
        <Header scroll={false}/>
        <div class="pt-28 mx-auto max-w-4xl font-lxgw">
            <Outlet/>
        </div>
    </>)
}