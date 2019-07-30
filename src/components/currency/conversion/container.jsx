import React, { useState, useEffect } from 'react';
import { ConversionWidget } from './widget';

export const ConversionContainer = () => {
    // eslint-disable-next-line
    const [targetCurrency, setTargetCurrency] = useState({ key: "USD", symbol: "$" });
    // eslint-disable-next-line
    const [originCurrency, setOriginCurrency] = useState({ key: "EUR", symbol: "€" });
    const [currency, setCurrency] = useState();
    const [convertedCurrency, setConvertedCurrency] = useState();
    const [isCalculateButtonDisabled, setIsCalculateButtonDisabled] = useState(true);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const baseURL = 'http://data.fixer.io/api/latest';
    const fetchURL = useState(`${baseURL}?access_key=33b23d6e01efe285daf21f65e1124757`);
    const [fetchedCurrency, setFetchedCurrency] = useState();

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetch(fetchURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                //TODO REMOVE COMMENTS WHEN THE API works. Limited monthly usage..
                const dataMock = {
                    success: true,
                    rates: {
                        AMD: 4.282542,
                        AFN: 82.847739,
                        ALL: 125.93356,
                        USD: 1.11 + Math.random()
                    }
                }
                console.log(dataMock);
                if (!dataMock.success || !(targetCurrency.key in dataMock.rates)) {
                    setErrorState();
                    return;
                }
                setFetchedCurrency(dataMock.rates[targetCurrency.key]);
                calculateConversionHandler();
                setIsLoading(false);
            })
            .catch(err => {
                setErrorState();
            });
    }, []);

    const setErrorState = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const calculateConversionHandler = () => {
        setConvertedCurrency(currency * fetchedCurrency);
    };

    const changeCurrencyValueHandler = (values) => {
        setCurrency(values.floatValue);
        setIsCalculateButtonDisabled(!values);
    };

    return (
        <ConversionWidget converter={{
            isLoading,
            isError,
            fetchedCurrency,
            convertedCurrency,
            currency,
            changeCurrencyValueHandler,
            calculateConversionHandler,
            isCalculateButtonDisabled,
            targetCurrency,
            originCurrency
        }} />
    );
}
