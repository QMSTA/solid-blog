// @refresh reload
import {Suspense} from "solid-js";
import {
    useLocation,
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Routes,
    Head,
    Html,
    Meta,
    Scripts,
    Title,
} from "solid-start";
import "./root.css";


export default function Root() {
    return (
        <Html lang="zh">
            <Head>
                <Title>SolidStart - With TailwindCSS</Title>
                <Meta charset="utf-8"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <Routes>
                            <FileRoutes/>
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts/>
            </Body>
        </Html>
    )
}


