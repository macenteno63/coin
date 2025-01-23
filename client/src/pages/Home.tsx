import { Canvas } from '@react-three/fiber'
import Coin from "../components/coin.tsx"
import "./Home.css"

const Home = () => {
  return (
    <>
      <main className="content" >content</main>
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        <Coin />
      </Canvas>
    </>
  )
}

export default Home