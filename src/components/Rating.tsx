import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({rating}: {rating: number}) {
  return (
    <Stack spacing={10}>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
  );
}