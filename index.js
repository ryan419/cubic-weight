const axios = require('axios');
const { empty, from } = require('rxjs');
const {
  expand, map, reduce, takeWhile
} = require('rxjs/operators');
const getAverageCubicWeight = require('./cubic-weight');

const baseUrl = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com';

const getProducts = (endPoint) => from(axios.get(`${baseUrl}${endPoint}`))
  .pipe(map(res => res.data));

const filterAirConditioner = (items) => items.filter(item => item.category === 'Air Conditioners');

getProducts('/api/products/1')
  .pipe(
    expand(({ next }) => next ? getProducts(next) : empty()),
    takeWhile(data => !!data),
    map(({ objects }) => objects),
    reduce((res, items) => ([...(res || []), ...items])),
    map(filterAirConditioner)
  )
  .subscribe(itemList => {
    const avg = getAverageCubicWeight(itemList);
    console.log(`Average Cubic Weight: ${avg} kg`);
  });
