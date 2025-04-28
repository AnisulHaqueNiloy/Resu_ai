import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Placeholder images (replace with actual image paths)

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote:
        "Using this CV builder was a game-changer for my job search. The templates are professional, and the step-by-step guidance made it incredibly easy to create a standout resume. I received more interview calls than ever before!",
      name: "Sunny Khan",
      title: "Marketing Manager",
      image:
        "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132067/static/erik-lucatero-d2msdujjl2g-unsplashjpg_1677132070_42397.jpg",
    },
    {
      quote:
        "I was struggling to present my diverse work experience effectively until I found this platform. The ability to customize sections and highlight key skills made all the difference. Highly recommended!",
      name: "Ajoy Das",
      title: "Senior Software Engineer",
      image:
        "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475528/static/erik-lucatero-d2msdujjl2g-unsplashhrd1_1740475524_60311.jpg",
    },
    {
      quote:
        "The recruiter-approved phrases and the clean design of the templates gave me the confidence to apply for higher-level positions. I landed my dream job within a month of using this CV builder. Thank you!",
      name: "Jebin Khan",
      title: "Project Lead",
      image:
        "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475544/static/erik-lucatero-d2msdujjl2g-unsplashxllv_1740475541_10974.jpg",
    },
    // Add more testimonials here
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
            Your Success, Our Inspiration
          </h2>
          <p className="text-gray-600">
            Read what our satisfied clients have to say about their experience
            with our CV builder.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="bg-white rounded-lg shadow-md p-8 text-center relative">
                {/* Quote Icon */}
                <svg
                  className="absolute top-4 left-4 text-blue-500 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-24 h-24 object-cover mb-4"
                />
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-lg font-semibold text-blue-700">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
// const testimonials = [
//   {
//     id: 1,
//     text: "Resu AI helped me land my dream job!",
//     author: "John Doe",
//     image:
//       "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132067/static/erik-lucatero-d2msdujjl2g-unsplashjpg_1677132070_42397.jpg",
//   },
//   {
//     id: 2,
//     text: "The AI-powered suggestions were incredibly helpful and insightful.",
//     author: "Jane Smith",
//     image:
//       "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132067/static/prince-akachi-l3ihxodmyhq-unsplashjpg_1677132070_25995.jpg",
//   },
//   {
//     id: 3,
//     text: "Highly recommend Resu AI to anyone looking for a job.",
//     author: "David Lee",
//     image:
//       "https://res.cloudinary.com/dbyioi2qq/q_auto/v1677132065/static/aiony-haust-3tll_97hnjo-unsplashjpg_1677132070_98905.jpg",
//   },
//   {
//     id: 4,
//     text: "The resume templates are modern and professional looking.",
//     author: "Sarah Jones",
//     image:
//       "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475528/static/erik-lucatero-d2msdujjl2g-unsplashhrd1_1740475524_60311.jpg",
//   },
//   {
//     id: 5,
//     text: "Resu AI made the resume building process so much easier.",
//     author: "Michael Brown",
//     image:
//       "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475544/static/erik-lucatero-d2msdujjl2g-unsplashxllv_1740475541_10974.jpg",
//   },
//   {
//     id: 6,
//     text: "I received more interview calls after using Resu AI.",
//     author: "Emily Wilson",
//     image:
//       "https://res.cloudinary.com/dmuecdqxy/q_auto/v1740475562/static/erik-lucatero-d2msdujjl2g-unsplashzjtv_1740475560_71871.jpg",
//   },
// ];
