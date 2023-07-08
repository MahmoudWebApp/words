
import { IPackageCard } from "../../../models/PackageCard.model";
import PackageCard from "../../../components/PackageCard";

const PackagesList = () => {
    const data: IPackageCard[] = [
        {
            id: "package_key-1",
            price: 125,
            name: "INDIVIDUAL",
            description: "Language learning",
            url:"/register",
            list: [
                { id: "package_key-1-item-1", item: "Learn Arabic or English Language." },
                { id: "package_key-1-item-2", item: "Professional Courses." },
                { id: "package_key-1-item-3", item: "All 6 levels from A1 to C2." },
                { id: "package_key-1-item-4", item: "Exams at the end of each unit." }
            ]
        },
        {
            id: "package_key-2",
            price: 75,
            name: "SCHOOLS",
            description: "Language learning",
            url:"/school-create-account",
            list: [
                { id: "package_key-2-item-1", item: "Learn Arabic or English Language." },
                { id: "package_key-2-item-2", item: "Professional Courses." },
                { id: "package_key-2-item-3", item: "All 6 levels from A1 to C2." },
                { id: "package_key-2-item-4", item: "Exams at the end of each unit." }
            ]
        },
        {
            id: "package_key-3",
            price: 35,
            name: "ASSESSMENTS",
            description: "For schools and individuals",
            url:"/school-create-account",
            list: [
                { id: "package_key-3-item-1", item: "Listening, Reading and writing." },
                { id: "package_key-3-item-2", item: "Arabic Language." },
                { id: "package_key-3-item-3", item: "International standards." },
            ]
        },
        {
            id: "package_key-4",
            price: 99,
            name: "COMBINED",
            description: "Language learning & Assessments",
            url:"/school-create-account",
            list: [
                { id: "package_key-4-item-1", item: "The best offer." },
                { id: "package_key-4-item-2", item: "Get both Language learning and assessment with big save." },
                { id: "package_key-4-item-3", item: "For group more than 3 and above." },
            ]
        }
    ]
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 ">
            {data?.map(d => <PackageCard price={d.price} name={d.name} description={d.description} list={d.list} key={d.id} url={d.url} />)}
        </div>
    )
}

export default PackagesList