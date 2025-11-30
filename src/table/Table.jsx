import Row from "./Row.jsx";

export default function Table() {
    return (
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <Row id="1" text="Baris Pertama" />
                <Row id="1" text="Baris Pertama Double" />
                <Row id="2" text="Baris Kedua" />
                <Row id="3" text="Baris Ketiga" />
            </tbody>
        </table>
    )
}   