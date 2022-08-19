import Action from "../components/actions"
import { CTA } from "../components/CTA"
import Footer from "../components/footer"
import { Video } from "../components/video"
import { Suspense } from "react"
import { Spinner } from "@chakra-ui/react"

const Home = () => (
  <div>
    <Suspense fallback={<Spinner/>}>
      <Video/> 
    </Suspense>
      <CTA />
      <Action />
      <Footer />
  </div>
) 
export default Home