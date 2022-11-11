import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <Button
          key={nanoid()}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      );
    })}
  </>
);

Event.propTypes = {
  numberGood: PropTypes.number.isRequired,
  numberNeutral: PropTypes.number.isRequired,
  numberBad: PropTypes.number.isRequired,
};
