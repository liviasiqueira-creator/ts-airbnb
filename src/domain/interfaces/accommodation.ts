export type AccommodationProps = {
    id: string;
    name: string;
    address: string;
    pricePerNight: number;
};

export interface IAccommodation extends AccommodationProps {
    calculatePrice(days: number): number;
}