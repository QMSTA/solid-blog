import Header from "~/components/Header";
import {Outlet} from "solid-start";
import {Toaster} from "solid-toast";


export default function Index() {
    return (
        <>
            <Header scroll={true}/>
            <main class="h-[300vh]">
                <Outlet/>
            </main>
        </>
    );
}
