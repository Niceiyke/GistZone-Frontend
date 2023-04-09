import {BsPeopleFill} from 'react-icons/bs'
import{FaRegComment} from 'react-icons/fa'

function TopGist() {
  return (
    <div className="">
      <div className="mb-4 border-4 p-2 rounded-md">
        <h1 className="text-lg text-gray-700 font-Poppins font-bold ">
          Why Your Are Still Single And No One Seems To Notice
        </h1>
        <div className="bg-primary text-center flex justify-evenly">
          <span className="text-lg text-white font-Nunito font-bold  flex items-center">
            200 <BsPeopleFill fontSize={30} className="ml-4" />
          </span>
          <span className="text-lg text-white font-Nunito font-bold pl-4 flex items-center">
            5000 <FaRegComment fontSize={30} className="ml-4" />
          </span>
        </div>
      </div>
      <div className="mb-4 border-4 p-2 rounded-md">
        <h1 className="text-lg text-gray-700 font-Poppins font-bold ">
          Why Your Are Still Single And No One Seems To Notice
        </h1>
        <div className="bg-primary text-center flex justify-evenly">
          <span className="text-lg text-white font-Nunito font-bold  flex items-center">
            200 <BsPeopleFill fontSize={30} className="ml-4" />
          </span>
          <span className="text-lg text-white font-Nunito font-bold pl-4 flex items-center">
            5000 <FaRegComment fontSize={30} className="ml-4" />
          </span>
        </div>
      </div>
      <div className="mb-4 border-4 p-2 rounded-md">
        <h1 className="text-lg text-gray-700 font-Poppins font-bold ">
          Liverpool vs Arsenal who wins
        </h1>
        <div className="bg-primary text-center flex justify-evenly">
          <span className="text-lg text-white font-Nunito font-bold  flex items-center">
            674 <BsPeopleFill fontSize={30} className="ml-4" />
          </span>
          <span className="text-lg text-white font-Nunito font-bold pl-4 flex items-center">
            1200 <FaRegComment fontSize={30} className="ml-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopGist;
