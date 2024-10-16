import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

import Layout from "@/layouts/Layout"
import Loading from "@/components/Loading"

const Home = lazy(() => import("@/pages/Home"))
const GetAQuote = lazy(() => import("@/pages/GetAQuote"))

const App = () => {
    
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="get-a-quote" element={<GetAQuote />} />
                    </Route>                
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}


export default App