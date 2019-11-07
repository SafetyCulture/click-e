/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for main
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.main = require('./click-e_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.main.ClickEClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.main.ClickEPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodDescriptor_ClickE_Inc = new grpc.web.MethodDescriptor(
  '/main.ClickE/Inc',
  grpc.web.MethodType.UNARY,
  proto.main.Empty,
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodInfo_ClickE_Inc = new grpc.web.AbstractClientBase.MethodInfo(
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @param {!proto.main.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.main.Count)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.Count>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.ClickEClient.prototype.inc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.ClickE/Inc',
      request,
      metadata || {},
      methodDescriptor_ClickE_Inc,
      callback);
};


/**
 * @param {!proto.main.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.Count>}
 *     A native promise that resolves to the response
 */
proto.main.ClickEPromiseClient.prototype.inc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.ClickE/Inc',
      request,
      metadata || {},
      methodDescriptor_ClickE_Inc);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodDescriptor_ClickE_GetCount = new grpc.web.MethodDescriptor(
  '/main.ClickE/GetCount',
  grpc.web.MethodType.UNARY,
  proto.main.Empty,
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodInfo_ClickE_GetCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @param {!proto.main.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.main.Count)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.main.Count>|undefined}
 *     The XHR Node Readable Stream
 */
proto.main.ClickEClient.prototype.getCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/main.ClickE/GetCount',
      request,
      metadata || {},
      methodDescriptor_ClickE_GetCount,
      callback);
};


/**
 * @param {!proto.main.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.main.Count>}
 *     A native promise that resolves to the response
 */
proto.main.ClickEPromiseClient.prototype.getCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/main.ClickE/GetCount',
      request,
      metadata || {},
      methodDescriptor_ClickE_GetCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodDescriptor_ClickE_Subcribe = new grpc.web.MethodDescriptor(
  '/main.ClickE/Subcribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.main.Empty,
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.main.Empty,
 *   !proto.main.Count>}
 */
const methodInfo_ClickE_Subcribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.main.Count,
  /** @param {!proto.main.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.main.Count.deserializeBinary
);


/**
 * @param {!proto.main.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.main.Count>}
 *     The XHR Node Readable Stream
 */
proto.main.ClickEClient.prototype.subcribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/main.ClickE/Subcribe',
      request,
      metadata || {},
      methodDescriptor_ClickE_Subcribe);
};


/**
 * @param {!proto.main.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.main.Count>}
 *     The XHR Node Readable Stream
 */
proto.main.ClickEPromiseClient.prototype.subcribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/main.ClickE/Subcribe',
      request,
      metadata || {},
      methodDescriptor_ClickE_Subcribe);
};


module.exports = proto.main;

