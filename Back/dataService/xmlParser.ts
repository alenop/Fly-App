import { parseStringPromise } from "xml2js";
// Exemple d'utilisation de DOMParser pour parser le fichier XML côté client.
const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<gesmes:Envelope xmlns:gesmes="http://www.gesmes.org/xml/2002-08-01" xmlns="http://www.ecb.int/vocabulary/2002-08-01/eurofxref">
    <gesmes:subject>Reference rates</gesmes:subject>
    <gesmes:Sender>
        <gesmes:name>European Central Bank</gesmes:name>
    </gesmes:Sender>
    <Cube>
        <Cube time='2024-12-06'>
            <Cube currency='USD' rate='1.0581'/>
            <Cube currency='JPY' rate='159.25'/>
            <!-- autres devises ici -->
        </Cube>
    </Cube>
</gesmes:Envelope>`;

const xmlData = 'eurofxref-daily.xml';

async function parseXMLNode(xml: string) {
    const result = await parseStringPromise(xml);
    console.log(result);
}

parseXMLNode(xmlData);