import React from 'react';

function Wix() {
  return (
    <div>
    <div className="divider divider-secondary divider-start px-4 hidden lg:block text-white text-4xl">Prácticas para conocer la plataforma</div>
    <div className="divider divider-secondary divider-end px-4 text-white text-4xl">Wix</div>

    <div className="flex flex-wrap">
      
      {/* Contenedor del primer video */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative pb-[56.25%] w-full h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/qw9_A83znuU?si=bLChgpxUJegbpdYi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Contenedor del segundo video */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative pb-[56.25%] w-full h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/2FwYS9uFb_U?si=CGq62_UmhKAQs8Nh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    <div className="divider divider-secondary divider-start px-4 text-white text-4xl">Wix</div>

    </div>
  );
}

export default Wix;
