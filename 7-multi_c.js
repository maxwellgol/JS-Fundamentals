#!/usr/bin/env node

const count = Number(process.argv[2]);

if (!Number.isInteger(count)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < count; i++) console.log('C is fun');
}
