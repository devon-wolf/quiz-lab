import { countsAsYes } from '../utils.js';

const test = QUnit.test;

test('it should return true when given "yes"', (expect) => {
    const expected = true;
    const actual = countsAsYes('yes');
    expect.equal(actual, expected);
});

test('it should return true when given "Yes"', (expect) => {
    const expected = true;
    const actual = countsAsYes('Yes');
    expect.equal(actual, expected);
});

test('it should return true when given "YEAH"', (expect) => {
    const expected = true;
    const actual = countsAsYes('YEAH');
    expect.equal(actual, expected);
});

test('it should return true when given "y"', (expect) => {
    const expected = true;
    const actual = countsAsYes('y');
    expect.equal(actual, expected);
});

test('it should return false when given "no"', (expect) => {
    const expected = false;
    const actual = countsAsYes('no');
    expect.equal(actual, expected);
});

test('it should return false when given "absolutely"', (expect) => {
    const expected = false;
    const actual = countsAsYes('absolutely');
    expect.equal(actual, expected);
});