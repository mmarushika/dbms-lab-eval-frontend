import styles from "./Solution.module.css";

import { useState } from "react";
import TabPanel from "../../../components/TabPanel/TabPanel";
import ButtonPanel from "../../../components/ButtonPanel/ButtonPanel";
import CodeInput from "../../SQLEditor/CodeInput/CodeInput";
import Submission from "../Submission/Submission";
import { apiSubmitSolution } from "../../../services/api.mjs";
import SQLEditor from "../../SQLEditor/SQLEditor";

function Solution({questionId}) {
    const [submission, setSubmission] = useState("");
    const [solution, setSolution] = useState("")
    async function submit() {
        let input = {
            questionId : questionId,
            code: solution
        }
        let data = await apiSubmitSolution(input);
        console.log(data);
        setSubmission(data);
    }
    async function run() {

    }
    function getTabPanels() {
        let tabPanels = {}
        tabPanels["Code"] = <SQLEditor questionId={questionId}/>/*<>
            <ButtonPanel 
                    names={["Run", "Submit"]}
                    handlers={[run, submit ]}
                />
            <CodeInput value={solution} setValue={setSolution}/>
        </>*/
        tabPanels["Submission"] = <Submission submission={submission}/>
        return tabPanels;
    }
    return (
        <div className={styles.frame}>
            <TabPanel 
                tabPanels ={getTabPanels()} 
                tabs={["Code", "Submission"]} 
                defaultTab="Code"  
                style="select"   
            />
        </div>
    );
}

export default Solution;