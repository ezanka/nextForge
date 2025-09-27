
export default function DocsListNumber({itemList} : {itemList?: string[]}) {
    return (
        <ul className="list-disc list-inside">
            {itemList?.map((item, index) => (
                <li key={index} className="list-decimal">{item}</li>
            ))}
        </ul>
    )
}