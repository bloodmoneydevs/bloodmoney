import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Info from './pages/info'
import Home from './pages/home'

const App = () => (
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
)

export default App
