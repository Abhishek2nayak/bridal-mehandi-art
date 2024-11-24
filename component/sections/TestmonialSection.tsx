import React from 'react';

type TestimonialProps = {
    name: string;
    feedback: string;
    image: string;
    rating: number; // 1 to 5 stars
};

const Testimonial: React.FC<TestimonialProps> = ({ name, feedback, rating }) => {
    return (
        <div className="bg-lightYellow rounded-lg shadow-md p-4 max-w-md mx-auto">
            {/* User Image */}
            <div className="flex items-center flex-wrap gap-4">
                {/* <div className="w-16 h-16 rounded-full border-4 border-yellow-300 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <div>
                    <h3 className="text-lg font-semibold text-darkBrown">{name}</h3>
                    {/* Star Rating */}
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={index < rating ? "#FFD700" : "#E4E4E7"} // Gold for filled stars, gray for empty
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.12 6.517a1 1 0 00.95.69h6.688c.969 0 1.371 1.24.588 1.81l-5.396 3.916a1 1 0 00-.364 1.118l2.12 6.517c.3.921-.755 1.688-1.54 1.118l-5.396-3.916a1 1 0 00-1.175 0l-5.396 3.916c-.785.57-1.84-.197-1.54-1.118l2.12-6.517a1 1 0 00-.364-1.118L2.41 11.944c-.783-.57-.38-1.81.588-1.81h6.688a1 1 0 00.95-.69l2.12-6.517z"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feedback */}
            <p className="mt-4 text-dark italic">"{feedback}"</p>
        </div>
    );
};

export default Testimonial;
