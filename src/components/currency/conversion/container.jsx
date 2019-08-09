import React, { useState, useEffect, useRef } from 'react';
import { ConversionWidget } from './widget';

export const ConversionContainer = () => {
    const baseURL = 'http://data.fixer.io/api/latest';
    const fetchURL = useState(`${baseURL}?access_key=33b23d6e01efe285daf21f65e1124757`);
    // eslint-disable-next-line
    const [targetCurrency, setTargetCurrency] = useState({ key: "USD", symbol: "$", placeholder: "USD" });
    // eslint-disable-next-line
    const [originCurrency, setOriginCurrency] = useState({ key: "EUR", symbol: "€", placeholder: "EU" });

    const [originCurrencyValue, setOriginCurrencyValue] = useState();
    const [targetCurrencyValue, setTargetCurrencyValue] = useState();
    const [currencyRate, setCurrencyRate] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isCalculateButtonDisabled, setIsCalculateButtonDisabled] = useState(true);

    const [toggleRefresh, setToggleRefresh] = useState(false);

    const currencyRateRef = useRef();
    currencyRateRef.current = currencyRate;

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        const refreshInterval = setInterval( () => { setToggleRefresh(!toggleRefresh) } , 10000 );
        fetch(fetchURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                const dataMock = {
                    success: true,
                    rates: {
                        AMD: 4.282542,
                        AFN: 82.847739,
                        ALL: 125.93356,
                        USD: 1.11 + Math.random()
                    }
                }
                const fetchedCurrencyRate = targetCurrency.key in dataMock.rates ? dataMock.rates[targetCurrency.key].toFixed(4) : null;
                setCurrencyRate(fetchedCurrencyRate);
                calculateConversionHandler();
                setIsLoading(false);
            })
            .catch(err => {
                setErrorState();
            });
        return () => clearInterval(refreshInterval);
    }, [toggleRefresh]);

    const setErrorState = () => {
        setIsError(true);
        setIsLoading(false);
    };

    const calculateConversionHandler = () => {
        setTargetCurrencyValue(originCurrencyValue * currencyRateRef.current);
    };

    const changeCurrencyValueHandler = (values) => {
        setOriginCurrencyValue(values.floatValue);
        setIsCalculateButtonDisabled(!values);
    };

    return (
        <ConversionWidget converter={{
            isLoading,
            isError,
            currencyRate,
            targetCurrencyValue,
            originCurrencyValue,
            changeCurrencyValueHandler,
            calculateConversionHandler,
            isCalculateButtonDisabled,
            targetCurrency,
            originCurrency
        }} />
    );
}
