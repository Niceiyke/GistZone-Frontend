import { Card, Button } from "flowbite-react";

function RecentGist() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-green-600 text-center font-black ">
        {" "}
        Recent Gist{" "}
      </h1>
      <div className="mt-2">
        <Card className="mb-2">
          <h5 className="text-2xl font-bold tracking-tight text-green-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="">
            <span>10 comments </span>
            <span className="pl-4">50 participant</span>
            <span className="pl-4">520 Reaction</span>
          </div>
          <Button className="bg-green-900 hover:bg-primary">
            Join Gist
            <svg
              className="ml-2 -mr-1 h-4 w-4 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default RecentGist;
