import * as React from "react";
import { messageService } from "@/services/message.service";
export interface HelloProps {
  compile: String;
  framework: String;
}

export const Hello = (props: HelloProps) => {
  return <div>
    {props.compile} And {props.framework}
  </div>
}
export const RandomQuotes = () => {
  const inspQuotes = "https://noctis.azurewebsites.net/quotes";

  const handleRandomQuote = () => {
    fetch(inspQuotes)
      .then((resp) => resp.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[randomNum];

        messageService.sendMessage(randomQuote.quote);
      });
  };

  return (
    <div className="buttonContainer">
      <button onClick={handleRandomQuote}>create</button>
      <button onClick={messageService.clearMessages}>delete</button>
    </div>
  );
};