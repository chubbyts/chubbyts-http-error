# chubbyts-http-error

[![CI](https://github.com/chubbyts/chubbyts-http-error/workflows/CI/badge.svg?branch=master)](https://github.com/chubbyts/chubbyts-http-error/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/chubbyts/chubbyts-http-error/badge.svg?branch=master)](https://coveralls.io/github/chubbyts/chubbyts-http-error?branch=master)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Fchubbyts%2Fchubbyts-http-error%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/chubbyts/chubbyts-http-error/master)
[![npm-version](https://img.shields.io/npm/v/@chubbyts/chubbyts-http-error.svg)](https://www.npmjs.com/package/@chubbyts/chubbyts-http-error)

[![bugs](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=bugs)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![code_smells](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=code_smells)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=coverage)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![ncloc](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=ncloc)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![alert_status](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=alert_status)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![security_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=security_rating)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![sqale_index](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=sqale_index)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)
[![vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chubbyts_chubbyts-http-error&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=chubbyts_chubbyts-http-error)

## Description

Creates http error which can be catched and converted to error responses.

## Requirements

 * node: 18

## Installation

Through [NPM](https://www.npmjs.com) as [@chubbyts/chubbyts-http-error][1].

```ts
npm i @chubbyts/chubbyts-http-error@^3.0.1
```

## Usage

```ts
import { createNotFound } from '@chubbyts/chubbyts-http-error/dist/http-error';

try {
  throw createNotFound({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' });
} catch (e) {
  console.log(e);
}
```

## Copyright

2026 Dominik Zogg

[1]: https://www.npmjs.com/package/@chubbyts/chubbyts-http-error
[2]: https://web-frameworks-benchmark.netlify.app/result
[3]: https://www.php-fig.org/psr/psr-15
[4]: https://www.npmjs.com/package/@chubbyts/chubbyts-dic-types
[5]: https://www.npmjs.com/package/@chubbyts/chubbyts-http-types
[6]: https://www.npmjs.com/package/@chubbyts/chubbyts-log-types
