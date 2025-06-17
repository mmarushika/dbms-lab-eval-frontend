import styles from './CodeInput.module.css';
import { useState, useEffect, useRef } from 'react';

import Button from '../../../components/Button/Button';

function CodeInput({ value, setValue }) {
    const inputRef = useRef(null);
    const [lineNums, setLineNums] = useState([1]);

    useEffect(() => {
        inputRef.current.focus();
    })
    function handleTabKey(e) {
        if (e.key == "Tab") {
            // Tab Line
            e.preventDefault();
            const cursorStart = inputRef.current.selectionStart;
            const cursorEnd = inputRef.current.selectionEnd;
            setValue(value.slice(0, cursorStart) + "\t" + value.slice(cursorEnd));
            setTimeout(() => {
                inputRef.current.setSelectionRange(cursorStart + 1, cursorEnd + 1);
            }, 0);
        } else if (e.key == "Enter") {
            // New Line
            setLineNums([...lineNums, lineNums.at(lineNums.length - 1) + 1]);
        } else if (e.key == "Delete" || e.key == "Backspace") {
            // Delete Line
            let last = value.charAt(value.length - 1);
            if (value.charAt(value.length - 1) == "\n" && last != 1) {
                setLineNums(prevLineNums =>
                    prevLineNums.filter((_, index) =>
                        index != lineNums.length - 1
                    )
                );
            }
        }
    }

    return (
        <div className={styles.frame}>
            <div className={styles.editor}>
                <div className={styles.lineCount} value={lineNums}>
                    {value.split("\n").map((_, lineNum) => <div key={lineNum}>{lineNum + 1}</div>)}
                </div>
                <textarea
                    ref={inputRef}
                    autoFocus
                    name="solution"
                    className={styles.code}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Enter your solution'
                    onKeyDown={handleTabKey}>
                </textarea>
            </div>
        </div>
    )
}

export default CodeInput;

//const [currentLine, setCurrentLine] = useState(1);
/*function handleTabKey(e) {
        if (e.key == "Tab") {
            // Tab Line
            e.preventDefault();
            const cursorStart = inputRef.current.selectionStart;
            const cursorEnd = inputRef.current.selectionEnd;
            setValue(value.slice(0, cursorStart) + "\t" + value.slice(cursorEnd));
            setTimeout(() => {
                inputRef.current.setSelectionRange(cursorStart + 1, cursorEnd + 1);
            }, 0);
     
        } else if (e.key == "Enter") {
            // New Line
            setLineNums([...lineNums, lineNums.at(lineNums.length - 1) + 1]);
            setCurrentLine(currentLine + 1);
        } else if (e.key == "Delete" || e.key == "Backspace") {
            // Delete Line
            let last = value.charAt(value.length - 1);
            if (value.charAt(value.length - 1) == "\n" && last != 1) {
                setLineNums(prevLineNums =>
                    prevLineNums.filter((_, index) =>
                        index != lineNums.length - 1
                    )
                );
                if(currentLine != 1) {
                    setCurrentLine(currentLine - 1);
                }
            }
        } 
        else if (e.key == "ArrowDown") {
            if(currentLine != lineNums.length) {
                setCurrentLine(currentLine + 1);
            }
        } else if(e.key == "ArrowUp") {
            if(currentLine != 1) {
                setCurrentLine(currentLine - 1);
            }
        }
        setTimeout(() => {
                console.log(currentLine);
            }, 20);
    }*/