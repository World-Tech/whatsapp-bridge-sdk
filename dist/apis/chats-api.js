"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * whatsapp-bridge Node Api
 * The whatsapp-bridge API description
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatsApi = exports.ChatsApiFactory = exports.ChatsApiFp = exports.ChatsApiAxiosParamCreator = void 0;
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * ChatsApi - axios parameter creator
 * @export
 */
var ChatsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         *
         * @param {AssignToMeDto} body
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToMe: function (body_1, id_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([body_1, id_1], args_1, true), void 0, function (body, id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions, needsSerialization;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling assignToMe.');
                    }
                    // verify required parameter 'id' is not null or undefined
                    if (id === null || id === undefined) {
                        throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling assignToMe.');
                    }
                    localVarPath = "/api/chats/{id}/assign-to-me"
                        .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    localVarHeaderParameter['Content-Type'] = 'application/json';
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         *
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChat: function (id_1) {
            var args_1 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args_1[_i - 1] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([id_1], args_1, true), void 0, function (id, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    // verify required parameter 'id' is not null or undefined
                    if (id === null || id === undefined) {
                        throw new base_1.RequiredError('id', 'Required parameter id was null or undefined when calling getChat.');
                    }
                    localVarPath = "/api/chats/{id}"
                        .replace("{".concat("id", "}"), encodeURIComponent(String(id)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         *
         * @param {number} branchId
         * @param {number} [userId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChats: function (branchId_1, userId_1) {
            var args_1 = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args_1[_i - 2] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([branchId_1, userId_1], args_1, true), void 0, function (branchId, userId, options) {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions;
                if (options === void 0) { options = {}; }
                return __generator(this, function (_a) {
                    // verify required parameter 'branchId' is not null or undefined
                    if (branchId === null || branchId === undefined) {
                        throw new base_1.RequiredError('branchId', 'Required parameter branchId was null or undefined when calling getChats.');
                    }
                    localVarPath = "/api/chats";
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    if (branchId !== undefined) {
                        localVarQueryParameter['branchId'] = branchId;
                    }
                    if (userId !== undefined) {
                        localVarQueryParameter['userId'] = userId;
                    }
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
exports.ChatsApiAxiosParamCreator = ChatsApiAxiosParamCreator;
/**
 * ChatsApi - functional programming interface
 * @export
 */
var ChatsApiFp = function (configuration) {
    return {
        /**
         *
         * @param {AssignToMeDto} body
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToMe: function (body, id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ChatsApiAxiosParamCreator)(configuration).assignToMe(body, id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChat: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ChatsApiAxiosParamCreator)(configuration).getChat(id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @param {number} branchId
         * @param {number} [userId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChats: function (branchId, userId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ChatsApiAxiosParamCreator)(configuration).getChats(branchId, userId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
exports.ChatsApiFp = ChatsApiFp;
/**
 * ChatsApi - factory interface
 * @export
 */
var ChatsApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @param {AssignToMeDto} body
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToMe: function (body, id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ChatsApiFp)(configuration).assignToMe(body, id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @param {number} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChat: function (id, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ChatsApiFp)(configuration).getChat(id, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @param {number} branchId
         * @param {number} [userId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChats: function (branchId, userId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ChatsApiFp)(configuration).getChats(branchId, userId, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
exports.ChatsApiFactory = ChatsApiFactory;
/**
 * ChatsApi - object-oriented interface
 * @export
 * @class ChatsApi
 * @extends {BaseAPI}
 */
var ChatsApi = /** @class */ (function (_super) {
    __extends(ChatsApi, _super);
    function ChatsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param {AssignToMeDto} body
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    ChatsApi.prototype.assignToMe = function (body, id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ChatsApiFp)(this.configuration).assignToMe(body, id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @param {number} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    ChatsApi.prototype.getChat = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ChatsApiFp)(this.configuration).getChat(id, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @param {number} branchId
     * @param {number} [userId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatsApi
     */
    ChatsApi.prototype.getChats = function (branchId, userId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ChatsApiFp)(this.configuration).getChats(branchId, userId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return ChatsApi;
}(base_1.BaseAPI));
exports.ChatsApi = ChatsApi;
