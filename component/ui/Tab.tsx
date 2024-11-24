
// components/Tabs.tsx
import { MehandiType } from '@/app/api';
import React, { useEffect, useState } from 'react';

interface TabProps {
    name: string;
}

const Tab: React.FC<TabProps> = ({ name }) => {
    return (
        <div className="text-center p-3">
            <span className="text-white text-lg font-semibold">{name}</span>
        </div>
    );
};

const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`px-5 py-1  text-sm font-semibold transition-all duration-300 rounded-lg 
        ${isActive ? 'bg-dark text-white' : 'bg-lightYellow text-gray-800 hover:bg-black hover:text-white'}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const Tabs = (
    { activeTab, onClick }: {
        activeTab: MehandiType,
        onClick: (type: MehandiType) => void
    }) => {
    const tabs = [
        'bridal',
        'baby_shower',
        'engegement',
        'arabic',
        'traditional',
        'leg',
        'party',
    ];

    return (
        <div className="max-w-2xl mx-auto py-10">
            {/* Tabs Header */}
            <div className="flex justify-center flex-wrap gap-5 space-x-4 mb-6">
                {tabs.map((tab: string) => (
                    <TabButton
                        key={tab}
                        label={tab.charAt(0).toUpperCase() + tab.slice(1).replace('_', ' ')}
                        isActive={tab === activeTab}
                        onClick={() => onClick(tab as MehandiType)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tabs;


