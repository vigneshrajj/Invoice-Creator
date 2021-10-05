import React from 'react';
import './Filter.scss';

const SubFilter = ({ options, label }) => (
    <>
        <button class='w-full text-left flex items-center outline-none focus:outline-none'>
            <span class='pr-1 flex-1'>{label}</span>
            <span class='mr-auto'>
                <svg
                    class='fill-current h-4 w-4
            transition duration-150 ease-in-out'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
            </span>
        </button>
        <ul
            class='bg-gray-800 border-2 border-gray-600 rounded absolute top-0 left-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  '
        >
            {options.map((lab) => (
                <li class='rounded-sm px-3 py-1 hover:bg-gray-700'>{lab}</li>
            ))}
        </ul>
    </>
);

const FilterOption = ({ children }) => (
    <li class='rounded-sm px-3 py-1 hover:bg-gray-700'>{children}</li>
);

const Filter = () => (
    <div class='group inline-block'>
        <button class='outline-none focus:outline-none text-white px-3 py-1 h-full bg-gray-800 rounded-sm flex items-center min-w-32'>
            <span class='pr-1 font-semibold flex-1'>Filters</span>
            <span>
                <svg
                    class='fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
            </span>
        </button>
        <ul
            class='bg-gray-800 border-2 border-gray-600 text-white select-none rounded transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32'
        >
            <FilterOption>
                <SubFilter
                    options={['This year', 'This month', 'Last 7 days']}
                    label='Date Added'
                />
            </FilterOption>
            <FilterOption>
                <SubFilter
                    options={['Overdue', 'Pending', 'Paid']}
                    label='Status'
                />
            </FilterOption>
        </ul>
    </div>
);

export default Filter;
