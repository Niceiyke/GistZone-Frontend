import { Avatar, Button} from "flowbite-react";
import image from "../images/download.jpeg";
import IconsBtn from "../IconsBtn";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { FaRegComment, FaShareAlt } from "react-icons/fa";
FaRegComment

function PostCard() {
  return (
    <div>
      <div className="border-b-4 border-gray-300 rounded-md">
        <div className="mt-4 flex">
          <Avatar img={image} rounded={true} />
          <div className="ml-4">
            <div className="flex items-center">
              <h1 className="text-xl font-extrabold font-Poppins">
                David Iyke
              </h1>
              <Button className="ml-4 bg-primary hover:bg-green-800">
                Follow
              </Button>
            </div>
            <p className="text-sm font-medium font-Nunito">
              BA in Mathematics & Computer Science, Colby College (Graduated
              2006)
            </p>
          </div>
        </div>
        <div className="mt-2 ">
          <h1 className="text-xl font-extrabold font-Poppins">
            ROLE oF dJANGO iN FAT WEB Development
          </h1>
          <p className="text-lg text-gray-700 font-normal font-Poppins">
            Thanks to Mrs who helped me recover all my lost funds in forex and
            crypto trading including my profits, i was a big fool giving my hard
            earned money to greedy and scammed brokers, but am so happy i met
            Jane silva a honest woman who helped me recover all my lost funds,
            and she also gave me the right signal and platform to trade with,
            now am able to make $5000 weekly, and am very happy, that is why i
            cant stop testifying about her, if you are out there still
            experiencing failure trading in binary option, crypto and forex
            trading or you want to recover your lost funds trading in binary/
            forex trade i will advice you to reach out to
          </p>
          <img
            src="https://img.freepik.com/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419514.jpg?size=626&ext=jpg&ga=GA1.2.1189541369.1680967231"
            alt="post image"
          />
        </div>
        <div className="mt-4 mb-2 flex justify-between items-center">
          <div className="flex items-center bg-primary text-white rounded-md border-2 w-3/12">
            <button>
              <span className="flex items-center">
                <BiUpvote fontSize={30} />{" "}
                <p className="font-medium text-base font-Nunito pl-2">
                  10 Upvote
                </p>
              </span>
            </button>

            <button>
              <span className="flex items-center pl-4">
                <BiDownvote fontSize={30} />
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between  w-2/12 ml-auto mr-auto">
            <button className="flex items-center">
              <p className="pr-2">120</p>
              <FaRegComment fontSize={30} />
            </button>
            <button className="">
              <FaShareAlt fontSize={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
