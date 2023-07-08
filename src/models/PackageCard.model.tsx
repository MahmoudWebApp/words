interface IListPackageCard {
    id: string;
    item: string;
}
export interface IPackageCard {
    id?: string;
    price: number;
    name: string;
    description: string;
    list: IListPackageCard[];
    url:string;
}