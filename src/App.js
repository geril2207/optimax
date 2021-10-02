import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Photo } from './components/'
import { glassesFetch } from './redux/actions/actions'
import Loader from './components/Loader'
import GlassesSlider from './components/Slider/GlassesSlider'
import RightBar from './components/Sidebar/RightBar'

function App() {
  const dispath = useDispatch()
  const glasses = useSelector((state) => state.glasses)
  const loading = useSelector((state) => state.glasses.loading)
  useEffect(() => {
    dispath(glassesFetch())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading || !glasses.items.length ? (
    <div className="virtual__mirror_container flex__mirror_container">
      <Loader />
    </div>
  ) : (
    <div className="virtual__mirror_container">
      <div className="container__header">
        <Photo />
        <RightBar item={glasses.items[glasses.mainItem]} />
      </div>
      <GlassesSlider items={glasses.items} />
    </div>
  )
}

export default App
