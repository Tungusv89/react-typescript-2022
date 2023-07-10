import React from 'react';

interface ErrorMassegeProps {
    error: string
}

const ErrorMessage = ({error} :ErrorMassegeProps) => {
    return (
        <p className='text-center text-red-600'>{error}</p>
    );
};

export default ErrorMessage;