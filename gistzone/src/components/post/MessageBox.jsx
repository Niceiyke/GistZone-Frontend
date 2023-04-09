import { Avatar, Textarea,FileInput,Label } from "flowbite-react";
import image from '../images/download.jpeg'
import {MdPermMedia} from 'react-icons/md'

function MessageBox() {
  return (
    <div className="border-primary border-b-4">
      <div className="">
        <div className="flex">
          <Avatar img={image} rounded={true} />
          <Textarea
            placeholder="What is on your mind?"
            rows={2}
            cols={2}
            required={true}
            className="ml-4 mb-2 "
          />
        </div>
        <div id="fileUpload">
          <div className="mb-2 block pl-14">
            <Label htmlFor="file" value={<MdPermMedia  fontSize={30} />} />
          </div>
          <FileInput id="file" className="hidden" />
        </div>
      </div>
    </div>
  );
}

export default MessageBox
