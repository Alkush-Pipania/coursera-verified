import React from 'react';
import { CheckCircle } from 'lucide-react';
import { getUrlParam } from '../utils/urlParams';

const BadgeHeader = () => {
  const name = getUrlParam('name') || 'No Name Given';
  return (
    <div className="flex items-center  gap-4 px-28 py-4 bg-gray-100 border-b">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
      <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" className=" h-7 svg-inline--fa fa-user text-slate-600 fa-w-14 cr-badge-banner-image__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-700">
          This badge was issued to <a href="#" className="text-teal-700 hover:underline">{name}</a> on December 20, 2024
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-teal-700 hover:text-teal-800">
          <CheckCircle className="h-5 w-5" />
          Verify
        </button>
        <button className="px-4 py-2 flex items-center justify-between gap-x-2 text-teal-700 border border-teal-700 rounded hover:bg-teal-50">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="party-horn" className="svg-inline--fa h-4 fa-party-horn fa-w-16 ac-icon__image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 32a32 32 0 1 1 64 0A32 32 0 1 1 32 32zM448 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM167 153c-9.4-9.4-9.4-24.6 0-33.9l8.3-8.3c16.7-16.7 27.2-38.6 29.8-62.1l3-27.4C209.6 8.2 221.5-1.3 234.7 .1s22.7 13.3 21.2 26.5l-3 27.4c-3.8 34.3-19.2 66.3-43.6 90.7L201 153c-9.4 9.4-24.6 9.4-33.9 0zM359 311l8.2-8.3c24.4-24.4 56.4-39.8 90.7-43.6l27.4-3c13.2-1.5 25 8 26.5 21.2s-8 25-21.2 26.5l-27.4 3c-23.5 2.6-45.4 13.1-62.1 29.8L393 345c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zM506.3 8.5c8.6 10.1 7.3 25.3-2.8 33.8l-10 8.5c-14.8 12.5-33.7 19.1-53 18.6c-16.6-.4-30.6 12.4-31.6 29l-1.8 30c-2.5 42.5-38.3 75.3-80.8 74.2c-7.6-.2-15 2.4-20.7 7.3l-10 8.5c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l10-8.5c14.8-12.5 33.7-19.1 53-18.6c16.6 .4 30.6-12.4 31.6-29l1.8-30c2.5-42.5 38.3-75.3 80.8-74.2c7.6 .2 15-2.4 20.7-7.3l10-8.5c10.1-8.6 25.3-7.3 33.8 2.8zM59.3 452.7l86.9-32.6L91.9 365.8 59.3 452.7zm200.1-75l-125-125-23.9 63.8 85.1 85.1 63.8-23.9zM98.1 212.6c8-21.4 36.4-27.6 52.6-11.4L310.9 361.3c16.2 16.2 10 44.6-11.4 52.6L43.3 510C18 519.4-7.4 494 2 468.8L98.1 212.6z"></path></svg>
          Celebrate
        </button>
      </div>
    </div>
  );
};

export default BadgeHeader;