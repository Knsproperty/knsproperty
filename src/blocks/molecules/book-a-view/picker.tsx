import React from 'react';

interface Props {
    selectedDate: string,
    selectedHour: string,
    handleDateChange: any,
    handleHourChange: any
}

const ExcludeWeekendDatePicker: React.FC<Props> = ({
    selectedDate, selectedHour, handleDateChange, handleHourChange
}) => {

    const isWeekend = (date: Date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    const generateOptions = (
        start: number,
        end: number,
        step: number,
        formatter: (value: number) => string
    ) => {
        const options: JSX.Element[] = [];

        for (let i = start; i <= end; i += step) {
            const formattedValue = formatter(i);
            options.push(
                <option key={formattedValue} value={formattedValue}>
                    {formattedValue}
                </option>
            );
        }

        return options;
    };

    const generateDateOptions = () => {
        const options: JSX.Element[] = [];
        const currentDate = new Date();
        let currentDay = currentDate.getDay();

        while (options.length < 7) {
            if (!isWeekend(currentDate)) {
                const formattedDate = currentDate.toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                });

                options.push(
                    <option key={formattedDate} value={formattedDate}>
                        {formattedDate}
                    </option>
                );
            }

            currentDay += 1;
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return options;
    };

    const formatHour = (hour: number) => {
        if (hour === 0) {
            return '12AM';
        } else if (hour < 12) {
            return `${hour}AM`;
        } else if (hour === 12) {
            return '12PM';
        } else {
            return `${hour % 12}PM`;
        }
    };

    const generateHourOptions = () => {
        return generateOptions(8, 20, 1, formatHour);
    };

    return (
        <div className='grid md:grid-cols-2 py-2 gap-2'>
            <label className='bg-lightgray grid p-5 gap-1 border border-lightgreen rounded-md'>
                <span className='text-md font-light mr-2'>Select a date</span>
                <select className='border-2 border-lightgreen px-5 py-1 rounded-md text-sm' value={selectedDate} onChange={handleDateChange}>
                    {generateDateOptions()}
                </select>
            </label>
            <label className='bg-lightgray grid p-5 gap-1 border border-lightgreen rounded-md'>
                <span className='text-md font-light mr-2'>Select a time</span>
                <select className='border-2 border-lightgreen px-5 py-1 rounded-md text-sm' value={selectedHour} onChange={handleHourChange}>
                    {generateHourOptions()}
                </select>
            </label>
        </div>

    );
};

export default ExcludeWeekendDatePicker;
