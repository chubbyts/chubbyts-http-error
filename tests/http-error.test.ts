import { describe, expect, test } from '@jest/globals';
import {
  createBadGateway,
  createBadRequest,
  createConflict,
  createExpectationFailed,
  createFailedDependency,
  createForbidden,
  createGatewayTimeout,
  createGone,
  createHTTPVersionNotSupported,
  createImateapot,
  createInsufficientStorage,
  createInternalServerError,
  createLengthRequired,
  createLocked,
  createLoopDetected,
  createMethodNotAllowed,
  createMisdirectedRequest,
  createNetworkAuthenticationRequired,
  createNotAcceptable,
  createNotExtended,
  createNotFound,
  createNotImplemented,
  createPaymentRequired,
  createPreconditionFailed,
  createPreconditionRequired,
  createProxyAuthenticationRequired,
  createRangeNotSatisfiable,
  createRequestEntityTooLarge,
  createRequestHeaderFieldsTooLarge,
  createRequestTimeout,
  createRequestURITooLong,
  createServiceUnavailable,
  createTooEarly,
  createTooManyRequests,
  createUnauthorized,
  createUnavailableForLegalReasons,
  createUnprocessableEntity,
  createUnsupportedMediaType,
  createUpgradeRequired,
  createVariantAlsoNegotiates,
  mapToHttpError,
  HttpError,
  isHttpError,
} from '../src/http-error';

describe('http-error', () => {
  describe('isHttpError', () => {
    [
      { name: 'http-error', value: new HttpError('type', 900, 'title', '_httpError'), toBe: true },
      { name: 'error', value: new Error(), toBe: false },
      { name: 'object', value: {}, toBe: false },
      { name: 'string', value: 'example', toBe: false },
      { name: 'undefined', value: undefined, toBe: false },
      { name: 'null', value: null, toBe: false },
    ].forEach(({ name, value, toBe }) => {
      test('type is ' + name, () => {
        expect(isHttpError(value)).toBe(toBe);
      });
    });
  });

  test('createBadRequest', () => {
    expect({ ...createBadRequest({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "BadRequest",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 400,
        "title": "Bad Request",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.1",
      }
    `);
  });

  test('createUnauthorized', () => {
    expect({ ...createUnauthorized({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Unauthorized",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 401,
        "title": "Unauthorized",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.2",
      }
    `);
  });

  test('createPaymentRequired', () => {
    expect({
      ...createPaymentRequired({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "PaymentRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 402,
        "title": "Payment Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.3",
      }
    `);
  });

  test('createForbidden', () => {
    expect({ ...createForbidden({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Forbidden",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 403,
        "title": "Forbidden",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.4",
      }
    `);
  });

  test('createNotFound', () => {
    expect({ ...createNotFound({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "NotFound",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 404,
        "title": "Not Found",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.5",
      }
    `);
  });

  test('createMethodNotAllowed', () => {
    expect({
      ...createMethodNotAllowed({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "MethodNotAllowed",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 405,
        "title": "Method Not Allowed",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.6",
      }
    `);
  });

  test('createNotAcceptable', () => {
    expect({ ...createNotAcceptable({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "NotAcceptable",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 406,
        "title": "Not Acceptable",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.7",
      }
    `);
  });

  test('createProxyAuthenticationRequired', () => {
    expect({
      ...createProxyAuthenticationRequired({
        detail: 'Something went wrong',
        instance: 'server-1',
        otherKey: 'otherValue',
      }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "ProxyAuthenticationRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 407,
        "title": "Proxy Authentication Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.8",
      }
    `);
  });

  test('createRequestTimeout', () => {
    expect({
      ...createRequestTimeout({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "RequestTimeout",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 408,
        "title": "Request Timeout",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.9",
      }
    `);
  });

  test('createConflict', () => {
    expect({ ...createConflict({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Conflict",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 409,
        "title": "Conflict",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.10",
      }
    `);
  });

  test('createGone', () => {
    expect({ ...createGone({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Gone",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 410,
        "title": "Gone",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.11",
      }
    `);
  });

  test('createLengthRequired', () => {
    expect({
      ...createLengthRequired({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "LengthRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 411,
        "title": "Length Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.12",
      }
    `);
  });

  test('createPreconditionFailed', () => {
    expect({
      ...createPreconditionFailed({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "PreconditionFailed",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 412,
        "title": "Precondition Failed",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.13",
      }
    `);
  });

  test('createRequestEntityTooLarge', () => {
    expect({
      ...createRequestEntityTooLarge({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "RequestEntityTooLarge",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 413,
        "title": "Request Entity Too Large",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.14",
      }
    `);
  });

  test('createRequestURITooLong', () => {
    expect({
      ...createRequestURITooLong({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "RequestURITooLong",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 414,
        "title": "Request-URI Too Long",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.15",
      }
    `);
  });

  test('createUnsupportedMediaType', () => {
    expect({
      ...createUnsupportedMediaType({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "UnsupportedMediaType",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 415,
        "title": "Unsupported Media Type",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.16",
      }
    `);
  });

  test('createRangeNotSatisfiable', () => {
    expect({
      ...createRangeNotSatisfiable({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "RangeNotSatisfiable",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 416,
        "title": "Range Not Satisfiable",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.17",
      }
    `);
  });

  test('createExpectationFailed', () => {
    expect({
      ...createExpectationFailed({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "ExpectationFailed",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 417,
        "title": "Expectation Failed",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.18",
      }
    `);
  });

  test('createImateapot', () => {
    expect({ ...createImateapot({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Imateapot",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 418,
        "title": "I'm a teapot",
        "type": "https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2",
      }
    `);
  });

  test('createMisdirectedRequest', () => {
    expect({
      ...createMisdirectedRequest({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "MisdirectedRequest",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 421,
        "title": "Misdirected Request",
        "type": "https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2",
      }
    `);
  });

  test('createUnprocessableEntity', () => {
    expect({
      ...createUnprocessableEntity({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "UnprocessableEntity",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 422,
        "title": "Unprocessable Entity",
        "type": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.2",
      }
    `);
  });

  test('createLocked', () => {
    expect({ ...createLocked({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "Locked",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 423,
        "title": "Locked",
        "type": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.3",
      }
    `);
  });

  test('createFailedDependency', () => {
    expect({
      ...createFailedDependency({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "FailedDependency",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 424,
        "title": "Failed Dependency",
        "type": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.4",
      }
    `);
  });

  test('createTooEarly', () => {
    expect({ ...createTooEarly({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "TooEarly",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 425,
        "title": "Too Early",
        "type": "https://datatracker.ietf.org/doc/html/rfc8470#section-5.2",
      }
    `);
  });

  test('createUpgradeRequired', () => {
    expect({
      ...createUpgradeRequired({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "UpgradeRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 426,
        "title": "Upgrade Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15",
      }
    `);
  });

  test('createPreconditionRequired', () => {
    expect({
      ...createPreconditionRequired({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "PreconditionRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 428,
        "title": "Precondition Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc6585#section-3",
      }
    `);
  });

  test('createTooManyRequests', () => {
    expect({
      ...createTooManyRequests({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "TooManyRequests",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 429,
        "title": "Too Many Requests",
        "type": "https://datatracker.ietf.org/doc/html/rfc6585#section-4",
      }
    `);
  });

  test('createRequestHeaderFieldsTooLarge', () => {
    expect({
      ...createRequestHeaderFieldsTooLarge({
        detail: 'Something went wrong',
        instance: 'server-1',
        otherKey: 'otherValue',
      }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "RequestHeaderFieldsTooLarge",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 431,
        "title": "Request Header Fields Too Large",
        "type": "https://datatracker.ietf.org/doc/html/rfc6585#section-7.3",
      }
    `);
  });

  test('createUnavailableForLegalReasons', () => {
    expect({
      ...createUnavailableForLegalReasons({
        detail: 'Something went wrong',
        instance: 'server-1',
        otherKey: 'otherValue',
      }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "UnavailableForLegalReasons",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 451,
        "title": "Unavailable For Legal Reasons",
        "type": "https://datatracker.ietf.org/doc/html/rfc7725#section-3",
      }
    `);
  });

  test('createInternalServerError', () => {
    expect({
      ...createInternalServerError({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "InternalServerError",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 500,
        "title": "Internal Server Error",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.1",
      }
    `);
  });

  test('createNotImplemented', () => {
    expect({
      ...createNotImplemented({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "NotImplemented",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 501,
        "title": "Not Implemented",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.2",
      }
    `);
  });

  test('createBadGateway', () => {
    expect({ ...createBadGateway({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "BadGateway",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 502,
        "title": "Bad Gateway",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.3",
      }
    `);
  });

  test('createServiceUnavailable', () => {
    expect({
      ...createServiceUnavailable({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "ServiceUnavailable",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 503,
        "title": "Service Unavailable",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.4",
      }
    `);
  });

  test('createGatewayTimeout', () => {
    expect({
      ...createGatewayTimeout({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "GatewayTimeout",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 504,
        "title": "Gateway Timeout",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.5",
      }
    `);
  });

  test('createHTTPVersionNotSupported', () => {
    expect({
      ...createHTTPVersionNotSupported({
        detail: 'Something went wrong',
        instance: 'server-1',
        otherKey: 'otherValue',
      }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "HTTPVersionNotSupported",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 505,
        "title": "HTTP Version Not Supported",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.6",
      }
    `);
  });

  test('createVariantAlsoNegotiates', () => {
    expect({
      ...createVariantAlsoNegotiates({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "VariantAlsoNegotiates",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 506,
        "title": "Variant Also Negotiates",
        "type": "https://datatracker.ietf.org/doc/html/rfc2295#section-8.1",
      }
    `);
  });

  test('createInsufficientStorage', () => {
    expect({
      ...createInsufficientStorage({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "InsufficientStorage",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 507,
        "title": "Insufficient Storage",
        "type": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.5",
      }
    `);
  });

  test('createLoopDetected', () => {
    expect({ ...createLoopDetected({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "LoopDetected",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 508,
        "title": "Loop Detected",
        "type": "https://datatracker.ietf.org/doc/html/rfc5842#section-7.2",
      }
    `);
  });

  test('createNotExtended', () => {
    expect({ ...createNotExtended({ detail: 'Something went wrong', instance: 'server-1', otherKey: 'otherValue' }) })
      .toMatchInlineSnapshot(`
      {
        "_httpError": "NotExtended",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 510,
        "title": "Not Extended",
        "type": "https://datatracker.ietf.org/doc/html/rfc2774#section-7",
      }
    `);
  });

  test('createNetworkAuthenticationRequired', () => {
    expect({
      ...createNetworkAuthenticationRequired({
        detail: 'Something went wrong',
        instance: 'server-1',
        otherKey: 'otherValue',
      }),
    }).toMatchInlineSnapshot(`
      {
        "_httpError": "NetworkAuthenticationRequired",
        "detail": "Something went wrong",
        "instance": "server-1",
        "otherKey": "otherValue",
        "status": 511,
        "title": "Network Authentication Required",
        "type": "https://datatracker.ietf.org/doc/html/rfc6585#section-6",
      }
    `);
  });

  test('mapToHttpError', () => {
    expect({ ...mapToHttpError(new Error('error')) }).toMatchInlineSnapshot(`
      {
        "_httpError": "InternalServerError",
        "cause": [Error: error],
        "detail": "A website error has occurred. Sorry for the temporary inconvenience.",
        "status": 500,
        "title": "Internal Server Error",
        "type": "https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.1",
      }
    `);
  });
});
