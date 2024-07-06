// import { useEffect } from "react";
// import feather from "feather-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComp = () => {
  // useEffect(() => {
  //   feather.replace();
  // }, []);

  return (
    <footer className="bg-coffe">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start"></div>
          <a href="/" className="flex gap-2 justify-end">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
            {/* <i className="text-red-500 icon" data-feather="instagram"></i>
            <i className="text-red-500 icon" data-feather="instagram"></i>
            <i className="text-red-500 icon" data-feather="instagram"></i> */}
          </a>
          <p className="mt-5 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved. Xenon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
