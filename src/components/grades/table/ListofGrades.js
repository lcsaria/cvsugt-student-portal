import React, {useState, useEffect} from 'react'
import { Spinner, Button } from 'react-bootstrap'
import axios from '../../../api/api'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fdp from '../../../assets/cog-temp.pdf'
import arial from '../../../assets/fonts/arial.ttf'
import arialbold from '../../../assets/fonts/arialbd.ttf'
import fontkit from '@pdf-lib/fontkit'

const ListofGrades = () => {
    const [loading, setLoading] = useState(false)
    let id = localStorage.getItem('student_number')
    const [data, setData] = useState([])
    const [grades, setGrades] = useState([])
    const [average, setAverage] = useState({
        totalunits: 0,
        average: 0
    })
    const [meow, setMeow] = useState(false)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        axios.get(`semforgrades/${id}`)
        .then(res => {
            setData(res.data)
            setMeow(true)
            console.log('ok',res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    const renderTable = () => {
        return (
            grades.map(grade => {
                return (
                 <tr key = {grade.subject_code}>
                    <td data-label="Subject Code : ">{grade.subject_code}</td>    
                    <td data-label="Description : ">{grade.subject_title}</td>
                    <td data-label="Grade : ">{grade.grade}</td>
                    <td data-label="Completion : ">{grade.completegrade}</td>
                    <td data-label="Unit : ">{grade.units}</td>
                 </tr>
                )
             })
           )
    }

    const displayGrade = async (e) => {
        setAverage(meowstate => ({
            ...meowstate, totalunits: 0, average: 0
          }));
        let selected = JSON.parse(e.target.value)
        let meowaverage = 0
        let meowgrade = 0
        let gradelength = 0
        setLoading(true)
        await axios.post('userGrades', selected)
        .then(response => {
            setGrades(response.data)
            for (var x = 0; x < response.data.length; x++)
            {

                let vals = response.data[x].units;
                let vals1 = parseFloat(response.data[x].grade);
                if (isNaN(vals1)){
                    if (response.data[x].subject_code === "NSTP 1" || response.data[x].subject_code === "NSTP 2" || response.data[x].subject_code === "CVSU 101") continue
                    meowaverage += vals
                }
                else if (response.data[x].subject_code === "NSTP 1" || response.data[x].subject_code === "NSTP 2" || response.data[x].subject_code === "CVSU 101") continue
                else{
                    meowgrade += vals1
                    meowaverage += vals
                    gradelength ++
                }
            }
            meowgrade /= gradelength;
            let jatot = meowgrade.toFixed(2)
            if (isNaN(jatot)) jatot = 0
            if (isNaN(meowaverage)) meowaverage = 0
            setAverage(meowstate => ({
                ...meowstate, totalunits: meowaverage, average: jatot
            }));
            renderTable()
        }
        ).catch((err) => {
          console.log(err)
        })
        .finally(() => {
            setSelected(true)
            setLoading(false)
        })
    }

    const downloadgrades = async () => {
        console.log('ror');
        
        const existingPdfBytes = await fetch(fdp).then(res => res.arrayBuffer())
        const arialF= await fetch(arial).then(res => res.arrayBuffer())
        const arialBoldF = await fetch(arialbold).then(res => res.arrayBuffer())
        const pdfDoc = await PDFDocument.load(existingPdfBytes)

        pdfDoc.registerFontkit(fontkit)

        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.Courier)
        const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
        const arialFont = await pdfDoc.embedFont(arialF)
        const arialBoldFont = await pdfDoc.embedFont(arialBoldF)

        const pages = pdfDoc.getPages()
        const page = pages[0]
        const { width, height } = page.getSize()
        const fontSize = 11;

        // --------------- dito mag drawing sa papel okeh okeh ? ---------------

        // NOTE : TEXT-CENTER BY TOMORROW OKEH OKEH ?

        var today = new Date();
        var d = today.getDate();
        var y = today.getFullYear();
        var m = today.getMonth();
        var month = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        m = month[m];

        page.drawText(m + ' ' + d + ", " + y,{ // Date
            x: 447,
            y: height / 2 + 254,
            size: 10,
            font: arialFont,
            color: rgb(0,0,0),
            TextAlignment: 1
        })
        /* math table shit! 
            center of gravity : 382 'a'

            grades[0].name
            length : 24
            7 pixels per letter
            305 is the center of gravity
            77 ang na adjust to center

            'kryzha'
            length : 35
            7 pixels per letter
            280 is the center of gravity
            102 ang na adjust to center




        */
        page.drawText(grades[0].name,{ // Name 
            x: 280, 
            y: height / 2 + 199,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })
        page.drawText('BS EDUCATION - SCIENCE',{ // Course
            x: 130,
            y: height / 2 + 182,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })
        page.drawText(grades[0].student_number.toString(),{ // Student Number
            x: 469,
            y: height / 2 + 182,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })
        page.drawText(grades[0].semester,{ // Semester
            x: 290,
            y: height / 2 + 166,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })
        page.drawText(grades[0].schoolyear,{ // Academic Year 2020-2021 sample
            x: 485,
            y: height / 2 + 166,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })

        // --------------------------- GRADES ----------------------------------
        var yy = 530
        for (var i = 0 ; i < grades.length ; i++) {
            page.drawText(grades[i].subject_code,{ // Course 1
                x: 26,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })
            page.drawText(grades[i].subject_title,{ // Course title
                x: 85,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })
            page.drawText(grades[i].grade.toString(),{ // grade 
                x: 355,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })
            page.drawText('-',{ // comp
                x: 412,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })
            page.drawText(grades[i].units.toString(),{ // units 
                x: 465,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })
            page.drawText(grades[i].creditunits.toString(),{ // credit units 
                x: 520,
                y: yy,
                size: 10,
                font: arialFont,
                color: rgb(0,0,0)
            })

            yy -= 13
        }
        
        // --------------------------- END OF GRADES ----------------------------------
        

        page.drawText(average.totalunits.toString(),{ // Total units
            x: 178,
            y: 345,
            size: fontSize,
            font: arialFont,
            color: rgb(0,0,0)
        })
        page.drawText('6',{ // Total credit units
            x: 178,
            y: 330,
            size: fontSize,
            font: arialFont,
            color: rgb(0,0,0)
        })
        page.drawText(average.average.toString(),{ // Average
            x: 390,
            y: 345,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })
        page.drawText('NONE',{ // Scholarship
            x: 385,
            y: 330,
            size: fontSize,
            font: arialBoldFont,
            color: rgb(0,0,0)
        })




        // --------------- end ng pag drawing sa papel okeh okeh ? ---------------
        const pdfBytes = await pdfDoc.save()
        var file = new File(
            [pdfBytes],
            "yowme.pdf",
            {
              type: "application/pdf;charset=utf-8",
            }
          );
        var FileSaver = require('file-saver');
        FileSaver.saveAs(file)
        

    }

    return(
        (meow) ? 
        <>
            <div className="dropdown input-group">
                <select className="form-control form-dropdown dropdown-toggle" defaultValue="default" id="grade_type" onChange={(e) => displayGrade(e)} > 
                    <option value = "default" disabled hidden>SEMESTER | SCHOOL YEAR</option>
                    {data.map((semdata) => <option key={semdata.num} value={JSON.stringify({semester : semdata.semester, schoolyear: semdata.schoolyear, student_number: id})}>{semdata.semester + " | " + semdata.schoolyear}</option>)}
                </select>
            </div>
            <div className="mt-3 table-holder">
            <table className="table" id="dataTable">
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Description</th>
                        <th>Grade</th>
                        <th>Completion</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                    <tbody>
                    {   
                        (loading) ? 
                        <td colSpan="100">
                            <Spinner className="" animation="border" role="status"/>
                        </td>
                        :
                        (selected) ? 
                        renderTable()
                        :
                        <>
                        <tr>
                        <td colSpan="100">Select the semester and year</td>
                        </tr>
                        </>
                        
                    }
                </tbody>
                
                <tfoot>
                    <div className="row ml-1"> 
                        <div className="col-12"> Total Units: <b>{average.totalunits}</b> </div>
                        <div className="col-12" style={{marginTop: -15}}> Average: <b>{average.average}</b> </div>
                    </div>
                </tfoot>
            </table>
            {
                (selected) ? 
                
                    <Button variant="success"onClick={() => downloadgrades()}>Download COG</Button>
                :
                ''
            }
            </div>
        </>
        :
        <div className="text-center">NO GRADES AVAILABLE</div>
    )
}

export default ListofGrades