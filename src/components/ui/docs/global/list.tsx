
export default function DocsList({itemList} : {itemList?: string[]}) {
    return (
        <ul className="list-disc list-inside">
            {itemList?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}