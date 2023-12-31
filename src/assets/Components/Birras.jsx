import React from 'react'

const fechaBirras = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysUntilThursday = (5 - firstDayOfWeek + 7) % 7;
    const firstThursdayDate = new Date(firstDayOfMonth);
    firstThursdayDate.setDate(firstDayOfMonth.getDate() + daysUntilThursday);
  
    if (today > firstThursdayDate) {
      const nextMonth = (currentMonth + 1) % 12;
      const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
      const firstThursdayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);
      const daysUntilNextThursday = (5 - firstThursdayOfNextMonth.getDay() + 7) % 7;
      firstThursdayOfNextMonth.setDate(firstThursdayOfNextMonth.getDate() + daysUntilNextThursday);
      return firstThursdayOfNextMonth;
    } else {
      return firstThursdayDate;
    }
  };
  const formatearEspañol = (date) => {
    return date.toLocaleDateString("es-ES");
  };

const Birras = () => {
    const birrasDate = fechaBirras();

  return (
    <div className='bg-neutral-900 h-screen'>
        <h1 className='text-white text-center text-7xl subpixel-antialiased font-bold p-8 sm:w-screen md:w-full'> {`Próximas AdminBirras: ${formatearEspañol(birrasDate)}`} </h1>
        <div className='grid grid-flow-row-dense sm:flex-col md:grid-cols-2 gap-4'>
        <div className='flex items-center justify-center sm:w-screen md:w-full text-center'> 
            <p className='text-white p-5 text-xl font-semibold'>
            Seas SysAdmin, Developer, DBA, InfoSec, Networking o de cualquier profesión ligada a sistemas.
            Incluso si te interesa este ámbito, las #AdminBirras son tu lugar.
            Hace ya varios años que nos juntamos a charlar y tomar algo en Palermo, arrancando a las 19 hasta que nos echen.
            </p>
        </div>
        <div className='hidden md:block'>
            <iframe className='sm:w-screen md:w-[660px]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7777137940484!2d-58.438660124260515!3d-34.58449067296121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58d95806995%3A0x7a95222bacc4ef98!2sHonduras%205560%2C%20C1414BND%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2ses!4v1703678048594!5m2!1ses-419!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className='block md:hidden justify-center text-center'>
          <a href="https://maps.app.goo.gl/H29s8mxkZh6pbWh1A" className='p-5 text-xl font-bold text-blue-600 hover:underline'>Lugar de encuentro</a>
        </div>
        </div>
    </div>
  )
}

export default Birras
