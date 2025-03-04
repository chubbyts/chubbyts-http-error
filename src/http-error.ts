type Data = { detail?: string; instance?: string; [key: string]: unknown };

export class HttpError extends Error implements Data {
  type: string;
  status: number;
  title: string;
  _httpError: string;
  [key: string]: unknown;

  constructor(
    type: string,
    status: number,
    title: string,
    _httpError: string,
    data: Data = {},
  ) {
    super(title);

    this.type = type;
    this.status = status;
    this.title = title;
    this._httpError = _httpError;

    Object.entries(data).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

export const isHttpError = (error: unknown): error is HttpError => {
  return error instanceof HttpError;
};

export const createBadRequest = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.1', 400, 'Bad Request', 'BadRequest', data);

export const createUnauthorized = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.2',
    401,
    'Unauthorized',
    'Unauthorized',
    data,
  );

export const createPaymentRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.3',
    402,
    'Payment Required',
    'PaymentRequired',
    data,
  );

export const createForbidden = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.4', 403, 'Forbidden', 'Forbidden', data);

export const createNotFound = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.5', 404, 'Not Found', 'NotFound', data);

export const createMethodNotAllowed = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.6',
    405,
    'Method Not Allowed',
    'MethodNotAllowed',
    data,
  );

export const createNotAcceptable = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.7',
    406,
    'Not Acceptable',
    'NotAcceptable',
    data,
  );

export const createProxyAuthenticationRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.8',
    407,
    'Proxy Authentication Required',
    'ProxyAuthenticationRequired',
    data,
  );

export const createRequestTimeout = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.9',
    408,
    'Request Timeout',
    'RequestTimeout',
    data,
  );

export const createConflict = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.10', 409, 'Conflict', 'Conflict', data);

export const createGone = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.11', 410, 'Gone', 'Gone', data);

export const createLengthRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.12',
    411,
    'Length Required',
    'LengthRequired',
    data,
  );

export const createPreconditionFailed = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.13',
    412,
    'Precondition Failed',
    'PreconditionFailed',
    data,
  );

export const createRequestEntityTooLarge = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.14',
    413,
    'Request Entity Too Large',
    'RequestEntityTooLarge',
    data,
  );

export const createRequestURITooLong = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.15',
    414,
    'Request-URI Too Long',
    'RequestURITooLong',
    data,
  );

export const createUnsupportedMediaType = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.16',
    415,
    'Unsupported Media Type',
    'UnsupportedMediaType',
    data,
  );

export const createRangeNotSatisfiable = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.17',
    416,
    'Range Not Satisfiable',
    'RangeNotSatisfiable',
    data,
  );

export const createExpectationFailed = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.18',
    417,
    'Expectation Failed',
    'ExpectationFailed',
    data,
  );

export const createImateapot = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2', 418, "I'm a teapot", 'Imateapot', data);

export const createMisdirectedRequest = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2',
    421,
    'Misdirected Request',
    'MisdirectedRequest',
    data,
  );

export const createUnprocessableEntity = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc4918#section-11.2',
    422,
    'Unprocessable Entity',
    'UnprocessableEntity',
    data,
  );

export const createLocked = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc4918#section-11.3', 423, 'Locked', 'Locked', data);

export const createFailedDependency = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc4918#section-11.4',
    424,
    'Failed Dependency',
    'FailedDependency',
    data,
  );

export const createTooEarly = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc8470#section-5.2', 425, 'Too Early', 'TooEarly', data);

export const createUpgradeRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15',
    426,
    'Upgrade Required',
    'UpgradeRequired',
    data,
  );

export const createPreconditionRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc6585#section-3',
    428,
    'Precondition Required',
    'PreconditionRequired',
    data,
  );

export const createTooManyRequests = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc6585#section-4',
    429,
    'Too Many Requests',
    'TooManyRequests',
    data,
  );

export const createRequestHeaderFieldsTooLarge = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc6585#section-7.3',
    431,
    'Request Header Fields Too Large',
    'RequestHeaderFieldsTooLarge',
    data,
  );

export const createUnavailableForLegalReasons = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc7725#section-3',
    451,
    'Unavailable For Legal Reasons',
    'UnavailableForLegalReasons',
    data,
  );

export const createInternalServerError = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.1',
    500,
    'Internal Server Error',
    'InternalServerError',
    data,
  );

export const createNotImplemented = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.2',
    501,
    'Not Implemented',
    'NotImplemented',
    data,
  );

export const createBadGateway = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.3', 502, 'Bad Gateway', 'BadGateway', data);

export const createServiceUnavailable = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.4',
    503,
    'Service Unavailable',
    'ServiceUnavailable',
    data,
  );

export const createGatewayTimeout = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.5',
    504,
    'Gateway Timeout',
    'GatewayTimeout',
    data,
  );

export const createHTTPVersionNotSupported = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.6',
    505,
    'HTTP Version Not Supported',
    'HTTPVersionNotSupported',
    data,
  );

export const createVariantAlsoNegotiates = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc2295#section-8.1',
    506,
    'Variant Also Negotiates',
    'VariantAlsoNegotiates',
    data,
  );

export const createInsufficientStorage = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc4918#section-11.5',
    507,
    'Insufficient Storage',
    'InsufficientStorage',
    data,
  );

export const createLoopDetected = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc5842#section-7.2',
    508,
    'Loop Detected',
    'LoopDetected',
    data,
  );

export const createNotExtended = (data: Data): HttpError =>
  new HttpError('https://datatracker.ietf.org/doc/html/rfc2774#section-7', 510, 'Not Extended', 'NotExtended', data);

export const createNetworkAuthenticationRequired = (data: Data): HttpError =>
  new HttpError(
    'https://datatracker.ietf.org/doc/html/rfc6585#section-6',
    511,
    'Network Authentication Required',
    'NetworkAuthenticationRequired',
    data,
  );

export type MapToHttpError = (e: unknown) => HttpError;

export const mapToHttpError: MapToHttpError = (e: unknown): HttpError => {
  return createInternalServerError({
    detail: 'A website error has occurred. Sorry for the temporary inconvenience.',
    cause: e,
  });
};
