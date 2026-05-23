import { Counter } from '../../components'
import { Helmet } from 'react-helmet-async'

export default function Projects () {
  return (
    <>
      <Helmet>
        <title>Project Page</title>

        <meta
          name='description'
          content='Just a page that has a counter build out boredom'
        />
      </Helmet>
      <Counter />
    </>
  )
}
