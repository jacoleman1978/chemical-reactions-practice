import { MouseEvent } from "react"

const SolubilityTable = () => {
    const highlightColumn = (e: MouseEvent): void => {
        const target: HTMLElement = e.target as HTMLElement;
        const classes: string[] = target.className.split(" ");
        const anion: string = classes[0];

        if (!target.className.includes("highlighted")) {
            const cells: NodeListOf<HTMLElement> = document.querySelectorAll(`.${anion}`);
            cells.forEach((cell) => {
                cell.classList.add("highlighted");
            })
        } 

        if (classes.length === 2 && !classes.includes("vertical-text")) {
            const cation: string = classes[1];
            const header: NodeListOf<HTMLElement> = document.querySelectorAll(`.thead.${cation}`);
            
            if (header.length > 0) {
                header[0].classList.remove("highlighted");
            }

            const focusCell: NodeListOf<HTMLElement> = document.querySelectorAll(`.${anion}.${cation}`);

            if (focusCell.length > 0) {
                focusCell[0].classList.remove("highlighted");
                focusCell[0].classList.add("highlighted-focus");
            }
        }
        
    }

    const removeHighlight = (e: MouseEvent): void => {
        const target: HTMLElement = e.target as HTMLElement;
        const classes: string[] = target.className.split(" ");
        const anion: string = classes[0];


        if (target.className.includes("highlighted")) {
            const cells: NodeListOf<HTMLElement> = document.querySelectorAll(`.${anion}`);
            cells.forEach((cell) => {
                cell.classList.remove("highlighted");
            })
        }

        if (classes.length === 3) {
            const cation: string = classes[1];
            const header: NodeListOf<HTMLElement> = document.querySelectorAll(`.thead.${cation}`);

            if (header.length > 0) {
                header[0].classList.remove("highlighted");
            }

            const focusCell: NodeListOf<HTMLElement> = document.querySelectorAll(`.${anion}.${cation}`);
            if (focusCell.length > 0) {
                focusCell[0].classList.remove("highlighted-focus");
            }
        }
    }

  return (
    <table>
        <thead>
            <tr>
                <td></td>
                <th className="acetate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>acetate</th>
                <th className="bromide vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>bromide</th>
                <th className="carbonate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>carbonate</th>
                <th className="chlorate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>chlorate</th>
                <th className="chloride vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>chloride</th>
                <th className="chromate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>chromate</th>
                <th className="fluoride vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>fluoride</th>
                <th className="hydroxide vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>hydroxide</th>
                <th className="iodide vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>iodide</th>
                <th className="nitrate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>nitrate</th>
                <th className="nitrite vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>nitrite</th>
                <th className="phosphate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>phosphate</th>
                <th className="sulfate vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>sulfate</th>
                <th className="sulfite vertical-text" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>sulfite</th>
            </tr>
        </thead>

        <tbody>
            <tr className="solubility-row">
                <th className="thead aluminum">aluminum</th>
                <td className="acetate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="bromide aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite aluminum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead ammonium">ammonium</th>
                <td className="acetate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfate ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite ammonium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead barium">barium</th>
                <td className="acetate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite barium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead calcium">calcium</th>
                <td className="acetate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite calcium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead cesium">cesium</th>
                <td className="acetate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite cesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead copper">copper</th>
                <td className="acetate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite copper" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead iron">iron</th>
                <td className="acetate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite iron" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead plumbum">lead</th>
                <td className="acetate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="carbonate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chromate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="nitrate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite plumbum" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead lithium">lithium</th>
                <td className="acetate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite lithium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead magnesium">magnesium</th>
                <td className="acetate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite magnesium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead mercury">mercury</th>
                <td className="acetate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="bromide mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="carbonate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chloride mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chromate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="hydroxide mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="nitrate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite mercury" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead potassium">potassium</th>
                <td className="acetate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfate potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite potassium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead rubidium">rubidium</th>
                <td className="acetate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfate rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite rubidium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead silver">silver</th>
                <td className="acetate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="bromide silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="carbonate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chromate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="fluoride silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="nitrate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="phosphate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfite silver" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead sodium">sodium</th>
                <td className="acetate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chlorate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="iodide sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfate sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite sodium" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
            </tr>
            <tr className="solubility-row">
                <th className="thead zinc">zinc</th>
                <td className="acetate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="bromide zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="carbonate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="chlorate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chloride zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="chromate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="fluoride zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="hydroxide zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="iodide zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="nitrite zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="phosphate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
                <td className="sulfate zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>aq</td>
                <td className="sulfite zinc" onMouseEnter={highlightColumn} onMouseLeave={removeHighlight}>s</td>
            </tr>
        </tbody>
    </table>
  )
}
export default SolubilityTable