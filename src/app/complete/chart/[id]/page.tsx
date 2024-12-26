"use client";
import exporting from "highcharts/modules/exporting";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import bellcurve from "highcharts/modules/histogram-bellcurve";
import highchartsBellCurve from "highcharts/modules/histogram-bellcurve";
import { ImSpinner } from "react-icons/im";
import { PiSpinnerGapThin } from "react-icons/pi";
import { FiCommand } from "react-icons/fi";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import sendEmail from "@/app/actions/sendEmail";
import {
  emailIsSent,
  personHasPaid,
  upadeteEmailSent,
  updateUserPaid,
} from "../../../../../prisma";
import { title } from "process";
import { data } from "@/lib/data";
import { calculateIQScore } from "@/lib/calculateIQScore";
import { getUserId } from "@/lib/getUserId";
import "../spinner.css";
interface Title {
  text: string;
  margin?: number; // 'margin' is optional
}

interface Axis {
  title: Title;
  alignTicks: boolean;
  visible: boolean;
  opposite?: boolean; // 'opposite' is optional
}

interface ChartOptions {
  chart: {
    height: number;
    width: number;
    type: string;
    spacingBottom: number;
    spacingTop: number;
    spacingLeft: number;
    spacingRight: number;
  };
  title: {
    text: string;
    style: {
      fontSize: number;
      fontWeight: string;
    };
  };
  xAxis: Axis[];
  // Define other properties as necessary...
}

// Initialize bell curve module
// bellcurve(Highcharts);

if (typeof Highcharts === "object") {
  highchartsBellCurve(Highcharts); // Execute the bell curve module
}

// exporting(Highcharts);

// console.log("gotScore: ", userTestScore);
// the component
const BellCurve = () => {
  const router = useRouter();
  const [User_IQ, setUserIQ] = useState<number>(2);
  const [chartWidth, setChartWidth] = useState(600); //default
  const [roundedPercentage, setRoundedPercentage] = useState<string | number>();
  const [newArr, setNewArr] = useState<number[]>();
  const [loading, setLoading] = useState(false);

  const testScoreMin: number = 0;
  const testScoreMax: number = 20;
  const iqScoreMin: number = Math.min(...data);
  const iqScoreMax: number = 128;

  const [chartOptions, setChartOptions] = useState<any>();

  // useEffect(() => {
  //   const protectRoute = async () => {
  //     const userId = await getUserId();

  //     if (!userId) return;

  //     console.log("user i d: ", userId);
  //     const paymentStatus = await personHasPaid(userId);

  //     if (!paymentStatus) return;

  //     console.log("here.... usef: ", paymentStatus.paid);

  //     if (!paymentStatus.paid) {
  //       router.push(`/complete/payment/?userid=${userId}`);

  //       return;
  //     }

  //     setLoading(false);
  //     console.log("passed return statement");
  //   };

  //   protectRoute();
  // }, []);

  useEffect(() => {
    setChartOptions(() => {
      const screenWidth = window !== undefined ? window.innerWidth : 400;
      let initialWidth;
      if (screenWidth < 400) {
        initialWidth = 300;
      } else if (screenWidth < 600) {
        initialWidth = 400;
      } else if (screenWidth < 800) {
        initialWidth = 600;
      } else {
        initialWidth = 700;
      }

      return {
        chart: {
          height: 400,
          width: initialWidth,
          type: "line",
          spacingBottom: 50,
          spacingTop: 10,
          spacingLeft: 0,
          spacingRight: 0,
        },

        title: {
          text: "your IQ is " + User_IQ,
          style: {
            fontSize: 30,
            fontWeight: "bolder",
          },
        },

        plotOptions: {
          bellcurve: {
            sizeFactor: 0.5,
            lineWidth: 2,
            color: "red",
          },
        },

        legend: {
          enabled: false,
        },

        xAxis: [
          {
            title: {
              text: "Data",
            },
            alignTicks: false,
            visible: false,
          },
          {
            title: {
              margin: 20,
              text:
                "<h1>Your IQ is in the top " +
                roundedPercentage +
                "% <br> In a room of 1000 people you would be smarter than " +
                Math.round((1000 * (newArr?.length || 0)) / data.length) +
                " of them </h1>",
            },
            alignTicks: false,
            opposite: false,
          },
        ],

        yAxis: [
          {
            title: { text: "Data" },
            visible: false,
          },
          {
            title: { text: "Bell curve" },
            opposite: false,
            visible: false,
          },
        ],

        series: [
          {
            name: "Bell curve",
            type: "bellcurve",
            xAxis: 1,
            // yAxis: 1,
            baseSeries: 1,
            // zIndex: -1,

            zoneAxis: "x",
            zones: [
              {
                value: User_IQ,
                color: "rgb(255, 0, 0, 0.55)",
                fillColor: "rgb(255, 0, 0, 0.25)",
              },
              {
                color: "rgb(255, 0, 0, 0.55)",
                fillColor: "white",
              },
            ],
          },

          {
            name: "Data",
            type: "scatter",
            data: data,
            visible: false,
            accessibility: {
              exposeAsGroupOnly: true,
            },
            marker: {},
          },
        ],
        exporting: {
          enabled: true,
        },
      };
    });
  }, []);

  useEffect(() => {
    const getScore = localStorage.getItem("qs4test");
    const userTestScore = Number(getScore);

    const score = calculateIQScore(
      userTestScore,
      testScoreMin,
      testScoreMax,
      iqScoreMin,
      iqScoreMax
    );

    console.log("score: ", score);

    setUserIQ(20);

    const tempChartOptions = { ...chartOptions };

    localStorage.setItem("iqScoreFinal", JSON.stringify(score));

    // filter arr and get all the values that are lesser than user iq
    const newarrx = data.filter((value) => value < score);
    setNewArr(newarrx);

    // round up if percentage is above 1%, don't if it's below
    const percentage = (100 * newarrx.length) / data.length;
    //prettier-ignore
    const roundedPercentagex = percentage >= 1 ? Math.round(percentage) : percentage.toFixed(2);
    setRoundedPercentage(roundedPercentagex);

    setChartOptions((prevOptions: any) => ({
      ...prevOptions,
      title: {
        ...prevOptions.title,
        text: "your IQ is " + score,
      },
      xAxis: prevOptions.xAxis.map((axis: any, index: number) => {
        if (index === 1) {
          return {
            ...axis,
            title: {
              ...axis.title,
              text:
                "<h1>Your IQ is in the top " +
                roundedPercentagex +
                " percentile <br> In a room of 1000 people you would be smarter than " +
                Math.round((1000 * (newarrx?.length || 0)) / data.length) +
                " of them </h1>",
            },
          };
        }
        return axis;
      }),
    }));
  }, []);

  // let productIdString = localStorage.getItem("productId")!;
  // let productId: string = JSON.parse(productIdString);

  useEffect(() => {
    const updateChartWidth = () => {
      const screenWidth = window !== undefined ? window.innerWidth : 400;

      let newWidth: number;
      if (screenWidth < 400) {
        newWidth = 300;
        console.log("w: ", chartOptions.chart.width);
      } else if (screenWidth < 600) {
        console.log("medium");
        newWidth = 400;
      } else if (screenWidth < 800) {
        console.log("large");
        newWidth = 600;
      } else {
        console.log("xl");
        newWidth = 700;
      }
      setChartOptions((prevOptions: any) => ({
        ...prevOptions,
        chart: {
          ...prevOptions.chart,
          width: newWidth,
        },
      }));
    };

    if (window !== undefined) {
      window.addEventListener("resize", updateChartWidth);
    }

    return () => {
      if (window !== undefined) {
        window.removeEventListener("resize", updateChartWidth);
      }
    };
  }, []);

  // useEffect(() => {

  // },[])

  //   const navigate = useNavigate();

  useEffect(() => {
    const checkEmail = async () => {
      const userId = localStorage.getItem("userId-qtink-liia") || "none";

      if (userId == "none") {
        return;
      }

      const emailSent = await emailIsSent(userId);
      const userHasPaid = await updateUserPaid(userId);

      console.log("email sent: ", emailSent);

      if (!emailSent) {
        console.log("Email has been sent");
        await sendEmail({ type: "certificate", score: 10 }); //

        await upadeteEmailSent(userId);
      } else {
        console.log("email has been sent");
      }
    };

    checkEmail();
  }, []);
  return (
    <>
      <div className="h-screen w-full  my-chart  ">
        <div className="w-full h-4/5 flex justify-center items-center  mt-20 sm:mt-0">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
        {/* {productId === "price_1OQUl2GFwRQBDdF4N9lSVUcR" ? ( // testing
          // {productId == "price_1OQUl2GFwRQBDdF4N9lSVUcR" ? ( // production
          <div className=" flex justify-center  ">
            <Button
              onClick={(e) => {
                // navigate("/cert");
                router.push("/complete/chart/cert");
              }}
              className="bg-orange-500 hover:bg-red-600  border-none rounded-[5px] p-4 text-white text-white-300"
              size={"lg"}
            >
              Claim Certificate
            </Button>
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </>
  );
};

export default BellCurve;
