import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  backgroundColor: 'gray',
  border: 'none',
  color: 'black',
  padding: '1rem 2rem',
  borderRadius: '0.8rem',
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'black',
      cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
});
