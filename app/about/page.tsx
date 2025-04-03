import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          About Our Agency
        </h1>

        <div className="mb-8">
          <img
            src="https://bas-ip.com/wp-content/uploads/2023/06/How-to-Build-a-Real-Estate-Team-1024x729.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <p className="text-lg mb-6">
          We are a new real estate agency founded by students from the
          University of Piraeus, combining fresh perspectives with academic
          excellence to revolutionize the property market.
        </p>

        <p className="text-lg mb-6">
          Our mission is to connect people with their dream properties using
          innovative technology and personalized service. We leverage our
          academic background in business and technology to provide a seamless
          real estate experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-blue-700">Our Vision</h3>
            <p>
              To transform the real estate industry with student-led innovation
              and sustainable practices.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-blue-700">Our Team</h3>
            <p>
              A diverse group of undergraduate and graduate students
              specializing in business, technology, and design.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-2 text-blue-700">
              Our Approach
            </h3>
            <p>
              We combine academic research with practical solutions to offer
              unique property experiences.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            Founded in 2023 by the talented students of the University of
            Piraeus, we're proud to bring academic excellence to the real estate
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
