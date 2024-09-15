import React from 'react';

const LoginForm = () => {
  return (
    <form className="flex flex-col self-stretch my-auto min-w-[240px] w-[382px]">
      <div className="flex flex-col self-center pb-5 max-w-full text-xl font-medium text-black w-[345px]">
        <label htmlFor="username" className="self-start">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your Username"
          className="px-3.5 py-4 mt-3 text-sm rounded-lg border border-black border-solid text-black text-opacity-40 max-md:pr-5"
        />
        <label htmlFor="password" className="self-start mt-5">Password</label>
        <div className="flex gap-5 justify-between px-4 py-3.5 mt-3 text-sm rounded-lg border border-black border-solid text-black text-opacity-40">
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="bg-transparent border-none outline-none w-full"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4dd42701dfe79ea8404e58b6ddea98e561bb26439b7e28eefa6dbc84152e705?placeholderIfAbsent=true&apiKey=cbe919a00bae4f998c1324ba2c8dcde9" alt="" className="object-contain shrink-0 self-start aspect-square w-[21px]" />
        </div>
      </div>
      <div className="flex flex-col mt-9 w-full text-base">
        <button type="submit" className="gap-2.5 self-center py-3.5 pr-32 pl-32 max-w-full tracking-wide text-white bg-teal-600 rounded-xl border border-solid border-black border-opacity-60 min-h-[50px] w-[315px] max-md:px-5">
          LOG IN
        </button>
        <div className="flex flex-col mt-11 w-full max-md:mt-10">
          <div className="flex gap-4 items-center w-full font-bold text-zinc-800">
            <div className="shrink-0 self-stretch my-auto h-px border border-solid border-stone-500 w-[121px]" />
            <div className="self-stretch my-auto">Or Log In With</div>
            <div className="shrink-0 self-stretch my-auto h-px border border-solid border-stone-500 w-[121px]" />
          </div>
          <button type="button" className="flex gap-3 items-center self-center px-6 py-2.5 mt-12 max-w-full text-black whitespace-nowrap rounded-lg border border-black border-solid bg-neutral-100 min-h-[44px] w-[140px] max-md:px-5 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6919f4a3a5fd8ed2c2f9e8fa541b890ae7b41a9fc2823234ab91d4eea69db4f9?placeholderIfAbsent=true&apiKey=cbe919a00bae4f998c1324ba2c8dcde9" alt="Google logo" className="object-contain shrink-0 self-stretch my-auto aspect-[0.96] w-[26px]" />
            <span className="self-stretch my-auto">Google</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;