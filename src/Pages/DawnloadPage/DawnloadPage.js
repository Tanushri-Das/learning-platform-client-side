import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDownload } from "react-icons/fa";
import '../DawnloadPage/Dawnloadpage.css';

const DawnloadPage = ({ rootElementId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a4")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>

            <Button onClick={downloadFileDocument} className="dawnload-btn">Download Page
            <FaDownload className='ms-3'></FaDownload>
            </Button>
        </div>
    );
};

export default DawnloadPage;