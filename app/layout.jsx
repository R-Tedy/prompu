import '@styles/globals.css'
// import { Children } from 'react'

export const metadata = {
  title: 'Prompu',
  description: 'find an easier way to prompt-up'
}

const RouteLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RouteLayout