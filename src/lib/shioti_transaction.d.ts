import * as ShioriJK from "shiorijk";

/**
 * SHIORI/2.x/3.x transaction class with protocol version converter
 */
declare class ShioriTransaction {
  /**
   * constructor
   */
  constructor();

  /**
   * request
   */
  request: ShioriJK.Message.Request

  /**
   * response
   */
  response: ShioriJK.Message.Response;

  /**
   * convert request to specified protocol version
   * (this method needs ShioriConverter)
   * @param version - target protocol version
   * @return specified version request
   */
  request_to(version: string): ShioriJK.Message.Request;

  /**
   * convert response to specified protocol version
   * (this method needs ShioriConverter)
   * @param version - target protocol version
   * @return specified version response
   */
  response_to(version: string): ShioriJK.Message.Response;

}

export {ShioriTransaction};
