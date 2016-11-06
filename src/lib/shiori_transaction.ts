import {ShioriConverter} from "shiori_converter";
import * as ShioriJK from "shiorijk";

/**
 * SHIORI/2.x/3.x transaction class with protocol version converter
 */
export class ShioriTransaction {
  private _request: ShioriConvertableRequest;
  private _response: ShioriConvertableResponse;

  /** request */
  get request() {
    return this._request;
  }

  /**
   * request
   * @param request request
   */
  setRequest(request: ShioriJK.Message.Request) {
    this._request = <any> request;
    this._request.to = this.requestTo.bind(this);
  }

  /** response */
  get response() {
    return this._response;
  }

  /**
   * response
   * @param response response
   */
  setResponse(response: ShioriJK.Message.Response) {
    this._response = <any> response;
    this._response.to = this.responseTo.bind(this);
  }

  /**
   * convert request to specified protocol version
   * @param version target protocol version
   */
  requestTo(version: ShioriConverter.ShioriVersion) {
    return ShioriConverter.requestTo(this.request, version);
  }

  /**
   * convert response to specified protocol version
   * @param version target protocol version
   */
  responseTo(version: ShioriConverter.ShioriVersion) {
    return ShioriConverter.responseTo(this.request, this.response, version);
  }
}

/** version convertable request message */
export interface ShioriConvertableRequest extends ShioriJK.Message.Request {
  /**
   * convert request to specified protocol version
   * @param version target protocol version
   */
  to(version: ShioriConverter.ShioriVersion): ShioriJK.Message.Request;
}

/** version convertable response message */
export interface ShioriConvertableResponse extends ShioriJK.Message.Response {
  /**
   * convert response to specified protocol version
   * @param version target protocol version
   */
  to(version: ShioriConverter.ShioriVersion): ShioriJK.Message.Response;
}
