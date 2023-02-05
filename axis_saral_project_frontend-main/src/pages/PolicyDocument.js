import axios from "axios"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"


const PolicyDocuments = () => {
    const [policyDocuments, setPolicyDocuments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8400/policydocuments").then((res) => {
            setPolicyDocuments(res.data);
            console.log("Documents", res.data);
        })
    },[setPolicyDocuments]);

    
  return(
      <div>
      <ul>
        <li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/quarterly-reports/tax-policy-of-the-bank.pdf">Tax Policy</a>
              </li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/default-document-library/human-rights-policy.pdf">Human Rights Policy</a>
              </li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/default-document-library/esg-policy-and-procedure.pdf">ESG Policy for Lending</a>
              </li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/quarterly-reports/03code-of-conduct-and-ethics-senior-mgt.pdf">Code of Conduct and Ethics</a>
              </li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/code-of-commitment_comprehensive-notice-board/g13-privacy-policy.pdf?sfvrsn=0">Customer Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.axisbank.com/docs/default-source/default-document-library/diversity-equity-and-inclusion-policy.pdf">Diversity,Equity & Inclusion Policy </a>
              </li>
              </li>
            </ul>

            </div>
    )
  }
export default PolicyDocuments;
