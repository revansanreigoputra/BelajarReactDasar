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
                <Row text="Baris Pertama" />
                <Row text="Baris Kedua" />
                <Row text="Baris Ketiga" />
            </tbody>
        </table>
    )
}