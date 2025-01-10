import React from 'react';

interface ValuesCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
}

const ValuesCard: React.FC<ValuesCardProps> = ({ title, icon, description }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg max-w-sm mx-auto">
            <div className="text-4xl mb-4">{icon}</div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

export default ValuesCard;