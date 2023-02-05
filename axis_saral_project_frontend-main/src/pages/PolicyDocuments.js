import axios from "axios"
import { useEffect, useState } from "react"
import GoogleDocsViewer from 'react-google-docs-viewer'

const PolicyDocuments = () => {
    const [policyDocuments, setPolicyDocuments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8400/policydocuments").then((res) => {
            setPolicyDocuments(res.data);
            console.log("Documents", res.data);
        })
    },[setPolicyDocuments]);
  return (
    <div>
      {policyDocuments?.map((docs) => {
        return(
            <div id={docs.documentId}>
                <div>{docs.documentTitle}</div>
                <GoogleDocsViewer width="500px" height="500px" fileUrl= {docs.documentUrl} />
            </div>
        )
      })}
    </div>
  )
}

export default PolicyDocuments
