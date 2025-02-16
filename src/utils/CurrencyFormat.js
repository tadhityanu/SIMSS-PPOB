import { number } from "prop-types";

export const idrFormatter = (value) => {
    if (!value && typeof value !== number) return '';
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const idrParser = (value) => {
    return value?.replace(/IDR\s?|[^0-9]/g, '');
};