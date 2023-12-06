import Header from "~/components//header/Header";
import {Outlet} from "solid-start";
import {Toaster} from "solid-toast";


export default function Index() {
    return (
        <>
            <Header/>
            <main class="h-[300vh]">
                <Outlet/>
            </main>
        </>
    );
}
