type Data = { detail?: string; instance?: string; [key: string]: unknown };

export type HttpError = {
  type: string;
  status: number;
  title: string;
  _httpError: string;
} & Data;

export const isHttpError = (error: unknown): error is HttpError => {
  return typeof error === 'object' && null !== error && typeof (error as HttpError)._httpError === 'string';
};

export const createBadRequest = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.1',
  status: 400,
  title: 'Bad Request',
  ...data,
  _httpError: 'BadRequest',
});

export const createUnauthorized = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.2',
  status: 401,
  title: 'Unauthorized',
  ...data,
  _httpError: 'Unauthorized',
});

export const createPaymentRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.3',
  status: 402,
  title: 'Payment Required',
  ...data,
  _httpError: 'PaymentRequired',
});

export const createForbidden = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.4',
  status: 403,
  title: 'Forbidden',
  ...data,
  _httpError: 'Forbidden',
});

export const createNotFound = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.5',
  status: 404,
  title: 'Not Found',
  ...data,
  _httpError: 'NotFound',
});

export const createMethodNotAllowed = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.6',
  status: 405,
  title: 'Method Not Allowed',
  ...data,
  _httpError: 'MethodNotAllowed',
});

export const createNotAcceptable = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.7',
  status: 406,
  title: 'Not Acceptable',
  ...data,
  _httpError: 'NotAcceptable',
});

export const createProxyAuthenticationRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.8',
  status: 407,
  title: 'Proxy Authentication Required',
  ...data,
  _httpError: 'ProxyAuthenticationRequired',
});

export const createRequestTimeout = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.9',
  status: 408,
  title: 'Request Timeout',
  ...data,
  _httpError: 'RequestTimeout',
});

export const createConflict = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.10',
  status: 409,
  title: 'Conflict',
  ...data,
  _httpError: 'Conflict',
});

export const createGone = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.11',
  status: 410,
  title: 'Gone',
  ...data,
  _httpError: 'Gone',
});

export const createLengthRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.12',
  status: 411,
  title: 'Length Required',
  ...data,
  _httpError: 'LengthRequired',
});

export const createPreconditionFailed = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.13',
  status: 412,
  title: 'Precondition Failed',
  ...data,
  _httpError: 'PreconditionFailed',
});

export const createRequestEntityTooLarge = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.14',
  status: 413,
  title: 'Request Entity Too Large',
  ...data,
  _httpError: 'RequestEntityTooLarge',
});

export const createRequestURITooLong = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.15',
  status: 414,
  title: 'Request-URI Too Long',
  ...data,
  _httpError: 'RequestURITooLong',
});

export const createUnsupportedMediaType = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.16',
  status: 415,
  title: 'Unsupported Media Type',
  ...data,
  _httpError: 'UnsupportedMediaType',
});

export const createRangeNotSatisfiable = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.17',
  status: 416,
  title: 'Range Not Satisfiable',
  ...data,
  _httpError: 'RangeNotSatisfiable',
});

export const createExpectationFailed = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.4.18',
  status: 417,
  title: 'Expectation Failed',
  ...data,
  _httpError: 'ExpectationFailed',
});

export const createImateapot = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2',
  status: 418,
  title: "I'm a teapot",
  ...data,
  _httpError: 'Imateapot',
});

export const createMisdirectedRequest = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2',
  status: 421,
  title: 'Misdirected Request',
  ...data,
  _httpError: 'MisdirectedRequest',
});

export const createUnprocessableEntity = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc4918#section-11.2',
  status: 422,
  title: 'Unprocessable Entity',
  ...data,
  _httpError: 'UnprocessableEntity',
});

export const createLocked = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc4918#section-11.3',
  status: 423,
  title: 'Locked',
  ...data,
  _httpError: 'Locked',
});

export const createFailedDependency = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc4918#section-11.4',
  status: 424,
  title: 'Failed Dependency',
  ...data,
  _httpError: 'FailedDependency',
});

export const createTooEarly = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc8470#section-5.2',
  status: 425,
  title: 'Too Early',
  ...data,
  _httpError: 'TooEarly',
});

export const createUpgradeRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15',
  status: 426,
  title: 'Upgrade Required',
  ...data,
  _httpError: 'UpgradeRequired',
});

export const createPreconditionRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc6585#section-3',
  status: 428,
  title: 'Precondition Required',
  ...data,
  _httpError: 'PreconditionRequired',
});

export const createTooManyRequests = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc6585#section-4',
  status: 429,
  title: 'Too Many Requests',
  ...data,
  _httpError: 'TooManyRequests',
});

export const createRequestHeaderFieldsTooLarge = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc6585#section-7.3',
  status: 431,
  title: 'Request Header Fields Too Large',
  ...data,
  _httpError: 'RequestHeaderFieldsTooLarge',
});

export const createUnavailableForLegalReasons = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc7725#section-3',
  status: 451,
  title: 'Unavailable For Legal Reasons',
  ...data,
  _httpError: 'UnavailableForLegalReasons',
});

export const createInternalServerError = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.1',
  status: 500,
  title: 'Internal Server Error',
  ...data,
  _httpError: 'InternalServerError',
});

export const createNotImplemented = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.2',
  status: 501,
  title: 'Not Implemented',
  ...data,
  _httpError: 'NotImplemented',
});

export const createBadGateway = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.3',
  status: 502,
  title: 'Bad Gateway',
  ...data,
  _httpError: 'BadGateway',
});

export const createServiceUnavailable = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.4',
  status: 503,
  title: 'Service Unavailable',
  ...data,
  _httpError: 'ServiceUnavailable',
});

export const createGatewayTimeout = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.5',
  status: 504,
  title: 'Gateway Timeout',
  ...data,
  _httpError: 'GatewayTimeout',
});

export const createHTTPVersionNotSupported = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2616#section-10.5.6',
  status: 505,
  title: 'HTTP Version Not Supported',
  ...data,
  _httpError: 'HTTPVersionNotSupported',
});

export const createVariantAlsoNegotiates = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2295#section-8.1',
  status: 506,
  title: 'Variant Also Negotiates',
  ...data,
  _httpError: 'VariantAlsoNegotiates',
});

export const createInsufficientStorage = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc4918#section-11.5',
  status: 507,
  title: 'Insufficient Storage',
  ...data,
  _httpError: 'InsufficientStorage',
});

export const createLoopDetected = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc5842#section-7.2',
  status: 508,
  title: 'Loop Detected',
  ...data,
  _httpError: 'LoopDetected',
});

export const createNotExtended = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc2774#section-7',
  status: 510,
  title: 'Not Extended',
  ...data,
  _httpError: 'NotExtended',
});

export const createNetworkAuthenticationRequired = (data: Data): HttpError => ({
  type: 'https://datatracker.ietf.org/doc/html/rfc6585#section-6',
  status: 511,
  title: 'Network Authentication Required',
  ...data,
  _httpError: 'NetworkAuthenticationRequired',
});
