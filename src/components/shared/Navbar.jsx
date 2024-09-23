import {
  Bell,
  ChevronDown,
  House,
  Menu,
  MessageCircleQuestion,
  MessageSquareMore,
  MessageSquareText,
  Settings,
  Tv,
} from "lucide-react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import Dashboard from "../Dashboard";
const Navbar = () => {
  return (
    <div>
      <div className="flex h-screen">
        {/* Left Nav Bar */}
        <div className="w-20 bg-white text-white flex flex-col items-start p-2">
          <div className="p-2 flex flex-col items-center">
            <Button variant="ghost" className="p-2 bg-transparent text-black">
              <Menu className="h-8 w-8" />
            </Button>
          </div>
          <div className="my-14">
            <div className="my-2 p-2 flex flex-col items-center">
              <Button variant="ghost" className="p-2 bg-transparent text-black">
                <House className="h-6 w-6" />
              </Button>
            </div>
            <div className="my-2 p-2 flex flex-col items-center">
              <Button variant="ghost" className="p-2 bg-transparent text-black">
                <Tv className="h-6 w-6" />
              </Button>
            </div>
            <div className="my-2 p-2 flex flex-col items-center">
              <Button variant="ghost" className="p-2 bg-transparent text-black">
                <MessageSquareText className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="my-80">
            <div className="my-2 p-2 flex flex-col items-center">
              <Button variant="ghost" className="p-2 bg-transparent text-black">
                <MessageCircleQuestion className="h-6 w-6" />
              </Button>
            </div>
            <div className="my-2 p-2 flex flex-col items-center">
              <Button variant="ghost" className="p-2 bg-transparent text-black">
                <Settings className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="bg-white flex-grow">
          {/* Adjust margin to move the bar down */}
          <div className="flex items-center justify-between mx-20 max-w-7xl h-20 mt-6">
            {/* Search Bar on the Left */}
            <div className="flex w-[350px] border border-gray-200 pl-6 rounded-md items-center gap-4 h-12">
              <div className="p-2">
                <Search className="h-6 w-6 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search anything..."
                className="outline-none border-none w-full h-full"
              />
            </div>

            {/* Profile and Icons on the Right */}
            <div className="flex items-center gap-2">
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="p-2 bg-transparent text-black"
                >
                  <div className="relative inline-block p-2 bg-blue-200 rounded-full">
                    <span className="absolute top-0 right-0 text-sm">20</span>
                    <Bell className="h-5 w-5" /></div>
                </Button>
              </div>
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="p-2 bg-transparent text-blue"
                >
                  <div className="relative inline-block p-2 bg-blue-200 rounded-full">
                    <span className="absolute top-0 right-0 text-sm">20</span>
                    <MessageSquareMore className="h-5 w-5" /></div>
                </Button>
              </div>
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="p-2 bg-transparent text-red-600"
                >
                  <div className="relative inline-block p-2 bg-red-200 rounded-full">
                    <span className="absolute top-0 right-0 text-sm">20</span>
                    <Settings className="h-5 w-5" /></div>
                </Button>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
              </Popover>
              <div>
                <h4 className="font-medium">Hi, Shivam Srivastava</h4>
              </div>
              <div className="p-2">
                <Button
                  variant="ghost"
                  className="p-2 bg-transparent text-black"
                >
                  <ChevronDown className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
          <Dashboard />     
        </div>
      </div>
    </div>
  );
};

export default Navbar;
