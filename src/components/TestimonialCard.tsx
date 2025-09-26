import React from 'react';

interface TestimonialCardProps {
  name: string;
  bandScore: string;
  review: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  bandScore,
  review,
  avatar,
}) => {
  return (
    <div className="bg-cool-gray-light p-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          className="h-16 w-16 rounded-full"
          src={avatar}
          alt={`${name}'s avatar`}
        />
        <div className="ml-4">
          <h4 className="text-lg font-bold text-deep-royal-blue">{name}</h4>
          <p className="text-warm-golden-amber">Band Score: {bandScore}</p>
        </div>
      </div>
      <p className="mt-4 text-charcoal-black">{review}</p>
    </div>
  );
};

export default TestimonialCard;