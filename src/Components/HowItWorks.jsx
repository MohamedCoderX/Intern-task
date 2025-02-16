import React from "react";

const HowItWorks = () => {
  const steps = [
    { id: "01", title: "Collect Ideas", desc: "Nulla vitae elit libero pharetra augue dapibus." },
    { id: "02", title: "Data Analysis", desc: "Vivamus sagittis lacus vel augue laoreet." },
    { id: "03", title: "Finalize Product", desc: "Cras mattis consectetur purus sit amet." },
  ];

  return (
    <section className="container mx-auto px-6 md:px-16 py-16">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Here are 3 working steps to organize our business projects.
        </h2>
      </div>

      {/* Content Section */}
      <div className="mt-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-gray-800">How It Works?</h3>
          <p className="text-gray-600 mt-4">
            Find out everything you need to know and more about how we create our business process models.
          </p>
          <p className="text-gray-600 mt-4">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Steps Section */}
        <div className="md:w-1/2 flex flex-col space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 text-xl font-bold rounded-full">
                {step.id}
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
