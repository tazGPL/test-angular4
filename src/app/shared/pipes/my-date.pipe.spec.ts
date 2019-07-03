import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null;

beforeEach(() => {
  pipe = new MyDatePipe();
})

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return proper date when passed UTC date string', () => {
    const dateString = 'Tue May 28 2019 10:37:06 GMT+0200 (czas środkowoeuropejski letni)';
    const input = pipe.transform(dateString);
    const output = /2019/;
    expect(input).toMatch(output);
  })

  it('should return proper month when passed UTC date string', () => {
    const dateString = 'Tue May 28 2019 10:37:06 GMT+0200 (czas środkowoeuropejski letni)';
    const input = pipe.transform(dateString);
    const output = /stycznia|lutego|marca|kwietnia|maja|czerwca|lipca|sierpnia|września|października|listopada|grudnia/;
    expect(input).toMatch(output);
  })

  it('should return null when passed falsy values', () => {
    expect(pipe.transform('')).toEqual(null);
    expect(pipe.transform(null)).toEqual(null);
    expect(pipe.transform(undefined)).toEqual(null);
  })

});
