// import React from "react";
// import {
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const data = [
//   { name: "Mar", value: 110 },
//   { name: "Mar", value: 100 },
//   { name: "W2", value: 105 },
//   { name: "W3", value: 90 },
//   { name: "W4", value: 98 },
//   { name: "W5", value: 90 },
//   { name: "W6", value: 97 },
//   { name: "Apr", value: 90 },
//   { name: "W1", value: 92 },
//   { name: "W2", value: 93 },
//   { name: "W3", value: 90 },
//   { name: "W4", value: 85 },
//   { name: "May", value: 83 },
//   { name: "W1", value: 75 },
//   { name: "W2", value: 70 },
//   { name: "W3", value: 73 },
//   { name: "Jun", value: 70 },
//   { name: "W1", value: 60 },
//   { name: "W2", value: 59 },
//   { name: "W3", value: 58 },
//   { name: "W4", value: 50 },
//   { name: "jul", value: 48 },
//   { name: "W1", value: 46 },
//   { name: "W2", value: 42 },
//   { name: "Aug", value: 40 },
// ];

// const App = () => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#1e1e1e",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//         width: "10vh"
//       }}
//     >
//       <ResponsiveContainer width="80%" height="80%">
//         <AreaChart data={data}>
//           {/* Solid Grid Lines */}
//           <CartesianGrid stroke="#444" />

//           {/* X and Y Axes */}
//           <XAxis dataKey="name" tick={{ fill: "#aaa" }} />
//           {/* <YAxis tick={{ fill: "#aaa" }} /> */}

//           {/* Tooltip */}
//           <Tooltip
//             contentStyle={{ backgroundColor: "#333", border: "none" }}
//             labelStyle={{ color: "#fff" }}
//             itemStyle={{ color: "#fff" }}
//           />

//           {/* Gradient fill */}
//           <defs>
//             <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#ff4d4d" stopOpacity={0.8} />
//               <stop offset="100%" stopColor="#ff4d4d" stopOpacity={0} />
//             </linearGradient>
//           </defs>

//           {/* Area Chart */}
//           <Area
//             type="monotone"
//             dataKey="value"
//             stroke="#ff4d4d"
//             strokeWidth={2}
//             fill="url(#gradientFill)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default App;















import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mar", value: 110 },
  { name: "Apr", value: 80 },
  { name: "May", value: 90 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 55 },
  { value: 70 },
];

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <ResponsiveContainer width="80%" height="80%">
        <AreaChart data={data}>
          {/* Solid Grid Lines */}
          <CartesianGrid stroke="#444" />

          {/* X-Axis */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#aaa" }}
            interval={0} // Show all 6 labels
          />

          {/* Y-Axis with 7 Ticks for 6 Boxes */}
          <YAxis
            tick={{ fill: "#aaa" }}
            ticks={[30, 60, 90, 120]} // 7 ticks for 6 boxes
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />

          {/* Gradient Fill */}
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff4d4d" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#ff4d4d" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Area Chart */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff4d4d"
            strokeWidth={2}
            fill="url(#gradientFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
