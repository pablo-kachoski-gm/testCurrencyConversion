import React from 'react';
import Style from 'styled-components';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const CalculateButton = Style.div`
    background-color: darkgrey; 
    color: ${props => props.disabled ? "grey" : "white"};
    width: calc(100px + 10vmin);
    padding: 2vh 2vw;
    margin: auto;
    font-size: calc(5px + 2vmin);

    &:hover{
        ${props => !props.disabled && "background-color: rgb(115,115,115);"} 
    }
`
const ConversionRateSection = Style.section`
    grid-row: 1;
`
const ConversionSection = Style.section`
    grid-row: 2;
`
const ActionsSection = Style.section`
    grid-row: 3;
`
const MainSection = Style.main`
    display: grid;
    grid-auto-rows: 1fr;
    align-items: center;
    background: #CCC;
    height: 40vh;
    border-bottom: 1vh solid rgb(120, 120, 120);
    border-top: 1vh solid rgb(120, 120, 120);
    margin: 0 0 5vh 0;
`
const ConversionInput = Style(NumberFormat)`
    margin: 0 1.5vw;
    padding: 1vh 8vw;
    text-align: center;
`
const LoadingContainer = Style.div`
    color: white;
    font-size: calc(5px + 2vmin);
    font-weight: bold;
`
const FeedbackContainer = Style.div`
    color: white;
    font-size: calc(5px + 2vmin);
    font-weight: bold;
`
const ConversionRateLabel = Style.div`
    color: white;
    font-size: calc(5px + 2vmin);
    font-weight: bold;
    margin-bottom: 1vh;
`
export const ConversionWidget = ({
    converter: {
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
    }
}) => {
    return (
        <MainSection>
            {isLoading ? (<LoadingContainer>Loading ...</LoadingContainer>) :
                isError ? <FeedbackContainer> Something went wrong </FeedbackContainer> :
                    currencyRate ?
                        (<>
                            <ConversionRateSection>
                                <ConversionRateLabel>Conversion Rate</ConversionRateLabel>
                                <ConversionInput
                                    thousandSeparator={true}
                                    prefix={targetCurrency.symbol}
                                    placeholder={targetCurrency.placeholder}
                                    decimalScale={4}
                                    value={currencyRate || ''}
                                    fixedDecimalScale={true}
                                    disabled />
                            </ConversionRateSection>
                            <ConversionSection>
                                <ConversionInput
                                    thousandSeparator={true}
                                    prefix={originCurrency.symbol}
                                    value={originCurrencyValue || ''}
                                    placeholder={originCurrency.placeholder}
                                    decimalScale={4}
                                    fixedDecimalScale={true}
                                    onValueChange={changeCurrencyValueHandler} />
                                <ConversionInput
                                    thousandSeparator={true}
                                    prefix={targetCurrency.symbol}
                                    placeholder={targetCurrency.placeholder}
                                    decimalScale={4}
                                    value={targetCurrencyValue || ''}
                                    fixedDecimalScale={true}
                                    disabled />
                            </ConversionSection>
                            <ActionsSection>
                                <CalculateButton
                                    onClick={isCalculateButtonDisabled ? undefined : calculateConversionHandler}
                                    disabled={(isCalculateButtonDisabled) ? 'disabled' : ''}>
                                    CALCULATE
                                </CalculateButton>
                            </ActionsSection>
                        </>) : <FeedbackContainer> No Results returned </FeedbackContainer>
            }
        </MainSection>
    );
}

ConversionWidget.propTypes = {
    converter: PropTypes.shape({
        changeCurrencyValueHandler: PropTypes.func,
        calculateConversionHandler: PropTypes.func,
        isCalculateButtonDisabled: PropTypes.bool,
        isError: PropTypes.bool,
        isLoading: PropTypes.bool,
        targetCurrencyValue: PropTypes.number,
        originCurrencyValue: PropTypes.number,
        currencyRate: PropTypes.number,
        targetCurrency: PropTypes.shape({
            key: PropTypes.string,
            symbol: PropTypes.string
        }),
        originCurrency: PropTypes.shape({
            key: PropTypes.string,
            symbol: PropTypes.string
        })
    }),
}

export default ConversionWidget;