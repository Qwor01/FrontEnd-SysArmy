import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const fechaNerdearla = () => {
  //Coodigo para calular la fecha de la proxima nerdearla en días
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(2024, 9, 26);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays.toString();
}

const Nerdearla = () => {
  const fechaNerdear = fechaNerdearla();

  return (
    <div className='bg-neutral-900 h-screen'>
      <div className='hidden md:flex justify-center' >
      <h1 className='text-white text-center text-4xl md:text-7xl subpixel-antialiased font-bold p-8 bg-neutral-900'>Cuenta regresiva hasta la próxima Nerdearla
      </h1>
      </div>
      <div className='flex sm:hidden'>
        <h1 className='text-white text-center text-4xl md:text-7xl subpixel-antialiased font-bold p-8 bg-neutral-900'>
          {`Faltan ${fechaNerdear} días para Nerdearla`}
        </h1>
      </div>
      <div className='hidden md:flex items-center justify-center p-8'>
        <FlipClockCountdown to={1727301600000}>
          <Completed />
        </FlipClockCountdown>;
      </div>
      <h2 className='text-white text-center text-2xl md:text-4xl subpixel-antialiased font-bold p-8 bg-neutral-900'>
        ¿No aguantas la manija?
      </h2>
      <h2 className='text-white text-center text-xl md:text-2xl subpixel-antialiased font-bold p-8 bg-neutral-900'>
        ¡Mirá las charlas de ediciones pasadas en Youtube!
      </h2>
      <div className='bg-neutral-900 flex items-center justify-center p-8 '>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9gCsqimDa34?si=FS5-RTX_IFxZZZOb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </div>
  );
};

const Completed = () => {
      return (<span>Vamos a Nerdearla</span>)
}

export default Nerdearla
