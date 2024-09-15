import React from 'react';

const Header = () => {
  const navItems = ['Home', 'About', 'Career', 'Dashboard', 'Appointment', 'Lab & Test', 'Doctors', 'Contact', 'Customer Care'];

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center w-full text-base font-medium text-black max-w-[1217px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec31377eb2e36ef63bf0778bce3344fbd5879da21c928408a8a313c420ff2783?placeholderIfAbsent=true&apiKey=cbe919a00bae4f998c1324ba2c8dcde9" alt="Company logo" className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[74px]" />
      <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {navItems.map((item, index) => (
          <a href={`#${item.toLowerCase().replace(' & ', '-')}`} key={index} className="self-stretch my-auto">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;