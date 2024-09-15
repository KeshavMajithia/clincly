import React from 'react';
import LoginForm from './LoginForm';

const MainContent = () => {
  return (
    <main className="flex flex-wrap gap-10 items-center self-center mt-48 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto min-w-[240px] w-[548px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8cdcc90b4df8e5360ba7a6f29ac4622472c49644e61f0a4b88d6a1b7701120a?placeholderIfAbsent=true&apiKey=cbe919a00bae4f998c1324ba2c8dcde9" alt="Login illustration" className="object-contain self-stretch my-auto aspect-square min-w-[240px] w-[528px]" />
      </div>
      <LoginForm />
    </main>
  );
};

export default MainContent;
