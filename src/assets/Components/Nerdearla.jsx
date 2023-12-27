import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Nerdearla = () => {
  return (
    <div className='bg-neutral-900 h-screen'>
        <h1 className='text-white text-center text-7xl subpixel-antialiased font-bold p-8'> Cuenta regresiva hasta la próxima Nerdearla </h1>
        <div className='flex items-center justify-center p-8'>
            <FlipClockCountdown to={1727301600000}>
            <Completed />
            </FlipClockCountdown>;
        </div>
        <h2 className='text-white text-center text-4xl subpixel-antialiased font-bold p-8'>¿No aguantas la manija?</h2>
        <h2 className='text-white text-center text-2xl subpixel-antialiased font-bold p-8'>¡Mirá las charlas de ediciones pasadas en Youtube!</h2>
        <div className='bg-neutral-900 flex items-center justify-center p-8'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9gCsqimDa34?si=FS5-RTX_IFxZZZOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

const Completed = () => {
      return (<span>Vamos a Nerdearla</span>)
}

export default Nerdearla
