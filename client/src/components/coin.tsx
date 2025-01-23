import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const coin = () => {
    const coin = useGLTF('/gold_coin.glb').scene
    const coinRef = useRef()

    useGSAP(()=>{
        if (coinRef.current) {
            gsap.to(coinRef.current.rotation, {
                x: Math.PI * 2,
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    markers: true,
                },
            });
        }
    })


    return (
        <>
            <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                target={coinRef.current}
            />
            <primitive object={coin} ref={coinRef} />
        </>

    )
}

export default coin