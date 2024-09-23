// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "./ui/button";
import {
  CalendarDays,
  ChartNoAxesColumn,
  ChevronDown,
  // LineChart,
  MessageCircleQuestion,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Avatar, AvatarImage } from "./ui/avatar";
import Navbar from "./shared/Navbar";
// import { Line } from "react-chartjs-2";

export const description = "A radial chart with text";

const chartData = [
  { browser: "chrome", visitors: 100, fill: "#1D4ED8" },
  { desktop: 186 },
  { desktop: 305 },
  { desktop: 237 },
  { desktop: 73 },
  { desktop: 209 },
  { desktop: 214 },
];

const lineChartData = [
  { desktop: 6 },
  { desktop: 45 },
  { desktop: 45 },
  { desktop: 90 },
  { desktop: 90 },
  { desktop: 135 },
  { desktop: 135 }
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-4))",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

const Dashboard = () => {
  return (
    <div className="bg-violet-100">
      
      <div className="flex items-center justify-between mx-20 mt-2">
        {/* Left Group of Buttons */}
        <div className="flex items-center">
          <div>
            <Button variant="outline">
              <CalendarDays className="w-4 h-6 mr-2" />
              This Year
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
          <div className="mx-3">
            <Button variant="outline">
              Location
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
          <div>
            <Button variant="outline">
              Status
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
        </div>

        {/* Right Group of Buttons */}
        <div className="flex items-center space-x-3">
          <div className="my-5 mx-3">
            <Button variant="outline" className="bg-blue-700 text-white">
              Create Order
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
          <div className="mx-3">
            <Button variant="outline" className="bg-blue-700 text-white">
              + Add Customer
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
          <div>
            <Button variant="outline" className="bg-blue-700 text-white">
              + Add Service Provider
              <ChevronDown className="h-4 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-20 mt-4 ">
        <div className="grid grid-flow-col gap-4">
          <div className="flex-1 min-w-[225px]">
            <Card className="h-[200px] flex flex-col">
              {/* Base card */}
              <CardHeader className="mb-2">
                <div className="flex items-center justify-between">
                  <div className="relative inline-block p-2 bg-blue-100 rounded-full">
                    <ChartNoAxesColumn className="text-pink-700" />
                  </div>
                  <div>
                    <CardTitle className="font-light text-sm">
                      Total Sales
                    </CardTitle>
                    {/* Adjust font size */}
                    <CardDescription className="font-bold text-2xl text-black">
                      Rs. xxx.xx
                    </CardDescription>
                  </div>

                </div>
                <div className="flex w-full h-1">
                  <div className="w-full bg-gray-400"></div>
                </div>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 mt-4 w-[185px] h-[160px] space-x-4">
                    <div className="w-[120px] h-[200px] mt-4">
                      <ChartContainer config={chartConfig}>
                        <LineChart
                          data={lineChartData}
                          margin={{ left: 25, right: 25 }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="#F59E0B"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                              r: 6,
                            }}
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                    <div className="align-top text-black">
                      <span className="text-yellow-500">+5%</span> more <br /> from last week
                    </div>
                  </div>

                </CardContent>
              </CardHeader>
            </Card>
            <div className="flex-1 min-w-[150px] max-w-[200px] my-4">
              <Card className="h-[300px] p-4 flex flex-col">
                <CardHeader className="mb-2 flex items-center">
                  <CardTitle className="font-bold text-lg text-black">
                    Total Orders
                  </CardTitle>
                  <CardContent>
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto" // Remove `aspect-square` and `max-h` for more direct control
                    >
                      <div style={{ width: "150px", height: "150px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <RadialBarChart
                            data={chartData}
                            startAngle={-45}
                            endAngle={230}
                            innerRadius={50}
                            outerRadius={70}
                          >
                            <PolarGrid
                              gridType="circle"
                              radialLines={false}
                              stroke="none"
                            />

                            <RadialBar
                              dataKey="visitors"
                              background
                              cornerRadius={10}
                            />
                            <PolarRadiusAxis
                              tick={false}
                              tickLine={false}
                              axisLine={false}
                            >
                              <Label
                                content={({ viewBox }) => {
                                  if (
                                    viewBox &&
                                    "cx" in viewBox &&
                                    "cy" in viewBox
                                  ) {
                                    return (
                                      <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                      >
                                        <tspan
                                          x={viewBox.cx}
                                          y={viewBox.cy}
                                          className="text-sm font-light"
                                        >
                                          {"Total Order"}
                                        </tspan>
                                        <tspan
                                          x={viewBox.cx}
                                          y={(viewBox.cy || 0) + 16}
                                          className="text-lg text-black font-bold"
                                        >
                                          XX,XXX
                                        </tspan>
                                      </text>
                                    );
                                  }
                                }}
                              />
                            </PolarRadiusAxis>
                          </RadialBarChart>
                        </ResponsiveContainer>
                      </div>
                    </ChartContainer>
                  </CardContent>

                </CardHeader>
                <div className="flex items-center w-full h-10">
                  <div className="w-7 h-1 bg-blue-700"></div>

                  <div className="flex-grow"></div>

                  <div>
                    <div className="text-sm">Completed Orders</div>
                    <div className="font-bold text-xl text-black">x,xxx,xxx</div>
                  </div>
                </div>

              </Card>
              <div className="flex-1 min-w-[723px] max-w-[465px] my-4">
                <Card className="h-[220px] flex flex-col">
                  <CardHeader className="mb-2">
                    <div className="flex items-center justify-between">
                      <div> <CardTitle className="font-bold text-lg text-black">Updates (10)</CardTitle>
                      </div>
                      <div className="relative inline-block bg-blue-100">
                        <Button className="bg-transparent border-none text-voilet-600 underline cursor-pointer hover:text-voilet-800">View All</Button>
                      </div>
                    </div>
                    <textarea
                      className="bg-pink-100 border-2 border-pink-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                      rows="3"
                      readOnly // Makes the textarea non-editable
                      value={`Title of the update\n\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Quis praesentium, quia nisi.`}
                    />
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[150px]">
            <Card className="h-[200px] flex flex-col">
              <CardHeader className="mb-2">
                <div className="flex items-center justify-between">
                  <div className="relative inline-block p-2 bg-blue-100 rounded-full">
                    <UserRound className="text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="font-light text-sm">
                      Total Customers
                    </CardTitle>

                    <CardDescription className="font-bold text-2xl text-black">
                      xxxx
                    </CardDescription>
                  </div>
                </div>
                <div className="flex w-full h-1">
                  <div className="w-full bg-gray-400"></div>
                </div>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 mt-4 w-[200px] h-[160px] space-x-2">
                    <div className="w-[120px] h-[200px] mt-4">
                      <ChartContainer config={chartConfig}>
                        <LineChart
                          data={lineChartData}
                          margin={{ left: 25, right: 25 }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="#FF0000"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                              r: 6,
                            }}
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                    <div className="align-top text-black">
                      <span className="text-red-500">-10%</span> more <br /> from last week
                    </div>
                  </div>

                </CardContent>
              </CardHeader>
            </Card>
            <div className="flex-1 min-w-[465px] max-w-[465px] my-4 mx-2">
              <Card className="h-[300px] flex flex-col">
                <CardHeader className="mb-2 flex my-5">
                  <CardTitle className="font-bold text-lg text-black">
                    Sector Performance
                  </CardTitle>
                  <CardContent className="my-1 ml-4">
                    <ChartContainer config={chartConfig}>
                      <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={true}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis tickLine={false} axisLine={true} />

                        <Bar
                          dataKey="desktop"
                          fill="var(--color-desktop)"
                          radius={2}
                        />

                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex-1 min-w-[225px]">
            <Card className="h-[200px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mx-4">
                  <div className="relative inline-block p-2 bg-blue-100 rounded-full">
                    <ShoppingCart className="text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="font-light text-sm">
                      Total Orders
                    </CardTitle>
                    <CardDescription className="font-bold text-2xl text-black">
                      xxxx
                    </CardDescription>
                  </div>
                </div>
                <div className="flex w-full h-1">
                  <div className="w-full bg-gray-400"></div>
                </div>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 mt-4 w-[185px] h-[160px] space-x-4">
                    <div className="w-[120px] h-[200px] mt-4">
                      <ChartContainer config={chartConfig}>
                        <LineChart
                          data={lineChartData}
                          margin={{ left: 25, right: 25 }}
                        >
                          <CartesianGrid vertical={false} />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="#00FF00"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                              r: 6,
                            }}
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                    <div className="align-top text-black">
                      <span className="text-green-500">+5%</span> more <br /> from last week
                    </div>
                  </div>

                </CardContent>
              </CardHeader>
            </Card>
          </div>
          <div className="flex-1 min-w-[550px]">
            <Card className="h-[750px] p-4 flex flex-col">
              <CardHeader className="mb-2">
                <div className="flex items-center">
                  <div>
                    <MessageCircleQuestion className="text-orange-600 mx-4" />
                  </div>
                  <div className="mx-4">
                    <CardTitle className="font-light text-sm">
                      Total tickets
                    </CardTitle>
                    <CardDescription className="font-bold text-xl text-black">
                      XXX
                    </CardDescription>
                  </div>
                  <div className="mx-60">
                    <Button
                      variant="outline"
                      className="bg-blue-700 text-white"
                    >
                      Raise a Ticket
                    </Button>
                  </div>
                </div>
                <div className="flex w-full h-1">
                  <div className="w-2/3 bg-yellow-500"></div>
                  <div className="w-1/3 bg-gray-400"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div> <CardTitle className="font-bold text-lg text-black">Pending Tickets (03)</CardTitle>
                  </div>
                  <div className="relative inline-block bg-blue-100">
                    <Button className="bg-transparent border-none text-voilet-600 underline cursor-pointer hover:text-voilet-800">View All</Button>
                  </div>
                </div>
                <div className="shadow-lg p-4 bg-white rounded-md">
                  <div className="flex items-center justify-between space-y-10">
                    <div className="mt-8"> <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar></div>
                    <div>
                      09876543 <br />
                      Name of the Raiser
                    </div>
                    <div>
                      <textarea
                        className="bg-pink-100 border-2 border-pink-500 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 w-36 py-1 px-2 h-8 overflow-hidden"
                        readOnly // Makes the textarea non-editable
                        value={`Technical Error`}
                      />
                    </div>
                    <div>
                      <textarea
                        className="bg-purple-100 border-2 border-purple-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 w-32 py-1 px-4 h-8 overflow-hidden"
                        readOnly // Makes the textarea non-editable
                        value={`Healthcare`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mx-1 font-medium text-lg text-black mt-4">
                      I am facing technical issue during the Signup process
                    </div>
                    <div className="mx-1 font-light text-sm text-black">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore dolorum fugit tempora atque! Voluptatibus, doloribus accusantium ullam natus, doloremque eum nulla autem minima culpa nisi fuga ea ratione suscipit.
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <textarea
                        className="bg-red-100 border-2 border-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 w-52 py-1 px-4 h-8 mx-1 overflow-hidden"
                        readOnly
                        value="Status - Acknowledged"
                      />
                    </div>
                  </div>
                </div>
                <div className="shadow-lg p-4 bg-white rounded-md">
                  <div className="flex items-center justify-between space-y-10">
                    <div className="mt-8"> <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar></div>
                    <div>
                      09876543 <br />
                      Name of the Raiser
                    </div>
                    <div>
                      <textarea
                        className="bg-pink-100 border-2 border-pink-500 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 w-36 py-1 px-2 h-8 overflow-hidden"
                        readOnly // Makes the textarea non-editable
                        value={`Technical Error`}
                      />
                    </div>
                    <div>
                      <textarea
                        className="bg-purple-100 border-2 border-purple-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 w-32 py-1 px-4 h-8 overflow-hidden"
                        readOnly // Makes the textarea non-editable
                        value={`Healthcare`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mx-1 font-medium text-lg text-black mt-4">
                      I am facing technical issue during the Signup process
                    </div>
                    <div className="mx-1 font-light text-sm text-black">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore dolorum fugit tempora atque! Voluptatibus, doloribus accusantium ullam natus, doloremque eum nulla autem minima culpa nisi fuga ea ratione suscipit.
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <textarea
                        className="bg-blue-100 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 w-36 py-1 px-4 h-8 mx-1 overflow-hidden"
                        readOnly
                        value="Status - Open"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
