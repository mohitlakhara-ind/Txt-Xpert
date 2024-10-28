import { useState } from "react";

export default function TxtSpace(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = (event) => { 
    event.preventDefault();
    setText(text.toUpperCase());
    props.showAlert("Text converted to UPPERCASE.", "info");
  };
  
  const handleLowClick = (event) => {
    event.preventDefault();
    setText(text.toLowerCase());
    props.showAlert("Text converted to lowercase.", "info");
  };
  
  const handleClearClick = (event) => {
    event.preventDefault();
    setText("");
    props.showAlert("Text has been cleared.", "warning");
  };
  
  const handleCopyClick = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard.", "success");
  };
  
  const handlePasteClick = (event) => {
    event.preventDefault();
    navigator.clipboard.readText().then((clipText) => {
      setText(clipText);
      props.showAlert("Text pasted from clipboard.", "success");
    });
  };
  
  const handleReverseClick = (event) => {
    event.preventDefault();
    setText(text.split("").reverse().join(""));
    props.showAlert("Text has been reversed.", "info");
  };
  
  const handleExtraSpaceClick = (event) => {
    event.preventDefault();
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed.", "info");
  };
  
  const handleCamelCaseClick = (event) => {
    event.preventDefault();
    setText(
      text
        .split(" ")
        .map((word, index) =>
          index === 0
            ? word.charAt(0).toLowerCase() + word.slice(1)
            : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("")
    );
    props.showAlert("Text converted to camelCase.", "info");
  };
  
  const handlePascalCaseClick = (event) => {
    event.preventDefault();
    setText(
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
    props.showAlert("Text converted to PascalCase.", "info");
  };
  
  const handleTitleCase = (event) => {
    event.preventDefault();
    setText(
      text
        .split(".")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    props.showAlert("Text converted to Title Case.", "info");
  };
  
  const handleSnackCaseClick = (event) => {
    event.preventDefault();
    setText(text.split(" ").join("-"));
    props.showAlert("Text converted to snake_case.", "info");
  };
  
  const handleEmailExtraction = (event) => {
    event.preventDefault();
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(regex);
    setText(emails ? emails.join("\n") : "No emails found.");
    props.showAlert("Email addresses extracted.", "info");
  };
  
  const handleFindReplace = (findText, replaceText) => {
    setText(text.replace(new RegExp(findText, "g"), replaceText));
    props.showAlert(`Replaced all occurrences of "${findText}" with "${replaceText}".`, "success");
  };
  
  const handleSentenceCase = () => {
    setText(
      text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
    );
    props.showAlert("Text converted to Sentence case.", "info");
  };
  
  const handleRemovePunctuation = () => {
    setText(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
    props.showAlert("Punctuation removed.", "info");
  };
  
  const handleExtractPhones = () => {
    const phones = text.match(/\b\d{10}\b/g) || [];
    setText(phones.length > 0 ? phones.join("\n") : "No phone numbers found.");
    props.showAlert("Phone numbers extracted.", "info");
  };
  
  const handleCountVowelsConsonants = () => {
    const vowels = text.match(/[aeiouAEIOU]/g) || [];
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    props.showAlert(`Vowels: ${vowels.length}, Consonants: ${consonants.length}`, "info");
  };
  
  const handleLongestWord = () => {
    const words = text.split(/\s+/);
    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");
    props.showAlert(`Longest word: ${longestWord}`, "info");
  };
  
  const handleWordFrequency = () => {
    const wordFreq = {};
    text
      .toLowerCase()
      .split(/\s+/)
      .forEach((word) => {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      });
    setText(
      Object.entries(wordFreq)
        .map(([word, count]) => `${word}: ${count}`)
        .join("\n")
    );
    props.showAlert("Word frequency counted.", "info");
  };
  
  const handleLeetSpeak = () => {
    const leetText = text.replace(/[aAeEoOtTlLsS]/g, (char) => {
      const leetMap = { a: "4", e: "3", o: "0", t: "7", l: "1", s: "5" };
      return leetMap[char.toLowerCase()] || char;
    });
    setText(leetText);
    props.showAlert("Text converted to Leet Speak.", "info");
  };
  
  const handleBase64Encode = () => {
    setText(btoa(text));
    props.showAlert("Text encoded to Base64.", "success");
  };
  
  const handleRemoveHTMLTags = () => {
    setText(text.replace(/<\/?[^>]+(>|$)/g, ""));
    props.showAlert("HTML tags removed.", "info");
  };
  
  return (
    <>
      <div className="mb-3 pt-2">
        <div className="container">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.label}
          </label>
          <textarea
            onChange={handleOnChange}
            className={`form-control bg-${props.mode} `}
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            style={{
              backdropColor: props.mode === "light" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-7">
            <div className="txtControleBtn container border border-primary m-1 p-3">
              <div className="txtControleBtn container ">
                {/* Text Transformation Buttons */}
                <div className="border border-secondary m-1 p-3 category text-transformation mb-3">
                  <h5 className="category-title">Text Transformation</h5>
                  <p className="category-description">
                    Quickly change text case or style formats.
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to uppercase"
                      onClick={handleUpClick}
                    >
                      UpperCase
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to lowercase"
                      onClick={handleLowClick}
                    >
                      LowerCase
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to CamelCase"
                      onClick={handleCamelCaseClick}
                    >
                      CamelCase
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to PascalCase"
                      onClick={handlePascalCaseClick}
                    >
                      PascalCase
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to Title Case"
                      onClick={handleTitleCase}
                    >
                      Title Case
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to Snake Case"
                      onClick={handleSnackCaseClick}
                    >
                      Snake Case
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to Sentence Case"
                      onClick={handleSentenceCase}
                    >
                      Sentence Case
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Convert text to Leet Speak"
                      onClick={handleLeetSpeak}
                    >
                      Leet Speak
                    </button>
                  </div>
                </div>

                {/* Text Manipulation Buttons */}
                <div className="border border-secondary m-1 p-3 category text-manipulation mb-3">
                  <h5 className="category-title">Text Manipulation</h5>
                  <p className="category-description">
                    Perform actions like copy, paste, or clear text.
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Copy the text"
                      onClick={handleCopyClick}
                    >
                      Copy Text
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Paste the text"
                      onClick={handlePasteClick}
                    >
                      Paste Text
                    </button>
                    <button
                      className="btn btn-outline-danger m-2"
                      title="Clear all text"
                      onClick={handleClearClick}
                    >
                      Clear Text
                    </button>
                    {/* <button
                      className="btn btn-outline-info m-2"
                      title="Find and replace text"
                      onClick={() => handleFindReplace("oldText", "newText")}
                    >
                      Find and Replace
                    </button> */}
                  </div>
                </div>

                {/* Data Extraction Buttons */}
                <div className="border border-secondary m-1 p-3 category data-extraction ">
                  <h5 className="category-title">Data Extraction</h5>
                  <p className="category-description">
                    Extract specific data types like emails or phone numbers.
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-outline-info m-2"
                      title="Extract emails from text"
                      onClick={handleEmailExtraction}
                    >
                      Extract Emails
                    </button>
                    <button
                      className="btn btn-outline-info m-2"
                      title="Extract phone numbers from text"
                      onClick={handleExtractPhones}
                    >
                      Extract Phone Numbers
                    </button>
                  </div>
                </div>

                {/* Text Analysis Buttons */}
                <div className="border border-secondary m-1 p-3 category text-analysis mb-3">
                  <h5 className="category-title">Text Analysis</h5>
                  <p className="category-description">
                    Analyze text properties like word count, vowel count, etc.
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Count vowels and consonants"
                      onClick={handleCountVowelsConsonants}
                    >
                      Count Vowels & Consonants
                    </button>
                    <button
                      className="btn btn-outline-primary m-2"
                      title="Find the longest word in the text"
                      onClick={handleLongestWord}
                    >
                      Longest Word
                    </button>
                    <button
                      className="btn btn-outline-secondary m-2"
                      title="Analyze word frequency in the text"
                      onClick={handleWordFrequency}
                    >
                      Word Frequency
                    </button>
                  </div>
                </div>

                {/* Text Formatting Buttons */}
                <div className="border border-secondary m-1 p-3 category text-formatting mb-3">
                  <h5 className="category-title">Text Formatting</h5>
                  <p className="category-description">
                    Format text by removing unwanted elements or encoding.
                  </p>
                  <div className="button-group">
                    <button
                      className="btn btn-outline-warning m-2"
                      title="Remove punctuation from text"
                      onClick={handleRemovePunctuation}
                    >
                      Remove Punctuation
                    </button>
                    <button
                      className="btn btn-outline-danger m-2"
                      title="Remove HTML tags from text"
                      onClick={handleRemoveHTMLTags}
                    >
                      Remove HTML Tags
                    </button>
                    <button
                      className="btn btn-outline-info m-2"
                      title="Encode text in Base64 format"
                      onClick={handleBase64Encode}
                    >
                      Base64 Encode
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container col">
            <div className="summary container border border-primary p-3 m-0">
              <h5>Your Text Summary</h5>
              <p>
                <b>Characters:</b> {text.length}
              </p>
              <p>
                <b>Words:</b>{" "}
                {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0}
              </p>
              <p>
                <b>Minutes to Read:</b>{" "}
                {text.trim().length > 0
                  ? (0.005 * text.trim().split(/\s+/).length).toFixed(2)
                  : 0}
              </p>
            </div>

            <div className="preview container border border-primary p-3 m-0 mt-4 mb-4">
              <h3>Preview:</h3>
              <p>
                {text.length > 0
                  ? text
                  : "Enter some text in the above textbox to preview it here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
