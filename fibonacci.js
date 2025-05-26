let valueBefore = 0;
let valueCurrent = 1;

const maxSequence = 20;

for (let i = 0; i < maxSequence; i++) {
  let nextResult = valueBefore + valueCurrent;

  valueBefore = valueCurrent;
  valueCurrent = nextResult;

  console.log('Fibo value', valueBefore);
}
