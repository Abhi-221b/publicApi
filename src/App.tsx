import { Outlet } from 'react-router'
import { Footer, Header } from './components'
import { ThemeProvider } from './context/index.ts'


function App() {

  return (
    <ThemeProvider>
      <div className='body_wrapper'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
