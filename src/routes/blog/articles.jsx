import {Outlet} from "solid-start";
import MapHeader from "~/components/header/MapHeader.jsx";

export default function Articles() {
    return (<>
        <MapHeader scroll={false}/>
        <div class="pt-28 mx-auto max-w-4xl font-lxgw">
            <Outlet/>
        </div>
    </>)
}