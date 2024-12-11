

import { useState } from "react";
import Footer from "../components/footer";
import Industries from "../components/industries";

export default function FAQs() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-full h-[430px] object-cover"
        src="https://airpix.in/assets/images/surveying_mapping/banner-1.jpg"
        alt="Banner"
      />

      <div className="flex justify-center mt-10 text-3xl font-semibold">
        <h1>FAQ</h1>
      </div>

      <div className="bg-slate-200 mt-5 w-full max-w-3xl mx-auto rounded-lg shadow-md">
        {[
          {
            question: "Why drone survey?",
            answer: (
              <>
                <div>
                  Drone Surveys allow you to collect detailed and accurate
                  information from areas that are inaccessible to you.
                  High-resolution orthomosaics & detailed Three Dimensional (3D)
                  representations are provided by drones. Drone Surveys add vital
                  essential data to facilitate well-informed decision-making
                  during the preliminary stages of construction site mapping,
                  surveying, or inspection of infrastructure.
                </div>
                <br />
                <div>
                  It ensures that users sustain control and avoid failure to
                  secure maximum goodwill of their assets. Wind Turbine Blades,
                  highways, and transmission lines are frequently inspected
                  through drone technology. When compared to traditional
                  ‘at-height’ working, it decreases the major risk for the
                  workers during an inspection.
                </div>
              </>
            ),
            state: q1,
            setState: setQ1,
          },
          {
            question: "How accurate are Drone Survey results?",
            answer: (
              <>
                <div>
                  Drone surveys are quicker, more accurate, and also less
                  cost-expensive approach to the study. Drones include
                  high-resolution cameras and sensors that provide interactive
                  three Dimensional (3D) representations of the earth surface.
                </div>
                <br />
                <div>
                  Drone Surveys provide vital information that empowers competent
                  arrangements from building site mapping, surveying, and
                  inspection to infrastructure design and maintenance. Drone
                  surveys offer a consistent approach to transmission tower
                  surveying and powerline surveying. They dramatically reduce
                  risk and maximize safety results by eliminating regular
                  'at-height' functions.
                </div>
              </>
            ),
            state: q2,
            setState: setQ2,
          },
          {
            question: "Which Drone technology do we use?",
            answer: (
              <div>
                Since drones have distinct uses, they have become an integral
                part of numerous private and governmental organizations. We have
                made our position in a number of industries through fast,
                reliable, and secure deliveries. Catering to Government projects
                and mapping agricultural land surveys, our technology can do it
                all. Using advanced survey drones, artificial intelligence, and
                a variety of advanced sensors such as thermal, RGB, Lidar, etc.
                we have broadened our drone technology to several.
              </div>
            ),
            state: q3,
            setState: setQ3,
          },
          {
            question: 'What does "Drone photography" mean?',
            answer: (
              <div>
                Drone photography is a technique that involves photographing/mapping
                the surface of the Earth. They are photographed by cameras mounted
                on the Drone. Aerial photography is a widespread technique used by
                advertising agencies. Aerial photography uses film variations, focal
                lengths, overlaps, and other features to create many types of images
                at different heights.
              </div>
            ),
            state: q4,
            setState: setQ4,
          },
          {
            question: "What weather is suitable for flying Drones?",
            answer: (
              <div>
                Drones can easily capture high-quality photographs and videos at
                varying heights and in different climates. Most flying drones can
                operate in winds of up to 22 MPH. Few drones can chart the drizzle,
                the fog, and even the snow. Weather may make or break the quality of
                the aerial photograph taken. The climate in India is rarely a
                hindrance to our ventures. Drones can fly even in the cold; however,
                flying time also decreases. The motors supplied to most drones will
                work in light rain as long as the flight controller does not come
                into contact with the rain.
              </div>
            ),
            state: q5,
            setState: setQ5,
          },
          {
            question: "What type of data do we capture?",
            answer: (
              <div>
                We provide quick, reliable, and accurate drone data for various kinds
                of industry. Our company specializes in the capture of data from
                drone surveying/mapping, aerial inspection and analysis, creative
                atmospheric data, and UAV data processing. Drone data collected
                through our materials can be reproduced in various forms such as
                orthomosaic maps, 3D Point Cloud, DEM, DTM, DSM, Contour maps etc.
              </div>
            ),
            state: q6,
            setState: setQ6,
          },
          {
            question: "What is Aerial LiDAR?",
            answer: (
              <>
                <div>
                  Aerial LiDAR is an aerial mapping and surveying technology that uses
                  GPS-monitored aerial Drone/UAV equipped with on-board positional and
                  sensors. After post-flight production processes, the acquired Lidar
                  Map data is used to know the precise elevation and geospatial
                  location of features on the earth’s surface.
                </div>
                <br />
                <div>
                  Lidar data is an accurate and efficient tool for producing
                  three-dimensional topographic aerial maps and highly accurate aerial
                  surveys of both land and man-made components. We have developed a
                  custom aerial Lidar Mapping and surveying production workflow which
                  adheres to the specifications outlined in Base Specification
                  Guidelines.
                </div>
              </>
            ),
            state: q7,
            setState: setQ7,
          },
        ].map(({ question, answer, state, setState }, index) => (
          <div key={index} onClick={() => setState(!state)} className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-slate-400 transition duration-300">
            <span className="font-semibold">{question}</span>
            {state && <div className="mt-5 text-gray-700">{answer}</div>}
          </div>
        ))}
      </div>

      
      <Footer />
    </div>
  );
}
