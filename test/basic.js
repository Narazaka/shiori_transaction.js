import assert from "power-assert";
import * as ShioriJK from "shiorijk";
import {ShioriTransaction} from "../src/lib/shiori_transaction";

describe("ShioriTransaction", () => {
  let request3;
  let request2;
  let response3;
  let response2;
  beforeEach(() => {
    request3 = new ShioriJK.Message.Request({
      request_line: {
        method:  "GET",
        version: "3.0",
      },
      headers: {
        ID:      "OnBoot",
        Charset: "UTF-8",
        Sender:  "Ikagaka",
      },
    });

    request2 = new ShioriJK.Message.Request({
      request_line: {
        method:  "GET Sentence",
        version: "2.6",
      },
      headers: {
        Event:   "OnBoot",
        Charset: "UTF-8",
        Sender:  "Ikagaka",
      },
    });

    response2 = new ShioriJK.Message.Response({
      status_line: {
        code:    200,
        version: "2.6",
      },
      headers: {
        Sentence: "\\h\\s[0]\\e",
        Charset:  "UTF-8",
        Sender:   "ikaga",
      },
    });

    response3 = new ShioriJK.Message.Response({
      status_line: {
        code:    200,
        version: "3.0",
      },
      headers: {
        Value:   "\\h\\s[0]\\e",
        Charset: "UTF-8",
        Sender:  "ikaga",
      },
    });
  });

  it("can initialize", () => {
    assert(new ShioriTransaction());
  });

  it("to() will convert 3 <-> 2", () => {
    const transaction = new ShioriTransaction();
    transaction.setRequest(request3);
    assert(request3.to instanceof Function);
    assert(request3.to("2.6").toString() === request2.toString());
    transaction.setResponse(response2);
    assert(response2.to instanceof Function);
    assert(response2.to("3.0").toString() === response3.toString());
  });
});
