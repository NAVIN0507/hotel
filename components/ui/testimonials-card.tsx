import React from 'react';

const activities = [
  'JEEP SAFARI', 'TRUCKING', 'CAMPING', 'RAFTING',
  'PARAGLIDING', 'HIKING', 'CYCLING', 'BIRD WATCHING',
];

const InfiniteScrollCards = () => {
  const repeatedActivities = [...activities, ...activities]; // For looping

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-scroll">
        {repeatedActivities.map((item, index) => (
          <span
            key={index}
            className="inline-block bg-gray-100 text-gray-800 rounded-full px-4 py-2 mx-2 text-sm font-medium shadow-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollCards;
