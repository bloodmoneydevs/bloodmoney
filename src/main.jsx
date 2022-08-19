import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import {StrictMode} from 'react'
import App from './App'
import './style.css'

const theme = extendTheme({
  fonts: {
    heading: 'El Messiri'
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)